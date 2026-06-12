/* === UI CORE — no three.js, just panels/rail/resizer ===================== */
console.info('✅ UI core executing');

/* 1) Data (extend this with all your real entries) */
/* === BRAIN DATA DICTIONARY ===================== */
window.BRAIN_INFO = window.BRAIN_INFO || {

  superior_frontal_gyrus: {
    title: 'Superior Frontal Gyrus', 
    description: 'Makes up about one-third of the frontal lobe. It is highly involved in higher cognitive functions and working memory.', 
    head: 'Situated at the superior aspect of the frontal lobe.', 
    function: 'Contributes to executive functions, spatial working memory, and introspection/self-awareness.', 
  },

  Inferior_frontal_gyrus: {
    title: 'Inferior Frontal Gyrus'
  },

  Angular_gyrus: {
    title: 'Angular Gyrus'
  },

  Superior_frontal_sulcus: {
    title: 'Test_item'
  },

  central_sulcus: {
    title: 'Central Sulcus'
  },

  Third_ventricle: {
    title: 'Third Ventricle'
  },

   Fourth_ventricle: {
    title: 'Fouth Ventricle'
  },

   Lateral_ventricle: {
    title: 'Lateral Ventricle(s)'
  },


  hippocampus: {
    title: 'Hippocampus', 
    description: 'A complex, seahorse-shaped structure embedded deep in the temporal lobe. It is one of the most widely studied regions in cognitive neuroscience due to its vulnerability in Alzheimer’s disease.', 
    head: 'Part of the limbic system, located in the medial temporal lobe.', 
    function: 'Critical for the consolidation of information from short-term to long-term memory, and for spatial memory that enables navigation.', 
  },

  amygdaloid_body: {
    title: 'Amygdala', 
    description: 'An almond-shaped mass of gray matter involved in processing emotions and survival responses.', 
    head: 'Located deep within the medial temporal lobes, just anterior to the hippocampus.', 
    function: 'Processes emotional responses, fear conditioning, and attaches emotional significance to memories.', 
  },

  caudate_nucleus: {
    title: 'Caudate Nucleus', 
    description: 'A C-shaped subcortical structure that makes up a critical part of the brain’s learning and memory system, specifically regarding feedback and reward.', 
    head: 'One of the structures that make up the dorsal striatum, part of the basal ganglia.', 
    function: 'Involved in goal-directed action, motor planning, and reward system processing.', 
  },

  globus_pallidus: {
    title: 'Globus Pallidus', 
    description: 'Globus Pallidus, also called the Paleostriatum, is a pale, triangular subcortical nucleus that sits deep inside the brain structure. It is divided into an internal segment (GPi) and an external segment (GPe).', 
    head: 'A paired, deep subcortical structure situated medial to the putamen within the basal ganglia.', 
    function: 'Acts as the primary output regulation center for the basal ganglia, sending massive inhibitory signals to the thalamus to keep unwanted physical movements suppressed.', 
  },

  corpus_callosum: {
    title: 'Corpus Callosum', 
    description: 'The corpus callosum connects the right and left hemispheres of the brain. It is a massive bundle of over 200 million myelinated nerve fibers.', 
    head: 'Spans the longitudinal fissure, forming the roof of the lateral ventricles.', 
    function: 'Facilitates interhemispheric communication, allowing the left and right sides of the brain to share information and coordinate function.', 
  },

  lateral_geniculate_body: {
   title: "hey"
  },

  cingulate_gyrus: {
    title: 'Cingulate Gyrus', 
    description: 'An integral part of the limbic system, acting as a major pathway connecting the cerebral cortex to deeper structures.', 
    head: 'Located immediately above the corpus callosum on the medial aspect of the hemispheres.', 
    function: 'Involved in emotion regulation, conflict monitoring, error detection, and autonomic motor function.', 
  },

  thalamus: {
    title: 'Thalamus', 
    description: 'Often referred to as the "switchboard" of the brain. Almost all sensory information (except smell) passes through here before reaching the cerebral cortex.', 
    head: 'A paired, symmetrical structure situated at the top of the brainstem, near the center of the brain.', 
    function: 'Relays sensory and motor signals to the cortex, and plays a role in the regulation of consciousness, sleep, and alertness.', 
  },

  cerebellum: {
    title: 'Cerebellum', 
    description: 'Latin for "little brain." Despite its size, it contains over 50% of the total neurons in the brain.', 
    head: 'Located at the back of the brain, underlying the occipital and temporal lobes.', 
    function: 'Maintains balance and posture, coordinates voluntary movements, and handles motor learning. Increasingly recognized for its role in cognitive timing.', 
  },

  insula: {
    title: 'Insula', 
    description: 'A portion of the cerebral cortex folded deep within the lateral sulcus. It is deeply involved in consciousness and homeostasis.', 
    head: 'Hidden beneath the frontal, parietal, and temporal opercula.', 
    function: 'Processes interoception (the sense of the internal state of the body), pain perception, and social emotions like empathy and disgust.', 
  },
  
  optic_chiasm: {
    title: 'Optic Chiasm', 
    description: 'The X-shaped structure formed at the point below the brain where the two optic nerves cross over each other.', 
    head: 'Located at the base of the brain, immediately inferior to the hypothalamus.', 
    function: 'Allows the visual cortex to receive the same hemispheric visual field from both eyes, enabling binocular vision and depth perception.', 
  },

    occipital_pole: {
    title: 'Primary Visual Cortex', 
    description: 'The Primary Visual Cortex (V1), is the first stop for visual data taken in by the eyes. It lives in the inferior posterior (lower back) of the occipital lobe, the region involved in vision. It receives raw sensory input directly from the lateral geniculate nucleus (LGN) of the thalamus via optic radiations.', 
    head: 'Located at the inferior posterior (bottom-back) area of the occipital lobe, the region involved with visual processing.', 
    function: 'V1 handles the initial processing of visual stimuli, decoding the signal for basic information such as orientation, size, shape, and contrast, before sending the signal off to other areas for more complex processing', 
  },

  lateral_geniculate_body: {
    title: 'Lateral Geniculate Body', 
    description: 'Lateral Geniculate Body, also called the Lateral Geniculate Nucleus or LGN, is a critical sensory relay station in the thalamus dedicated entirely to the visual system. It acts as the primary connector between the retinas and the visual cortex.', 
    head: 'A specialized subcortical structure located within the posterior thalamus.', 
    function: 'Receives visual signals from the optic tract and organizes them into distinct spatial layers (parvocellular for detail/color and magnocellular for movement/contrast) before sending them to V1.', 
  },

  Superior_temporal_gyrus: {
    title: 'Superior Temporal Gyrus'
  },

  Inferior_temporal_gyrus: {
    title: 'Inferior Temporal Gyrus'
  },

  

  Supramarginal_gyrus: {
    title: 'Supramarginal Gyrus'
  },

  Straight_gyrus:{
    title: 'Gyrus Rectus'
  },

  Orbital_sulci_:{
    title: 'Orbital Sulci'
  },

   Middle_frontal_gyrus:{
    title: 'Middle Frontal Gyrus'
  },

   Middle_temporal_gyrus:{
    title: 'Middle Temporal Gyrus'
  },

   Precuneus:{
    title: 'Precuneus'
  },

  superior_colliculus: {
    title: 'Superior Colliculus', 
    description: 'Superior Colliculus, also called the Optic Tectum, is a paired subcortical structure that forms a major component of the midbrain roof. It handles rapid, subconscious visual processing long before conscious awareness kicks in.', 
    head: 'Situated on the dorsal aspect of the midbrain, just inferior to the thalamus.', 
    function: 'Directs involuntary behavioral responses to spatial stimuli, coordinating saccadic eye movements and reflexive head turning toward sudden visual or auditory shifts.', 
  },

  _precentral_gyrus: {
    title: 'Precentral Gyrus', 
    description: 'Precentral Gyrus, also called the Primary Motor Cortex (M1), is a prominent surface structure on the posterior frontal lobe that serves as the command center for executing physical activity.', 
    head: 'Situated in the frontal lobe, immediately anterior to the central sulcus.', 
    function: 'Controls voluntary, coordinated skeletal muscle movements across the body using a topographically mapped structure called the motor homunculus.', 

  },

  _postcentral_gyrus: {
    title: 'Postcentral Gyrus', 
    description: 'Postcentral Gyrus, also called the Primary Somatosensory Cortex (S1), is the first destination for the sense of touch. Like the motor cortex, it maps incoming bodily sensations onto a somatosensory homunculus.', 
    head: 'Located in the parietal lobe, immediately posterior to the central sulcus.', 
    function: 'Receives and decodes somatosensory signals from the body, including touch, vibration, temperature, pain, and spatial body position (proprioception).', 
  },

  pons: {
    title: 'Pons',

  },

  medulla_oblongata: {
    title: 'Medulla Oblongata',
  },

  fornix: {
    title: 'Fornix',
  },


  temporal_pole: {
    title: 'Temporal Pole', 
    description: "Temporal Pole, also known as Brodmann's Area 38, is the anterior tip of the temporal lobe. It acts as a highly interconnected semantic hub, linking emotional processing networks to high-level conceptual knowledge.", 
    head: 'Located at the most anterior aspect of the temporal lobe.', 
    function: 'Involved in high-level face recognition, social conceptual memory, evaluating semantic meaning, and assigning emotional context to complex social scenes.', 
  },

  putamen: {
    title: 'Putamen', 
    description: 'The putamen, a component of the Striatum, is a large subcortical structure that forms the lateral portion of the basal ganglia. It works closely with the caudate nucleus to regulate fluid behavior.', 
    head: 'Part of the dorsal striatum within the deep subcortical basal ganglia.', 
    function: 'Regulates motor control networks, controls automated procedural learning, and assists in selecting and reinforcing well-practiced behavioral habits.', 
  },

};


  
  /* 2) Renderers for the tab content */
  function renderBrainInfo(info){
    const $ = (id)=>document.getElementById(id);
    ($('brainName')||{}).textContent = info.title || 'Brain';
    const img = $('muscleImage');
    if (img){
      if (info.img){ img.src = info.img; img.alt = `${info.title} illustration`; img.style.display='block'; }
      else { img.removeAttribute('src'); img.alt=''; img.style.display='none'; }
    }
    const desc = $('info-desc'); if (desc) desc.textContent = info.description || 'Im still working on this one... Have a little paitence, would ya?';
    const head = $('info-head'); if (head) head.textContent = info.head || '';
    const func = $('info-func'); if (func) func.textContent = info.function || '';
  }
  function renderBrainExercises(info){
    const ul = document.getElementById('exerciseList');
    if (!ul) return;
    ul.innerHTML = (info.exercises||[]).map(x=>`<li>${x}</li>`).join('') || `<li>No exercises yet.</li>`;

    const explanation = document.getElementById('explanation');
    if(explanation) explanation.textContent = info.explanation || '';
  }
  
  /* 3) Open the info panel for a given key */
  window.openSidebarWith = function(key){
    const info = (window.BRAIN_INFO || {})[key];
    // If missing, synthesize a readable title so the page still opens.
    const fallback = (k)=>({ title: k.replace(/[_-]/g,' ').replace(/\b\w/g,m=>m.toUpperCase()), description:'Coming soon.' });
    const data = info || fallback(key);
  
    renderBrainInfo(data);
    renderBrainExercises(data);
    
  
    // Let the viewer know (to highlight/zoom)
    window.dispatchEvent(new CustomEvent('mm:selected', { detail:{ name:key }}));

    
  };

  
  const navbar = document.querySelector('.navbar');

