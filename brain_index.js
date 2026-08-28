console.info('✅ UI core executing');

window.BRAIN_INFO = window.BRAIN_INFO || {

  "Frontal_lobe": {
    title: "Frontal Lobe",
    description: "Regulates decision making, deep personality traits, and voluntary motor movements...",
    location: 'Components of the Frontal Lobe include...', 
    groupPath: ["Lobes", "Cerebral Cortex"], 
    functionTags: ["Personality", "Motor", "Social"],
    },

  superior_frontal_gyrus: {
    title: 'Superior Frontal Gyrus', 
    description: 'Makes up about one-third of the frontal lobe. It is highly involved in higher cognitive functions and working memory.', 
    location: 'Situated at the superior aspect of the frontal lobe.', 
    function: 'Contributes to executive functions, spatial working memory, and introspection/self-awareness.', 
    groupPath: ['Lobe', 'Frontal Lobe', 'Gyri', 'Superior Frontal Gyrus'],
    functionTags: ['Motor', 'Memory']
  },

  inferior_frontal_gyrus: {
    title: 'Inferior Frontal Gyrus',
    description: 'A prominent gyrus of the frontal lobe, critically important for language processing and speech production.',
    location: 'Located on the lateral surface of the frontal lobe.',
    function: 'Houses Broca’s area (in the dominant hemisphere), which is essential for language production and comprehension.',
    groupPath: ['Lobe','Frontal Lobe', 'Gyri', 'Inferior Frontal Gyrus'],
    functionTags: ['Motor']
  },

  Lateral_occipital_gyrus: {
    title: 'Lateral Occipital Gyrus',
    groupPath: ['Lobe','Occipital Lobe', 'Gyri', 'Lateral Occipital Gyrus'],
    functionTags: ['Vision']
  },

  angular_gyrus: {
    title: 'Angular Gyrus',
    description: 'The angular gyrus, known as Broadmann area 39, is associated with complex language related functions in the brain. Being a gyrus, it is mostly connected to its neighboring areas of the cortex, like the ipsilateral prefrontal gyrus, and both inferior and superior frontal gyri.',
    location: 'It can be found in the inferior parietal lobe, just before the occipital lobe begins.',
    function: 'The angular gyrus is involved in carrying out multiple tasks, namely, spatial comprehension, language processing, number processing, and attention.',
    groupPath: ['Lobe', 'Parietal Lobe', 'Gyri', 'Angular Gyrus'],
    functionTags: ['Memory',]
  },

  superior_frontal_sulcus: {
    title: 'Superior Frontal Sulcus',
    description: 'The sulcus that separates the superior frontal gyrus from the middle frontal gyrus.',
    location: 'Located in the frontal lobe, running parallel to the longitudinal fissure.',
    function: 'Acts as a major anatomical landmark dividing the upper and middle sections of the frontal lobe.',
    groupPath: ["Lobes", 'Sulci', "Cerebral Cortex"], 
    functionTags: ['Personality', 'Motor', 'Social']
  },

  central_sulcus: {
    title: 'Central Sulcus',
    description: 'A prominent landmark of the brain, separating the parietal lobe from the frontal lobe.',
    location: 'Runs down the middle of the lateral surface of the brain.',
    function: 'Separates the primary motor cortex (anterior) from the primary somatosensory cortex (posterior).',
    groupPath: ['Sulcus', 'Frontal/Parietal Border', 'Sulci', 'Central Sulcus'],
    functionTags: ['Motor', 'Personality']
  },

  third_ventricle: {
    title: 'Third Ventricle',
    description: 'A narrow, funnel-shaped cavity of the brain, filled with cerebrospinal fluid (CSF).',
    location: 'Located in the center of the diencephalon, between the two thalami.',
    function: 'Produces, secretes, and circulates cerebrospinal fluid to protect the brain from trauma and transport nutrients.',
    groupPath: ['Subcortical', 'Ventricular System', 'Third Ventricle'],
    functionTags: ['Autonomic']
  },

  Aqueduct_of_midbrain_: {
    title: 'Cerebral Aqueduct',
    groupPath: ['Subcortical', 'Ventricular System', 'Cerebral Aqueduct'],
  },

   fourth_ventricle: {
    title: 'Fourth Ventricle',
    description: 'A tent-like cavity filled with cerebrospinal fluid that protects the human brain from trauma.',
    location: 'Located within the pons or in the upper part of the medulla oblongata.',
    function: 'Helps form the central canal of the spinal cord and protects the brain from physical shocks.',
    groupPath: ['Subcortical', 'Ventricular System', 'Fourth Ventricle'],
    functionTags: ['Autonomic']
  },

   lateral_ventricle: {
    title: 'Lateral Ventricle(s)',
    description: "The lateral ventricles are the largest cavities in the brain's ventricular system, handling most of the work. You may notice the model does not contain a 'first' or 'second' ventricle anywhere. Because the lateral ventricles have a side on either hemisphere, they are technically the first and second ventricles, but they are seldom called that in brain anatomy.",
    location: 'Deep within the cerebrum, the lateral ventricles sit just below the corpus callosum, arching over the thalamus and basal ganglia.',
    function: 'Their main job is to produce and house cerebrospinal fluid throughout a network of blood vessels. The fluid provides buoyancy and shock absorption for the brain. Without it, ordinary movements would jostle the fragile brain, subjecting it to serious damage.',
    connections: "To keep the cerebrospinal fluid circulating, the lateral ventricles connect directly to the brain's third ventricle through two small channels called the interventricular foramina.",
    groupPath: ['Subcortical', 'Ventricular System', 'Lateral Ventricle'],
    functionTags: ['Autonomic']
  },

  hippocampus: {
    title: 'Hippocampus', 
    description: 'A complex, seahorse-shaped structure embedded deep in the temporal lobe. It is one of the most widely studied regions in cognitive neuroscience due to its vulnerability in Alzheimer’s disease.', 
    location: 'Part of the limbic system, located in the medial temporal lobe.', 
    function: 'Critical for the consolidation of information from short-term to long-term memory, and for spatial memory that enables navigation.', 
    groupPath: ['Subcortical', 'Limbic System', 'Hippocampus'],
    functionTags: ['Memory', 'Emotion']
  },

  amygdaloid_body: {
    title: 'Amygdala', 
    description: 'The amygdala, sometimes called the amygdaloid body, is the main area of the brain responsible for both conscious and unconscious adverse emotional responses. It is best known for its production of the "fear" response, but it is responsible for processing emotional other negative emotions, such as stress or disgust, too. It may also help attatch emotional significance to memories negative experinces. You can remember this structure as the "almond-shaped" part of the brain, living within the limbic system.', 
    location: 'The amygdala is part of the limbic system. It is connected to the ends of the hippocampus in either hemisphere.', 
    connections: 'The amygdala is connected to the olfactory bulb, orbitofrontal cortex, cingulate gyrus, basal forebrain, medial thalamus, hypothalamus, and the brainstem',
    groupPath: ['Subcortical', 'Limbic System', 'Amygdala'],
    functionTags: ['Emotion', ' Memory']
  },

  caudate_nucleus: {
    title: 'Caudate Nucleus', 
    description: 'A C-shaped subcortical structure that makes up a critical part of the brain’s learning and memory system, specifically regarding feedback and reward.', 
    location: 'One of the structures that make up the dorsal striatum, part of the basal ganglia.', 
    function: 'Involved in goal-directed action, motor planning, and reward system processing.', 
    groupPath: ['Subcortical', 'Basal Ganglia', 'Caudate Nucleus'],
    functionTags: ['Motor', 'Memory']
  },

  globus_pallidus: {
    title: 'Globus Pallidus', 
    description: 'Globus Pallidus, also called the Paleostriatum, is a pale, triangular subcortical nucleus that sits deep inside the brain structure. It is divided into an internal segment (GPi) and an external segment (GPe).', 
    location: 'A paired, deep subcortical structure situated medial to the putamen within the basal ganglia.', 
    function: 'Acts as the primary output regulation center for the basal ganglia, sending massive inhibitory signals to the thalamus to keep unwanted physical movements suppressed.', 
    groupPath: ['Subcortical', 'Basal Ganglia', 'Globus Pallidus'],
    functionTags: ['Motor']
  },

  corpus_callosum: {
    title: 'Corpus Callosum', 
    description: 'The corpus callosum is one of the most unique structures in the entire brain. While most of the brain is divided into its right and left hemispheres, the corpus callosum is one large structure sitting inbetween the two, bridging them together. It is a massive bundle of over 200 million myelinated nerve fibers.', 
    location: 'Spans the longitudinal fissure, forming the roof of the lateral ventricles.', 
    function: 'The corpus callosum not only physically connects the two hemispheres, it also connects their neurons, which scientists call "interhemispheric communication." This connection allows for everything—movements, perception, thoughts, etc.—to be shared throughout the brain.', 
    connections: "The corpus callosum's whole purpose is connection! Namely, it connects the right and left hemispheres.",
    groupPath: ['Subcortical', 'White Matter Tracts', 'Corpus Callosum'],
    functionTags: [ 'Motor', 'Vision', 'Smell', 'Touch', 'Taste', 'Memory', 'Emotion']
  },

  cingulate_gyrus: {
    title: 'Cingulate Gyrus', 
    description: 'The cingulate gyrus is divided into two halves, the anterior cingulate cortex (ACC), and the posterior cingulate cortex (PPC). It is an integral part of the limbic system, acting as a major pathway connecting the cerebral cortex to deeper, subcortical structures.', 
    location: 'Found in the limbic system, immediately above the corpus callosum. The AAC and the PCC contains Broadmann areas 23 and 31.', 
    function: 'The AAC helps express internal autonomic, states such as distress, outwardly, through physical expressions like heavy breath, posture, etc. The PPC plays a part in the default mode network, and may play a role in self-cognition, such as planning and assesments for personal relevance.', 
    connections: 'Amygdala, thalamus, ',

    groupPath: ['Lobe', 'Limbic System', 'Gyri', 'Cingulate Gyrus'],
    functionTags: ['Emotion', 'Motor', 'Memory']
  },

  thalamus: {
    title: 'Thalamus', 
    description: 'The thalamus is knicknamed the "central relay hub" of the brain. After sensory information is taken in through the eyes, ears, mouth, and body (the thalamus does not handle smell), the first stop for that input is the thalamus. After leaving the thalamus, data is sent to the cerebral cortex.', 
    location: 'A paired, symmetrical structure situated at the top of the brainstem, near the center of the brain.', 
    function: 'Relays sensory and motor signals to the cortex, and plays a role in the regulation of consciousness, sleep, and alertness.', 
    connections: "",
    connections: "ayy im walkin ere!",
    groupPath: ['Subcortical', 'Limbic System','Diencephalon', 'Thalamus'],
    functionTags: ['Vision', 'Touch', 'Taste', 'Motor']
  },


  cerebellum: {
    title: 'Cerebellum', 
    description: "The cerebellum is a hugely important structure in the brain, handling constant motor function—big and small—throughtout the body. Despite its size, it contains over 50% of the neurons in the entire brain.The cerebellum manages coordination, balance, and help regulate posture—which makes sense given its connection to the spinal cord. Recently, scientists have also discovered that the cerebellum may even play a role in learing new skills.", 
    location: 'Found at the bottom-back of the brain, beneath the occpital lobe, the cerebellum rests outside of the cortex, against the back of the brainstem. It is one of the few outer structures visible in diagrams that isnt a lobe.', 
    connections: 'Because it handles so much of the motor coordination process, the cerebellum shares many connections to neighboring areas, such as the medulla oblongata, the cerebellur peduncle, the pons, the midbrain, and the spinal cord (not shown in this model).',
    groupPath: ['Subcortical', 'Hindbrain', 'Cerebellum'],
    functionTags: ['Motor',]
  },

  cerebellar_peduncle: {
    title: 'Cerebellar Peduncle'
  },

  mamillary_body: {
    title: 'Mamillary Body'
  },

  habenula: {
    title: 'Habenula'
  },

  septum_pellucidum: {
    title: 'Septum Pellucidum'
  },

  internal_capsule: {
    title: 'Internal_capsule'
  },

  Anterior_commissure: {
    title: 'Anterior Commissure'
  },

  Septal_nuclei: {
    title: 'Septal Nuclei'
  },

  "lat_fis-post": { title: "Lateral Fissure (Posterior)" },
  "sup_front_gyr(l)": { title: "Superior Frontal Gyrus (Left)" },

  "Sulcus_interm_prim-Jensen.r.001":{
    title: 'Test_Item3'
  },

  Olfactory_sulcus: {
    title: 'Olfactory_sulcus',
    groupPath: ['Sulci',],
    functionTags: ['Smell',]
  },

  Occipitotemporal_sulcus: {
    title: 'Occipitotemporal Sulcus',
    groupPath: ['Sulci',],
  },

  Transverse_frontopolar_gyrus_and_sulcus: {
    title: 'Transverse Frontopolar Gyrus',
    groupPath: ['Gyri',],
  },

  insula: {
    title: 'Insula', 
    description: 'A portion of the cerebral cortex folded deep within the lateral sulcus. It is deeply involved in consciousness and homeostasis.', 
    location: 'Hidden beneath the frontal, parietal, and temporal opercula.', 
    function: 'Processes interoception (the sense of the internal state of the body), pain perception, and social emotions like empathy and disgust.', 
    groupPath: ['Lobe', 'Insular Cortex', 'Insula'],
    functionTags: ['Personality', 'Emotion']
  },
  
  optic_chiasm: {
    title: 'Optic Chiasm', 
    description: 'The X-shaped structure formed at the point below the brain where the two optic nerves cross over each other.', 
    location: 'Located at the base of the brain, immediately inferior to the hypothalamus.', 
    function: 'Allows the visual cortex to receive the same hemispheric visual field from both eyes, enabling binocular vision and depth perception.', 
    groupPath: ['Subcortical', 'Visual Pathway', 'Optic Chiasm'],
    functionTags: ['Vision']
  },

  optic_tract:{
    title: 'Optic Tract',
    groupPath: ['Subcortical', 'Visual Pathway', 'Optic Tract'],
    functionTags: ['Vision']
  },

  midbrain: {
    title: 'Midbrain',
    groupPath: ['Subcortical', 'Brainstem', 'Midbrain'],
    functionTags: ['All', 'Motor']
  },

  Interpeduncular_fossa: {
    title: 'Interpeduncular Fossa'
  },

  occipital_pole: {
    title: 'Occipital Pole', 
    description: 'The Primary Visual Cortex (V1), is the first stop for visual data taken in by the eyes. It lives in the inferior posterior (lower back) of the occipital lobe, the region involved in vision. It receives raw sensory input directly from the lateral geniculate nucleus (LGN) of the thalamus via optic radiations.', 
    location: 'Located at the inferior posterior (bottom-back) area of the occipital lobe, the region involved with visual processing.', 
    function: 'V1 handles the initial processing of visual stimuli, decoding the signal for basic information such as orientation, size, shape, and contrast, before sending the signal off to other areas for more complex processing', 
    groupPath: ['Lobe', 'Occipital Lobe', 'Primary Visual Cortex'],
    functionTags: ['Vision']
  },

  lateral_geniculate_body: {
    title: 'Lateral Geniculate Body', 
    description: 'Lateral Geniculate Body, also called the Lateral Geniculate Nucleus or LGN, is a critical sensory relay station in the thalamus dedicated entirely to the visual system. It acts as the primary connector between the retinas and the visual cortex.', 
    location: 'A specialized subcortical structure located within the posterior thalamus.', 
    function: 'Receives visual signals from the optic tract and organizes them into distinct spatial layers (parvocellular for detail/color and magnocellular for movement/contrast) before sending them to V1.', 
    groupPath: ['Subcortical', 'Thalamus', 'Lateral Geniculate Body'],
    functionTags: ['Vision']
  },

  superior_temporal_gyrus: {
    title: 'Superior Temporal Gyrus',
    description: 'Contains the primary auditory cortex, which is responsible for processing sounds.',
    location: 'Located on the superior aspect of the temporal lobe.',
    function: 'Essential for processing auditory information and houses Wernicke’s area (involved in language comprehension).',
    groupPath: ['Lobe', 'Temporal Lobe', 'Gyri', 'Superior Temporal Gyrus'],
    functionTags: ['All', 'Sensory', 'Emotion']
  },

  inferior_temporal_gyrus: {
    title: 'Inferior Temporal Gyrus',
    description: 'A gyrus placed below the middle temporal sulcus, connected to visual object recognition.',
    location: 'Located on the lateral and inferior surface of the temporal lobe.',
    function: 'Critical for the visual recognition of objects, identifying faces, and processing complex visual stimuli.',
    groupPath: ['Lobe', 'Temporal Lobe', 'Gyri', 'Inferior Temporal Gyrus'],
    functionTags: ['All', 'Vision', 'Memory']
  },

  Inferior_occipital_gyrus_and_sulcus: {
    title: 'Inferior Occipital Gyrus',
    groupPath: ['Lobe', 'Occipital Lobe', 'Gyri', 'Inferior Occipital Gyrus'],
    functionTags: ['Vision',]
  },

  _Superior_occipital_gyri:{
    title:'Superior Occipital Gyrus',
    groupPath: ['Lobe', 'Occipital Lobe', 'Gyri', 'Superior Occipital Gyrus'],
    functionTags: ['Vision',]
  },

  Opercular_part_of__inferior_frontal_gyrus:{
    title: "Item entry"
  },

  Transverse_frontopolar_gyrus_and_sulcus: {
    title: "Test_Item4"
  },

  supramarginal_gyrus: {
    title: 'Supramarginal Gyrus',
    description: 'A portion of the parietal lobe that processes somatosensory, auditory, and visual data.',
    location: 'Located just anterior to the angular gyrus in the parietal lobe.',
    function: 'Interprets tactile sensory data and is involved in perception of space and limb location.',
    groupPath: ['Lobe', 'Parietal Lobe', 'Gyri', 'Supramarginal Gyrus'],
    functionTags: ['Vision']
  },

  straight_gyrus:{
    title: 'Gyrus Rectus',
    description: 'A portion of the frontal lobe whose precise function is still highly researched, but thought to be tied to higher cognitive processing.',
    location: 'Located on the medial margin of the inferior surface of the frontal lobe.',
    function: 'Associated with personality, higher executive functions, and autonomic regulation.',
    groupPath: ['Lobe', 'Frontal Lobe', 'Gyri', 'Gyrus Rectus'],
    functionTags: ['Emotion']
  },

  orbital_sulci_:{
    title: 'Orbital Sulcus',
    description: 'The grooves that separate the orbital gyri on the inferior surface of the frontal lobe.',
    location: 'Located on the underside of the frontal lobe, resting above the eye sockets.',
    function: 'Serve as anatomical boundaries for the regions heavily involved in emotional regulation and reward.',
    groupPath: ['Sulcus', 'Frontal Lobe', 'Sulci', 'Orbital Sulci'],
    functionTags: ['Emotion']
  },

   orbital_gyri_:{
    title: 'Orbital Gyrus',
    groupPath: ['Frontal Lobe', 'Gyri', 'Orbital Gyrus'],
    functionTags: ['Emotion']
  },

  Medial_occipitotemporal_gyrus:{
  title: 'Medial Occipitotemporal Gyrus',
  groupPath: ['Occipital Lobe', 'Gyri', 'Medial Occipitotemporal Gyrus'],
  functionTags: ['Vision']
  },

  middle_frontal_gyrus:{
    title: 'Middle Frontal Gyrus',
    description: 'Makes up about one-third of the frontal lobe, sitting between the superior and inferior frontal sulci.',
    location: 'Located centrally on the lateral surface of the frontal lobe.',
    function: 'Highly involved in cognitive control, working memory, and directing attention.',
    groupPath: ['Lobe', 'Frontal Lobe', 'Gyri', 'Middle Frontal Gyrus'],
    functionTags: ['Memory', 'Emotion']
  },

  middle_temporal_gyrus:{
    title: 'Middle Temporal Gyrus',
    description: 'A long gyrus running along the lateral aspect of the temporal lobe.',
    location: 'Located between the superior and inferior temporal gyri.',
    function: 'Involved in cognitive processes like contemplating distance, recognizing known faces, and accessing word meaning while reading.',
    groupPath: ['Lobe', 'Temporal Lobe', 'Gyri', 'Middle Temporal Gyrus'],
    functionTags: ['Memory', 'Vision']
  },

  precuneus:{
    title: 'Precuneus',
    description: 'A part of the superior parietal lobule hidden in the medial longitudinal fissure between the two cerebral hemispheres.',
    location: 'Located in the medial region of the parietal lobe.',
    function: 'Heavily involved in episodic memory, visuospatial processing, reflections upon self, and aspects of consciousness.',
    groupPath: ['Lobe', 'Parietal Lobe', 'Precuneus'],
    functionTags: ['Memory', 'Vision']
  },

  Cuneus: {
    title: "Cuneus",
    groupPath: ['Lobe', 'Parietal Lobe', 'Cuneus'],
  },

  superior_colliculus: {
    title: 'Superior Colliculus', 
    description: 'Superior Colliculus, also called the Optic Tectum, is a paired subcortical structure that forms a major component of the midbrain roof. It handles rapid, subconscious visual processing long before conscious awareness kicks in.', 
    location: 'Situated on the dorsal aspect of the midbrain, just inferior to the thalamus.', 
    function: 'Directs involuntary behavioral responses to spatial stimuli, coordinating saccadic eye movements and reflexive head turning toward sudden visual or auditory shifts.', 
    groupPath: ['Subcortical', 'Midbrain', 'Superior Colliculus'],
    functionTags: ['Vision', 'Motor']
  },

  Paracentral_gyrus_and_sulcus: {
    title: 'Paracentral Gyrus', 
    groupPath: ['Parietal Lobe', 'Gyri', 'Paracentral Gyrus'],
  },

  _precentral_gyrus: {
    title: 'Precentral Gyrus', 
    description: 'Precentral Gyrus, also called the Primary Motor Cortex (M1), is a prominent surface structure on the posterior frontal lobe that serves as the command center for executing physical activity.', 
    location: 'Situated in the frontal lobe, immediately anterior to the central sulcus.', 
    function: 'Controls voluntary, coordinated skeletal muscle movements across the body using a topographically mapped structure called the motor homunculus.', 
    groupPath: ['Frontal Lobe', 'Gyri', 'Primary Motor Cortex'],
    functionTags: ['Motor']
  },

  _postcentral_gyrus: {
    title: 'Postcentral Gyrus', 
    description: 'Postcentral Gyrus, also called the Primary Somatosensory Cortex (S1), is the first destination for the sense of touch. Like the motor cortex, it maps incoming bodily sensations onto a somatosensory homunculus.', 
    location: 'Located in the parietal lobe, immediately posterior to the central sulcus.', 
    function: 'Receives and decodes somatosensory signals from the body, including touch, vibration, temperature, pain, and spatial body position (proprioception).', 
    groupPath: ['Parietal Lobe', 'Gyri', 'Primary Somatosensory Cortex'],
    functionTags: ['Touch']
  },

  _Postcentral_sulcus: {
    title: 'Postcentral Sulcus',
    groupPath: ['Parietal Lobe', 'Sulci', 'Primary Somatosensory Cortex'],
    functionTags: ['Touch']
  },


  Lingual_gyrus:{
    title: "Lingual Gyrus",
    groupPath: ['Occipital Lobe', 'Gyri', 'Lingual Gyrus'],
    functionTags: ['Speech']  
  },


  Stria_medullaris_thalami: {
    title: 'Stria Medullaris Thalami',
    groupPath: ['Subcortical', 'Diencephalon', 'Stria Medullaris Thalami'],
    functionTags: ['Touch']
  },

  pons: {
    title: 'Pons',
    description: 'A major structure in the upper part of your brainstem. It is named after the Latin word for "bridge".',
    location: 'Located above the medulla oblongata and below the midbrain.',
    function: 'Serves as a communications and coordination center between the two hemispheres of the brain, and handles unconscious processes like breathing and sleep cycles.',
    groupPath: ['Subcortical', 'Brainstem', 'Pons'],
    functionTags: ['All', 'Motor',]
  },

  medulla_oblongata: {
    title: 'Medulla Oblongata',
    description: 'The tail-like structure at the base of the brain that connects it to the spinal cord.',
    location: 'Located at the lowest part of the brainstem.',
    function: 'Controls crucial autonomic functions like heart rate, breathing, and blood pressure.',
    groupPath: ['Subcortical', 'Brainstem', 'Medulla Oblongata'],
    functionTags: ['All', 'Motor',]
  },

  fornix: {
    title: 'Fornix',
    description: 'The fornix is the main pathway that outputs data from the hippocampus. It sends information to the mammilary bodies and the anterior end of the thalamus, which rests below it.',
    location: 'Found within the limbic system, the fornix sits just below the corpus callosum and forms an arch directly above the thalamus.',
    function: 'Beyond supporting the hippocampus, the larger purpose of the fornix is not entirely understood yet. However, scientists suspect it may also play a role during recall for long-term episodic memories.',
    connections: 'The main connection of the fornix is the hippocampus, but it also connects with the hypothalamus, thalamus, and septal nuclei.',
    groupPath: ['Subcortical', 'Limbic System', 'Fornix'],
    functionTags: ['Memory',]
  },

  temporal_pole: {
    title: 'Temporal Pole', 
    description: "Temporal Pole, also known as Brodmann's Area 38, is the anterior tip of the temporal lobe. It acts as a highly interconnected semantic hub, linking emotional processing networks to high-level conceptual knowledge.", 
    location: 'Located at the most anterior aspect of the temporal lobe.', 
    function: 'Involved in high-level face recognition, social conceptual memory, evaluating semantic meaning, and assigning emotional context to complex social scenes.', 
    groupPath: ['Lobe', 'Temporal Lobe', 'Temporal Pole'],
    functionTags: ['Emotion', 'Memory']
  },

  Temporal_plane:{
    title:"Temporal Plane",
    groupPath: ['Temporal Lobe', 'Gyri', 'Temporal Plane'],
    functionTags: ['Emotion', 'Memory']
  },

  putamen: {
    title: 'Putamen', 
    description: 'The putamen a a large, bean-shaped structure in the very center of the brain. Its name comes from the Latin "shell." Together, with the caudate nucleus, it makes up the dorsal striatum, acting as the gateway for information entering the basal ganglia.', 
    location: 'The putamen is a prominent part of the basal ganglia. It sits just outside the globus pallidus, forming the outermost portion of the lentiform nucleus.', 
    function: 'Most notably, the putamen is responsible for regulating movement and preparing the body for complex motor tasks. However, it also plays a critical role in reinforcement learning, habit formation, and the automatic execution of learned behaviors.',
    connections: 'The putamen receives a massive amount of input from both the cerebral cortex and the substantia nigra. In turn, it outputs this data to the globus pallidus and the thalamus.',
    groupPath: ['Subcortical', 'Basal Ganglia', 'Putamen'],
    functionTags: ['Motor', 'Memory']
  },

};


