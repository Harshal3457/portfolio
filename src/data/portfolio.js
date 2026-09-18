// ============================================================
// PORTFOLIO DATA — Single source of truth
// All information is factual. Do not add unverified data.
// ============================================================

export const personal = {
  name: 'Harshal Chaudhari',
  title: 'Python Full Stack Developer',
  location: 'Pune, India',
  locationFull: 'Akurdi, Pune, Maharashtra, India',
  email: 'hchaudhari752@gmail.com',
  phone: '+91-8999006052',
  status: 'Available for Opportunities',
  github: 'https://github.com/Harshal3457',
  githubUsername: 'Harshal3457',
  linkedin: 'https://www.linkedin.com/in/harshal-chaudhari-608a21224',
  liveProject: 'https://successscienceacademy.com/',
  resumeUrl: '/Harshal_Chaudhari_Python_Fullstack_Resume.pdf',
  bio: 'I build practical web applications with React.js, Python, FastAPI, REST APIs, and SQL.',
  summary:
    'Python Full Stack Developer with hands-on experience building web applications using React.js, Python, FastAPI, REST APIs, MySQL, and PostgreSQL. Strong understanding of software development fundamentals, database operations, API development, authentication, role-based access control, data validation, debugging, and SDLC practices.',
  aboutStatement: 'I like turning requirements into working software.',
  aboutDescription:
    'MCA graduate focused on Python full-stack development. I work with React.js on the frontend, FastAPI and REST APIs on the backend, and MySQL/PostgreSQL for data. My internship and project experience have given me hands-on exposure to building real applications — from API development and database design to authentication, role-based access, and deployment workflows. I focus on writing functional, maintainable code and understanding the systems I build.',
};

export const metrics = [
  { value: '8.56', label: 'MCA CGPA' },
  { value: '9.33', label: 'BCA CGPA' },
  { value: '03', label: 'Selected Projects' },
  { value: '02', label: 'NPTEL Certifications' },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  {
    category: 'Backend Development',
    description: 'Building API-driven web applications',
    items: ['Python', 'FastAPI', 'REST APIs', 'JWT', 'RBAC'],
  },
  {
    category: 'Frontend Development',
    description: 'Component-based user interfaces',
    items: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3'],
  },
  {
    category: 'Databases',
    description: 'Relational and document data stores',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL'],
  },
  {
    category: 'Data & Libraries',
    description: 'Data processing and analysis',
    items: ['Pandas', 'NumPy', 'Data Validation', 'EDA'],
  },
  {
    category: 'Tools & Development',
    description: 'Development workflow and environment',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'Jupyter'],
  },
  {
    category: 'Core Engineering',
    description: 'Fundamentals and methodology',
    items: ['OOP', 'DSA', 'SDLC', 'API Testing', 'Debugging', 'Client-Server Architecture'],
  },
];

export const experience = [
  {
    company: 'LM Software Solutions Pvt. Ltd.',
    role: 'Software Developer Intern',
    type: 'Internship',
    duration: 'Nov 2025 — Apr 2026',
    location: 'Pune, India',
    stack: [
      'React.js',
      'Python',
      'FastAPI',
      'REST APIs',
      'MySQL',
      'SQL',
      'Pandas',
      'NumPy',
      'Postman',
      'Git',
      'GitHub',
      'Docker',
    ],
    responsibilities: [
      'Worked on full-stack web development using React.js, Python/FastAPI, REST APIs, and MySQL',
      'Developed and integrated REST APIs for web application functionality',
      'Worked with SQL queries including JOIN, GROUP BY, filtering, and subqueries',
      'Performed data cleaning, preprocessing, validation, and exploratory analysis using Python, Pandas, and NumPy where required',
      'Used Postman for API testing and debugging',
      'Worked with JSON-based API communication',
      'Used Git and GitHub for version control',
      'Worked with Docker during development',
      'Participated in software development, debugging, testing, and implementation activities',
    ],
  },
];

