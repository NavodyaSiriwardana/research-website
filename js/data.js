/* =====================================================================
   SITE CONTENT — EDIT ONLY THIS FILE
   Replace every value below with your project's details.
   Leave a "link" as "" to show "Not available yet" automatically.
   Documents can use "content" instead of "link": a local markdown file
   (e.g. "docs/checklist-1.md") that opens in a popup on the website.
   status options: "completed" | "upcoming" | "pending"
   ===================================================================== */

window.SITE = {
  /* ---------- PROJECT ---------- */
  project: {
    name: "IDiary",                       // e.g. "BumbleB"
    projectId: "R26-IT-125",                    // your CDAP project ID
    tagline: "Your intelligent diary for campus student productivity",
    abstract:
       "IDiary turns structured student diary entries into explainable, evidence-based insights. It discovers repeated behaviour patterns, " +
      "detects gaps between what students claim and what they actually did, prioritises tasks with clear reasons and a daily plan, " +
      "and writes weekly summaries that link every point back to the original entries — helping students make better decisions and improve productivity.",
    institution: "Sri Lanka Institute of Information Technology",
    faculty: "Faculty of Computing",
    heroImage: "assets/images/hero.svg",        // replace with your project image (WebP/PNG < 300 KB)
    demoVideo: "",                              // optional YouTube/Drive embed URL, e.g. https://www.youtube.com/embed/XXXX
    // One feature card per member component
    features: [
      { title: "Component 1 :Temporal Behavioural Pattern Discovery (HTGPS)", text: "Finds repeated habits across diary entries (e.g. late study → tired next day) using a personal knowledge graph, and shows the entries that prove each pattern." },
      { title: "Component 2 :   Self-Perception Bias Detection", text: "Compares what a student claims in the diary with real app usage, location and a facial stress signal, and gives a Perception Accuracy Score (0–100)." },
      { title: "Component 3  :Explainable Task Prioritization & Productivity Intelligence", text: "Ranks tasks with a model learned from real student rankings, explains why each task comes first, and builds a feasible daily plan." },
      { title: "Component 4  : Evidence-Grounded Diary Summary (RAG)", text: "Creates weekly diary summaries where every point links back to the original entries, with claim checks to avoid made-up content." }
    ]
  },

  /* ---------- DOMAIN ---------- */
  domain: {
        literature: [
      { title: "Smart Diaries & Student Sensing",
        text: "Smart Diary infers and logs daily activities automatically from phone sensors, and the earlier SLIIT Smart Diary generates diary text and prioritises daily activities. StudentLife linked passive phone sensing with students' mental health and grades. These systems record or generate a diary, but do not analyse the student's own entries to give explainable productivity insights.",
        refs: [1, 2, 3] },
      { title: "Personal Knowledge Graphs",
        text: "A personal knowledge graph stores one person's entities and relations (people, places, activities) together with their meaning and time, keeping context that is lost in flat tables. This makes it suitable for linking events across separate diary entries.",
        refs: [4] },
      { title: "Behavioural Pattern Mining",
        text: "Frequent and sequential pattern mining on smartphone data can find daily habits and even predict mood. T-patterns describe repeated, time-ordered events within a critical interval. Most studies use sensor data and report patterns without a second check of time order, structure and repetition.",
        refs: [5, 6, 7] },
      { title: "Community & Periodicity Validation",
        text: "The Louvain method finds tightly connected communities in a graph, and periodicity analysis detects weekly and daily rhythms in life-log data, though it needs care when data is sparse or irregular, as in a diary.",
        refs: [8, 9] },
      { title: "Self-Report vs Real Behaviour",
        text: "A meta-analysis of 106 effect sizes found that self-reported and logged digital media use correlate only moderately. People have limited insight into their own behaviour, low performers tend to overestimate themselves, and objective trace data is free of the response-style bias found in surveys. Facial expressions can add a stress signal, but only as an indicator, since they do not map reliably to specific emotions.",
        refs: [11, 12, 13, 14, 16] },
      { title: "Student Task Management",
        text: "Student task apps support organisation, reminders, scheduling and some automatic or AI-based prioritisation. Tasks also differ in the mental energy they demand. However, there is little evidence of priorities learned directly from human-ranked student tasks and explained to the student.",
        refs: [17, 18, 19] },
      { title: "Learning-to-Rank & Explainable ML",
        text: "LambdaMART-style Learning-to-Rank and gradient-boosted trees (XGBoost) learn relative orderings from examples, SHAP explains which features push a prediction up or down, and constraint-based scheduling turns priorities into feasible daily plans.",
        refs: [20, 15, 21, 22] },
      { title: "RAG & Grounded Summarisation",
        text: "Retrieval-augmented generation (RAG) grounds a language model in retrieved evidence and produces more factual text; in clinical record summarisation, adding RAG raised accuracy from 93.25% to 99.25%. Citation-based generation and sentence embeddings support linking each generated statement back to its source.",
        refs: [23, 25, 24, 26] },
      { title: "Explainability & Trust",
        text: "When an AI system cannot show how it reached an output it acts as a 'black box', which is hard to trust for personal data. Explainable AI asks for outputs that users can understand and check against the evidence.",
        refs: [10, 27] }
    ],
        gap: {
      intro: "Comparison of the main existing diary and student-sensing systems with IDiary, based on the literature reviewed in the four individual theses.",
      columns: ["Feature", "Smart Diary [1]", "SLIIT Smart Diary [2]", "StudentLife [3]", "IDiary (proposed)"],
      rows: [
        ["Uses passive smartphone evidence",                              true,  true,  true,  true],
        ["Generates diary text or summaries",                             true,  true,  false, true],
        ["Prioritises tasks / daily activities",                          false, true,  false, true],
        ["Priorities learned from student-ranked tasks and explained",    false, false, false, true],
        ["Time-ordered patterns across separate diary entries",           false, false, false, true],
        ["Patterns validated (time order, Louvain, FFT) with evidence",   false, false, false, true],
        ["Compares what the student claims with verified evidence",       false, false, false, true],
        ["Summary claims linked to source entries and support-checked",   false, false, false, true]
      ]
    },
        problem: {
      statement: "Campus students record their daily tasks, activities and feelings, but existing diary and productivity tools mainly store this data. They cannot tell students which task to do first and why, which habits really affect them, whether their self-reflection is accurate, or whether an AI summary of their week is true.",
      points: [
        "Task apps can order tasks, but priorities are not learned from how students actually rank tasks, and the reasons are not explained.",
        "Diary apps read each entry alone, so they cannot connect an activity in one entry to an outcome in a later one, and pattern-finding apps work as a black box.",
        "Self-reported behaviour often differs from logged behaviour, but no smart diary compares a student's claims with objective evidence.",
        "AI-generated diary summaries can include unsupported statements, and users cannot check them because the summary is not linked to the original entries."
      ]
    },
        objectives: {
      main: "To enhance campus student productivity by developing IDiary, an intelligent diary that turns structured student diary data into explainable, evidence-based insights through four integrated research components.",
      sub: [
        { title: "Temporal Behavioural Pattern Discovery (HTGPS)", owner: "Siriwardana N.N",
          text: "Store each student's diary as a personal knowledge graph in Neo4j, find trigger → outcome patterns by frequency, validate them with time order, Louvain community and FFT repetition checks, and link every pattern to its supporting entries." },
        { title: "Self-Perception Bias Detection", owner: "Rathnayake R.M",
          text: "Compare what a student claims in a diary entry with verified evidence (app usage, GPS geofencing, facial stress signal) and use an XGBoost classifier to give one of five bias types and a 0–100 Perception Accuracy Score." },
        { title: "Explainable Task Prioritization & Productivity Intelligence", owner: "Perera W.L.J.S",
          text: "Predict cognitive load and energy requirement automatically, learn task priorities from human-ranked student tasks with XGBRanker, explain them with SHAP, build feasible daily plans, and give behaviour-based productivity feedback." },
        { title: "Evidence-Grounded Diary Summary (RAG)", owner: "Kavindi M.K.H",
          text: "Generate weekly diary summaries with retrieval-augmented generation, link every summary point to its original entries, check claim support with NLI, and give productivity and well-being feedback using local models." }
      ]
    },
        methodology: {
      text: "IDiary follows a design-and-evaluate approach. Students use one Flutter mobile app; a shared FastAPI (Python) backend serves all four components; Firebase Authentication manages accounts and Cloud Firestore stores entries; the pattern component keeps a personal knowledge graph in Neo4j AuraDB and the summary component uses a ChromaDB semantic index.",
      diagram: "assets/images/idiary-architecture.svg",
      steps: [
        { title: "Literature Review & Requirements",
          text: "Each member reviewed research on their area (IEEE Xplore, arXiv, Google Scholar) and compared existing diary and productivity apps to define the gap and the requirements." },
        { title: "Data Collection",
          text: "A pilot diary study (68 entries from 26 students), a task-ranking study with 180 Sri Lankan university students (728 real tasks), and 2,500 synthetic rule-labelled samples for the bias classifier." },
        { title: "Component Development",
          text: "HTGPS pattern scoring on a Neo4j graph; claimed-vs-verified features with XGBoost; TF-IDF + Ridge task-demand prediction with XGBRanker, SHAP and CP-SAT planning; RAG summaries with DistilBART, MiniLM, DeBERTa NLI and Phi-4 Mini." },
        { title: "System Integration",
          text: "All components are connected through FastAPI endpoints to the same Flutter app, the same backend and the same Firebase user accounts, with each user's data kept separate." },
        { title: "Testing & Evaluation",
          text: "Task ranking: held-out Top-1 accuracy 0.81 vs 0.64 for a rule-based baseline. Bias classifier: 91% accuracy on a 500-sample synthetic test set. Pattern ablation (V1–V4), plain-vs-RAG summary comparison and real-user validation are being completed." }
      ]
    },
        technologies: [
      { name: "Flutter", category: "Mobile App" },
      { name: "Dart", category: "Mobile App" },
      { name: "Kotlin (Accessibility Service)", category: "Mobile App" },
      { name: "Google Maps SDK", category: "Mobile App" },
      { name: "Python", category: "Backend" },
      { name: "FastAPI", category: "Backend" },
      { name: "Uvicorn", category: "Backend" },
      { name: "Pydantic", category: "Backend" },
      { name: "Neo4j AuraDB", category: "Database & Cloud" },
      { name: "Firebase Authentication", category: "Database & Cloud" },
      { name: "Cloud Firestore", category: "Database & Cloud" },
      { name: "ChromaDB", category: "Database & Cloud" },
      { name: "XGBoost / XGBRanker", category: "Machine Learning" },
      { name: "scikit-learn (TF-IDF, Ridge)", category: "Machine Learning" },
      { name: "SHAP", category: "Machine Learning" },
      { name: "Louvain community detection", category: "Machine Learning" },
      { name: "FFT", category: "Machine Learning" },
      { name: "Google OR-Tools CP-SAT", category: "Machine Learning" },
      { name: "Pandas / NumPy", category: "Machine Learning" },
      { name: "Hugging Face Transformers", category: "NLP & LLM" },
      { name: "DistilBART", category: "NLP & LLM" },
      { name: "Sentence-Transformers (MiniLM)", category: "NLP & LLM" },
      { name: "DeBERTa NLI", category: "NLP & LLM" },
      { name: "Phi-4 Mini (ONNX Runtime)", category: "NLP & LLM" },
      { name: "Llama 3.3 70B", category: "NLP & LLM" },
      { name: "PyTorch", category: "NLP & LLM" },
      { name: "MediaPipe", category: "Computer Vision" },
      { name: "OpenCV", category: "Computer Vision" },
      { name: "ViT facial-emotion model", category: "Computer Vision" },
      { name: "VS Code", category: "Tools" },
      { name: "FastAPI Swagger", category: "Tools" },
      { name: "Android adb", category: "Tools" }
    ],
        references: [
      "J. Liao, Z. Wang, L. Wan, Q. Cao, and H. Qi, \"Smart diary: A smartphone-based framework for sensing, inferring, and logging users' daily life,\" IEEE Sensors J., vol. 15, no. 5, pp. 2761–2773, May 2015, doi: 10.1109/JSEN.2014.2331970.",
      "S. F. M. Abraar, D. T. Thuduhenage, V. P. Balasubramaniyam, S. R. Mohanraj, G. Wimalaratne, and S. Rajapaksha, \"Smart Diary: Autonomous system for daily diary creation and prioritization of daily activities for improved well-being using neural networks and machine learning,\" in Proc. 4th Int. Conf. Advancements Comput. (ICAC), 2022, pp. 78–83, doi: 10.1109/ICAC57685.2022.10025129.",
      "R. Wang et al., \"StudentLife: Assessing mental health, academic performance and behavioral trends of college students using smartphones,\" in Proc. ACM Int. Joint Conf. Pervasive Ubiquitous Comput. (UbiComp), 2014.",
      "K. Balog and T. Kenter, \"Personal knowledge graphs: A research agenda,\" in Proc. ACM SIGIR Int. Conf. Theory Inf. Retrieval (ICTIR), 2019, pp. 217–220.",
      "R. Rawassizadeh, E. Momeni, C. Dobbins, J. Gharibshah, and M. Pazzani, \"Scalable daily human behavioral pattern mining from multivariate temporal data,\" IEEE Trans. Knowl. Data Eng., vol. 28, no. 11, Nov. 2016.",
      "M. J. Alibasa, R. A. Calvo, and K. Yacef, \"Sequential pattern mining suggests wellbeing supportive behaviors,\" IEEE Access, vol. 7, 2019, doi: 10.1109/ACCESS.2019.2939960.",
      "M. S. Magnusson, \"Discovering hidden time patterns in behavior: T-patterns and their detection,\" Behav. Res. Methods, Instrum., Comput., vol. 32, no. 1, pp. 93–110, 2000.",
      "V. D. Blondel, J.-L. Guillaume, R. Lambiotte, and E. Lefebvre, \"Fast unfolding of communities in large networks,\" J. Stat. Mech., vol. 2008, no. 10, Art. no. P10008, Oct. 2008.",
      "F. Hu, A. F. Smeaton, and E. Newman, \"Periodicity detection in lifelog data with missing and irregularly sampled data,\" in Proc. IEEE Int. Conf. Bioinformatics Biomed. (BIBM), 2014.",
      "D. W. Joyce, A. Kormilitzin, K. A. Smith, and A. Cipriani, \"Explainable artificial intelligence for mental health through transparency and interpretability for understandability,\" npj Digit. Med., vol. 6, Art. no. 6, 2023.",
      "D. A. Parry et al., \"A systematic review and meta-analysis of discrepancies between logged and self-reported digital media use,\" Nat. Hum. Behav., vol. 5, no. 11, pp. 1535–1547, 2021, doi: 10.1038/s41562-021-01117-5.",
      "R. E. Nisbett and T. D. Wilson, \"Telling more than we can know: Verbal reports on mental processes,\" Psychol. Rev., vol. 84, no. 3, pp. 231–259, 1977.",
      "J. Kruger and D. Dunning, \"Unskilled and unaware of it: How difficulties in recognizing one's own incompetence lead to inflated self-assessments,\" J. Pers. Soc. Psychol., vol. 77, no. 6, pp. 1121–1134, 1999.",
      "D. Tempelaar, B. Rienties, and Q. Nguyen, \"Subjective data, objective data and the role of bias in predictive modelling: Lessons from a dispositional learning analytics application,\" PLoS ONE, vol. 15, no. 6, p. e0233977, 2020, doi: 10.1371/journal.pone.0233977.",
      "T. Chen and C. Guestrin, \"XGBoost: A scalable tree boosting system,\" in Proc. 22nd ACM SIGKDD Int. Conf. Knowl. Discovery Data Mining, 2016, pp. 785–794.",
      "L. F. Barrett, R. Adolphs, S. Marsella, A. M. Martinez, and S. D. Pollak, \"Emotional expressions reconsidered: Challenges to inferring emotion from human facial movements,\" Psychol. Sci. Public Interest, vol. 20, no. 1, pp. 1–68, 2019, doi: 10.1177/1529100619832930.",
      "M. J. Ahmad Khiri and F. Jee Wen Xuan, \"UniTask: Task management system for UNIMAS students,\" Trends in Undergraduate Research, vol. 8, no. 1, pp. c1–c24, 2025.",
      "B. Nuralamsyah et al., \"AI-based application for task management and scheduling student activity,\" in Proc. 15th Int. Conf. Inf. Commun. Technol. Syst. (ICTS), 2025.",
      "X. Wang, C. Janiszewski, Y. Zheng, J. Laran, and W. E. Jang, \"Deriving mental energy from task completion,\" Frontiers in Psychology, vol. 12, Art. no. 717414, 2021.",
      "C. J. C. Burges, \"From RankNet to LambdaRank to LambdaMART: An overview,\" Microsoft Research, Tech. Rep. MSR-TR-2010-82, 2010.",
      "S. M. Lundberg and S.-I. Lee, \"A unified approach to interpreting model predictions,\" in Advances in Neural Information Processing Systems, vol. 30, pp. 4765–4774, 2017.",
      "I. Refanidis and N. Yorke-Smith, \"A constraint-based approach to scheduling an individual's activities,\" ACM Trans. Intell. Syst. Technol., vol. 1, no. 2, Art. no. 12, pp. 1–32, 2010.",
      "P. Lewis et al., \"Retrieval-augmented generation for knowledge-intensive NLP tasks,\" in Advances in Neural Information Processing Systems, vol. 33, 2020.",
      "T. Gao, H. Yen, J. Yu, and D. Chen, \"Enabling large language models to generate text with citations,\" in Proc. Conf. Empirical Methods Natural Lang. Process. (EMNLP), 2023, pp. 6465–6488, doi: 10.18653/v1/2023.emnlp-main.398.",
      "M. Alkhalaf, P. Yu, M. Yin, and C. Deng, \"Applying generative AI with retrieval augmented generation to summarize and extract key clinical information from electronic health records,\" J. Biomed. Inform., vol. 156, Art. no. 104662, Aug. 2024, doi: 10.1016/j.jbi.2024.104662.",
      "N. Reimers and I. Gurevych, \"Sentence-BERT: Sentence embeddings using Siamese BERT-networks,\" in Proc. EMNLP-IJCNLP, 2019, pp. 3982–3992, doi: 10.18653/v1/D19-1410.",
      "A. B. Arrieta et al., \"Explainable artificial intelligence (XAI): Concepts, taxonomies, opportunities and challenges toward responsible AI,\" Inf. Fusion, vol. 58, pp. 82–115, Jun. 2020."
    ]
  },

  /* ---------- MILESTONES ---------- */
   milestones: [
    {
      title: "Project Proposal",
      date: "17 March 2026", marks: "6%", status: "completed",
      description: "Proposal presentation and reports outlining the research problem, research gap, objectives and methodology of IDiary and its four components.",
      deliverables: ["Proposal presentation", "Individual proposal reports (4)", "Project charter"]
    },
    {
      title: "Progress Presentation 1",
      date: "12 May 2026", marks: "15%", status: "completed",
      description: "Demonstrated around 50% completion of each research component with initial designs and results.",
      deliverables: ["Progress presentation slides", "Working prototype (≈50%)", "Component demonstrations"]
    },
    {
      title: "Progress Presentation 2",
      date: "1 September 2026", marks: "18%", status: "completed",
      description: "Demonstrated around 90% completion with the four components integrated into one mobile app and backend.",
      deliverables: ["Progress presentation slides", "Integrated system (≈90%)", "Research paper draft"]
    },
    {
      title: "Final Presentation & Viva",
      date: "20th October 2026", marks: "20%", status: "upcoming",
      description: "Final presentation and demonstration of the complete IDiary system, followed by an individual viva for each member.",
      deliverables: ["Final presentation", "Final group report", "Individual theses (4)", "Website", "Individual viva"]
    }
  ],

  /* ---------- DOCUMENTS (links only, e.g. Google Drive "Anyone with the link") ---------- */
  documents: [
    { title: "Project Charter", category: "Charter", status: "completed", link: "" },
    { title: "Proposal Document – Member 1", category: "Proposal", status: "completed", link: "https://drive.google.com/file/d/1lW9fzqxKJr66oc8wSn3gmxNgf5c0Y2PP/view?usp=sharing" },//navodya proposal
    { title: "Proposal Document – Member 2", category: "Proposal", status: "completed", link: "https://drive.google.com/file/d/1wMByHpdjn37WEU5uT8xB3_GsmH1LEPk1/view?usp=sharing" },//Malindu
    { title: "Proposal Document – Member 3", category: "Proposal", status: "completed", link: "https://drive.google.com/file/d/18FNtTu06pYn1xAIsXS4qPg2Bc3-RDJ7l/view?usp=sharing" },//shashiran
    { title: "Proposal Document – Member 4", category: "Proposal", status: "completed", link: "https://drive.google.com/file/d/1SNSEjZofJIWUoRwqoLhn-hjzw3X6RFih/view?usp=sharing" },//hasini
    { title: "Checklist Document 1", category: "Checklist", status: "completed", link: "", content: "docs/checklist-1.md" },
    { title: "Checklist Document 2", category: "Checklist", status: "pending", link: "", content: "" },  // add docs/checklist-2.md, then set content: "docs/checklist-2.md"
    { title: "Final Report – Group (Main)", category: "Final", status: "pending", link: "" },
    { title: "Final Report – Member 1", category: "Final", status: "pending", link: "" },
    { title: "Final Report – Member 2", category: "Final", status: "pending", link: "" },
    { title: "Final Report – Member 3", category: "Final", status: "pending", link: "" },
    { title: "Final Report – Member 4", category: "Final", status: "pending", link: "" },
    { title: "Research Paper", category: "Research Paper", status: "pending", link: "" }
  ],

  /* ---------- PRESENTATIONS ---------- */
  presentations: [
    { title: "Proposal Presentation", date: "TBA", status: "completed", link: "https://docs.google.com/presentation/d/1_de1q29MAVKjtBm4lrb7pDV7D3Z3Sj37/edit?usp=sharing&ouid=103739274121460629652&rtpof=true&sd=true" },
    { title: "Progress Presentation 1", date: "TBA", status: "completed", link: "https://docs.google.com/presentation/d/162ThCOKKSXNjRsaZZUwYLKaKVotPb3G7/edit?usp=sharing&ouid=103739274121460629652&rtpof=true&sd=true" },
    { title: "Progress Presentation 2", date: "TBA", status: "completed", link: "https://drive.google.com/file/d/1YuKSo9ggD89ch7fMp9OVBHJ5ns9gDxzU/view?usp=sharing" },
    { title: "Final Presentation", date: "TBA", status: "pending", link: "" }
  ],

  /* ---------- TEAM ---------- */
  supervisors: [
    { name: "Ms. Geethanjali Wimalaratne", role: "Supervisor", dept: " Information Technology , SLIIT", photo: "", email: "geethanjali.w@sliit.lk", linkedin: "" },
    { name: "Prof. Samantha Rajapaksha", role: "Co-Supervisor", dept: " Information Technology , SLIIT", photo: "", email: "samantha.r@sliit.lk", linkedin: "" }
  ],
  members: [
    {
      name: "Siriwardana N.N", role: "Group Leader", studentId: "IT22298812",
      degree: "BSc (Hons) in Information Technology – Specialising in Information Technology",
      component: "Component 1", photo: "assets/images/team/navodya.jpeg", // e.g. "assets/images/team/member1.webp"
      email: "IT22298812@my.sliit.lk", linkedin: "", github: "",
      //achievements: ["Add any achievement, award or publication"]
    },
    {
      name: "Rathnayake R.M", role: "Group Member", studentId: "IT22285492",
      degree: "BSc (Hons) in Information Technology – Specialising in Information Technology",
      component: "Component 2", photo: "assets/images/team/malindu.jpeg",
      email: "IT22285492@my.sliit.lk", linkedin: "", github: "",
      //achievements: []
    },
    {
      name: "Perera W.L.J.S", role: "Group Member", studentId: "IT22283030",
      degree: "BSc (Hons) in Information Technology – Specialising in Information Technology",
      component: "Component 3", photo: "assets/images/team/shashiran.jpeg",
      email: "IT22283030@my.sliit.lk", linkedin: "", github: "",
      //achievements: []
    },
    {
      name: "Kavindi M.K.H", role: "Group Member", studentId: "IT22265524",
      degree: "BSc (Hons) in Information Technology – Specialising in Information Technology",
      component: "Component 4", photo: "assets/images/team/hasini.jpeg  ",
      email: "IT22265524@my.sliit.lk", linkedin: "", github: "",
      achievements: []
    }
  ],

  /* ---------- CONTACT ---------- */
  contact: {
    email: "intelligentdiary@gmail.com",
    phone: "+94 767071160",
    address: "SLIIT, New Kandy Road, Malabe, Sri Lanka",
    emailTemplate:
      "Subject: Inquiry about [Project Name]\n\n" +
      "Dear [Project Name] Team,\n\n" +
      "My name is [Your Name] from [Organisation]. I am writing regarding [purpose of inquiry].\n\n" +
      "[Your message]\n\n" +
      "Thank you for your time. I look forward to your response.\n\n" +
      "Best regards,\n[Your Name]\n[Phone / Email]"
  }
};