function renderBrainInfo(info) {
  const $ = (id) => document.getElementById(id);

  $('brainName').textContent = info.title || 'Brain';
  $('info-desc').textContent = info.description || '';
  $('info-head').textContent = info.head || '';
  $('info-conct').textContent = info.connected || 'None specified';

  // Render Tags with Icon Badges
  const tagsContainer = $('info-functionTags');
  if (tagsContainer) {
    const tags = Array.isArray(info.functionTags) ? info.functionTags : [];
    
    if (tags.length === 0) {
      tagsContainer.innerHTML = '<span>None</span>';
    } else {
      tagsContainer.innerHTML = tags.map(tag => {
        const iconSvg = FUNCTION_ICONS[tag] || '';
        return `
          <span class="function-badge">
            ${iconSvg}
            <span class="badge-text">${tag}</span>
          </span>
        `;
      }).join('');
    }
  }
}


  function renderBrainExercises(info){
    const ul = document.getElementById('exerciseList');
    if (!ul) return;
    ul.innerHTML = (info.exercises||[]).map(x=>`<li>${x}</li>`).join('') || `<li>No exercises yet.</li>`;

    const explanation = document.getElementById('explanation');
    if(explanation) explanation.textContent = info.explanation || '';
  }
  
  window.openSidebarWith = function(key){
    const info = (window.BRAIN_INFO || {})[key];
    const fallback = (k)=>({ title: k.replace(/[_-]/g,' ').replace(/\b\w/g,m=>m.toUpperCase()), description:'Coming soon.' });
    const data = info || fallback(key);
  
    renderBrainInfo(data);
    renderBrainExercises(data);
    
    window.dispatchEvent(new CustomEvent('mm:selected', { detail:{ name:key }}));
  };

  window.addEventListener('mm:selected', (e) => {
      const selectedKey = e.detail.name;

      const allButtons = document.querySelectorAll('#mi-list button');
      allButtons.forEach(btn => btn.classList.remove('is-active'));

      const activeButton = document.querySelector(`#mi-list button[data-key="${selectedKey}"]`);
      if (activeButton) {
          activeButton.classList.add('is-active');
      }
  });

  const navbar = document.querySelector('.navbar');

  navbar.addEventListener('mouseenter', () => {
    navbar.classList.remove('is-leaving');
    navbar.classList.add('is-armed');        
 });

  navbar.addEventListener('mouseleave', () => {
    navbar.classList.add('is-leaving');

    const onEnd = (e) => {
      if (e.propertyName !== 'transform') return;
      navbar.classList.remove('is-armed', 'is-leaving');
      navbar.removeEventListener('transitionend', onEnd);
    };
    navbar.addEventListener('transitionend', onEnd);
  });