export const projects = [
  {
    id: 'lms',
    number: '01',
    title: 'Success Science Academy',
    subtitle: 'Full Stack LMS',
    category: 'Full-Stack Application',
    duration: '2025 — 2026',
    description:
      'A full-stack Learning Management System designed to manage educational operations and user roles.',
    liveUrl: 'https://successscienceacademy.com/',
    githubUrl: null,
    stack: ['React.js', 'FastAPI', 'PostgreSQL', 'REST APIs', 'RBAC', 'Docker', 'Git/GitHub', 'SQL', 'JSON'],
    architectureFlow: ['React.js', 'REST API', 'FastAPI', 'PostgreSQL'],
    contributions: [
      'Worked on fees and result-related super-admin modules',
      'Implemented frontend functionality using React.js',
      'Worked with FastAPI backend APIs',
      'Integrated PostgreSQL database operations',
      'Implemented role-based access control concepts',
      'Worked with REST APIs and JSON data',
      'Implemented data validation and debugging',
      'Used Git/GitHub and Docker during development',
    ],
    highlights: ['Fees Module', 'Results Module', 'Super Admin', 'RBAC', 'API Integration', 'Database Ops', 'Validation'],
  },
  {
    id: 'qualiket',
    number: '02',
    title: 'Qualiket Research',
    subtitle: 'Strategic Report Automation Platform',
    category: 'Full-Stack Application',
    duration: 'Mar 2026 — Apr 2026',
    description:
      'A full-stack platform designed to automate the generation of strategic reports.',
    liveUrl: null,
    githubUrl: null,
    stack: ['React.js', 'Python', 'REST APIs', 'JWT', 'RBAC', 'python-pptx', 'Git'],
    architectureFlow: ['React.js', 'REST API', 'Python Backend', 'PowerPoint Output'],
    contributions: [
      'Built frontend functionality using React.js',
      'Worked on Python-based backend functionality',
      'Worked with REST API communication',
      'Implemented authentication and role-based access concepts',
      'Automated PowerPoint report generation using python-pptx',
      'Worked on dynamic content generation',
      'Implemented adaptive font scaling and layout handling for generated reports',
      'Worked with Git for version control',
    ],
    highlights: ['React Frontend', 'Python Backend', 'REST APIs', 'Auth & RBAC', 'Report Generation', 'Adaptive Layout'],
  },
  {
    id: 'marketplace',
    number: '03',
    title: 'MarketPlace',
    subtitle: 'Project Source Code Marketplace',
    category: 'Java Web Application',
    duration: null,
    description:
      'A Java web application for managing and accessing project source-code marketplace functionality.',
    liveUrl: null,
    githubUrl: null,
    stack: ['Java', 'Servlets', 'JSP', 'JDBC', 'MySQL', 'Tomcat', 'HTML', 'CSS'],
    architectureFlow: ['JSP', 'Servlet', 'JDBC', 'MySQL'],
    contributions: [
      'Developed Java web application functionality',
      'Used Servlets and JSP',
      'Implemented JDBC-based database connectivity',
      'Worked with MySQL CRUD operations',
      'Used MVC architecture concepts',
      'Implemented authentication/session handling',
      'Worked with database schema and backend logic',
      'Deployed/tested using Apache Tomcat',
    ],
    highlights: ['MVC Architecture', 'Auth/Sessions', 'CRUD Ops', 'DB Schema', 'JDBC', 'Tomcat'],
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'D. Y. Patil Institute of Master of Computer Application and Management',
    location: 'Akurdi, Pune',
    duration: '2024 — 2026',
    cgpa: '8.56',
    achievement: 'First Class with Distinction',
    credits: '95/95',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Dhanaji Nana Mahavidyalaya',
    location: 'Faizpur',
    duration: '2021 — 2024',
    cgpa: '9.33',
    achievement: null,
    credits: null,
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: null,
    location: null,
    duration: null,
    cgpa: null,
    achievement: '70%',
    credits: null,
  },
];

export const certifications = [
  {
    issuer: 'NPTEL',
    title: 'Programming in Java',
    institution: 'IIT Kharagpur',
    year: '2025',
    grade: 'Elite',
  },
  {
    issuer: 'NPTEL',
    title: 'Data Structures and Algorithms using Java',
    institution: 'IIT Kharagpur',
    year: '2025',
    grade: 'Elite',
  },
];

export const engineeringWorkflow = [
  {
    step: '01',
    title: 'Understand',
    subtitle: 'Requirements & problem',
    description: 'Analyze project requirements, understand the problem domain, and define clear objectives before writing any code.',
  },
  {
    step: '02',
    title: 'Design',
    subtitle: 'Application architecture',
    description: 'Plan the application structure — database schema, API endpoints, component hierarchy, and data flow between frontend and backend.',
  },
  {
    step: '03',
    title: 'Build',
    subtitle: 'React + FastAPI + REST APIs',
    description: 'Develop the frontend with React.js components and the backend with FastAPI endpoints. Connect them through well-defined REST APIs.',
  },
  {
    step: '04',
    title: 'Connect',
    subtitle: 'MySQL / PostgreSQL',
    description: 'Set up database operations — schema design, queries, joins, data validation, and ORM integration with the application backend.',
  },
  {
    step: '05',
    title: 'Test',
    subtitle: 'Postman + debugging',
    description: 'Test API endpoints with Postman, debug issues systematically, validate data flows, and verify authentication and authorization logic.',
  },
  {
    step: '06',
    title: 'Ship',
    subtitle: 'Git + Docker',
    description: 'Version control with Git, containerize with Docker, manage deployments, and maintain clean commit history for collaboration.',
  },
];

export const commandPaletteItems = [
  { label: 'Go to About', action: 'navigate', target: '#about', icon: '→' },
  { label: 'Go to Experience', action: 'navigate', target: '#experience', icon: '→' },
  { label: 'Go to Projects', action: 'navigate', target: '#projects', icon: '→' },
  { label: 'Go to Stack', action: 'navigate', target: '#stack', icon: '→' },
  { label: 'Go to Contact', action: 'navigate', target: '#contact', icon: '→' },
  { label: 'Open GitHub', action: 'external', target: 'https://github.com/Harshal3457', icon: '↗' },
  { label: 'Open LinkedIn', action: 'external', target: 'https://www.linkedin.com/in/harshal-chaudhari-608a21224', icon: '↗' },
  { label: 'Send Email', action: 'external', target: 'mailto:hchaudhari752@gmail.com', icon: '✉' },
];
