console.log('🔌 script.js loaded as ES module');

document.addEventListener('DOMContentLoaded', () => {
});

(async () => {
  
  const THREE = await import('https://esm.sh/three@0.153.0');
  const { OBJLoader } = await import('https://esm.sh/three@0.153.0/examples/jsm/loaders/OBJLoader.js');
  const { MTLLoader } = await import('https://esm.sh/three@0.153.0/examples/jsm/loaders/MTLLoader.js'); 
  const { OrbitControls } = await import('https://esm.sh/three@0.153.0/examples/jsm/controls/OrbitControls.js');

  const BRAIN_INFO = window.BRAIN_INFO || {};

  const body  = document.body;

  let isDragging = false;


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


  let idleTimer = null;
  const IDLE_TIMEOUT = 60000; 

  function startAutoRotate() {
    if (controls.enableRotate) {
      controls.autoRotate = true;
      controls.autoRotateSpeed =1; 
    }
  }

  function resetIdleTimer() {
    controls.autoRotate = false;
    if (idleTimer) clearTimeout(idleTimer);
    idleTimer = setTimeout(startAutoRotate, IDLE_TIMEOUT);
  }

  ['pointermove', 'pointerdown', 'wheel', 'keydown'].forEach(evt => {
    window.addEventListener(evt, resetIdleTimer, { passive: true });
  });

  // Start auto-rotating immediately on initial load
  startAutoRotate();
  idleTimer = setTimeout(startAutoRotate, IDLE_TIMEOUT);
  // ==========================================


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

  const texLoader  = new THREE.TextureLoader();
  const objLoader  = new OBJLoader();
  const raycaster  = new THREE.Raycaster();
  const pointer    = new THREE.Vector2();
  let model        = null;
  const loader = new THREE.TextureLoader();

  scene.traverse(o => {
    if (o.isMesh) {
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      mats.forEach(m => {
        if (m && (m.map || m.userData.forceOverlay)) addBoneOverlay(m);
      });
    }
  });

  let selectedMesh = null;
  let selectedPrevEmissive = 0x000000;
  const HOVER_COLOR  = 0x999999;  
  const SELECT_COLOR = 0x66ff99;
  let isIsolationActive = false;
  const isolateBtn = document.getElementById('isolate-btn');
  const isolationLabel = document.getElementById('isolation-status-label'); 

  function updateIsolationState(isActive) {
    isIsolationActive = isActive;
    
    isolateBtn?.classList.toggle('is-active', isIsolationActive);
    
    if (isolationLabel) {
      if (isIsolationActive) {
        isolationLabel.textContent = 'on';
        isolationLabel.style.color = '#66ff99'; 
      } else {
        isolationLabel.textContent = 'off';
        isolationLabel.style.color = '#c13131';
      }
    }
  }

  // Set the initial default state on load
  updateIsolationState(false);

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

  function isolateMesh(targetMesh) {
    if (!model) return;
    model.traverse((child) => {
      if (child.isMesh) {
        const isTarget = (child === targetMesh);

        if (Array.isArray(child.material)) {
          child.material.forEach(mat => {
            mat.transparent = !isTarget;
            mat.opacity = isTarget ? 1.0 : 0.15; 
            mat.needsUpdate = true;
          });
        } else if (child.material) {
          child.material.transparent = !isTarget;
          child.material.opacity = isTarget ? 1.0 : 0.15; 
          child.material.needsUpdate = true;
        }
      }
    });
  }

  isolateBtn?.addEventListener('click', () => {
    const nextState = !isIsolationActive;
    
    if (nextState) {
      if (selectedMesh) {
        updateIsolationState(true);
        isolateMesh(selectedMesh);
      } else {
        updateIsolationState(false);
      }
    } else {
      updateIsolationState(false);
      clearIsolation();
    }
  });



  const mtlLoader = new MTLLoader();
  
  mtlLoader.load('Brain2.mtl', (materials) => {
    materials.preload();
    
    objLoader.setMaterials(materials);
    objLoader.load(
      'Brain2.obj',
      obj => {
        model = obj;

        const uniqueNames = new Set();
        obj.traverse(ch => { if (ch.isMesh) uniqueNames.add(ch.name); });
        console.log("📋 UNIQUE MESH NAMES:", Array.from(uniqueNames));
        
        const box = new THREE.Box3().setFromObject(obj);
        const center = box.getCenter(new THREE.Vector3());
        obj.position.sub(center);

        obj.traverse(ch => {
            
          if (ch.isLine || ch.type === 'LineSegments' || ch.type === 'Line') {
            ch.visible = false; 
            return; 
          }

          if (ch.isMesh) {
            const meshName = (ch.name || '').toLowerCase();

            const isPureOutline = (meshName.includes('sulc') && !meshName.includes('gyr')) || 
                                  meshName.includes('fis');

            if (isPureOutline) {
              ch.visible = false;
              return;             
            }

            if (ch.material) {
              if (Array.isArray(ch.material)) {
                ch.material = ch.material.map(m => m.clone());
              } else {
                ch.material = ch.material.clone();
              }
            }

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

  window.addEventListener('mm:filterMeshes', (e) => {
    const { allowedKeys, isFiltering } = e.detail;
    if (!model) return;

    model.traverse((child) => {
      if (child.isMesh) {
        const meshName = (child.name || '').toLowerCase();
        const foundKey = Object.keys(BRAIN_INFO).find(k => meshName.includes(k));

        const isAllowed = !isFiltering || (foundKey && allowedKeys.includes(foundKey));

        if (Array.isArray(child.material)) {
          child.material.forEach(mat => {
            mat.transparent = !isAllowed;
            mat.opacity = isAllowed ? 1.0 : 0.05; 
            mat.needsUpdate = true;
          });
        } else if (child.material) {
          child.material.transparent = !isAllowed;
          child.material.opacity = isAllowed ? 1.0 : 0.05;
          child.material.needsUpdate = true;
        }
      }
    });
  });


  const textureToggleBtn = document.getElementById('texture-toggle-btn'); 
  const textureLabel = document.getElementById('texture-label');    
  const TEXKEY = 'mm_tex_choice';

  function updateTextureUI(isAdvanced) {
    if (textureLabel) {
      textureLabel.textContent = isAdvanced ? 'High-Contrast Model' : 'Striated Model';
    }
    if (textureToggleBtn) {
      textureToggleBtn.setAttribute('aria-pressed', String(isAdvanced));
    }
  }

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

  const initialTex = localStorage.getItem(TEXKEY) || 'basic';
  setTextureChoice(initialTex);
  
  textureToggleBtn?.addEventListener('click', () => {
    const currentChoice = localStorage.getItem(TEXKEY) || 'basic';
    const nextChoice = currentChoice === 'basic' ? 'advanced' : 'basic';
    setTextureChoice(nextChoice);
  });


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
    if (selectedMesh && selectedMesh.material?.emissive) {
      selectedMesh.material.emissive.setHex(selectedPrevEmissive);
    }
    selectedMesh = mesh || null;
    if (selectedMesh?.material?.emissive) {
      selectedPrevEmissive = selectedMesh.material.emissive.getHex();
      selectedMesh.material.emissive.setHex(SELECT_COLOR);
    }
    
 if (isIsolationActive && selectedMesh) {
      isolateMesh(selectedMesh);
   } else if (isIsolationActive && !selectedMesh) {
      updateIsolationState(false); 
         clearIsolation();
   }
  }

  function selectMeshByKey(key) {
    const m = getMeshForKey(key);
    if (!m) return false;
    highlightMesh(m);
    if (m && m !== currentHover && currentHover?.material?.emissive) {
      currentHover.material.emissive.setHex(0x000000);
    }
    return true;
  }

function zoomToMesh(mesh, opts = {}) {
   if (!mesh || !camera) return;
    const { duration = 900, fitRatio = 1.75, reorient = false } = opts; 

    const box = new THREE.Box3().setFromObject(mesh);
    const sphere = box.getBoundingSphere(new THREE.Sphere());

    const startPos = camera.position.clone();
    const startTarget = controls ? controls.target.clone() : new THREE.Vector3();
    const endTarget = sphere.center.clone();

    let dir;
    if (reorient) {
      const worldOrigin = new THREE.Vector3(0, 0, 0);
      dir = new THREE.Vector3().subVectors(sphere.center, worldOrigin).normalize();
      
      if (dir.lengthSq() === 0) {
        dir = startPos.clone().sub(startTarget).normalize();
      }
    } else {
      dir = startPos.clone().sub(startTarget).normalize();
    }

    const dist = sphere.radius * fitRatio / Math.sin(THREE.MathUtils.degToRad(camera.fov * 0.5));
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
      camera.lookAt(controls ? controls.target : endTarget);
      
      if (t < 1) requestAnimationFrame(animateZoom);
    }
    animateZoom();
  }

  function autoZoomToKey(key, opts) {
    const m = getMeshForKey(key);
    if (m) zoomToMesh(m, opts);
  }

  function getValidRaycastHit(hits) {
    for (const hit of hits) {
      const mesh = hit.object;

      if (!mesh.visible) continue;

     let isGhosted = false;
  if (Array.isArray(mesh.material)) {
  isGhosted = mesh.material[0].opacity < 0.5;
      } else if (mesh.material) {
      isGhosted = mesh.material.opacity < 0.5;
      }
      if (isGhosted) continue;

      const meshName = (mesh.name || '').toLowerCase();
      const foundKey = Object.keys(BRAIN_INFO).find(k => meshName.includes(k));

      if (foundKey) {
        return { mesh: mesh, key: foundKey };
      } else {
        return null; 
      }
    }
    return null;
  }

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
        if (currentHover && currentHover !== selectedMesh && currentHover.material?.emissive) {
          currentHover.material.emissive.setHex(0x000000);
        }

        if (mesh !== selectedMesh && mesh.material?.emissive) {
          mesh.material.emissive.setHex(HOVER_COLOR);
        }
        currentHover = mesh;
      }
      showTip(BRAIN_INFO[validKey].title, e.clientX + 12, e.clientY + 12);
    } else {
      if (currentHover && currentHover !== selectedMesh && currentHover.material?.emissive) {
        currentHover.material.emissive.setHex(0x000000);
      }
      currentHover = null;
      hideTip();
    }
  });

  container.addEventListener('pointerleave', hideTip);

  container.addEventListener('pointerdown', e => {
    isDragging = false;
  });
  
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
      const mesh = validTarget.mesh;
      const key = validTarget.key;
      
      if (mesh !== selectedMesh) {
        highlightMesh(mesh);
        openSidebarWith(key);
        autoZoomToKey(key, { duration: 900, fitRatio: 1.35 });
      }
    } else {
      highlightMesh(null);
      if (window.clearSidebar) {
        window.clearSidebar();
      }
    }
  });


  const closePanelBtn = document.querySelector('.close-panel-btn');
  const infoPanel = document.getElementById('panel');

  closePanelBtn?.addEventListener('click', () => {
    infoPanel?.classList.add('is-closed');
    
    if (typeof highlightMesh === 'function') {
      highlightMesh(null);
    }
    
    if (window.clearSidebar) {
      window.clearSidebar();
    }
  });

  const centerBtn = document.getElementById('center-btn');
  
  centerBtn?.addEventListener('click', () => {
    camera.position.set(1, 0.2, 0.5);   
    controls.target.set(0, 0, 0);
    controls.update();
  });
 
  window.addEventListener('mm:selected', (e) => {
    const key = e.detail?.name;
    if (!key) return;

    selectMeshByKey(key);
    autoZoomToKey(key, { duration: 900, fitRatio: 1.75 });
    
    document.getElementById('panel')?.classList.remove('is-closed');
    autoZoomToKey(key, { duration: 900, fitRatio: 1.75 });
 });

 window.addEventListener('resize', () => {
 camera.aspect = container.clientWidth / container.clientHeight;
 camera.updateProjectionMatrix();
   renderer.setSize(container.clientWidth, container.clientHeight);
  });