navbar.addEventListener('mouseenter', () => {
  navbar.classList.remove('is-leaving');
  navbar.classList.add('is-armed');        // grow L→R
});

navbar.addEventListener('mouseleave', () => {
  // run exit: keep armed, add leaving so it slides off to the right
  navbar.classList.add('is-leaving');

  // after the transform transition finishes, reset to initial (hidden)
  const onEnd = (e) => {
    if (e.propertyName !== 'transform') return;
    navbar.classList.remove('is-armed', 'is-leaving');
    navbar.removeEventListener('transitionend', onEnd);
  };
  navbar.addEventListener('transitionend', onEnd);
});

  
(function buildIndex(){
  const UL = document.getElementById('mi-list');
  const Q  = document.getElementById('mi-search');
  const SELECT = document.getElementById('mobile-region-select'); // NEW: Get mobile target

  const titleOf = (k,m)=>(m?.title)||k.replace(/[_-]/g,' ').replace(/\b\w/g,m=>m.toUpperCase());
  
  function allItems(){
    return Object.entries(window.BRAIN_INFO||{})
      .map(([key,m]) => ({ key, title: titleOf(key,m) }))
      .sort((a,b)=>a.title.localeCompare(b.title));
  }

  // Modified to render BOTH UI elements
  function render(list){
    // 1. Render Desktop UL (Existing code)
    if (UL) {
      UL.innerHTML = '';
      const frag = document.createDocumentFragment();
      for (const it of list){
        const li  = document.createElement('li');
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = it.title;
        btn.dataset.key = it.key;
        btn.addEventListener('click', () => openSidebarWith(it.key));
        li.appendChild(btn); frag.appendChild(li);
      }
      UL.appendChild(frag);
    }

    // 2. Render Mobile Select (New code)
    if (SELECT) {
      SELECT.innerHTML = '<option value="" disabled selected>Select a region...</option>';
      const fragSel = document.createDocumentFragment();
      for (const it of list){
        const opt = document.createElement('option');
        opt.value = it.key;
        opt.textContent = it.title;
        fragSel.appendChild(opt);
      }
      SELECT.appendChild(fragSel);
    }
  }

  function filter(q, items){
    const s = q.trim().toLowerCase();
    return !s ? items : items.filter(n => n.title.toLowerCase().includes(s));
  }

  // initial draw
  let ITEMS = allItems();
  render(ITEMS);

  // search (Desktop only)
  Q?.addEventListener('input',(e)=> {
    // Only re-render the UL based on search, don't filter the mobile dropdown
    const filtered = filter(e.target.value, ITEMS);
    // (If you want the search bar to filter the mobile dropdown too, just call render(filtered))
    render(filtered); 
  });

  // NEW: Mobile dropdown interaction listener
  SELECT?.addEventListener('change', (e) => {
    if (e.target.value) {
      openSidebarWith(e.target.value);
    }
  });

  // keep highlight in sync across both platforms
  addEventListener('mm:selected',(e)=>{
    const key = e.detail?.name;
    
    // Sync Desktop
    if (UL) {
      UL.querySelectorAll('button.is-active').forEach(el => el.classList.remove('is-active'));
      const match = [...UL.querySelectorAll('button')].find(b => b.dataset.key === key);
      if (match) {
        match.classList.add('is-active');
        match.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }

    // Sync Mobile
    if (SELECT && key) {
      SELECT.value = key;
    }
  });

  // Viewer mesh merging (kept the same, just calling our updated render)
  window.addEventListener('mm:meshList', (e) => {
    const names = e.detail?.names || [];
    let added = 0;
    for (const raw of names){
      const k = raw.toLowerCase().replace(/[^a-z]/g,''); // normalized key
      if (!window.BRAIN_INFO[k]){
        window.BRAIN_INFO[k] = { title: titleOf(k) };
        added++;
      }
    }
    if (added){
      ITEMS = allItems();
      render(ITEMS); 
      console.info(`📚 index merged ${added} new item(s) from model`);
    }
  });

  console.info(`📚 brain index rendered: ${ITEMS.length} items`);
})();

(() => {
  const root  = document.documentElement;
  const body  = document.body;
  const panel = document.getElementById('panel');

  /* ---------------- panel width helpers (CSS var: --panel-w) --------- */
  function varPx(name, fallback=0){
    const v = getComputedStyle(root).getPropertyValue(name).trim();
    if (!v) return fallback;
    if (v.endsWith('px')) return parseFloat(v);
    if (v.endsWith('vw')) return innerWidth * (parseFloat(v)/100);
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : fallback;
  }
  const minPx = () => varPx('--panel-min', 260);
  const maxPx = () => varPx('--panel-max', Math.round(innerWidth * 0.5));

  function setPanelWidth(px){
    const w = Math.max(minPx(), Math.min(maxPx(), px|0));
    root.style.setProperty('--panel-w', `${w}px`);
    try { localStorage.setItem('mm.panel.width', `${w}px`); } catch {}
    dispatchEvent(new Event('resize'));
  }

  window.__mm = Object.assign(window.__mm || {}, { setPanelWidth });

  try { const saved = localStorage.getItem('mm.panel.width'); if (saved) root.style.setProperty('--panel-w', saved); } catch {}


  /* ---------------- late-bound resizer binding -------------------------- */
  function bindResizer(){
    const handle = document.getElementById('panel-resizer');
    if (!handle || !panel) return console.warn('no #panel-resizer or #panel');

    let startX = 0, startW = 0, active = false;

    function onDown(e){
      if (body.classList.contains('panel-closed')) return;
      active = true;
      startX = e.clientX;
      startW = panel.getBoundingClientRect().width;
      panel.classList.add('is-resizing');
      handle.setPointerCapture?.(e.pointerId);
      addEventListener('pointermove', onMove);
      addEventListener('pointerup', onUp, { once:true });
      e.preventDefault?.();
    }
    function onMove(e){
      if (active) setPanelWidth(startW - (e.clientX - startX));
    }
    function onUp(){ active = false; panel.classList.remove('is-resizing'); removeEventListener('pointermove', onMove); }

    handle.addEventListener('pointerdown', onDown);

    handle.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
        const cur = panel.getBoundingClientRect().width;
        setPanelWidth(cur + (e.key === 'ArrowLeft' ? 24 : -24)); 
        e.preventDefault();
      }
    });

    console.info('🟦 resizer bound');
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindResizer, { once:true });
  } else { bindResizer(); }


  /* --- Info Overlay Logic --- */
document.addEventListener('DOMContentLoaded', () => {
  const helpBtn = document.getElementById('help-btn');
  const overlay = document.getElementById('instructionOverlay');
  const closeBtn = document.getElementById('closeOverlayBtn');

  if (helpBtn && overlay && closeBtn) {
    helpBtn.addEventListener('click', () => {
      overlay.classList.add('is-visible');
    });

    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('is-visible');
    });
  }
});



})();