const FUNCTION_ICONS = {
  Language: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M358-247q-14 4-27.5 1T312-262q-5-11 2-20t19-11q63-13 98-46.5t35-81.5q0-30-20.5-55T392-512q-23 57-54.5 102T268-332l7 22q3 11-2 20.5T257-277q-11 3-20.5-1.5T224-294l-1-6q-26 14-49 21.5t-45 7.5q-32 0-52-21t-20-56q0-53 40-105t103-82q1-19 2-37.5t3-37.5q-23 1-47 0t-51-3q-12-1-20.5-9T78-641q0-11 8-18t19-5q20 2 45.5 3t60.5 1q1-11 2-20.5t2-20.5q1-13 10-21.5t21-8.5q11 0 17 9.5t4 20.5q-2 10-3.5 20t-3.5 20q49-2 91-6.5t80-12.5q11-2 20 3.5t9 16.5q0 12-8.5 20T431-630q-45 7-88.5 11.5T255-612q-2 14-2.5 29t-2.5 29q28-8 54.5-11t52.5-1l3-14q2-11 10-16t19-3q13 3 19.5 14.5T410-561l-2 4q51 14 81.5 52t30.5 85q0 63-42.5 108T358-247Zm321-19q-57 0-90-32.5T556-387q0-52 33-85t106-53q23-6 50.5-11t59.5-9q-2-47-22-68.5T721-635q-21 0-41 6t-47 20q-12 7-25 4t-20-15q-7-12-3-25.5t16-20.5q31-17 66.5-27.5T740-704q71 0 108 44t37 128v224q0 14-9.5 23.5T852-275h-5q-13 0-22-8.5T814-304l-2-16q-28 25-61.5 39.5T679-266Zm-541-59q17 0 35-7t38-21q-7-38-10-69t-3-59q-38 24-63 59t-25 66q0 13 8.5 22t19.5 9Zm118-65q29-28 50.5-60.5T342-520q-23 0-46.5 4T248-504q-2 26 .5 54t7.5 60Zm446 56q28 0 54.5-13t48.5-37v-106q-23 3-42.5 7t-36.5 9q-45 14-67.5 35T636-390q0 26 18 41t48 15Z"/></svg>`,

  Social: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M154.5-534.5Q140-549 140-570t14.5-35.5Q169-620 190-620t35.5 14.5Q240-591 240-570t-14.5 35.5Q211-520 190-520t-35.5-14.5Zm580 0Q720-549 720-570t14.5-35.5Q749-620 770-620t35.5 14.5Q820-591 820-570t-14.5 35.5Q791-520 770-520t-35.5-14.5ZM40-440Zm880 0ZM160-160v40q0 17-11.5 28.5T120-80q-17 0-28.5-11.5T80-120v-80q0-17 11.5-28.5T120-240h120q-66 0-113-47T80-400q0-17 11.5-28.5T120-440q17 0 28.5 11.5T160-400q0 33 23.5 56.5T240-320v-80q0-17 11.5-28.5T280-440h68l-38-155q-20-82-83.5-136.5T78-797q-17-2-27.5-14T40-840q0-17 11-28.5t27-9.5q112 11 197 82.5T387-615l52 205q5 19-7 34.5T400-360h-80v120q0 33-23.5 56.5T240-160h-80Zm640 0h-80q-33 0-56.5-23.5T640-240v-120h-80q-20 0-32-16t-6-36l51-203q29-108 113.5-179.5T882-878q16-2 27 9.5t11 28.5q0 17-10.5 29T882-797q-84 11-146.5 66T651-595l-39 155h68q17 0 28.5 11.5T720-400v80q33 0 56.5-23.5T800-400q0-17 11.5-28.5T840-440q17 0 28.5 11.5T880-400q0 66-47 113t-113 47h120q17 0 28.5 11.5T880-200v80q0 17-11.5 28.5T840-80q-17 0-28.5-11.5T800-120v-40Zm-480-80v-80 80Zm320 0v-80 80Z"/></svg>`,

  Taste: `<svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="currentColor"><path d="M481-480q91 0 174.5-18T795-533L662-666q-6-6-13.5-9t-15.5-3q-6 0-11.5 1.5T611-671l-108 72q-10 7-22.5 7t-22.5-7l-108-72q-5-4-10.5-5.5T328-678q-8 0-15.5 3t-13.5 9L167-533q55 17 139 35t175 18Zm-27 200h52q108 0 176.5-47T805-452q-60 18-146 35t-179 17q-93 0-178.5-17.5T156-452q54 78 122 125t176 47Zm52 80h-52q-135 0-243.5-75.5T54-476q-8-20-2.5-40.5T72-552l170-170q17-17 38.5-27.5T326-760q18 0 35.5 6.5T394-737l86 57 86-57q15-10 32.5-16.5T634-760q24 0 45.5 10.5T718-722l170 170q15 15 20.5 35.5T906-476q-47 125-156 200.5T506-200Z"/></svg`,

  Hearing: `      <svg width="34px" height="34px" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
 <path d="m573.72 469.56c25.922-5.7617 44.039 5.0391 52.441 12 5.8789 4.9219 10.801 10.801 14.398 17.398 5.6406 10.32 18.121 16.922 31.68 16.922 12.719 0 24.238-6.6016 30.84-17.641 6.3594-10.68 6.6016-23.039 0.71875-33.719-8.0391-14.762-18.84-27.719-31.922-38.52-23.879-19.68-53.762-30-84.359-30-11.641 0-23.398 1.5586-34.922 4.5586-46.078 12.359-82.68 50.52-93.238 97.078-10.922 48.602 4.5586 96.961 41.52 129.36 33 28.922 51.121 66.602 51.121 105.96 0 19.199 15.602 34.922 34.922 34.922h2.2812c19.199 0 34.922-15.602 34.922-34.922 0-59.52-27.602-117.84-75.602-160.08-16.441-14.398-23.398-35.281-19.199-57.238 4.4414-23.398 21.48-41.16 44.52-46.199z"/>
 <path d="m807.72 701.88c44.039-51.84 68.281-117.96 68.281-185.88 0-79.801-31.922-154.08-89.879-209.04-57.961-54.961-133.8-82.801-213.84-78.48-118.32 6.3594-222.24 87.48-258.6 201.96-6 18.961 4.5586 39.238 23.398 45.238 18.961 6 39.238-4.5586 45.238-23.398 27.238-86.039 105.12-147.12 193.8-151.8 60-3.1211 117 17.762 160.44 58.922s67.441 96.961 67.441 156.84c0 51-18.121 100.44-51.121 139.32-29.16 34.32-45 78.602-44.879 124.56 0 32.641-12.84 63.121-36.238 85.922-23.398 22.922-54.121 34.801-86.879 34.078-46.199-1.0781-89.52-31.199-107.76-74.879-5.7617-13.801-19.199-22.078-33.238-22.078-4.5586 0-9.2383 0.83984-13.801 2.7617-18.359 7.6797-27 28.801-19.32 47.039 29.398 70.559 97.078 117.24 172.44 119.04h4.8008c50.398 0 97.922-19.32 134.04-54.48 37.32-36.48 57.961-85.559 57.961-138.24 0-29.039 9.4805-55.68 27.719-77.281z"/>
</svg>`,

  Vision: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM235.5-272Q125-344 61-462q-5-9-7.5-18.5T51-500q0-10 2.5-19.5T61-538q64-118 174.5-190T480-800q134 0 244.5 72T899-538q5 9 7.5 18.5T909-500q0 10-2.5 19.5T899-462q-64 118-174.5 190T480-200q-134 0-244.5-72ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z"/></svg>`,

  Touch: `<svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="currentColor"><path d="m323-488 210 23 16-34-61-33-54-5q-17-2-27.5-13.5T398-579q2-17 13.5-28t28.5-9l72 5 221 123q17 10 35.5 12.5T802-484L606-680H357l-65-96-110 55 76 183q8 21 25.5 34t39.5 16Zm-9 79q-44-5-78.5-31T184-507l-76-184q-12-29-1-58.5t39-43.5l111-55q27-14 56-6.5t46 33.5l41 61h208q16 0 31 6.5t26 17.5l227 228q12 12 12 28t-12 28l-6 6q-38 38-91 45.5T695-419l-76-41-13 29q-11 23-33 35.5t-48 9.5l-211-23ZM168-131q-16 5-30-3.5T119-159q-5-17 3.5-30.5T148-208l150-40q72-19 153-35.5T599-300q66 0 124 23.5T836-212q13 9 13.5 24.5T839-160q-11 12-27 14.5t-30-7.5q-45-32-91.5-49.5T599-220q-64 0-141 16.5T319-171l-151 40Z"/></svg>`,

  Emotion: `<svg xmlns="http://www.w3.org/2000/svg" height="21px" viewBox="0 -960 960 960" width="21px" fill="currentColor"><path d="M480-260q58 0 107-28t79-76q6-12-1-24t-21-12H316q-14 0-21 12t-1 24q30 48 79.5 76T480-260ZM356-562l21 21q9 9 21 9t21-9q9-9 8.5-21t-8.5-21l-35-36q-12-12-28.5-12T327-619l-36 36q-9 9-9 21t9 21q8 8 20.5 8.5T333-540l23-22Zm248 0 23 22q9 8 21 8t21-9q9-9 9-21t-9-21l-36-36q-12-12-28.5-12T576-619l-36 36q-8 9-8 21t9 21q9 9 21 9t21-9l21-21ZM324-111.5Q251-143 197-197t-85.5-127Q80-397 80-480t31.5-156Q143-709 197-763t127-85.5Q397-880 480-880t156 31.5Q709-817 763-763t85.5 127Q880-563 880-480t-31.5 156Q817-251 763-197t-127 85.5Q563-80 480-80t-156-31.5ZM480-480Zm227 227q93-93 93-227t-93-227q-93-93-227-93t-227 93q-93 93-93 227t93 227q93 93 227 93t227-93Z"/></svg>`,

  Memory: `<svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="currentColor"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h360q17 0 28.5 11.5T880-680q0 17-11.5 28.5T840-640H447l-80-80H160v480l79-263q8-26 29.5-41.5T316-560h516q41 0 64.5 32.5T909-457l-72 240q-8 26-29.5 41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm-84-262v-218 218Zm84 262 72-240-72 240Z"/></svg>`,

  Speech: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M737-68q-17 0-28.5-11.5T697-108q0-8 3-16t8-13q43-43 67.5-99T800-358q0-65-24.5-121.5T708-579q-5-5-8-13t-3-16q0-17 11.5-28.5T737-648q8 0 15.5 3.5T765-636q54 54 84.5 125.5T880-358q0 82-30.5 153T765-80q-5 5-12.5 8.5T737-68ZM623-182q-17 0-28.5-11.5T583-222q0-8 3.5-15.5T595-250q21-21 33-48.5t12-59.5q0-32-12.5-59.5T595-466q-6-5-9-12.5t-3-15.5q0-17 11.5-28.5T623-534q8 0 16 3t13 9q32 32 50 74t18 90q0 48-18 90t-50 74q-5 6-13 9t-16 3ZM320-360h-80v11q0 35 21.5 61.5T316-252l12 3q40 10 45 50t-31 60q-51 29-107 42T120-81q-17 1-28.5-10.5T80-120q0-17 11.5-28.5T120-161q36-2 70.5-8.5T259-188q-46-23-72.5-66.5T160-349v-51q0-17 11.5-28.5T200-440h120v-80q0-17 11.5-28.5T360-560h95L342-786q-8-15-2.5-30.5T360-840q15-8 30.5-2.5T414-822l113 226q20 40-3 78t-68 38h-56v40q0 33-23.5 56.5T320-360Z"/></svg>`,

  Personality: `<svg width="30px" height="30px" fill="currentColor" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
 <path d="m80 32c0-6.1016-4.8984-11-11-11h-3.8008c-1.6016 0-3 1.1016-3.1992 2.6992-0.19922 1.6016 1 3.1016 2.6992 3.3008h0.30078 4c2.8008 0 5 2.1992 5 5v3.8008c0 1.6016 1.1016 3 2.6992 3.1992 0.80078 0.10156 1.6992-0.19922 2.3008-0.80078 0.60156-0.60156 1-1.3984 1-2.1992z"/>
 <path d="m75 61.801c-0.60156 0.60156-1 1.3984-1 2.1992v4c0 2.8008-2.1992 5-5 5h-3.8008c-1.6016 0-3 1.1016-3.1992 2.6992-0.19922 1.6016 1 3.1016 2.6992 3.3008h0.30078 4c6.1016 0 11-4.8984 11-11v-3.8008c0-1.6016-1.1016-3-2.6992-3.1992-0.80078-0.10156-1.6992 0.19922-2.3008 0.80078z"/>
 <path d="m20 68c0 6.1016 4.8984 11 11 11h3.8008c1.6016 0 3-1.1016 3.1992-2.6992 0.19922-1.6016-1-3.1016-2.6992-3.3008h-0.30078-4c-2.8008 0-5-2.1992-5-5v-3.8008c0-1.6016-1.1016-3-2.6992-3.1992h-0.30078c-0.69922 0-1.5 0.30078-2 0.80078-0.60156 0.60156-1 1.3984-1 2.1992z"/>
 <path d="m35 21h-4c-6.1016 0-11 4.8984-11 11v3.8008c0 1.6016 1.1016 3 2.6992 3.1992 0.80078 0.10156 1.6992-0.19922 2.3008-0.80078 0.60156-0.60156 1-1.3984 1-2.1992v-4c0-2.8008 2.1992-5 5-5h3.8008c1.6016 0 3-1.1016 3.1992-2.6992 0.19922-1.6016-1-3.1016-2.6992-3.3008h-0.30078z"/>
 <path d="m43 44c0 4-6 4-6 0s6-4 6 0z"/>
 <path d="m63 44c0 4-6 4-6 0s6-4 6 0z"/>
 <path d="m49.602 64h0.80078c3.3008 0 6.3008-1.6016 8.1016-4.3008 0.89844-1.3984 0.5-3.1992-0.80078-4.1992-1.3984-0.89844-3.1992-0.5-4.1992 0.80078-0.69922 1-1.8984 1.6992-3.1016 1.6992h-0.80078c-1.1992 0-2.3984-0.60156-3.1016-1.6992-0.89844-1.3984-2.8008-1.8008-4.1992-0.80078-1.3984 0.89844-1.8008 2.8008-0.80078 4.1992 1.8008 2.6992 4.8008 4.3008 8.1016 4.3008z"/>
</svg>`,

  Motor: `<svg xmlns="http://www.w3.org/2000/svg" height="21px" viewBox="0 -960 960 960" width="21px" fill="currentColor"><path d="M433-80q-27 0-46.5-18T363-142l-9-66q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l9-66q4-26 23.5-44t46.5-18h94q27 0 46.5 18t23.5 44l9 66q13 5 24.5 12t22.5 15l62-26q25-11 50-2t39 32l47 82q14 23 8 49t-27 43l-53 40q1 7 1 13.5v27q0 6.5-2 13.5l53 40q21 17 27 43t-8 49l-48 82q-14 23-39 32t-50-2l-60-26q-11 8-23 15t-24 12l-9 66q-4 26-23.5 44T527-80h-94Zm7-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>`,

  Spatial: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z"/></svg>`,

  Smell: `<svg width="18px" height="18px" fill="currentColor" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
 <path d="m80.699 57.102c-7.8008-8.2031-12.301-19.602-12.801-32.102l-0.19922-5.3984c-0.30078-9.6016-8.0977-17.102-17.699-17.102s-17.398 7.5-17.699 17.102l-0.19922 5.3984c-0.5 12.5-5 23.898-12.699 32.102-5.1016 5.3984-7.1992 12.801-5.6016 20.199 1.8008 8.6016 8.8984 15.5 17.602 17.102 1.3984 0.30078 2.8008 0.39844 4.3008 0.39844 1 0 2-0.10156 2.8984-0.19922 0.30078 0 0.60156 0 0.89844-0.10156 3 1.8008 6.6992 3 10.602 3 4 0 7.6016-1.1016 10.602-3 0.30078 0 0.60156 0 0.80078 0.10156 2.3984 0.30078 4.8008 0.19922 7.1992-0.19922 8.6992-1.6016 15.801-8.5 17.602-17.102 1.4961-7.4023-0.50391-14.801-5.6055-20.199zm-2.5977 18.5c-1.1016 5.1992-5.4023 9.3984-10.602 10.5 0.39844-1.3008 0.69922-2.6992 0.69922-4.1992 0-2.3008-1.8984-4.1992-4.1992-4.1992s-4.1992 1.8984-4.1992 4.1992c0 3.8984-4.5 7.1992-9.8008 7.1992s-9.8008-3.3008-9.8008-7.1992c0-2.3008-1.8984-4.1992-4.1992-4.1992s-4.1992 1.8984-4.1992 4.1992c0 1.3984 0.19922 2.8008 0.69922 4.1992-5.1992-1.1016-9.5-5.3008-10.602-10.5-1-4.6992 0.30078-9.3008 3.5-12.699 9.1016-9.6992 14.5-23 15-37.5l0.19922-5.3984c0.19922-5.1016 4.3008-9 9.3984-9 5.1016 0 9.1992 4 9.3984 9l0.19922 5.3984c0.5 14.5 5.8984 27.801 15 37.5 3.207 3.2969 4.5078 7.9961 3.5078 12.699z"/>
</svg>`
};


  
(function buildIndex(){
  const UL = document.getElementById('mi-list');
  const Q  = document.getElementById('searchbar');
  const SELECT = document.getElementById('mobile-region-select'); 
  

 const titleOf = (k,m)=>(m?.title)||k.replace(/[_-]/g,' ').replace(/\b\w/g,m=>m.toUpperCase());
  
  function allItems(){
    return Object.entries(window.BRAIN_INFO||{})
      .map(([key,m]) => ({ key, title: titleOf(key,m) }))
      .sort((a,b)=>a.title.localeCompare(b.title));
}
  function render(list){
    if (UL) {
      UL.innerHTML = '';
      const frag = document.createDocumentFragment();
      for (const it of list){
        const li  = document.createElement('li');
        li.id = `list-item-${it.key}`;
        
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = it.title;
        btn.dataset.key = it.key;
        btn.addEventListener('click', () => openSidebarWith(it.key));
        li.appendChild(btn); frag.appendChild(li);
      }
      UL.appendChild(frag);
    }
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

  let ITEMS = allItems();
  
  render(ITEMS); 

  if (SELECT) {
    SELECT.addEventListener('change', (e) => {
      const selectedKey = e.target.value;
      if (selectedKey) {
        openSidebarWith(selectedKey);
      }
    });
  }

  console.info(`📚 brain index rendered: ${ITEMS.length} items`);
})();

(() => {
  const root  = document.documentElement;
  const body  = document.body;
  const panel = document.getElementById('panel');

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

  function applyFilters() {
      const searchBox = document.getElementById('searchbar');
      const groupBox = document.getElementById('group-filter');
      const funcBox = document.getElementById('function-filter');

      const searchText = searchBox ? searchBox.value.toLowerCase() : '';
      const groupValue = groupBox ? groupBox.value : 'All';
      const functionValue = funcBox ? funcBox.value : 'All';

      let activeMeshNames = [];

      Object.keys(window.BRAIN_INFO).forEach(id => {
          const info = window.BRAIN_INFO[id];
          const listItem = document.getElementById(`list-item-${id}`);

          const nameText = (info.name || info.title || "").toLowerCase();
          const matchesSearch = nameText.includes(searchText);
          
          const matchesGroup = (groupValue === 'All' || (info.groupPath && info.groupPath.includes(groupValue)));
          
          let matchesFunction = (functionValue === 'All');
          if (!matchesFunction) {
              if (info.functionTags && info.functionTags.includes(functionValue)) matchesFunction = true;
              if (info.functionTag && info.functionTag.includes(functionValue)) matchesFunction = true;
          }

          if (matchesSearch && matchesGroup && matchesFunction) {
              if (listItem) listItem.style.display = 'block';
              activeMeshNames.push(id);
          } else {
              if (listItem) listItem.style.display = 'none';
          }
      });

      const filterEvent = new CustomEvent('brain:filter', { detail: { activeMeshes: activeMeshNames } });
      window.dispatchEvent(filterEvent);
  }

  const searchEl = document.getElementById('searchbar');
  if (searchEl) searchEl.addEventListener('input', applyFilters);

  const groupEl = document.getElementById('group-filter');
  if (groupEl) groupEl.addEventListener('change', applyFilters);

  const funcEl = document.getElementById('function-filter');
  if (funcEl) funcEl.addEventListener('change', applyFilters);

  const resetGroupBtn = document.getElementById('reset-group');
  if (resetGroupBtn) {
      resetGroupBtn.addEventListener('click', () => {
          if (groupEl) groupEl.value = 'All';
          applyFilters();
      });
  }

  const resetFuncBtn = document.getElementById('reset-func');
  if (resetFuncBtn) {
      resetFuncBtn.addEventListener('click', () => {
          if (funcEl) funcEl.value = 'All';
          applyFilters();
      });
  }

  setTimeout(() => applyFilters(), 100);

  

})();