const rotationSlider = document.getElementById('rotation-slider');
const anatomicalLabel = document.getElementById('current-view-label');  
const startPos = new THREE.Vector3(0.6, 0.6, 2.3);
const initialAzimuth = Math.atan2(startPos.x, startPos.z);

  function updateAnatomyLabel() {
      if (!anatomicalLabel || !camera || !controls) return;

      const offset = new THREE.Vector3().subVectors(camera.position, controls.target);
      const spherical = new THREE.Spherical().setFromVector3(offset);

      const polarDeg = THREE.MathUtils.radToDeg(spherical.phi);
      
      let azimuthDiff = spherical.theta - initialAzimuth;
      while (azimuthDiff < 0) azimuthDiff += Math.PI * 2;
      while (azimuthDiff > Math.PI * 2) azimuthDiff -= Math.PI * 2;
      const azimuthDeg = THREE.MathUtils.radToDeg(azimuthDiff);

      let direction = "";

      if (polarDeg <= 35) {
          direction = "Superior";
      } else if (polarDeg >= 145) {
          direction = "Inferior";
      } else {
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

  function syncRotationUI() {
    if (rotationSlider && document.activeElement !== rotationSlider) {
      const offset = new THREE.Vector3().subVectors(camera.position, controls.target);
      const spherical = new THREE.Spherical().setFromVector3(offset);
      
      let angleDiff = spherical.theta - initialAzimuth;
      while (angleDiff < 0) angleDiff += Math.PI * 2;
      while (angleDiff > Math.PI * 2) angleDiff -= Math.PI * 2;

      rotationSlider.value = THREE.MathUtils.radToDeg(angleDiff);
    }
    updateAnatomyLabel();
  }

  rotationSlider?.addEventListener('input', (e) => {
    const deg = parseFloat(e.target.value);
    const radians = THREE.MathUtils.degToRad(deg);
    
    const offset = new THREE.Vector3().subVectors(camera.position, controls.target);
    const spherical = new THREE.Spherical().setFromVector3(offset);

    spherical.theta = initialAzimuth + radians;

    offset.setFromSpherical(spherical);
    camera.position.copy(controls.target).add(offset);
    
    camera.lookAt(controls.target);
    controls.update();
    
    updateAnatomyLabel(); 
  });
  controls.addEventListener('change', syncRotationUI);
  
  setTimeout(syncRotationUI, 100);

  (function animate() {
    requestAnimationFrame(animate);
    controls.update();

    if (controls.autoRotate) {
      syncRotationUI();
    }

    renderer.render(scene, camera);
  })();

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

    const dist = camera.position.distanceTo(controls.target);
    const target = controls.target.clone(); 

    let newPos = new THREE.Vector3();

    switch(targetView) {
      case 'anterior':
        newPos.set(0, 0, dist);
        break;
      case 'posterior':
        newPos.set(0, 0, -dist);
        break;
      case 'lateral-right':
        newPos.set(-dist, 0, 0); 
        break;
      case 'lateral-left':
        newPos.set(dist, 0, 0); 
        break;
      case 'superior':
        newPos.set(0, dist, 0.001); 
        break;
      case 'inferior':
        newPos.set(0, -dist, 0.001); 
        break;
      default:
        return;
    }

    newPos.add(target);

    const startPos = camera.position.clone();
    const duration = 600; 
    const t0 = performance.now();
    
    function animateView() {
      const t = Math.min(1, (performance.now() - t0) / duration);
      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      
      camera.position.lerpVectors(startPos, newPos, ease);
      camera.lookAt(target);
      controls.update(); 
      
      if (t < 1) {
        requestAnimationFrame(animateView);
      }
    }
    
    animateView();
  });


  const explodeBtn = document.getElementById('explode-btn');
  
  let isExploded = false;
  let currentExplodePercent = 0.0;
  let explodeAnimationId = null;

  function animateExplode(targetPercent) {
    if (!model) return;

    const lateralScale = 1.2;  
    const verticalScale = 0; 
    const depthScale = 0;      
    const duration = 1400;      

    const startPercent = currentExplodePercent;
    const t0 = performance.now();

    if (explodeAnimationId) cancelAnimationFrame(explodeAnimationId);

    function step() {
      const t = Math.min(1, (performance.now() - t0) / duration);
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
    explodeBtn.classList.toggle('is-active', isExploded);
    animateExplode(isExploded ? 1.0 : 0.0);
  });

  const lockBtn = document.getElementById('rotation-lock-btn');
  let isRotationLocked = false;

  lockBtn?.addEventListener('click', () => {
    isRotationLocked = !isRotationLocked;

    controls.enableRotate = !isRotationLocked;
    
    if (isRotationLocked) {
      controls.autoRotate = false;
    }

    lockBtn.classList.toggle('is-active', isRotationLocked);

    const rotationSlider = document.getElementById('rotation-slider');
    if (rotationSlider) {
      rotationSlider.disabled = isRotationLocked;
      rotationSlider.style.opacity = isRotationLocked ? '0.3' : '1';
    }
  });

  const settingsToggleBtn = document.getElementById('settings-toggle-btn');
  const extControls = document.getElementById('viewer-ext_controls');

  settingsToggleBtn?.addEventListener('click', () => {
    extControls?.classList.toggle('is-collapsed');
  });

window.addEventListener('brain:filter', (e) => {
    const activeKeys = e.detail.activeMeshes.map(key => key.toLowerCase());
    
    scene.traverse((child) => {
        if (child.isMesh && child.name) {
            const meshNameLower = child.name.toLowerCase();
            
            const isVisible = activeKeys.some(key => meshNameLower.includes(key));
            const materials = Array.isArray(child.material) ? child.material : [child.material];
            
            materials.forEach(mat => {
                if (mat) {
                    mat.transparent = true; s
                    mat.opacity = isVisible ? 1.0 : 0.15; 
                    mat.needsUpdate = true;
                }
            });
        }
    });
});

})();
