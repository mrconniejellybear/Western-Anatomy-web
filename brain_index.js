console.info('✅ UI core executing');

window.BRAIN_INFO = window.BRAIN_INFO || {

  superior_frontal_gyrus: {
    title: 'Superior Frontal Gyrus', 
    description: 'Makes up about one-third of the frontal lobe. It is highly involved in higher cognitive functions and working memory.', 
    head: 'Situated at the superior aspect of the frontal lobe.', 
    function: 'Contributes to executive functions, spatial working memory, and introspection/self-awareness.', 
    groupPath: ['Lobe', 'Frontal Lobe', 'Superior Frontal Gyrus'],
    functionTag: 'Motor, Memory'
  },

  Inferior_frontal_gyrus: {
    title: 'Inferior Frontal Gyrus',
    description: 'A prominent gyrus of the frontal lobe, critically important for language processing and speech production.',
    head: 'Located on the lateral surface of the frontal lobe.',
    function: 'Houses Broca’s area (in the dominant hemisphere), which is essential for language production and comprehension.',
    groupPath: ['Lobe', 'Frontal Lobe', 'Inferior Frontal Gyrus'],
    functionTag: 'Motor'
  },

  Angular_gyrus: {
    title: 'Angular Gyrus',
    description: 'A region of the brain in the parietal lobe that transfers visual information to Wernicke’s area.',
    head: 'Located in the anterolateral region of the parietal lobe.',
    function: 'Involved in a number of processes related to language, number processing, spatial cognition, memory retrieval, and attention.',
    groupPath: ['Lobe', 'Parietal Lobe', 'Angular Gyrus'],
    functionTag: 'Memory, Sensory'
  },

  Superior_frontal_sulcus: {
    title: 'Superior Frontal Sulcus',
    description: 'The sulcus that separates the superior frontal gyrus from the middle frontal gyrus.',
    head: 'Located in the frontal lobe, running parallel to the longitudinal fissure.',
    function: 'Acts as a major anatomical landmark dividing the upper and middle sections of the frontal lobe.',
    groupPath: ['Sulcus', 'Frontal Lobe', 'Superior Frontal Sulcus'],
    functionTag: 'Motor'
  },

  central_sulcus: {
    title: 'Central Sulcus',
    description: 'A prominent landmark of the brain, separating the parietal lobe from the frontal lobe.',
    head: 'Runs down the middle of the lateral surface of the brain.',
    function: 'Separates the primary motor cortex (anterior) from the primary somatosensory cortex (posterior).',
    groupPath: ['Sulcus', 'Frontal/Parietal Border', 'Central Sulcus'],
    functionTag: 'Motor, Sensory'
  },

  Third_ventricle: {
    title: 'Third Ventricle',
    description: 'A narrow, funnel-shaped cavity of the brain, filled with cerebrospinal fluid (CSF).',
    head: 'Located in the center of the diencephalon, between the two thalami.',
    function: 'Produces, secretes, and circulates cerebrospinal fluid to protect the brain from trauma and transport nutrients.',
    groupPath: ['Subcortical', 'Ventricular System', 'Third Ventricle'],
    functionTag: 'Autonomic'
  },

   Fourth_ventricle: {
    title: 'Fourth Ventricle',
    description: 'A tent-like cavity filled with cerebrospinal fluid that protects the human brain from trauma.',
    head: 'Located within the pons or in the upper part of the medulla oblongata.',
    function: 'Helps form the central canal of the spinal cord and protects the brain from physical shocks.',
    groupPath: ['Subcortical', 'Ventricular System', 'Fourth Ventricle'],
    functionTag: 'Autonomic'
  },

   Lateral_ventricle: {
    title: 'Lateral Ventricle(s)',
    description: 'The two largest cavities of the ventricular system of the human brain, containing cerebrospinal fluid.',
    head: 'Located deep within each cerebral hemisphere, shaped like a C.',
    function: 'Provides cushioning for the brain while also helping to circulate nutrients and remove waste.',
    groupPath: ['Subcortical', 'Ventricular System', 'Lateral Ventricle'],
    functionTag: 'Autonomic'
  },

  hippocampus: {
    title: 'Hippocampus', 
    description: 'A complex, seahorse-shaped structure embedded deep in the temporal lobe. It is one of the most widely studied regions in cognitive neuroscience due to its vulnerability in Alzheimer’s disease.', 
    head: 'Part of the limbic system, located in the medial temporal lobe.', 
    function: 'Critical for the consolidation of information from short-term to long-term memory, and for spatial memory that enables navigation.', 
    groupPath: ['Subcortical', 'Limbic System', 'Hippocampus'],
    functionTag: 'Memory, Emotion'
  },

  amygdaloid_body: {
    title: 'Amygdala', 
    description: 'An almond-shaped mass of gray matter involved in processing emotions and survival responses.', 
    head: 'Located deep within the medial temporal lobes, just anterior to the hippocampus.', 
    function: 'Processes emotional responses, fear conditioning, and attaches emotional significance to memories.', 
    groupPath: ['Subcortical', 'Limbic System', 'Amygdala'],
    functionTag: 'Emotion, Memory'
  },

  caudate_nucleus: {
    title: 'Caudate Nucleus', 
    description: 'A C-shaped subcortical structure that makes up a critical part of the brain’s learning and memory system, specifically regarding feedback and reward.', 
    head: 'One of the structures that make up the dorsal striatum, part of the basal ganglia.', 
    function: 'Involved in goal-directed action, motor planning, and reward system processing.', 
    groupPath: ['Subcortical', 'Basal Ganglia', 'Caudate Nucleus'],
    functionTag: 'Motor, Memory'
  },

  globus_pallidus: {
    title: 'Globus Pallidus', 
    description: 'Globus Pallidus, also called the Paleostriatum, is a pale, triangular subcortical nucleus that sits deep inside the brain structure. It is divided into an internal segment (GPi) and an external segment (GPe).', 
    head: 'A paired, deep subcortical structure situated medial to the putamen within the basal ganglia.', 
    function: 'Acts as the primary output regulation center for the basal ganglia, sending massive inhibitory signals to the thalamus to keep unwanted physical movements suppressed.', 
    groupPath: ['Subcortical', 'Basal Ganglia', 'Globus Pallidus'],
    functionTag: 'Motor'
  },

  corpus_callosum: {
    title: 'Corpus Callosum', 
    description: 'The corpus callosum connects the right and left hemispheres of the brain. It is a massive bundle of over 200 million myelinated nerve fibers.', 
    head: 'Spans the longitudinal fissure, forming the roof of the lateral ventricles.', 
    function: 'Facilitates interhemispheric communication, allowing the left and right sides of the brain to share information and coordinate function.', 
    groupPath: ['Subcortical', 'White Matter Tracts', 'Corpus Callosum'],
    functionTag: 'Motor, Sensory, Memory, Emotion'
  },

  cingulate_gyrus: {
    title: 'Cingulate Gyrus', 
    description: 'An integral part of the limbic system, acting as a major pathway connecting the cerebral cortex to deeper structures.', 
    head: 'Located immediately above the corpus callosum on the medial aspect of the hemispheres.', 
    function: 'Involved in emotion regulation, conflict monitoring, error detection, and autonomic motor function.', 
    groupPath: ['Lobe', 'Limbic Lobe', 'Cingulate Gyrus'],
    functionTag: 'Emotion, Motor'
  },

  thalamus: {
    title: 'Thalamus', 
    description: 'Often referred to as the "switchboard" of the brain. Almost all sensory information (except smell) passes through here before reaching the cerebral cortex.', 
    head: 'A paired, symmetrical structure situated at the top of the brainstem, near the center of the brain.', 
    function: 'Relays sensory and motor signals to the cortex, and plays a role in the regulation of consciousness, sleep, and alertness.', 
    groupPath: ['Subcortical', 'Diencephalon', 'Thalamus'],
    functionTag: 'Sensory, Motor'
  },

  cerebellum: {
    title: 'Cerebellum', 
    description: 'Latin for "little brain." Despite its size, it contains over 50% of the total neurons in the brain.', 
    head: 'Located at the back of the brain, underlying the occipital and temporal lobes.', 
    function: 'Maintains balance and posture, coordinates voluntary movements, and handles motor learning. Increasingly recognized for its role in cognitive timing.', 
    groupPath: ['Subcortical', 'Hindbrain', 'Cerebellum'],
    functionTag: 'Motor, Memory'
  },

  insula: {
    title: 'Insula', 
    description: 'A portion of the cerebral cortex folded deep within the lateral sulcus. It is deeply involved in consciousness and homeostasis.', 
    head: 'Hidden beneath the frontal, parietal, and temporal opercula.', 
    function: 'Processes interoception (the sense of the internal state of the body), pain perception, and social emotions like empathy and disgust.', 
    groupPath: ['Lobe', 'Insular Cortex', 'Insula'],
    functionTag: 'Sensory, Emotion'
  },
  
  optic_chiasm: {
    title: 'Optic Chiasm', 
    description: 'The X-shaped structure formed at the point below the brain where the two optic nerves cross over each other.', 
    head: 'Located at the base of the brain, immediately inferior to the hypothalamus.', 
    function: 'Allows the visual cortex to receive the same hemispheric visual field from both eyes, enabling binocular vision and depth perception.', 
    groupPath: ['Subcortical', 'Visual Pathway', 'Optic Chiasm'],
    functionTag: 'Sensory'
  },

  occipital_pole: {
    title: 'Primary Visual Cortex', 
    description: 'The Primary Visual Cortex (V1), is the first stop for visual data taken in by the eyes. It lives in the inferior posterior (lower back) of the occipital lobe, the region involved in vision. It receives raw sensory input directly from the lateral geniculate nucleus (LGN) of the thalamus via optic radiations.', 
    head: 'Located at the inferior posterior (bottom-back) area of the occipital lobe, the region involved with visual processing.', 
    function: 'V1 handles the initial processing of visual stimuli, decoding the signal for basic information such as orientation, size, shape, and contrast, before sending the signal off to other areas for more complex processing', 
    groupPath: ['Lobe', 'Occipital Lobe', 'Primary Visual Cortex'],
    functionTag: 'Sensory'
  },

  lateral_geniculate_body: {
    title: 'Lateral Geniculate Body', 
    description: 'Lateral Geniculate Body, also called the Lateral Geniculate Nucleus or LGN, is a critical sensory relay station in the thalamus dedicated entirely to the visual system. It acts as the primary connector between the retinas and the visual cortex.', 
    head: 'A specialized subcortical structure located within the posterior thalamus.', 
    function: 'Receives visual signals from the optic tract and organizes them into distinct spatial layers (parvocellular for detail/color and magnocellular for movement/contrast) before sending them to V1.', 
    groupPath: ['Subcortical', 'Thalamus', 'Lateral Geniculate Body'],
    functionTag: 'Sensory'
  },

  Superior_temporal_gyrus: {
    title: 'Superior Temporal Gyrus',
    description: 'Contains the primary auditory cortex, which is responsible for processing sounds.',
    head: 'Located on the superior aspect of the temporal lobe.',
    function: 'Essential for processing auditory information and houses Wernicke’s area (involved in language comprehension).',
    groupPath: ['Lobe', 'Temporal Lobe', 'Superior Temporal Gyrus'],
    functionTag: 'Sensory, Emotion'
  },

  Inferior_temporal_gyrus: {
    title: 'Inferior Temporal Gyrus',
    description: 'A gyrus placed below the middle temporal sulcus, connected to visual object recognition.',
    head: 'Located on the lateral and inferior surface of the temporal lobe.',
    function: 'Critical for the visual recognition of objects, identifying faces, and processing complex visual stimuli.',
    groupPath: ['Lobe', 'Temporal Lobe', 'Inferior Temporal Gyrus'],
    functionTag: 'Sensory, Memory'
  },

  Supramarginal_gyrus: {
    title: 'Supramarginal Gyrus',
    description: 'A portion of the parietal lobe that processes somatosensory, auditory, and visual data.',
    head: 'Located just anterior to the angular gyrus in the parietal lobe.',
    function: 'Interprets tactile sensory data and is involved in perception of space and limb location.',
    groupPath: ['Lobe', 'Parietal Lobe', 'Supramarginal Gyrus'],
    functionTag: 'Sensory'
  },

  Straight_gyrus:{
    title: 'Gyrus Rectus',
    description: 'A portion of the frontal lobe whose precise function is still highly researched, but thought to be tied to higher cognitive processing.',
    head: 'Located on the medial margin of the inferior surface of the frontal lobe.',
    function: 'Associated with personality, higher executive functions, and autonomic regulation.',
    groupPath: ['Lobe', 'Frontal Lobe', 'Gyrus Rectus'],
    functionTag: 'Emotion'
  },

  Orbital_sulci_:{
    title: 'Orbital Sulci',
    description: 'The grooves that separate the orbital gyri on the inferior surface of the frontal lobe.',
    head: 'Located on the underside of the frontal lobe, resting above the eye sockets.',
    function: 'Serve as anatomical boundaries for the regions heavily involved in emotional regulation and reward.',
    groupPath: ['Sulcus', 'Frontal Lobe', 'Orbital Sulci'],
    functionTag: 'Emotion'
  },

   Middle_frontal_gyrus:{
    title: 'Middle Frontal Gyrus',
    description: 'Makes up about one-third of the frontal lobe, sitting between the superior and inferior frontal sulci.',
    head: 'Located centrally on the lateral surface of the frontal lobe.',
    function: 'Highly involved in cognitive control, working memory, and directing attention.',
    groupPath: ['Lobe', 'Frontal Lobe', 'Middle Frontal Gyrus'],
    functionTag: 'Memory, Emotion'
  },

   Middle_temporal_gyrus:{
    title: 'Middle Temporal Gyrus',
    description: 'A long gyrus running along the lateral aspect of the temporal lobe.',
    head: 'Located between the superior and inferior temporal gyri.',
    function: 'Involved in cognitive processes like contemplating distance, recognizing known faces, and accessing word meaning while reading.',
    groupPath: ['Lobe', 'Temporal Lobe', 'Middle Temporal Gyrus'],
    functionTag: 'Memory, Sensory'
  },

   Precuneus:{
    title: 'Precuneus',
    description: 'A part of the superior parietal lobule hidden in the medial longitudinal fissure between the two cerebral hemispheres.',
    head: 'Located in the medial region of the parietal lobe.',
    function: 'Heavily involved in episodic memory, visuospatial processing, reflections upon self, and aspects of consciousness.',
    groupPath: ['Lobe', 'Parietal Lobe', 'Precuneus'],
    functionTag: 'Memory, Sensory'
  },

  superior_colliculus: {
    title: 'Superior Colliculus', 
    description: 'Superior Colliculus, also called the Optic Tectum, is a paired subcortical structure that forms a major component of the midbrain roof. It handles rapid, subconscious visual processing long before conscious awareness kicks in.', 
    head: 'Situated on the dorsal aspect of the midbrain, just inferior to the thalamus.', 
    function: 'Directs involuntary behavioral responses to spatial stimuli, coordinating saccadic eye movements and reflexive head turning toward sudden visual or auditory shifts.', 
    groupPath: ['Subcortical', 'Midbrain', 'Superior Colliculus'],
    functionTag: 'Sensory, Motor'
  },

  _precentral_gyrus: {
    title: 'Precentral Gyrus', 
    description: 'Precentral Gyrus, also called the Primary Motor Cortex (M1), is a prominent surface structure on the posterior frontal lobe that serves as the command center for executing physical activity.', 
    head: 'Situated in the frontal lobe, immediately anterior to the central sulcus.', 
    function: 'Controls voluntary, coordinated skeletal muscle movements across the body using a topographically mapped structure called the motor homunculus.', 
    groupPath: ['Lobe', 'Frontal Lobe', 'Primary Motor Cortex'],
    functionTag: 'Motor'
  },

  _postcentral_gyrus: {
    title: 'Postcentral Gyrus', 
    description: 'Postcentral Gyrus, also called the Primary Somatosensory Cortex (S1), is the first destination for the sense of touch. Like the motor cortex, it maps incoming bodily sensations onto a somatosensory homunculus.', 
    head: 'Located in the parietal lobe, immediately posterior to the central sulcus.', 
    function: 'Receives and decodes somatosensory signals from the body, including touch, vibration, temperature, pain, and spatial body position (proprioception).', 
    groupPath: ['Lobe', 'Parietal Lobe', 'Primary Somatosensory Cortex'],
    functionTag: 'Sensory'
  },

  pons: {
    title: 'Pons',
    description: 'A major structure in the upper part of your brainstem. It is named after the Latin word for "bridge".',
    head: 'Located above the medulla oblongata and below the midbrain.',
    function: 'Serves as a communications and coordination center between the two hemispheres of the brain, and handles unconscious processes like breathing and sleep cycles.',
    groupPath: ['Subcortical', 'Brainstem', 'Pons'],
    functionTag: 'Motor, Sensory'
  },

  medulla_oblongata: {
    title: 'Medulla Oblongata',
    description: 'The tail-like structure at the base of the brain that connects it to the spinal cord.',
    head: 'Located at the lowest part of the brainstem.',
    function: 'Controls crucial autonomic functions like heart rate, breathing, and blood pressure.',
    groupPath: ['Subcortical', 'Brainstem', 'Medulla Oblongata'],
    functionTag: 'Motor, Sensory'
  },

  fornix: {
    title: 'Fornix',
    description: 'A C-shaped bundle of nerve fibers in the brain that acts as the major output tract of the hippocampus.',
    head: 'Arches over the thalamus and under the corpus callosum.',
    function: 'Carries signals from the hippocampus to the mammillary bodies and septal nuclei, playing a crucial role in memory recall.',
    groupPath: ['Subcortical', 'Limbic System', 'Fornix'],
    functionTag: 'Memory, Emotion'
  },

  temporal_pole: {
    title: 'Temporal Pole', 
    description: "Temporal Pole, also known as Brodmann's Area 38, is the anterior tip of the temporal lobe. It acts as a highly interconnected semantic hub, linking emotional processing networks to high-level conceptual knowledge.", 
    head: 'Located at the most anterior aspect of the temporal lobe.', 
    function: 'Involved in high-level face recognition, social conceptual memory, evaluating semantic meaning, and assigning emotional context to complex social scenes.', 
    groupPath: ['Lobe', 'Temporal Lobe', 'Temporal Pole'],
    functionTag: 'Emotion, Memory'
  },

  putamen: {
    title: 'Putamen', 
    description: 'The putamen, a component of the Striatum, is a large subcortical structure that forms the lateral portion of the basal ganglia. It works closely with the caudate nucleus to regulate fluid behavior.', 
    head: 'Part of the dorsal striatum within the deep subcortical basal ganglia.', 
    function: 'Regulates motor control networks, controls automated procedural learning, and assists in selecting and reinforcing well-practiced behavioral habits.', 
    groupPath: ['Subcortical', 'Basal Ganglia', 'Putamen'],
    functionTag: 'Motor, Memory'
  },

};


  /* 2) Renderers for the tab content */
  function renderBrainInfo(info){
    const $ = (id)=>document.getElementById(id);
    ($('brainName')||{}).textContent = info.title || 'Brain';

    // Inject the dynamic breadcrumb pathway
    const pathway = $('rel-pathway');
    if (pathway) {
      pathway.textContent = info.groupPath ? info.groupPath.join(' / ') : '';
    }

    const img = $('muscleImage');
    if (img){
      if (info.img){ img.src = info.img; img.alt = `${info.title} illustration`; img.style.display='block'; }
      else { img.removeAttribute('src'); img.alt=''; img.style.display='none'; }
    }
    const desc = $('info-desc'); if (desc) desc.textContent = info.description || 'Im still working on this one... Have a little patience, would ya?';
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
    const fallback = (k)=>({ title: k.replace(/[_-]/g,' ').replace(/\b\w/g,m=>m.toUpperCase()), description:'Coming soon.' });
    const data = info || fallback(key);
  
    renderBrainInfo(data);
    renderBrainExercises(data);
    
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
  const SELECT = document.getElementById('mobile-region-select'); 

  const titleOf = (k,m)=>(m?.title)||k.replace(/[_-]/g,' ').replace(/\b\w/g,m=>m.toUpperCase());
  
  function allItems(){
    return Object.entries(window.BRAIN_INFO||{})
      .map(([key,m]) => ({ key, title: titleOf(key,m) }))
      .sort((a,b)=>a.title.localeCompare(b.title));
  }

  // Render BOTH UI elements
  function render(list){
    // 1. Render Desktop UL
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

    // 2. Render Mobile Select
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

  // initial draw
  let ITEMS = allItems();

  // NEW: Unified Filter Logic
  const groupFilter = document.getElementById('group-filter');
  const funcFilter = document.getElementById('function-filter');

  function applyFilters() {
    const gVal = groupFilter?.value || 'All';
    const fVal = funcFilter?.value || 'All';
    const qVal = (Q?.value || '').trim().toLowerCase();

    const filtered = ITEMS.filter(it => {
      const info = window.BRAIN_INFO[it.key] || {};
      const matchSearch = !qVal || it.title.toLowerCase().includes(qVal);
      
      // Check if any item in the groupPath array includes the dropdown value
      const matchGroup = gVal === 'All' || (info.groupPath && info.groupPath.some(p => p.includes(gVal)));
      const matchFunc = fVal === 'All' || (info.functionTag && info.functionTag.includes(fVal));

      return matchSearch && matchGroup && matchFunc;
    });

    render(filtered);

    // Tell the 3D model to ghost out everything that doesn't match the filter!
    window.dispatchEvent(new CustomEvent('mm:filterMeshes', { 
      detail: { allowedKeys: filtered.map(f => f.key), isFiltering: (gVal !== 'All' || fVal !== 'All') }
    }));
  }

  // Draw list for the first time
  applyFilters();

  // Bind the listeners
  Q?.addEventListener('input', applyFilters);
  groupFilter?.addEventListener('change', applyFilters);
  funcFilter?.addEventListener('change', applyFilters);

  // Command K logic
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      Q?.focus();
    }
  });

  // Mobile dropdown interaction listener
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

  // Viewer mesh merging
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
      applyFilters(); 
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
