export const portfolioData = {
  personal: {
    name: "AYYAPPAN NIREESH",
    shortName: "Ayyappan Nireesh",
    title: "Junior Cyber Security Analyst & Cybersecurity Student",
    phone: "+91 63042 96873",
    typingSubtitles: [
      "Junior Cyber Security Analyst",
      "Cybersecurity Enthusiast",
      "Ethical Hacking Learner",
      "Network Security Explorer"
    ],
    heroDescription: "Motivated and detail-oriented Cyber Security student with knowledge of ethical hacking, network security, vulnerability assessment, and Python. Passionate about cybersecurity technologies and protecting systems from cyber threats.",
    aboutDescription: "I am a motivated Cyber Security student passionate about ethical hacking, network security, vulnerability assessment, and protecting digital systems from cyber threats. I enjoy learning cybersecurity technologies and applying my knowledge through practical projects.",
    location: "Chittoor, Andhra Pradesh, India",
    email: "ayyappannireesh@gmail.com",
    languages: ["Tamil", "Telugu", "English"],
    socialLinks: {
      github: "https://github.com/ayyappannireesh-collab",
      linkedin: "https://linkedin.com/in/a-nireesh",
      email: "mailto:ayyappannireesh@gmail.com"
    }
  },

  stats: [
    { label: "Major Projects", value: "2+", icon: "ShieldCheck" },
    { label: "Current Role", value: "Cyber Security Student", icon: "UserCheck", isText: true },
    { label: "University", value: "Vel Tech University", icon: "GraduationCap", isText: true },
    { label: "Academic GPA", value: "8.5", icon: "Award" }
  ],

  heroStatusCards: [
    { text: "NETWORK SECURE", color: "purple", code: "PORT: 443 | TLS 1.3" },
    { text: "THREAT MONITORING", color: "cyan", code: "IDS: ACTIVE (0 ALERTS)" },
    { text: "SYSTEM ONLINE", color: "purple", code: "UPTIME: 99.9%" },
    { text: "LEARNING MODE: ACTIVE", color: "blue", code: "CEH | RECON ACTIVE" }
  ],

  skills: {
    core: [
      {
        name: "Cybersecurity",
        level: 85,
        category: "Security",
        description: "Understanding core security principles, CIA triad, defense-in-depth strategies, and threat vector analysis."
      },
      {
        name: "Ethical Hacking",
        level: 80,
        category: "Security",
        description: "Understanding security testing methodologies and identifying vulnerabilities in authorized environments."
      },
      {
        name: "Network Security",
        level: 82,
        category: "Security",
        description: "Knowledge of securing networks, analyzing packet flow, firewalls, and understanding network-based threats."
      },
      {
        name: "Vulnerability Assessment",
        level: 78,
        category: "Security",
        description: "Scanning systems for security flaws, prioritizing risk severity, and analyzing potential entry points."
      }
    ],
    programming: [
      {
        name: "Python (Basics)",
        level: 75,
        category: "Programming",
        description: "Automating repetitive tasks, scripting custom security checks, log parsing, and basic socket programming."
      },
      {
        name: "Java (Basics)",
        level: 70,
        category: "Programming",
        description: "Object-oriented programming principles, building secure backend logic, and application flows."
      }
    ],
    technologies: [
      {
        name: "Linux",
        level: 85,
        category: "Tools",
        description: "Experience working with Linux environments (Kali, Ubuntu), shell command-line utilities, and security tools."
      },
      {
        name: "MySQL",
        level: 75,
        category: "Tools",
        description: "Relational database querying, database security fundamentals, user permissions, and SQL sanitization."
      }
    ]
  },

  orbitSkillNodes: [
    { id: 1, name: "CYBERSECURITY", category: "center", x: 0, y: 0, z: 0, color: "#a855f7" },
    { id: 2, name: "Linux", category: "orbit", radius: 2.2, speed: 0.8, angle: 0, color: "#06b6d4" },
    { id: 3, name: "Python", category: "orbit", radius: 2.2, speed: 0.8, angle: 2.1, color: "#3b82f6" },
    { id: 4, name: "Network Sec", category: "orbit", radius: 2.2, speed: 0.8, angle: 4.2, color: "#a855f7" },
    { id: 5, name: "MySQL", category: "orbit", radius: 3.5, speed: 0.5, angle: 1.0, color: "#06b6d4" },
    { id: 6, name: "Java", category: "orbit", radius: 3.5, speed: 0.5, angle: 3.1, color: "#c084fc" },
    { id: 7, name: "Ethical Hacking", category: "orbit", radius: 3.5, speed: 0.5, angle: 5.2, color: "#a855f7" }
  ],

  projects: [
    {
      id: "secure-web-app",
      title: "Secure Web Application with Authentication and Intrusion Detection System",
      shortDescription: "A secure authentication system featuring password encryption using BCrypt, failed login tracking, and automated account locking to mitigate brute-force attacks.",
      fullDescription: "A secure authentication system where users can register and log in safely. Passwords are encrypted using BCrypt before storing them in the database. The application tracks failed login attempts, and if a user enters the wrong password multiple times, the account is automatically locked to help prevent brute-force attacks.",
      technologies: ["Spring Boot", "MySQL", "REST APIs", "BCrypt", "Authentication Security"],
      features: [
        "Secure User Registration",
        "Secure Login",
        "Password Encryption with BCrypt",
        "Failed Login Tracking",
        "Automated Account Locking",
        "Brute Force Protection",
        "Database Integration with MySQL"
      ],
      problemStatement: "Traditional web applications without brute-force protection and proper password hashing are highly vulnerable to credential stuffing and dictionary attacks, leading to unauthorized system access.",
      solution: "Implemented an layered defense in Spring Boot with BCrypt hashing, failed attempt telemetry counters per account, and temporary lockouts after threshold breaches.",
      keyLearnings: [
        "Best practices for cryptographic password hashing and salt handling.",
        "Designing stateful login attempt counters and security session controls.",
        "Building RESTful APIs with strict security filters in Spring Security framework."
      ],
      badge: "SECURITY FEATURED",
      category: "Cybersecurity & Backend",
      color: "purple"
    },
    {
      id: "smart-ai-learning",
      title: "Smart AI Learning for School Education",
      shortDescription: "A full-stack AI-powered educational platform designed for students and teachers, featuring automated quiz generation and multilingual support.",
      fullDescription: "Developed a full-stack AI-powered educational platform for students and teachers. Incorporates intelligent chatbot assistance, automated test creation, cloud video hosting, and multi-language learning tools.",
      technologies: ["React", "Node.js", "AWS", "AI Chatbot"],
      features: [
        "AI Chatbot Support for instant student assistance",
        "Automated Quiz Generation using AI models",
        "Video Lecture Management and streaming",
        "Multilingual Learning Support",
        "Cloud-based File Storage on AWS",
        "Dedicated Student and Teacher Portals"
      ],
      problemStatement: "Educational institutions struggle to deliver personalized assistance to diverse students and automate repetitive teacher tasks such as generating quizzes and hosting curriculum resources.",
      solution: "Engineered a responsive React & Node.js web application integrated with generative AI APIs for real-time tutoring and AWS S3 cloud infrastructure for secure media distribution.",
      keyLearnings: [
        "Architecting full-stack web platforms with role-based access (Student vs Teacher).",
        "Integrating cloud storage solutions (AWS S3) for scalable video asset hosting.",
        "Leveraging LLM APIs to dynamically generate contextual educational quizzes."
      ],
      badge: "FULL STACK AI",
      category: "Full Stack & AI",
      color: "cyan"
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Cyber Security",
      institution: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology (Vel Tech University)",
      duration: "2023 – 2027",
      grade: "GPA: 8.5",
      status: "Currently Pursuing (3rd Year)",
      details: [
        "Focus on Network Security, Ethical Hacking, Data Structures, Operating Systems, and Cryptography.",
        "Active member of Cybersecurity student technical clubs.",
        "Consistently maintaining an 8.5 GPA while executing practical security projects."
      ]
    },
    {
      degree: "Intermediate / Pre-University Education",
      field: "MPC (Mathematics, Physics, Chemistry)",
      institution: "Sri Chaitanya Junior College",
      duration: "2021 – 2023",
      grade: "Aggregate: 57.6%",
      status: "Completed",
      details: [
        "Built core foundational knowledge in Mathematics, Analytical Reasoning, and Computer Fundamentals."
      ]
    },
    {
      degree: "Secondary School Certificate (Class X)",
      field: "General Secondary Education",
      institution: "Camford English High School",
      duration: "2020 – 2021",
      grade: "GPA: 79.17%",
      status: "Completed",
      details: [
        "Graduated with distinction in Science and Mathematics.",
        "Developed early interest in Computer Technology and Logic Programming."
      ]
    }
  ],

  certifications: [
    {
      title: "Certified Ethical Hacker (CEH)",
      organization: "EC-Council",
      status: "Completed",
      issueDate: "2026",
      verifyId: "ECC-CEH-VERIFIED",
      description: "Comprehensive certification covering attack vectors, vulnerability scanning, system hacking, social engineering, web application security, and network defenses.",
      skillsVerified: ["Vulnerability Assessment", "Network Scanning", "System Hacking", "Threat Identification"],
      credentialUrl: "#"
    },
    {
      title: "Introduction to Cybersecurity",
      organization: "Cisco Networking Academy",
      status: "Completed",
      issueDate: "2024",
      verifyId: "CISCO-NETACAD-VERIFIED",
      description: "Official Cisco Networking Academy credential covering online safety fundamentals, common cyber threats, attack vectors, vulnerabilities, and organizational defense strategies.",
      skillsVerified: ["Cyber Threats & Attacks", "Vulnerability Analysis", "Network Defense", "Security Best Practices"],
      credentialUrl: "#"
    }
  ]
};
