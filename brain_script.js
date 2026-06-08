console.log('🔌 script.js loaded as ES module');

// Safety guard for DOM lookups in early loads
document.addEventListener('DOMContentLoaded', () => {
  // no-op: your existing listeners can stay as-is
});

(async () => {
  
  const THREE = await import('https://esm.sh/three@0.153.0');
  const { OBJLoader } = await import('https://esm.sh/three@0.153.0/examples/jsm/loaders/OBJLoader.js');
  const { MTLLoader } = await import('https://esm.sh/three@0.153.0/examples/jsm/loaders/MTLLoader.js'); // ADD THIS
  const { OrbitControls } = await import('https://esm.sh/three@0.153.0/examples/jsm/controls/OrbitControls.js');

  // Viewer-only globals/aliases
  const TEX_KEY = 'mm_tex_choice';           // 'basic' | 'advanced'
  const BRAIN_INFO = window.BRAIN_INFO || {};

  const body  = document.body;

  let isDragging = false;


  // ---------- Three.js Scene setup ----------
  const container = document.getElementById('three-container');
  if (!container) return console.error('Missing #three-container');

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    12,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
 camera.position.set(1, 0.2, 0.5); 

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  // sRGB output path for richer colors
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;

  container.appendChild(renderer.domElement);

  scene.add(
    new THREE.HemisphereLight(0xffffff, 0x444444, 0.5),
    (() => { const dl = new THREE.DirectionalLight(0xffffff, 0.8); dl.position.set(5,10,7.5); return dl; })()
  );

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.zoomSpeed    = 0.5;
  controls.minDistance  = 0.15;
  controls.maxDistance  = 2.0;

  // --- Hover tooltip setup ---
  const mmTip = document.createElement('div');
  mmTip.className = 'mm-tooltip';
  document.body.appendChild(mmTip);
  function showTip(text, x, y) {
    mmTip.textContent = text;
    mmTip.style.left = x + 'px';
    mmTip.style.top  = y + 'px';
    mmTip.classList.add('show');
  }
  function hideTip() { mmTip.classList.remove('show'); }

  // Loaders & state
  const texLoader  = new THREE.TextureLoader();
  const objLoader  = new OBJLoader();
  const raycaster  = new THREE.Raycaster();
  const pointer    = new THREE.Vector2();
  let model        = null;
  const loader = new THREE.TextureLoader();
  const boneTex = loader.load('Ecorche_Bones.png', t => {
  t.encoding = THREE.sRGBEncoding;  // match your color workflow
  t.wrapS = t.wrapT = THREE.RepeatWrapping; // keep default if atlas
});

// Keep a global so you can toggle later
const BoneOverlay = { enabled: false, mix: 1.0, mode: 'multiply' }; // mix 0..1

function addBoneOverlay(mat) {
  if (!mat || mat.userData._hasBoneOverlay) return;

  mat.onBeforeCompile = (shader) => {
    // uniforms we can tweak later
    shader.uniforms.uBoneTex = { value: boneTex };
    shader.uniforms.uBoneMix = { value: BoneOverlay.enabled ? BoneOverlay.mix : 0.0 };
    shader.uniforms.uBoneMode = { value: 0 }; // 0=multiply, 1=overlay, 2=add

    // add a sampler + helper at the top of fragment shader
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `
        #include <common>
        uniform sampler2D uBoneTex;
        uniform float uBoneMix;
        uniform int uBoneMode;

        vec3 blendOverlay(vec3 base, vec3 blend) {
          return mix(2.0*base*blend, 1.0 - 2.0*(1.0-base)*(1.0-blend), step(0.5, base));
        }
        `
      )
      // right after diffuse color is computed, mix in bone texture using the same UVs
      .replace(
        '#include <map_fragment>',
        `
        #include <map_fragment>
        vec3 boneRGB = texture2D(uBoneTex, vMapUv).rgb;
        #if defined( USE_MAP )
          // baseColor = texelColor.xyz already computed by <map_fragment>
          vec3 mixed;
          if (uBoneMode == 0) {
            mixed = diffuseColor.rgb * boneRGB;                // multiply
          } else if (uBoneMode == 1) {
            mixed = blendOverlay(diffuseColor.rgb, boneRGB);   // overlay
          } else {
            mixed = diffuseColor.rgb + boneRGB - 1.0;          // add
          }
          diffuseColor.rgb = mix(diffuseColor.rgb, mixed, uBoneMix);
        #endif
        `
      );

    // stash so we can update later
    mat.userData.shader = shader;
  };

  mat.needsUpdate = true;
  mat.userData._hasBoneOverlay = true;
}

function setBoneOverlayEnabled(on) {
  BoneOverlay.enabled = on;
  scene.traverse(o => {
    if (o.isMesh) {
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      mats.forEach(m => {
        if (!m?.userData?.shader) return;
        m.userData.shader.uniforms.uBoneMix.value = on ? BoneOverlay.mix : 0.0;
      });
    }
  });
}



// Optional: switch blend mode (multiply/overlay/add)
function setBoneBlendMode(mode) {
  // 0=multiply, 1=overlay, 2=add
  const modeIdx = { multiply:0, overlay:1, add:2 }[mode] ?? 0;
  BoneOverlay.mode = mode;
  scene.traverse(o => {
    if (!o.isMesh) return;
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    mats.forEach(m => m?.userData?.shader && (m.userData.shader.uniforms.uBoneMode.value = modeIdx));
  });
}


// Apply to all textured meshes you want to support
scene.traverse(o => {
  if (o.isMesh) {
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    mats.forEach(m => {
      if (m && (m.map || m.userData.forceOverlay)) addBoneOverlay(m);
    });
  }
});



  // Selection state (persistent highlight)
  let selectedMesh = null;
  let selectedPrevEmissive = 0x000000;
  const HOVER_COLOR  = 0x777777;   // tweak if you want lighter/darker
  const SELECT_COLOR = 0x66ccff;
    // --- ISOLATION MODE ---
    let isIsolationActive = false;
    const isolateBtn = document.getElementById('isolate-btn');
  
    // --- Clear Isolation ---
    function clearIsolation() {
      if (!model) return;
      model.traverse((child) => {
        if (child.isMesh) {
          if (Array.isArray(child.material)) {
            child.material.forEach(mat => {
              mat.transparent = false;
              mat.opacity = 1.0;
            });
          } else if (child.material) {
            child.material.transparent = false;
            child.material.opacity = 1.0;
          }
          child.material.needsUpdate = true;
        }
      });
    }

        // --- Isolate a Specific Mesh (X-Ray Ghosting) ---
    function isolateMesh(targetMesh) {
      if (!model) return;
      model.traverse((child) => {
        if (child.isMesh) {
          // Check if this specific piece is the one the user selected
          const isTarget = (child === targetMesh);

          if (Array.isArray(child.material)) {
            child.material.forEach(mat => {
              mat.transparent = !isTarget;
              mat.opacity = isTarget ? 1.0 : 0.15; // Ghost out non-selected structures
              mat.needsUpdate = true;
            });
          } else if (child.material) {
            child.material.transparent = !isTarget;
            child.material.opacity = isTarget ? 1.0 : 0.15; // Ghost out non-selected structures
            child.material.needsUpdate = true;
          }
        }
      });
    }
  
    // --- Hook up the Isolation Button Click ---
    isolateBtn?.addEventListener('click', () => {
      isIsolationActive = !isIsolationActive;
      isolateBtn.classList.toggle('is-active', isIsolationActive);
      
      if (isIsolationActive) {
        if (selectedMesh) {
          isolateMesh(selectedMesh);
        } else {
          // If nothing is selected yet, reset the toggle state safely
          isIsolationActive = false; 
          isolateBtn.classList.remove('is-active');
        }
      } else {
        clearIsolation();
      }
    });


  const mtlLoader = new MTLLoader();
  
  // Replace 'brain_model.mtl' and 'brain_model.obj' with your exact filenames!
  mtlLoader.load('Brain2.mtl', (materials) => {
    materials.preload();
    
    // Attach the colors to the OBJ loader
    objLoader.setMaterials(materials);
    objLoader.load(
      'Brain2.obj',
      obj => {
        model = obj;

          const uniqueNames = new Set();
        obj.traverse(ch => { if (ch.isMesh) uniqueNames.add(ch.name); });
        console.log("📋 UNIQUE MESH NAMES:", Array.from(uniqueNames));
        
        // Center the model
        const box = new THREE.Box3().setFromObject(obj);
        const center = box.getCenter(new THREE.Vector3());
        obj.position.sub(center);

        obj.traverse(ch => {
            
          // 🚨 THE SILVER BULLET: Catch and kill line objects before they process
          if (ch.isLine || ch.type === 'LineSegments' || ch.type === 'Line') {
            ch.visible = false; 
            return; // Completely banish the web and stop processing
          }

          if (ch.isMesh) {
            const meshName = (ch.name || '').toLowerCase();

            // 🧠 Precise Outlines Filter: Keep this here! It still cleans up 
            // the solid "tube" style fissures that ARE meshes.
            const isPureOutline = (meshName.includes('sulc') && !meshName.includes('gyr')) || 
                                  meshName.includes('fis');

            if (isPureOutline) {
              ch.visible = false;
              return;             
            }

            // ... The rest of your material cloning and explode logic stays exactly the same
            if (ch.material) {
              if (Array.isArray(ch.material)) {
                ch.material = ch.material.map(m => m.clone());
              } else {
                ch.material = ch.material.clone();
              }
            }
            
            // [Explode logic continues below...]

            // Keep your existing explode configuration logic completely intact below:
            ch.userData.originalPosition = ch.position.clone();
            ch.geometry.computeBoundingBox();
            const meshCenter = new THREE.Vector3();
            ch.geometry.boundingBox.getCenter(meshCenter);
            ch.userData.explodeDirection = meshCenter.clone().normalize();
          }
        });

        scene.add(obj);
      },
      xhr => console.log(`Model ${(xhr.loaded / xhr.total * 100).toFixed(0)}% loaded`),
      err => console.error('OBJ load error', err)
    );
  });

  

// MODIFIED BLOCK TO FIX ID CONFLICT
  // ---------- Texture Toggle Logic ----------
  const textureToggleBtn = document.getElementById('texture-toggle-btn'); // New, unique ID for the button
  const textureLabel = document.getElementById('texture-label');     // New, unique ID for the text
  const TEXKEY = 'mm_tex_choice';

  // Helper to update the UI (label text and button's ARIA state)
  function updateTextureUI(isAdvanced) {
    if (textureLabel) {
      textureLabel.textContent = isAdvanced ? 'High-Contrast Model' : 'Striated Model';
    }
    if (textureToggleBtn) {
      textureToggleBtn.setAttribute('aria-pressed', String(isAdvanced));
    }
  }

  // Sets the texture state, saves it, and updates the model/UI
  function setTextureChoice(choice) {
    localStorage.setItem(TEXKEY, choice);
    const isAdvanced = choice === 'advanced';
    
    const url = isAdvanced
      ? 'Ecorche_Muscles_Color_Codes.png'
      : 'Ecorche_Muscles.png';
    
    if (typeof applyTexture === 'function') {
        applyTexture(url);
    } else {
        console.warn("applyTexture function not found.");
    }
    updateTextureUI(isAdvanced);
  }

  // Restore state from localStorage on page load
  const initialTex = localStorage.getItem(TEXKEY) || 'basic';
  setTextureChoice(initialTex);
  
  // Attach the click event listener ONLY to the button
  textureToggleBtn?.addEventListener('click', () => {
    const currentChoice = localStorage.getItem(TEXKEY) || 'basic';
    const nextChoice = currentChoice === 'basic' ? 'advanced' : 'basic';
    setTextureChoice(nextChoice);
  });
  // ---------- End Texture Toggle Logic ----------



  // ---------- Selection + Zoom helpers ----------
  function getMeshForKey(key) {
    if (!model || !key) return null;
    const k = key.toLowerCase();
    let hit = null;
    model.traverse(ch => {
      if (hit || !ch.isMesh) return;
      const name = (ch.name || '').toLowerCase();
      if (name.includes(k)) hit = ch;
    });
    return hit;
  }
  function highlightMesh(mesh) {
    // clear previous
    if (selectedMesh && selectedMesh.material?.emissive) {
      selectedMesh.material.emissive.setHex(selectedPrevEmissive);
    }
    selectedMesh = mesh || null;
    if (selectedMesh?.material?.emissive) {
      selectedPrevEmissive = selectedMesh.material.emissive.getHex();
      selectedMesh.material.emissive.setHex(SELECT_COLOR);
    }
     // If isolation mode is active when a new mesh is selected, update the isolation
     if (isIsolationActive && selectedMesh) {
      isolateMesh(selectedMesh);
    } else if (isIsolationActive && !selectedMesh) {
      // If we de-select, turn off isolation
      isIsolationActive = false;
      isolateBtn.classList.remove('is-active');
      clearIsolation();
    }
  }
  function selectMeshByKey(key) {
    const m = getMeshForKey(key);
    if (!m) return false;
    highlightMesh(m);
    // ensure hover doesn't override selection
    if (m && m !== currentHover && currentHover?.material?.emissive) {
      currentHover.material.emissive.setHex(0x000000);
    }
    return true;
  }
  // Smoothly fit/zoom camera to a mesh (OrbitControls-friendly)
 // Smoothly fit/zoom camera to a mesh AND rotate to face it
 function zoomToMesh(mesh, opts = {}) {
  if (!mesh || !camera) return;
  const { duration = 900, fitRatio = 1.75, reorient = false } = opts; // Added reorient flag

  const box = new THREE.Box3().setFromObject(mesh);
  const sphere = box.getBoundingSphere(new THREE.Sphere());

  const startPos = camera.position.clone();
  const startTarget = controls ? controls.target.clone() : new THREE.Vector3();
  const endTarget = sphere.center.clone();

  // --- NEW LOGIC: CALCULATE "FRONT" FACING ANGLE ---
  let dir;
  if (reorient) {
    const worldOrigin = new THREE.Vector3(0, 0, 0);
    dir = new THREE.Vector3().subVectors(sphere.center, worldOrigin).normalize();
    
    if (dir.lengthSq() === 0) {
      dir = startPos.clone().sub(startTarget).normalize();
    }
  } else {
    // OLD LOGIC: Keep the current camera angle (don't rotate around)
    dir = startPos.clone().sub(startTarget).normalize();
  }

  // Determine distance needed to fit the object
  // (Math: fits the sphere radius within the camera's field of view)
  const dist = sphere.radius * fitRatio / Math.sin(THREE.MathUtils.degToRad(camera.fov * 0.5));
  
  // Calculate final camera position along that direction vector
  const endPos = endTarget.clone().add(dir.multiplyScalar(dist));

  const t0 = performance.now();
  function animateZoom() {
    const t = Math.min(1, (performance.now() - t0) / duration);
    // ease in-out formula
    const e = t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t;

    camera.position.lerpVectors(startPos, endPos, e);
    if (controls) {
      controls.target.lerpVectors(startTarget, endTarget, e);
      controls.update();
    }
    // Ensure camera looks at the target throughout the animation
    camera.lookAt(controls ? controls.target : endTarget);
    
    if (t < 1) requestAnimationFrame(animateZoom);
  }
  animateZoom();
}
  function autoZoomToKey(key, opts) {
    const m = getMeshForKey(key);
    if (m) zoomToMesh(m, opts);
  }
  
  
  

// ---- Hover highlight + tooltip (Smarter "Drill-Through" Version) ----
  // ---- UNIFIED RAYCASTING REFEREE ----
  function getValidRaycastHit(hits) {
    for (const hit of hits) {
      const mesh = hit.object;

      // 1. Ignore hidden meshes completely
      if (!mesh.visible) continue;

      // 2. Ignore "ghosted" meshes if isolation mode is active
      let isGhosted = false;
      if (Array.isArray(mesh.material)) {
        isGhosted = mesh.material[0].opacity < 0.5;
      } else if (mesh.material) {
        isGhosted = mesh.material.opacity < 0.5;
      }
      if (isGhosted) continue;

      // 3. We found the first SOLID, visible thing under the mouse.
      // Check if we have data for it.
      const meshName = (mesh.name || '').toLowerCase();
      const foundKey = Object.keys(BRAIN_INFO).find(k => meshName.includes(k));

      if (foundKey) {
        return { mesh: mesh, key: foundKey };
      } else {
        // It's a solid part of the brain, but unlabelled. 
        // Stop here so we don't X-ray through it to grab wrong labels!
        return null; 
      }
    }
    return null; // Nothing solid was hit
  }


  // ---- Hover highlight + tooltip ----
  let currentHover = null;
  container.addEventListener('pointermove', e => {

    if (e.buttons === 1) { 
      isDragging = true;
    }
    
    if (isDragging) {
      hideTip();
      if (currentHover && currentHover !== selectedMesh && currentHover.material?.emissive) {
        currentHover.material.emissive.setHex(0x000000);
      }
      currentHover = null;
      return; 
    }

    if (!model) return;
    
    const rect = container.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    
    const hits = raycaster.intersectObject(model, true);
    const validTarget = getValidRaycastHit(hits);

    if (validTarget) {
      const mesh = validTarget.mesh;
      const validKey = validTarget.key;

      if (currentHover !== mesh) {
        // Clear previous hover
        if (currentHover && currentHover !== selectedMesh && currentHover.material?.emissive) {
          currentHover.material.emissive.setHex(0x000000);
        }
        // Highlight new hover
        if (mesh !== selectedMesh && mesh.material?.emissive) {
          mesh.material.emissive.setHex(HOVER_COLOR);
        }
        currentHover = mesh;
      }

      // Show tooltip
      showTip(BRAIN_INFO[validKey].title, e.clientX + 12, e.clientY + 12);

    } else {
      // Hit nothing or hit an unlabelled area
      if (currentHover && currentHover !== selectedMesh && currentHover.material?.emissive) {
        currentHover.material.emissive.setHex(0x000000);
      }
      currentHover = null;
      hideTip();
    }
  });

  // Hide tooltip when pointer leaves the viewer
  container.addEventListener('pointerleave', hideTip);

  container.addEventListener('pointerdown', e => {
    isDragging = false;
  });
  
  // ---- Click / Selection Logic ----
  container.addEventListener('pointerup', e => {
    if (e.target.closest('button') || 
        e.target.closest('.controls') || 
        e.target.closest('.viewer-hud-right')) {
      return; 
    }
    
    if (isDragging) return;
  
    if (!model) return;
    const rect = container.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    
    const hits = raycaster.intersectObject(model, true);
    const validTarget = getValidRaycastHit(hits);
  
    if (validTarget) {
      // Clicked on a solid, labelled mesh
      const mesh = validTarget.mesh;
      const key = validTarget.key;
      
      if (mesh !== selectedMesh) {
        highlightMesh(mesh);
        openSidebarWith(key);
        autoZoomToKey(key, { duration: 900, fitRatio: 1.35 });
      }
    } else {
      // Clicked on the background OR an unlabelled mesh: Deselect
      highlightMesh(null);
      if (window.clearSidebar) {
        window.clearSidebar();
      }
    }
  });


  // Target the elements exactly as they are named in your index.html
  const closePanelBtn = document.querySelector('.close-panel-btn');
  const infoPanel = document.getElementById('panel');

  closePanelBtn?.addEventListener('click', () => {
    // 1. Add the CSS class we just created to hide the panel
    infoPanel?.classList.add('is-closed');
    
    // 2. Clear the 3D model highlight so it resets
    if (typeof highlightMesh === 'function') {
      highlightMesh(null);
    }
    
    // 3. Clear the sidebar data (if your index.js uses this function)
    if (window.clearSidebar) {
      window.clearSidebar();
    }
  });

  // ---- Center / Reset Button Logic ----
  const centerBtn = document.getElementById('center-btn');
  
  centerBtn?.addEventListener('click', () => {
  camera.position.set(1, 0.2, 0.5);   
  // 2. Reset the target the camera is looking at back to world origin
  controls.target.set(0, 0, 0);
  
  // 3. Update controls to apply the changes immediately
  controls.update();
  });
  // ---- Sync UI Selection to 3D Model ----
  // This listens for when a user clicks the Index or Search
  window.addEventListener('mm:selected', (e) => {
    const key = e.detail?.name;
    if (!key) return;

    

    // 1. Find and Highlight the mesh
    selectMeshByKey(key);
    autoZoomToKey(key, { duration: 900, fitRatio: 1.75 });
    
    // NEW: Pop the panel back open!
    document.getElementById('panel')?.classList.remove('is-closed');

    // 2. Zoom camera to the mesh
    autoZoomToKey(key, { duration: 900, fitRatio: 1.75 });
  });

  // ---- Handle resize for renderer/camera ----
  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  // ---- Animate ----
  (function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  })();

  // ---- Advanced Dual-Axis Anatomy Label Logic ----
  const rotationSlider = document.getElementById('rotation-slider');
  const anatomicalLabel = document.getElementById('current-view-label');  
  // Base offset coordinates configured during initial load
  const startPos = new THREE.Vector3(0.6, 0.6, 2.3);
  const initialAzimuth = Math.atan2(startPos.x, startPos.z);

  function updateAnatomyLabel() {
      if (!anatomicalLabel || !camera || !controls) return;

      // 1. Calculate vector from camera target to position
      const offset = new THREE.Vector3().subVectors(camera.position, controls.target);
      const spherical = new THREE.Spherical().setFromVector3(offset);

      // 2. Extract angles in degrees for clean conditional branching
      const polarDeg = THREE.MathUtils.radToDeg(spherical.phi);
      
      // Normalize azimuth relative to your initial starting offset position
      let azimuthDiff = spherical.theta - initialAzimuth;
      while (azimuthDiff < 0) azimuthDiff += Math.PI * 2;
      while (azimuthDiff > Math.PI * 2) azimuthDiff -= Math.PI * 2;
      const azimuthDeg = THREE.MathUtils.radToDeg(azimuthDiff);

      let direction = "";

      // 3. Vertical Threshold Check (Prioritize extreme vertical views)
      if (polarDeg <= 35) {
          direction = "Superior";
      } else if (polarDeg >= 145) {
          direction = "Inferior";
      } else {
          // 4. Horizontal Aspect Check (Standard Horizon Ring Views)
          let verticalModifier = "";
          if (polarDeg > 35 && polarDeg < 65) verticalModifier = "Superior-";
          if (polarDeg > 115 && polarDeg < 145) verticalModifier = "Inferior-";

          let horizontalView = "";
          if (azimuthDeg >= 315 || azimuthDeg < 45) horizontalView = "Anterior";
          else if (azimuthDeg >= 45 && azimuthDeg < 135) horizontalView = "Lateral (L)"; 
          else if (azimuthDeg >= 135 && azimuthDeg < 225) horizontalView = "Posterior";
          else if (azimuthDeg >= 225 && azimuthDeg < 315) horizontalView = "Lateral (R)";

          direction = verticalModifier + horizontalView;
      }

      anatomicalLabel.textContent = direction;
  }

  // ---- Update Slider Input Callback ----
  rotationSlider?.addEventListener('input', (e) => {
    const deg = parseFloat(e.target.value);
    const radians = THREE.MathUtils.degToRad(deg);
    
    const offset = new THREE.Vector3().subVectors(camera.position, controls.target);
    const spherical = new THREE.Spherical().setFromVector3(offset);

    // Update horizontal plane value while preserving vertical tilt pitch
    spherical.theta = initialAzimuth + radians;

    offset.setFromSpherical(spherical);
    camera.position.copy(controls.target).add(offset);
    
    camera.lookAt(controls.target);
    controls.update();
    
    // Recalculate dynamic text label positions
    updateAnatomyLabel(); 
  });

  // ---- Update Mouse Drag Orbit Control Event Listener ----
  controls.addEventListener('change', () => {
    // Sync slider track layout values if interaction originates dynamically via drag gestures
    if (document.activeElement !== rotationSlider) {
      const offset = new THREE.Vector3().subVectors(camera.position, controls.target);
      const spherical = new THREE.Spherical().setFromVector3(offset);
      
      let angleDiff = spherical.theta - initialAzimuth;
      while (angleDiff < 0) angleDiff += Math.PI * 2;
      while (angleDiff > Math.PI * 2) angleDiff -= Math.PI * 2;

      rotationSlider.value = THREE.MathUtils.radToDeg(angleDiff);
    }

    // Always update labels during active view alterations
    updateAnatomyLabel();
  });

  // Run once explicitly at launch to correctly assign structural orientation string bounds
  setTimeout(updateAnatomyLabel, 100);

  // Run once explicitly at launch to correctly assign structural orientation string bounds
  setTimeout(updateAnatomyLabel, 100);

  const toggleBtn = document.querySelector('.index-tog');
  const leftHand = document.getElementById('left-hand');

  if (toggleBtn && leftHand) {
    toggleBtn.addEventListener('click', () => {
      leftHand.classList.toggle('collapsed');
    });
  }

