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
    functionTags: ['Memory', 'Sensory']
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
    functionTags: ['All', 'Motor', 'Vision', 'Smell', 'Touch', 'Taste', 'Memory', 'Emotion']
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
    description: "The cerebellum is a hugely important structure in the brain, handling constant motor function—both big and small—across the body. Despite its size, it contains over 50% of the neurons in the entire brain.The cerebellum manages coordination, balance, and help regulate posture—which makes sense given its connection to the spinal cord. Recently, scientists have also discovered that the cerebellum may even play a role in learing new skills.", 
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
    functionTags: ['Memory,']
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


  function renderBrainInfo(info){
    const $ = (id)=>document.getElementById(id);
    ($('brainName')||{}).textContent = info.title || 'Brain';

    const pathway = $('rel-pathway');
    if (pathway) {
      pathway.textContent = info.groupPath ? info.groupPath.join(' / ') : '';
    }

    const img = $('muscleImage');
    if (img){
      if (info.img){ img.src = info.img; img.alt = `${info.title} illustration`; img.style.display='block'; }
      else { img.removeAttribute('src'); img.alt=''; img.style.display='none'; }
    }
    const desc = $('info-desc'); if (desc) desc.textContent = info.description || 'This is a demo of WesternAnatomy that I have distrubuted to test for feedback. Given that I am developing this site independently, providing accurate descriptions for every structure will take time. Please bare with me, and expect new information to populate in the coming months I collect high-quality sources, to ensure the content is not only free, but also reliable. The site will be completely finished in the fall of 2026, so check back then!';
    
    const conct = $('info-conct'); if (conct) conct.textContent = info.connections || '';
    const head = $('info-head'); if (head) head.textContent = info.location || '';
    const func = $('info-func'); if (func) func.textContent = info.function || '';

    const functionTags = $('info-functionTags'); if (functionTags) functionTags.textContent = info.functionTags || '';
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