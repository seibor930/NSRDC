export interface CourseOutcome {
  title: string;
  desc: string;
}

export interface CoursePhase {
  title: string;
  modules: string[];
}

export interface CourseInstructor {
  name: string;
  title: string;
  image: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  tag: string;
  category: 'psy' | 'health' | 'human' | 'edu' | 'hospi' | 'env' | 'occu' | 'leader' | 'lang';
  level: 'Certificate' | 'Diploma' | 'Advanced Diploma';
  duration: string;
  enrollment: string;
  mode: string;
  accreditation: string;
  credits: string;
  tuition: number;
  description: string;
  overview: string;
  outcomes: CourseOutcome[];
  phases: CoursePhase[];
  instructor: CourseInstructor;
}

export interface FacultyCategory {
  key: Course['category'];
  title: string;
  icon: string;
  description: string;
}

export const FACULTY_CATEGORIES: FacultyCategory[] = [
  { key: 'psy', title: 'Psychology & Mental Health', icon: '🧠', description: 'Evidence-based cognitive interventions, behavioral analysis, and clinical psychology tools.' },
  { key: 'health', title: 'Healthcare & Patient Care', icon: '🩺', description: 'Patient care coordination, modern nursing leadership, and healthcare administration.' },
  { key: 'human', title: 'Human Resources & Management', icon: '👥', description: 'AI-driven talent acquisition, community development, and organizational management.' },
  { key: 'edu', title: 'Education & Teaching', icon: '📚', description: 'Pedagogical methodologies, educational psychology, and 21st-century educator training.' },
  { key: 'hospi', title: 'Hospitality & Tourism', icon: '🏨', description: 'Homestay management, international hospitality operations, and eco-tourism strategy.' },
  { key: 'env', title: 'Environmental & Sustainability', icon: '🌱', description: 'Circular economy systems, waste-to-wealth conversions, and renewable energy frameworks.' },
  { key: 'occu', title: 'Occupational Health & Safety', icon: '🛡️', description: 'Workplace risk assessment, international ICOSH standards, and compliance governance.' },
  { key: 'leader', title: 'Leadership & Decision Making', icon: '⚖️', description: 'Executive strategic decision modeling, crisis resolution, and organizational leadership.' },
  { key: 'lang', title: 'Faculty of Language', icon: '🗣️', description: 'Global professional language acquisition and communication protocols (Coming Soon).' }
];