window.addEventListener('mm:changeView', (e) => {
  const targetView = e.detail.view; 
  if (!camera || !controls) return;

  // 1. Calculate how far zoomed in the user currently is
  const dist = camera.position.distanceTo(controls.target);
  const target = controls.target.clone(); // The center point (0,0,0)

  let newPos = new THREE.Vector3();

  // 2. Plot the new coordinates based on standard anatomical planes
  switch(targetView) {
    case 'anterior':
      newPos.set(0, 0, dist);
      break;
    case 'posterior':
      newPos.set(0, 0, -dist);
      break;
    case 'lateral-right':
      // Model's right side is on the negative X axis
      newPos.set(-dist, 0, 0); 
      break;
    case 'lateral-left':
      // Model's left side is on the positive X axis
      newPos.set(dist, 0, 0); 
      break;
    case 'superior':
      // The 0.001 prevents the OrbitControls camera from flipping upside down
      newPos.set(0, dist, 0.001); 
      break;
    case 'inferior':
      newPos.set(0, -dist, 0.001); 
      break;
    default:
      return;
  }

  // 3. Add the target offset back in (in case the user panned the model)
  newPos.add(target);

  // 4. Smoothly animate the camera to the new position
  const startPos = camera.position.clone();
  const duration = 600; // milliseconds
  const t0 = performance.now();
  
  function animateView() {
    const t = Math.min(1, (performance.now() - t0) / duration);
    // Ease in-out formula for a smooth flight path
    const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    
    camera.position.lerpVectors(startPos, newPos, ease);
    camera.lookAt(target);
    controls.update(); 
    
// // Sync the bottom rotation slider to match the new view
// const rotationSlider = document.getElementById('rotation-slider');
// if (rotationSlider) {
//     rotationSlider.dispatchEvent(new Event('input')); // 💥 Conflict source during active lerp
// }

    if (t < 1) {
      requestAnimationFrame(animateView);
    }
  }
  
  animateView();
});

  // Place this at the very bottom of script.js, right before the closing })();

  // --- Explode Button Logic (Animated Toggle) ---
  const explodeBtn = document.getElementById('explode-btn');
  
  let isExploded = false;
  let currentExplodePercent = 0.0;
  let explodeAnimationId = null;

  function animateExplode(targetPercent) {
    if (!model) return;

    // === TWEAK YOUR SETTINGS HERE ===
    const lateralScale = 1.2;  // Controls Left/Right (X-axis) explosion width
    const verticalScale = 0; // Controls Up/Down (Y-axis) explosion height
    const depthScale = 0;      // Controls Front/Back (Z-axis) explosion depth
    const duration = 1400;      // Animation duration in milliseconds
    // ================================

    const startPercent = currentExplodePercent;
    const t0 = performance.now();

    // Cancel any currently running explosion animation to prevent jitter
    if (explodeAnimationId) cancelAnimationFrame(explodeAnimationId);

    function step() {
      const t = Math.min(1, (performance.now() - t0) / duration);
      // Ease in-out formula for a smooth glide
      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      
      currentExplodePercent = startPercent + (targetPercent - startPercent) * ease;

      model.traverse((child) => {
        if (child.isMesh && child.userData.explodeDirection) {
          const pos = child.userData.originalPosition.clone();
          const dir = child.userData.explodeDirection.clone();
          
          dir.x *= lateralScale;
          dir.y *= verticalScale;
          dir.z *= depthScale;
          
          const explodeOffset = dir.multiplyScalar(currentExplodePercent);
          child.position.copy(pos.add(explodeOffset));
        }
      });

      if (t < 1) {
        explodeAnimationId = requestAnimationFrame(step);
      }
    }
    
    step();
  }

  explodeBtn?.addEventListener('click', () => {
    isExploded = !isExploded;
    
    // Optional: Toggle a class so you can style the active state in your CSS 
    // (e.g., giving the button a blue background when active)
    explodeBtn.classList.toggle('is-active', isExploded);
    
    // Animate to 1.0 (100%) if exploding, or 0.0 (0%) if collapsing
    animateExplode(isExploded ? 1.0 : 0.0);
  });


  // --- Rotation Lock Logic ---
  const lockBtn = document.getElementById('rotation-lock-btn');
  let isRotationLocked = false;

  lockBtn?.addEventListener('click', () => {
    // 1. Toggle our state tracking variable
    isRotationLocked = !isRotationLocked;

    // 2. Tell Three.js controls whether rotation is allowed
    controls.enableRotate = !isRotationLocked;

    // 3. Toggle a CSS class so we can style the locked button state
    lockBtn.classList.toggle('is-active', isRotationLocked);

    // 4. Also disable your bottom horizontal rotation slider if locked
    const rotationSlider = document.getElementById('rotation-slider');
    if (rotationSlider) {
      rotationSlider.disabled = isRotationLocked;
      // Optional: change opacity so it looks grayed out when locked
      rotationSlider.style.opacity = isRotationLocked ? '0.3' : '1';
    }
  });
    // --- External Controls Toggle Logic ---
  const settingsToggleBtn = document.getElementById('settings-toggle-btn');
  const extControls = document.getElementById('viewer-ext_controls');

  settingsToggleBtn?.addEventListener('click', () => {
    extControls?.classList.toggle('is-collapsed');
  });

  

})(); // <--- This is the very end of your script file