export const COURSES: Course[] = [
  {
    "id": "course-1",
    "slug": "ai-hr",
    "title": "Certificate Course – Artificial Intelligence in Human Resources",
    "tag": "Human Resources",
    "category": "human",
    "level": "Certificate",
    "duration": "Self-paced (6–12 weeks)",
    "enrollment": "Year-round Flexible",
    "mode": "100% Online Virtual Campus",
    "accreditation": "AISCP Accredited",
    "credits": "10 ECTS Equivalent",
    "tuition": 5000,
    "description": "Leading the Digital Transformation of Talent Management",
    "overview": "As Human Resources functions play a crucial role in an organisation's overall performance, harnessing Artificial Intelligence has become essential. Many HR teams face inefficiencies, compliance risks, and pressure to deliver strategic value.\n\nThis course demonstrates how AI can create measurable impact, improve efficiency, and support smarter decision-making. You will explore modern, ethical, and performance-driven AI practices — from recruitment and onboarding to employee development and retention.\n\nThe program provides the clarity needed on AI governance and data privacy to foster a future-ready, adaptive HR environment.",
    "outcomes": [
      {
        "title": "Strategic Integration",
        "desc": "Explain the strategic role of AI in modern HR functions and identify opportunities for core process integration."
      },
      {
        "title": "Performance Analysis",
        "desc": "Analyse the value, risks, and performance impact of AI in day-to-day HR operations."
      },
      {
        "title": "Ethics & Governance",
        "desc": "Evaluate ethical, privacy, and governance considerations while applying frameworks for responsible AI adoption."
      },
      {
        "title": "Compliance Mastery",
        "desc": "Distinguish between compliant and non-compliant AI applications to mitigate organisational risk."
      },
      {
        "title": "Employee Lifecycle",
        "desc": "Assess AI tools for onboarding and use AI-driven insights to strengthen performance management."
      },
      {
        "title": "Action Planning",
        "desc": "Create comprehensive action plans to lead HR transformation through strategic AI integration."
      }
    ],
    "phases": [
      {
        "title": "Module 1 — Strategic Foundations of AI in Human Resources",
        "modules": [
          "Foundational roles of AI in HR",
          "Ethical frameworks for responsible use"
        ]
      },
      {
        "title": "Module 2 — Applying AI Across the Employee Lifecycle",
        "modules": [
          "Practical applications in recruitment and talent acquisition",
          "Onboarding, performance management, and retention"
        ]
      },
      {
        "title": "Module 3 — Final Assessment",
        "modules": [
          "Comprehensive evaluation of AI integration and action planning"
        ]
      }
    ],
    "instructor": {
      "name": "Dr. Evelyn Vance, PhD, AISCP",
      "title": "Chair of Behavioral Science & CBT Fellow",
      "image": "/assets/images/Faculty/1.png"
    }
  },
  {
    "id": "course-2",
    "slug": "cbt",
    "title": "Advanced Diploma in Cognitive Behaviour Therapy",
    "tag": "Psychology & Mental Health",
    "category": "psy",
    "level": "Advanced Diploma",
    "duration": "Self-paced (6–12 weeks)",
    "enrollment": "Year-round Flexible",
    "mode": "100% Online Virtual Campus",
    "accreditation": "AISCP Accredited",
    "credits": "20 ECTS Equivalent",
    "tuition": 5000,
    "description": "Evidence-Based Psychological Tools for Transformative Clinical Practice",
    "overview": "This comprehensive online course provides a deep dive into the mechanisms of Cognitive Behavioural Therapy (CBT). As one of the most effective and research-backed psychological treatments available today, CBT focuses on the relationship between thoughts, feelings, and behaviours.\n\nThis program equips learners with the theoretical knowledge and practical tools necessary to address complex conditions like depression, anxiety, eating disorders, and addiction. You will also explore how CBT techniques can improve communication and strengthen human relationships.\n\nBy the end of this training, you will possess both the clinical and interpersonal skills to apply CBT across a wide range of settings and populations.",
    "outcomes": [
      {
        "title": "Theoretic Foundations",
        "desc": "Identify the history, key figures, and neuroscience-based assumptions that underpin CBT, including neurotransmitter roles."
      },
      {
        "title": "Diagnostic Tools",
        "desc": "Outline frequently used psychometric tests and understand the factors involved in professional case formulations."
      },
      {
        "title": "Cognitive Restructuring",
        "desc": "Define and identify cognitive distortions to help patients reframe negative thought patterns."
      },
      {
        "title": "Specialized Application",
        "desc": "Apply CBT protocols to clinical depression, eating disorders, insomnia, and the three core aspects of addiction."
      },
      {
        "title": "Comparative Frameworks",
        "desc": "Understand where CBT stands in relation to other modern therapies like Acceptance and Commitment Therapy (ACT)."
      },
      {
        "title": "Interpersonal Development",
        "desc": "Utilize CBT techniques to improve communication and strengthen human relationships."
      }
    ],
    "phases": [
      {
        "title": "Module 1 — Fundamentals of CBT",
        "modules": [
          "History, Behavioural Neuroscience, ACT vs. CBT, and Cognitive Analytic Therapy"
        ]
      },
      {
        "title": "Module 2 — Applications of CBT",
        "modules": [
          "Treating Depression & Eating Disorders",
          "Stress Management and Relationship Therapy",
          "Addiction Interventions"
        ]
      },
      {
        "title": "Module 3 — Assessment",
        "modules": [
          "Final examination and competency validation"
        ]
      }
    ],
    "instructor": {
      "name": "Prof. Marcus Sterling, EdD",
      "title": "Director of Educational Leadership & Curriculum",
      "image": "/assets/images/Faculty/2.png"
    }
  },
  {
    "id": "course-3",
    "slug": "community-dev",
    "title": "Certificate in Community Development",
    "tag": "Community & Social Development",
    "category": "human",
    "level": "Certificate",
    "duration": "Self-paced (6–12 weeks)",
    "enrollment": "Year-round Flexible",
    "mode": "100% Online Virtual Campus",
    "accreditation": "AISCP Accredited",
    "credits": "10 ECTS Equivalent",
    "tuition": 5000,
    "description": "Foundations for Organising Local Action and Sustainable Change",
    "overview": "The Introduction to Community Development course is the first in a four-part series designed to introduce you to the core principles of the community development sector. Using the healthy community model as a springboard, this program teaches you how to identify issues that require action and how to organise community groups to effectively address them.\n\nThrough this online course, you will define the essential features of a community and learn the practical aspects of governance, liability, and group structure. Whether you are a professional or a volunteer, this course provides the skills needed to build teams, ensure inclusive participation, and navigate the inevitable conflicts that arise during group work.",
    "outcomes": [
      {
        "title": "Core Principles",
        "desc": "Explain the values, concepts, and principles that form the foundation of the community development segment."
      },
      {
        "title": "Organisational Setup",
        "desc": "Learn how to get a community group started and the strategies it can adopt to further its objectives."
      },
      {
        "title": "Collaboration Types",
        "desc": "Distinguish between various types of collaboration, such as coalitions and networks, with other organisations."
      },
      {
        "title": "Analysis Tools",
        "desc": "Define and apply community analysis tools, including visioning, community characteristic checklists, and asset mapping."
      },
      {
        "title": "Governance & Structure",
        "desc": "Discuss different governance structures and understand the practicalities of liability and group organisation."
      },
      {
        "title": "Team Dynamics",
        "desc": "Know how to build effective teams, conduct productive meetings, and manage group roles and conflicts."
      },
      {
        "title": "Strategic Planning",
        "desc": "Plan for change by setting clear priorities to improve and change local communities."
      }
    ],
    "phases": [
      {
        "title": "Module 1 — Community Development Strategies",
        "modules": [
          "Defining community features and identifying issues for action",
          "Strategies to further group objectives"
        ]
      },
      {
        "title": "Module 2 — Getting Started",
        "modules": [
          "Inclusive participation and navigating group conflict",
          "Understanding the healthy community model"
        ]
      },
      {
        "title": "Module 3 — Getting Organised",
        "modules": [
          "Governance, liability, and organisational structure",
          "Tools for community analysis and asset mapping"
        ]
      },
      {
        "title": "Module 4 — Course Assessment",
        "modules": [
          "Final evaluation"
        ]
      }
    ],
    "instructor": {
      "name": "Dr. Sarah Chen, RN, MSN",
      "title": "Clinical Nursing Director & Patient Care Specialist",
      "image": "/assets/images/Faculty/3.png"
    }
  },
  {
    "id": "course-4",
    "slug": "edu-psychology",
    "title": "Diploma in Educational Psychology",
    "tag": "Education",
    "category": "psy",
    "level": "Diploma",
    "duration": "Self-paced (6–12 weeks)",
    "enrollment": "Year-round Flexible",
    "mode": "100% Online Virtual Campus",
    "accreditation": "AISCP Accredited",
    "credits": "15 ECTS Equivalent",
    "tuition": 15000,
    "description": "Mastering Classroom Dynamics through Behavioural and Cognitive Science",
    "overview": "Teaching is a complex challenge, especially when navigating the diverse personalities and varying learning levels of a modern classroom. This diploma course empowers educators to fulfil their roles more effectively by exploring the psychological foundations of the learning process.\n\nYou will gain the special skills and compassion required to connect with different students by understanding how they think and feel. From comparing major learning theories like behaviourism and constructivism to addressing the needs of students with sensory or physical disabilities, this program provides the strategies necessary to meet every learner's educational needs.",
    "outcomes": [
      {
        "title": "Educational Theory",
        "desc": "Describe the learning process through the lens of various psychologists, philosophers, and researchers."
      },
      {
        "title": "Learning Philosophies",
        "desc": "Compare behaviourism, focusing on operant conditioning, with psychological and social constructivism."
      },
      {
        "title": "Student Development",
        "desc": "Outline key cognitive, social, and moral development theories while discussing contemporary trends."
      },
      {
        "title": "Special Education",
        "desc": "State the fundamentals of special education and describe common disabilities, including ADHD and behavioural disorders."
      },
      {
        "title": "Adaptive Strategy",
        "desc": "Outline an Individual Education Plan (IEP) and learn strategies to assist students with physical and sensory impairments."
      },
      {
        "title": "Diversity & Inclusion",
        "desc": "Explain how cultural differences and gender roles affect the educational experience and classroom environment."
      }
    ],
    "phases": [
      {
        "title": "Phase 1 — Foundations of Learning",
        "modules": [
          "Module 1: Introduction to the Learning Process",
          "Modules 2–3: Behaviourism and Constructivism",
          "First Assessment: Educational Psychology Foundations"
        ]
      },
      {
        "title": "Phase 2 — Special Education Needs (SEN)",
        "modules": [
          "Modules 5–6: Introduction to Special Education and Learning Disabilities",
          "Modules 7–9: ADHD, Intellectual Disabilities, and Behavioural Disorders",
          "Module 10: Physical Disabilities and Sensory Impairments",
          "Second Assessment: Inclusive Teaching Strategies"
        ]
      },
      {
        "title": "Phase 3 — Development & Diversity",
        "modules": [
          "Modules 12–16: Student Development (Physical, Cognitive, Social, and Moral)",
          "Modules 17–19: Student Diversity, Gender, and Cultural Differences",
          "Third Assessment: Development and Diversity"
        ]
      }
    ],
    "instructor": {
      "name": "Julian Hayes, MBA, SPHR",
      "title": "Senior Executive Fellow in AI & HR Transformations",
      "image": "/assets/images/Faculty/4.png"
    }
  },
  {
    "id": "course-5",
    "slug": "environmental",
    "title": "Diploma in Environmental Management",
    "tag": "Environmental Studies",
    "category": "psy",
    "level": "Diploma",
    "duration": "Self-paced (6–12 weeks)",
    "enrollment": "Year-round Flexible",
    "mode": "100% Online Virtual Campus",
    "accreditation": "AISCP Accredited",
    "credits": "15 ECTS Equivalent",
    "tuition": 15000,
    "description": "Strategic Solutions for Climate Change, Sustainability, and Resource Preservation",
    "overview": "This comprehensive Environmental Management program serves as a critical introduction to the complex interactions between humanity and the natural world. In an era defined by global change, this course equips professionals and students with the technical knowledge to navigate climate processes, sustainability frameworks, and the IPAT equation.\n\nParticipants will explore the science of biogeochemical cycles, analyse the impact of pollutants, and study the environmental regulations governing waste management. From soil sustainability to building a sustainable energy economy, this diploma provides the valuable skills needed to manage physical resources and address modern environmental challenges.",
    "outcomes": [
      {
        "title": "Sustainability & Consumption",
        "desc": "Discuss the formal definition of sustainability and apply the IPAT equation to analyse human consumption patterns."
      },
      {
        "title": "Climate Science",
        "desc": "Define climate versus weather, explain Earth's major climate controls, and study the enhanced greenhouse effect."
      },
      {
        "title": "Biogeochemical Cycles",
        "desc": "Describe the natural cycles of carbon, water, and nitrogen and their vital interactions with the ecosystem."
      },
      {
        "title": "Resource Management",
        "desc": "Discuss biodiversity loss, soil-forming factors, and the ultimate sources of renewable energy."
      },
      {
        "title": "Pollution Control",
        "desc": "Understand water pollution, different pollutant types, and the critical importance of sewage treatment."
      },
      {
        "title": "Risk & Economics",
        "desc": "Learn to identify and evaluate uncertainties in risk assessment and study environmental and resource economics."
      },
      {
        "title": "Energy Systems",
        "desc": "Explore the history of human energy use, combined heat and power, and carbon emission reduction strategies."
      }
    ],
    "phases": [
      {
        "title": "Phase 1 — Environmental Foundations & Physical Resources",
        "modules": [
          "Module 1: Introduction to Sustainability: Humanity and the Environment",
          "Module 2: Climate and Global Change",
          "Module 3: Biosphere",
          "Module 4: Physical Resources: Water, Pollution, and Minerals",
          "First Assessment: Environmental Foundations"
        ]
      },
      {
        "title": "Phase 2 — Modern Management & Sustainable Infrastructure",
        "modules": [
          "Modules 6–7: Environmental Economics and Modern Management",
          "Module 8: Sustainability and Environmental Challenges",
          "Modules 9–11: Energy Sources, Sustainable Infrastructure, and Energy Practices",
          "Second Assessment: Strategic Management"
        ]
      },
      {
        "title": "Final Evaluation",
        "modules": [
          "Comprehensive Course Assessment"
        ]
      }
    ],
    "instructor": {
      "name": "Elena Rostova, MSc",
      "title": "Head of Circular Economy & Sustainable Innovation",
      "image": "/assets/images/Faculty/5.png"
    }
  },
  {
    "id": "course-6",
    "slug": "homestay",
    "title": "Diploma in Homestay Management",
    "tag": "Hospitality & Tourism",
    "category": "hospi",
    "level": "Diploma",
    "duration": "Self-paced (6–12 weeks)",
    "enrollment": "Year-round Flexible",
    "mode": "100% Online Virtual Campus",
    "accreditation": "AISCP Accredited",
    "credits": "15 ECTS Equivalent",
    "tuition": 15000,
    "description": "Where Tradition Meets Professional Hospitality",
    "overview": "The global travel trend has shifted from luxury hotels to authentic experiences. Travellers no longer want just a room; they want a story, a local flavour, and a personal connection. Our Diploma in Homestay Management is designed to bridge the gap between owning a house and running a world-class hospitality business.\n\nWe empower you to turn spaces into soulful sanctuaries. With 60% hands-on practical training, this entrepreneurially focused program gives you the skills to start your own business with minimal capital while staying connected to sustainability and responsible tourism.",
    "outcomes": [
      {
        "title": "Hospitality Foundations",
        "desc": "Understand the legal requirements, licenses, GST obligations, and safety laws governing homestay operations."
      },
      {
        "title": "Property Aesthetics",
        "desc": "Master interior styling techniques and maintain 5-star cleanliness standards across your property."
      },
      {
        "title": "Culinary & F&B",
        "desc": "Apply menu engineering principles and food safety standards to create memorable guest dining experiences."
      },
      {
        "title": "Digital Marketing",
        "desc": "Master Airbnb, Booking.com, SEO, and OTA management to maximise your property's online visibility."
      },
      {
        "title": "Finance & Operations",
        "desc": "Manage budgeting, P&L analysis, and guest relations to run a profitable hospitality business."
      },
      {
        "title": "Industry Immersion",
        "desc": "Complete an 8-week industry internship in a real-world homestay or boutique property."
      }
    ],
    "phases": [
      {
        "title": "Module 1 — Foundations of Hospitality & Legalities",
        "modules": [
          "Licenses, GST, and safety laws"
        ]
      },
      {
        "title": "Module 2 — Housekeeping & Property Aesthetics",
        "modules": [
          "Interior styling and maintaining 5-star cleanliness"
        ]
      },
      {
        "title": "Module 3 — Culinary Arts & Local F&B",
        "modules": [
          "Menu engineering and food safety standards"
        ]
      },
      {
        "title": "Module 4 — Digital Marketing & OTA Management",
        "modules": [
          "Mastering Airbnb, Booking.com, and SEO"
        ]
      },
      {
        "title": "Module 5 — Finance & Operations",
        "modules": [
          "Budgeting, P&L, and guest relations"
        ]
      },
      {
        "title": "Module 6 — Industry Internship",
        "modules": [
          "8-week immersion in a real-world homestay"
        ]
      }
    ],
    "instructor": {
      "name": "David K. O’Connor, CSH",
      "title": "Global Occupational Safety & Health Inspector",
      "image": "/assets/images/Faculty/6.png"
    }
  },
  {
    "id": "course-7",
    "slug": "hospitality-cert",
    "title": "Certificate Program in Hospitality Management – Essentials of Hospitality Management",
    "tag": "Hospitality & Tourism",
    "category": "hospi",
    "level": "Certificate",
    "duration": "Self-paced (6–12 weeks)",
    "enrollment": "Year-round Flexible",
    "mode": "100% Online Virtual Campus",
    "accreditation": "AISCP Accredited",
    "credits": "10 ECTS Equivalent",
    "tuition": 5000,
    "description": "Strategic Leadership and Operational Excellence in Global Tourism",
    "overview": "Are you ready to shape the future of hospitality while building a rewarding career? In today's fast-paced world, the industry faces unique challenges — keeping guests satisfied, managing diverse teams, and maintaining profitability.\n\nFrom mastering leadership and human resources to implementing innovative technologies, this program prepares you to lead with purpose. You will dive into every facet of the industry, gaining the financial savvy and crisis management expertise needed to stay ahead of the curve.",
    "outcomes": [
      {
        "title": "Industry Analysis",
        "desc": "Analyse the various sectors and functions within the hospitality industry."
      },
      {
        "title": "Management Core",
        "desc": "Describe core principles of hospitality management and their importance to effective operations."
      },
      {
        "title": "Operational Strategy",
        "desc": "Evaluate hotel and accommodation management strategies to improve guest experiences and efficiency."
      },
      {
        "title": "F&B and Events",
        "desc": "Compare food and beverage operations and plan effective event management strategies."
      },
      {
        "title": "Leadership & HR",
        "desc": "Discuss leadership styles and assess human resource techniques to recruit, retain, and motivate employees."
      },
      {
        "title": "Financial Health",
        "desc": "Calculate key financial metrics to assess the health of hospitality businesses."
      },
      {
        "title": "Modern Innovation",
        "desc": "Illustrate the role of emerging technologies and categorise sustainable management practices."
      },
      {
        "title": "Safety & Crisis",
        "desc": "Create comprehensive crisis management strategies and label key safety and security protocols."
      }
    ],
    "phases": [
      {
        "title": "Module 1 — Introduction to Hospitality Management",
        "modules": [
          "Fundamentals of the industry and core operational principles"
        ]
      },
      {
        "title": "Module 2 — Operations in Hospitality",
        "modules": [
          "Deep dive into hotel, accommodation, and food and beverage management"
        ]
      },
      {
        "title": "Module 3 — Leadership and Human Resource Management",
        "modules": [
          "Team performance, guest satisfaction, and strategic recruitment"
        ]
      },
      {
        "title": "Module 4 — Technological, Sustainable and Crisis Management",
        "modules": [
          "Emerging tech, ethical operations, and emergency public relations"
        ]
      }
    ],
    "instructor": {
      "name": "Arthur Pendelton, PhD",
      "title": "Senior Fellow in Executive Strategy & Decision Making",
      "image": "/assets/images/Faculty/7.png"
    }
  },
  {
    "id": "course-8",
    "slug": "hospitality-diploma",
    "title": "Diploma in Hospitality Management",
    "tag": "Hospitality & Tourism",
    "category": "hospi",
    "level": "Diploma",
    "duration": "Self-paced (6–12 weeks)",
    "enrollment": "Year-round Flexible",
    "mode": "100% Online Virtual Campus",
    "accreditation": "AISCP Accredited",
    "credits": "15 ECTS Equivalent",
    "tuition": 15000,
    "description": "Mastering the Art of Service, Operations, and Global Hospitality Excellence",
    "overview": "The hospitality sector is a global powerhouse, generating hundreds of billions of dollars annually and serving as a key revenue generator in modern economies. This course is designed to dive deep into this thriving industry, equipping you with the essential skills required for hospitality management.\n\nFrom understanding hotel department functions to mastering food and beverage services, this program provides a comprehensive look at how modern hotels and restaurants operate. Whether you are an aspiring learner or a professional seeking career growth, this course will help you excel in a sector that employs millions worldwide.",
    "outcomes": [
      {
        "title": "Industry Foundations",
        "desc": "Explain the characteristics of the hospitality industry and the nature of its relationship with tourism."
      },
      {
        "title": "Hotel Operations",
        "desc": "Define the classification of hotel departments, including front office and housekeeping functions."
      },
      {
        "title": "Market Insights",
        "desc": "Describe different market segments and customer types to better meet guest requests."
      },
      {
        "title": "Food & Beverage Mastery",
        "desc": "Define F&B departments, state menu objectives, and understand restaurant operations planning."
      },
      {
        "title": "Kitchen Design",
        "desc": "Illustrate kitchen layout and design principles to optimise service flow."
      },
      {
        "title": "Health & Safety",
        "desc": "Explain proper food handling priorities, food safety, and procedures for preventing workplace accidents."
      }
    ],
    "phases": [
      {
        "title": "Phase 1 — Accommodation & Hotel Operations",
        "modules": [
          "Module 1: Characteristics of the Hospitality Industry",
          "Module 2: Introduction to the Accommodation Sector",
          "Module 3: Introduction to Hotel Management",
          "Module 4: Hotel Front Office Operations",
          "Module 5: Hotel Housekeeping Department",
          "Module 6: First Assessment"
        ]
      },
      {
        "title": "Phase 2 — Food, Beverage & Safety",
        "modules": [
          "Module 7: Introduction to the Food and Beverage Sector",
          "Module 8: Food and Beverage Services",
          "Module 9: Restaurant Operations Planning",
          "Module 10: Kitchen Design and Layout",
          "Module 11: Safe Food Handling in Food Service Operations",
          "Module 12: Preventing and Treating Accidents in Food Service Operations",
          "Module 13: Second Assessment"
        ]
      },
      {
        "title": "Final Evaluation",
        "modules": [
          "Module 14: Course Assessment"
        ]
      }
    ],
    "instructor": {
      "name": "Dr. Evelyn Vance, PhD, AISCP",
      "title": "Chair of Behavioral Science & CBT Fellow",
      "image": "/assets/images/Faculty/1.png"
    }
  },
  {
    "id": "course-9",
    "slug": "hr",
    "title": "Diploma in Effective Human Resources",
    "tag": "Human Resources",
    "category": "human",
    "level": "Diploma",
    "duration": "Self-paced (6–12 weeks)",
    "enrollment": "Year-round Flexible",
    "mode": "100% Online Virtual Campus",
    "accreditation": "AISCP Accredited",
    "credits": "15 ECTS Equivalent",
    "tuition": 15000,
    "description": "Strategic People Management and Organisational Excellence",
    "overview": "The Effective Human Resource Administration course provides a full understanding of the skills required for HR roles across diverse industries. In an ever-changing marketplace, success depends on an organisation's ability to manage its most valuable asset: people.\n\nThis program teaches you how to motivate employees, oversee productivity, and utilise technology to enhance the workplace. You will explore methods for quality improvement through job redesign, learn the fundamentals of leadership and communication, and navigate human relations in global business.",
    "outcomes": [
      {
        "title": "Conflict & Change",
        "desc": "Identify effective strategies to solve organisational conflicts and manage structural changes."
      },
      {
        "title": "Job Optimisation",
        "desc": "Outline techniques for job redesign and job enrichment to improve employee satisfaction and adaptability."
      },
      {
        "title": "Behavioural Analysis",
        "desc": "Evaluate both individual and group behaviour among employees to better understand and lead your workforce."
      },
      {
        "title": "Motivation Fundamentals",
        "desc": "Explain the core principles of motivation used to oversee and support employee performance."
      },
      {
        "title": "Global HR Relations",
        "desc": "Summarise human relations in global business, including understanding foreign cultures for HR purposes."
      },
      {
        "title": "Performance Management",
        "desc": "Learn the essentials of developing, appraising, and rewarding employees to drive productivity."
      }
    ],
    "phases": [
      {
        "title": "Phase 1 — Foundations of People & Behaviour",
        "modules": [
          "Modules 1–2: HR Administration Overview and Fundamentals of Motivation",
          "Modules 3–5: Individual Behaviour, Group Behaviour, and Informal Organisation",
          "Module 6: Technology and People at Work"
        ]
      },
      {
        "title": "Phase 2 — Productivity & Leadership",
        "modules": [
          "Modules 7–8: Productivity and Quality Improvement; Job Redesign and Enrichment",
          "Modules 9–10: Fundamentals of Leadership; Developing, Appraising, and Rewarding Employees",
          "Module 11: Communicating for Effectiveness"
        ]
      },
      {
        "title": "Phase 3 — Conflict & Global Strategy",
        "modules": [
          "Module 12: Managing Conflict",
          "Module 13: Human Relations in Global Business",
          "Module 14: Final Course Assessment"
        ]
      }
    ],
    "instructor": {
      "name": "Prof. Marcus Sterling, EdD",
      "title": "Director of Educational Leadership & Curriculum",
      "image": "/assets/images/Faculty/2.png"
    }
  },
  {
    "id": "course-10",
    "slug": "icosh",
    "title": "International Certificate of Occupational Safety and Health (ICOSH)",
    "tag": "Occupational Safety & Health",
    "category": "occu",
    "level": "Certificate",
    "duration": "Self-paced (6–12 weeks)",
    "enrollment": "Year-round Flexible",
    "mode": "100% Online Virtual Campus",
    "accreditation": "AISCP Accredited",
    "credits": "10 ECTS Equivalent",
    "tuition": 25000,
    "description": "A Comprehensive Foundation for Global Workplace Safety Standards",
    "overview": "The AISCP International Certificate in Occupational Safety and Health (ICOSH) provides a sound, broad introduction to the fundamentals of occupational health and safety. Designed for managers, supervisors, and worker representatives, this award equips non-specialists with the underpinning knowledge needed to effectively discharge organisational duties.\n\nThe curriculum is based on international principles and practices, referencing the ILO's Guidelines on Occupational Safety and Health Management Systems (ILO-OSH 2001) and ISO 45001: 2018. By focusing on universal principles rather than specific local laws, the ICOSH ensures a common and consistent high standard for worker safety in an increasingly globalised world.",
    "outcomes": [
      {
        "title": "Health and Safety Foundations",
        "desc": "Understand the moral, legal, and economic reasons for promoting safety and the role of international bodies like the ILO and ISO."
      },
      {
        "title": "Policy & Organisation",
        "desc": "Learn to set effective health and safety policies and define roles and responsibilities within an organisation."
      },
      {
        "title": "Culture & Behaviour",
        "desc": "Explore the concept of safety culture and how internal and external influences affect human behaviour at work."
      },
      {
        "title": "Risk Assessment & Control",
        "desc": "Master the process of identifying hazards, evaluating risks, and applying the general hierarchy of control."
      },
      {
        "title": "Workplace Hazards",
        "desc": "Identify and control risks related to vehicle movement, manual handling, work equipment, electricity, and fire."
      },
      {
        "title": "Incident Investigation",
        "desc": "Understand procedures for investigating, recording, and reporting accidents and work-related ill-health."
      },
      {
        "title": "Monitoring & Audit",
        "desc": "Learn the difference between active and reactive monitoring and how to conduct effective health and safety audits."
      }
    ],
    "phases": [
      {
        "title": "Elements 1–6 — Management of Health and Safety",
        "modules": [
          "Foundations, Policy, Organising, Culture, Risk Assessment, and Principles of Control"
        ]
      },
      {
        "title": "Elements 7–14 — Controlling Workplace Hazards",
        "modules": [
          "Movement, Handling, Equipment, Electricity, Fire, Chemical/Biological, Physical/Psychological, and Construction"
        ]
      },
      {
        "title": "Elements 15–16 — Performance Review",
        "modules": [
          "Investigation, Recording, Reporting, Monitoring, and Audit"
        ]
      },
      {
        "title": "Assessment",
        "modules": [
          "Two written examination papers (pass standard: 45%)",
          "Practical safety inspection and written management report (pass standard: 60%)"
        ]
      }
    ],
    "instructor": {
      "name": "Dr. Sarah Chen, RN, MSN",
      "title": "Clinical Nursing Director & Patient Care Specialist",
      "image": "/assets/images/Faculty/3.png"
    }
  },
  {
    "id": "course-11",
    "slug": "leadership",
    "title": "Certificate in Classic Leadership and Decision Making",
    "tag": "Leadership & Decision Making",
    "category": "leader",
    "level": "Certificate",
    "duration": "Self-paced (6–12 weeks)",
    "enrollment": "Year-round Flexible",
    "mode": "100% Online Virtual Campus",
    "accreditation": "AISCP Accredited",
    "credits": "10 ECTS Equivalent",
    "tuition": 5000,
    "description": "Transforming Management through Virtuous Leadership and Logical Precision",
    "overview": "If you have always wanted to learn the crucial fundamentals of great, effective leadership, this course is the perfect start. True leadership goes beyond simple management; it involves inspiring others to constantly do better and aim higher for themselves and the team.\n\nThis program explores what good management entails and provides practical methods to refine your decision-making skills. Throughout this certification, you will explore the decision-making process, paying close attention to tools and insights that balance logic and emotion. You will also study the classical Greek philosophical traditions of virtuous leadership, examining how culture influences our view of ethical ideals.\n\nBy the end of this training, you will be prepared to take your leadership from good to great by putting virtuous theory into daily practice.",
    "outcomes": [
      {
        "title": "Decision Dynamics",
        "desc": "Define and discuss different types of decisions and practical methods for making great choices in business."
      },
      {
        "title": "Virtuous Frameworks",
        "desc": "List Plato's Four Cardinal Virtues and describe Aristotle's views on leadership and virtue as a moral framework."
      },
      {
        "title": "Ethical Leadership",
        "desc": "Explore cultural approaches to ethics and how culture conceptualizes the virtuous leader across time."
      },
      {
        "title": "Follower Perspectives",
        "desc": "Identify models of leadership and what followers truly want and need from their leaders."
      },
      {
        "title": "Compassionate Leadership",
        "desc": "Explain the development of compassionate leadership and the importance of selflessness and listening."
      },
      {
        "title": "Leadership Traits",
        "desc": "Analyze essential qualities such as honesty, moral courage, moral vision, and intellectual excellence."
      },
      {
        "title": "Navigating Challenges",
        "desc": "Analyze modern leadership challenges and how to effectively engage teams in complex processes."
      }
    ],
    "phases": [
      {
        "title": "Phase 1 — Decision-Making Mastery",
        "modules": [
          "A Framework for Decision-Making",
          "Making Great Decisions"
        ]
      },
      {
        "title": "Phase 2 — Philosophical & Ethical Foundations",
        "modules": [
          "The Classical Virtues of Leadership",
          "Perspectives on Leadership"
        ]
      },
      {
        "title": "Phase 3 — Essential Leadership Qualities",
        "modules": [
          "Honesty, Moral Courage, and Moral Vision",
          "Compassion, Listening Skills, and Aesthetic Sensitivity",
          "Good Timing and Selflessness",
          "Course Assessment"
        ]
      }
    ],
    "instructor": {
      "name": "Julian Hayes, MBA, SPHR",
      "title": "Senior Executive Fellow in AI & HR Transformations",
      "image": "/assets/images/Faculty/4.png"
    }
  },
  {
    "id": "course-12",
    "slug": "nursing-coordination",
    "title": "Certificate in Nursing Studies – Essentials of Patient Care Coordination",
    "tag": "Health & Nursing",
    "category": "health",
    "level": "Certificate",
    "duration": "Self-paced (6–12 weeks)",
    "enrollment": "Year-round Flexible",
    "mode": "100% Online Virtual Campus",
    "accreditation": "AISCP Accredited",
    "credits": "10 ECTS Equivalent",
    "tuition": 5000,
    "description": "The Vital Bridge to Compassionate Healthcare Excellence",
    "overview": "Optimal patient care begins at reception and includes scheduling, precise data recording, and timely follow-ups — a process known as Patient Care Coordination. This course explores the essentials of effective coordination, focusing on key elements like patient assessment, advocacy, and education.\n\nPatient care coordinators serve as the essential bridge between patients and their treatment plans. Beyond administrative tasks, they help patients navigate complex diagnoses and healthcare journeys.\n\nEnrol to enhance your skills and deliver more coordinated, compassionate patient care that meets global administrative standards.",
    "outcomes": [
      {
        "title": "The Coordinator Identity",
        "desc": "Discuss the roles and responsibilities of a patient coordinator and their importance in modern healthcare."
      },
      {
        "title": "Operational Mastery",
        "desc": "Describe the process of patient intake, registration, and identify key appointment-setting techniques."
      },
      {
        "title": "Clinical Assessment",
        "desc": "Learn to conduct patient assessments, identify patient needs, and analyse triage procedures for managing patient flow."
      },
      {
        "title": "Insurance Navigation",
        "desc": "Recognise different types of insurance, policy coverage, eligibility, and the steps involved in processing claims."
      },
      {
        "title": "Advocacy & Education",
        "desc": "Explain the essential role of patient education and advocacy in ensuring quality outcomes."
      },
      {
        "title": "Team Collaboration",
        "desc": "Outline the roles of healthcare team members and master interdisciplinary communication."
      }
    ],
    "phases": [
      {
        "title": "Module 1 — Overview of Patient Care Coordination",
        "modules": [
          "Patient intake, registration, and strategic scheduling",
          "Assessment, triage, and identifying potential health risks",
          "Healthcare insurance, billing, and financial navigation",
          "Patient education, advocacy, and collaborative teamwork"
        ]
      },
      {
        "title": "Module 2 — Course Assessment",
        "modules": [
          "Comprehensive evaluation of coordination principles and real-world problem-solving"
        ]
      }
    ],
    "instructor": {
      "name": "Elena Rostova, MSc",
      "title": "Head of Circular Economy & Sustainable Innovation",
      "image": "/assets/images/Faculty/5.png"
    }
  },
  {
    "id": "course-13",
    "slug": "nursing-leadership",
    "title": "Diploma in Nursing Leadership and Care Management",
    "tag": "Health & Nursing",
    "category": "health",
    "level": "Diploma",
    "duration": "Self-paced (6–12 weeks)",
    "enrollment": "Year-round Flexible",
    "mode": "100% Online Virtual Campus",
    "accreditation": "AISCP Accredited",
    "credits": "15 ECTS Equivalent",
    "tuition": 15000,
    "description": "Leading Excellence in Clinical Care and Healthcare Education",
    "overview": "The nursing profession has evolved significantly, transforming the modern nurse into a vital team leader and healthcare teacher. This online course provides an overview of the most critical elements of a nursing leader's daily role.\n\nYou will explore the skills, techniques, and leadership approaches required to improve healthcare delivery and manage diverse medical teams. From mastering communication with patients with sensory impairments to understanding the complexities of the surgical cycle, this program boosts your care management capabilities.",
    "outcomes": [
      {
        "title": "Team Leadership",
        "desc": "Identify the factors defining team nursing and the core responsibilities of a nursing team leader."
      },
      {
        "title": "Nurse as Educator",
        "desc": "Examine the steps in the teaching-learning process, the principles for effective instruction, and the three primary types of learning."
      },
      {
        "title": "Specialised Communication",
        "desc": "Identify nursing interventions required to effectively communicate with patients who are blind, deaf, or speak a foreign language."
      },
      {
        "title": "Transcultural Care",
        "desc": "Examine sociocultural beliefs about illness and their specific implications for nursing practice."
      },
      {
        "title": "Surgical Management",
        "desc": "Master facts related to the surgical experience, anesthetic classifications, and interventions to prevent surgical complications."
      },
      {
        "title": "Operational Phases",
        "desc": "Learn the skills needed during the pre-operative, intra-operative, and recovery room phases of the surgical cycle."
      }
    ],
    "phases": [
      {
        "title": "Phase 1 — Leadership & Education",
        "modules": [
          "Module 1: The Nurse As Team Leader",
          "Module 2: The Nurse As Teacher",
          "First Assessment: Nursing Management Foundations"
        ]
      },
      {
        "title": "Phase 2 — Communication & Cultural Competency",
        "modules": [
          "Module 4: Caring In A Hospital Setting — UK Case Study",
          "Module 5: Communication Skills",
          "Module 6: Transcultural Factors Influencing Nursing",
          "Second Assessment: Clinical Communication"
        ]
      },
      {
        "title": "Phase 3 — Perioperative Excellence",
        "modules": [
          "Module 8: Peri and Pre-Operative Patient Care",
          "Module 9: The Intra-Operative Phase",
          "Module 10: The Recovery Room Phase",
          "Third Assessment: Surgical Care Management"
        ]
      }
    ],
    "instructor": {
      "name": "David K. O’Connor, CSH",
      "title": "Global Occupational Safety & Health Inspector",
      "image": "/assets/images/Faculty/6.png"
    }
  },
  {
    "id": "course-14",
    "slug": "nursing-patient-care",
    "title": "Diploma in Nursing and Patient Care",
    "tag": "Health & Nursing",
    "category": "health",
    "level": "Diploma",
    "duration": "Self-paced (6–12 weeks)",
    "enrollment": "Year-round Flexible",
    "mode": "100% Online Virtual Campus",
    "accreditation": "AISCP Accredited",
    "credits": "15 ECTS Equivalent",
    "tuition": 15000,
    "description": "Mastering the Essentials of Clinical Support and Bedside Excellence",
    "overview": "Nurses and nursing teams play a vital role in patient care within modern healthcare settings. Today's nurse is a highly trained professional working across diverse environments, from community nursing to surgery. This comprehensive course equips you with an understanding of human needs, physical examinations, diet, and vital signs.\n\nThe program focuses on delivering high-quality care to patients, including the elderly, by mastering equipment usage, hygiene standards, and safety protocols. Enrol to bridge the gap between medical knowledge and compassionate, hands-on patient support.",
    "outcomes": [
      {
        "title": "The Nursing Identity",
        "desc": "Describe the essential role of the nurse in patient care, hygiene, and the broader healthcare ecosystem."
      },
      {
        "title": "Safety & Environment",
        "desc": "List critical health and safety measures for nurses and summarise environmental health awareness."
      },
      {
        "title": "Clinical Skills",
        "desc": "Learn to conduct physical examinations, collect specimens, and accurately measure vital signs."
      },
      {
        "title": "Physical Mobility",
        "desc": "Master movement and exercise routines, including positioning, ambulating patients, and range of motion exercises."
      },
      {
        "title": "Nutritional Support",
        "desc": "Summarise the role of the nurse in diet therapy, focusing on therapeutic diets and changing metabolic needs."
      },
      {
        "title": "Patient Comfort",
        "desc": "Study specialised care techniques such as bed-making, oral care, and back massages for comfort."
      }
    ],
    "phases": [
      {
        "title": "Phase 1 — Core Patient Care",
        "modules": [
          "Module 1: Adult Patient Care",
          "Module 2: Advanced Principles of Patient Hygiene",
          "Module 3: Environmental Health and the Practical Nursing",
          "Module 4: First Assessment"
        ]
      },
      {
        "title": "Phase 2 — Safety & Mobility",
        "modules": [
          "Module 5: Health and Safety for Healthcare Professionals",
          "Module 6: Positioning and Ambulating the Adult Patient",
          "Module 7: Active and Passive Ranges of Motion in Exercise",
          "Module 8: Second Assessment"
        ]
      },
      {
        "title": "Phase 3 — Nutrition & Clinical Assessment",
        "modules": [
          "Module 9: Diet Therapy",
          "Module 10: Third Assessment",
          "Module 11: The Physical Examination",
          "Module 12: Specimen Collection",
          "Module 13: The Physical Assessment",
          "Module 14: Measuring Vital Signs",
          "Module 15: Fourth Assessment"
        ]
      },
      {
        "title": "Final Evaluation",
        "modules": [
          "Module 16: Course Assessment"
        ]
      }
    ],
    "instructor": {
      "name": "Arthur Pendelton, PhD",
      "title": "Senior Fellow in Executive Strategy & Decision Making",
      "image": "/assets/images/Faculty/7.png"
    }
  },
  {
    "id": "course-15",
    "slug": "teaching",
    "title": "Diploma in Teaching Skills for Educators",
    "tag": "Education",
    "category": "edu",
    "level": "Diploma",
    "duration": "Self-paced (6–12 weeks)",
    "enrollment": "Year-round Flexible",
    "mode": "100% Online Virtual Campus",
    "accreditation": "AISCP Accredited",
    "credits": "15 ECTS Equivalent",
    "tuition": 15000,
    "description": "Empowering Educators to Inspire, Motivate, and Master the Classroom",
    "overview": "Being a teacher takes more than just accumulated knowledge; it requires the ability to effectively communicate, motivate, and plan. This course is designed to transform you into an effective trainer or teacher by providing the tools needed to stimulate student thinking and manage a dynamic classroom environment.\n\nYou will learn to navigate the complexities of verbal and non-verbal communication, develop measurable instructional goals, and apply psychological theories of motivation. From curriculum frameworks to behavioural management, this program bridges the gap between telling and inspiring.",
    "outcomes": [
      {
        "title": "Classroom Communication",
        "desc": "Identify the functions of communication and master both verbal and non-verbal techniques to stimulate thinking."
      },
      {
        "title": "Participation Structures",
        "desc": "Identify and describe the four main structures that guide classroom communication, evaluating their advantages."
      },
      {
        "title": "Instructional Planning",
        "desc": "Select general learning goals and formulate specific, measurable educational objectives using cognitive or behavioural approaches."
      },
      {
        "title": "Motivation Theory",
        "desc": "Explain and apply theories of behaviourism, self-efficacy, self-determination, attribution, and interest to enhance engagement."
      },
      {
        "title": "Bridging Experiences",
        "desc": "Learn to create connections between educational goals and student experiences to enhance overall learning."
      }
    ],
    "phases": [
      {
        "title": "Phase 1 — The Art of Communication",
        "modules": [
          "Modules 1–2: Effective Verbal and Non-Verbal Communication",
          "Module 3: Structures of Participation",
          "Module 4: Stimulating Students' Thinking through Classroom Talk",
          "First Assessment: Communication Foundations"
        ]
      },
      {
        "title": "Phase 2 — Instructional Goals & Planning",
        "modules": [
          "Modules 6–7: Selecting Goals and Formulating Educational Objectives",
          "Module 8: Students as a Source of Instructional Goals",
          "Modules 9–10: Enhancing Learning and Creating Bridges",
          "Second Assessment: Strategic Planning"
        ]
      },
      {
        "title": "Phase 3 — Motivation & Behavioural Science",
        "modules": [
          "Module 12: Behaviour and Goals as Motivation Sources",
          "Modules 13–15: Theories of Attribution, Self-Efficacy, and Self-Determination",
          "Module 16: Combining Motivation Theories for Classroom Success",
          "Third Assessment: Motivation and Engagement"
        ]
      }
    ],
    "instructor": {
      "name": "Dr. Evelyn Vance, PhD, AISCP",
      "title": "Chair of Behavioral Science & CBT Fellow",
      "image": "/assets/images/Faculty/1.png"
    }
  },
  {
    "id": "course-16",
    "slug": "tourism",
    "title": "Diploma in Tourism Studies",
    "tag": "Hospitality & Tourism",
    "category": "hospi",
    "level": "Diploma",
    "duration": "Self-paced (6–12 weeks)",
    "enrollment": "Year-round Flexible",
    "mode": "100% Online Virtual Campus",
    "accreditation": "AISCP Accredited",
    "credits": "15 ECTS Equivalent",
    "tuition": 15000,
    "description": "Navigating Global Opportunities in a Trillion-Dollar Industry",
    "overview": "Tourism is of immense importance in the modern economy, generating over one trillion dollars in revenue annually across the globe. This diploma course guides you through the vast career opportunities awaiting qualified individuals interested in this exciting and evolving field.\n\nThe curriculum explores the journey of travel from ancient times to the modern era, analysing the critical factors — such as accommodation, transport, and motivation — that influence global movement. Whether you are interested in airline operations, cruise services, or digital travel agencies, this course provides the exact knowledge you need.",
    "outcomes": [
      {
        "title": "Historic Foundations",
        "desc": "Describe how historic travel patterns from ancient and medieval times led to the formation of the modern industry."
      },
      {
        "title": "Sector Analysis",
        "desc": "Outline the various sectors of the tourist industry and the diverse employment opportunities they offer."
      },
      {
        "title": "Travel Motivations",
        "desc": "List the main priorities of business and pleasure travellers and explore how destinations appeal to both groups."
      },
      {
        "title": "Strategic Marketing",
        "desc": "Explain how travel destinations and tourism businesses can effectively use advertising and promotional campaigns."
      },
      {
        "title": "Product Distribution",
        "desc": "Describe the role of tour wholesalers, retail travel agencies, and online travel services in packaging tourism products."
      },
      {
        "title": "Destination Types",
        "desc": "Study the three types of tourist cities — historic, modern, and hybrid — and the appeal of warm-climate destinations."
      },
      {
        "title": "Infrastructure & Amenities",
        "desc": "Discuss the importance of tourist amenities, attractions, and transport systems in supporting the industry."
      }
    ],
    "phases": [
      {
        "title": "Phase 1 — History, Factors, and Infrastructure",
        "modules": [
          "Module 1: History of Travel",
          "Module 2: Factors Influencing Travel (Transport, Time, Money, Motivation)",
          "Module 3: Careers & Tourism (Airlines, Cruises, Agencies)",
          "Module 4: Amenities & Transport",
          "First Assessment: Tourism Foundations"
        ]
      },
      {
        "title": "Phase 2 — Destinations and Global Marketing",
        "modules": [
          "Module 6: Types of Travel (Business vs. Pleasure)",
          "Module 7: Travel Destinations (Historic, Modern, and Hybrid Cities)",
          "Modules 8–9: Advertising Tourism and Promotional Campaigns",
          "Module 10: The Tourist Industry (Wholesalers and Online Services)",
          "Second Assessment: Strategic Tourism Management"
        ]
      },
      {
        "title": "Final Evaluation",
        "modules": [
          "Course Assessment"
        ]
      }
    ],
    "instructor": {
      "name": "Prof. Marcus Sterling, EdD",
      "title": "Director of Educational Leadership & Curriculum",
      "image": "/assets/images/Faculty/2.png"
    }
  },
  {
    "id": "course-17",
    "slug": "waste-to-wealth",
    "title": "Waste-to-Wealth Management & Circular Economy",
    "tag": "Environmental Studies",
    "category": "psy",
    "level": "Certificate",
    "duration": "Self-paced (6–12 weeks)",
    "enrollment": "Year-round Flexible",
    "mode": "100% Online Virtual Campus",
    "accreditation": "AISCP Accredited",
    "credits": "10 ECTS Equivalent",
    "tuition": 15000,
    "description": "A Professional Certification Program — Circular Economy Specialist",
    "overview": "Meghalaya generates approximately 350+ tons of waste daily. The NSDRC mission is to bridge the gap between environmental crisis and economic opportunity. We don't just teach you how to manage waste; we teach you how to engineer a profitable, sustainable business ecosystem.\n\nThis 12-week hybrid program covers the full value chain — from the science of waste transformation and pyrolysis engineering to governance, data compliance, and financial modelling. With 20% on-site practical lab training at field units in Shillong, this is a deeply grounded, real-world course.",
    "outcomes": [
      {
        "title": "Waste Science",
        "desc": "Categorise Meghalaya's waste stream (Organic, Plastic, Hazardous, Agri-residue) and operate small-to-midscale pyrolysis reactors."
      },
      {
        "title": "Bio-Char Engineering",
        "desc": "Optimise heat cycles for different feedstocks (Bamboo vs. Pine) and test bio-char efficacy in local acidic soil conditions."
      },
      {
        "title": "Operations & SOPs",
        "desc": "Draft standard operating procedures for collection, sorting, and processing, with workforce management and risk assessment."
      },
      {
        "title": "Governance & Compliance",
        "desc": "Navigate NGT and SMB regulations; implement DPDP Act (2023) standards for data security in small businesses."
      },
      {
        "title": "Financial Modelling",
        "desc": "Create a 3-year P&L for a waste startup and learn ethical supply chain procurement."
      },
      {
        "title": "Green Marketing",
        "desc": "Position recycled products in national and international markets and write grant applications for PRIME Meghalaya and PMEGP."
      }
    ],
    "phases": [
      {
        "title": "Phase I — The Science of Transformation (Weeks 1–3)",
        "modules": [
          "Waste Categorisation: Meghalaya's waste stream",
          "Pyrolysis & Bio-Char Engineering: Reactor operations and heat cycle optimisation",
          "Soil Science & Application: Testing bio-char in local acidic soil conditions"
        ]
      },
      {
        "title": "Phase II — Operations & Process Design (Weeks 4–6)",
        "modules": [
          "Drafting SOPs for collection, sorting, and processing",
          "Workforce Management: JD mapping for specialised waste roles",
          "Risk Assessment and Labour Law Integration"
        ]
      },
      {
        "title": "Phase III — Governance & Data Compliance (Weeks 7–8)",
        "modules": [
          "Navigating NGT and SMB regulations",
          "Data Security: DPDP Act (2023) standards for small businesses"
        ]
      },
      {
        "title": "Phase IV — The Wealth Strategy (Weeks 9–12)",
        "modules": [
          "Financial Modelling: 3-year P&L for a waste startup",
          "Supply Chain Procurement and Green Brand Marketing",
          "Grant Writing Workshop: PRIME Meghalaya and PMEGP applications"
        ]
      }
    ],
    "instructor": {
      "name": "Dr. Sarah Chen, RN, MSN",
      "title": "Clinical Nursing Director & Patient Care Specialist",
      "image": "/assets/images/Faculty/3.png"
    }
  }
];;

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find(c => c.slug.toLowerCase() === slug.toLowerCase());
}

export function getCoursesByCategory(category: string): Course[] {
  return COURSES.filter(c => c.category === category);
}
