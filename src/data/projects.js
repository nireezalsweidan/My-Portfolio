export const projects = [
  {
    id: 'storeflow',
    title: 'StoreFlow',
    subtitle: 'Multi-Tenant SaaS Retail & POS System',
    description:
      'A multi-tenant retail and point-of-sale platform designed to support multiple businesses with secure data isolation and role-based functionality.',
    features: [
      'Multi-tenant architecture',
      'Secure data isolation',
      'JWT authentication',
      'Gmail API integration',
      'Tier-based feature access',
      'Retail/POS functionality',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Gmail API'],
    github: 'https://github.com/nireezalsweidan/StoreFlow',
    featured: true,
    palette: ['#E76F51', '#F4A261', '#FBF7F1'],
    mock: 'pos',
    image: '/images/storeflow.png'
  },
  {
    id: 'lobby',
    title: 'Lobby',
    subtitle: 'Real-time communication platform',
    description:
      'Lobby is a a real-time communication platform. You can use it as a registered member with permanent servers and channels, or you can join a temporary guest room through one link. Both experiences support chat, audio, and screen sharing.',
    features: [
      'Real-time chat',
      'Permanent servers & channels',
      'Temporary link-based guest rooms',
      'Audio calls',
      'Screen sharing',
      'Guest & registered user authentication',
    ],
    technologies: ['NestJS', 'Angular', 'Supabase', 'LiveKit', 'TypeScript'],
    github: 'https://github.com/nireezalsweidan/Lobby',
    featured: false,
    palette: ['#E76F51', '#F4A261', '#FBF7F1'],
    mock: 'lobby',
  },
  {
    id: 'fitconnect',
    title: 'FitConnect',
    subtitle: 'Personal Trainer Booking Platform',
    description:
      'A modern platform that connects clients with personal trainers through trainer discovery, availability management, and booking workflows.',
    features: [
      'Trainer discovery',
      'Dynamic availability',
      'Filtering',
      'Authentication',
      'Role-based access',
      'Booking management',
      'Automated booking notifications',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/nireezalsweidan/FitConnect',
    featured: false,
    palette: ['#2A9D8F', '#E9C46A', '#FFFFFF'],
    mock: 'booking',
  },
  {
    id: 'user-management-api',

    title: 'User Management API',

    subtitle: 'Secure user management REST API',

    description:
      'A secure RESTful User Management API built with FastAPI and MongoDB. It provides user registration, JWT authentication, role-based access control, profile management, admin user management, soft deletion, and public user statistics.',

    features: [
      'JWT authentication & authorization',
      'Client & admin role management',
      'User registration & login',
      'Profile management',
      'Admin user management',
      'Pagination, filtering & searching',
      'Soft deletion',
      'Public user statistics',
    ],

    technologies: [
      'FastAPI',
      'Python',
      'MongoDB',
      'JWT',
      'Pydantic',
    ],

    github: 'https://github.com/nireezalsweidan/Authentication-and-User-Management-System',

    featured: false,

    palette: ['#4F46E5', '#818CF8', '#F5F3FF'],

    mock: 'user-management-api',
  },
  {
    id: 'polyclinic',
    title: 'Polyclinic Management System',
    subtitle: 'Software Engineering Project',
    description:
      'A web-based polyclinic management system developed as a software engineering project, supporting appointment booking, medical records, and controlled user access.',
    features: ['Appointment booking', 'Medical records', 'Controlled user access'],
    technologies: ['Web application', 'Database', 'Software Engineering'],
    github: null,
    featured: false,
    palette: ['#5B8DEF', '#9B5DE5', '#FBF7F1'],
    mock: 'clinic',
  },
  {
    id: 'urbansound',
    title: 'Urban Sound Classification',
    subtitle: 'Deep Learning with CNNs',
    description:
      'A deep learning project using a Convolutional Neural Network to classify urban audio into 10 different sound categories.',
    features: ['CNN architecture', 'Audio classification', '10 sound categories'],
    technologies: ['Python', 'Deep Learning', 'CNN', 'Machine Learning'],
    github: null,
    featured: false,
    palette: ['#9B5DE5', '#F15BB5', '#FBF7F1'],
    mock: 'audio',
  },
  {
    id: 'houseprice',
    title: 'House Price Classification',
    subtitle: 'Machine Learning Project',
    description:
      'A machine learning project using logistic regression to predict whether a house belongs to a high-price or low-price category based on relevant features.',
    features: ['Logistic regression', 'Feature engineering', 'Classification'],
    technologies: ['Python', 'Machine Learning', 'Logistic Regression'],
    github: null,
    featured: false,
    palette: ['#E9C46A', '#E76F51', '#FBF7F1'],
    mock: 'house',
  },
  {
    id: 'blogplatform',
    title: 'Blog Platform',
    subtitle: 'Web Programming Project',
    description:
      'A full-featured blogging platform built with user registration, authentication, content management tools, and rich text editing support.',
    features: [
      'User registration & auth',
      'Content management system',
      'Rich text formatting',
      'Post creation & editing',
    ],
    technologies: ['JavaScript', 'PHP', 'phpMyAdmin', 'HTML/CSS'],
    github: null,
    featured: false,
    palette: ['#3A86EF', '#8338EC', '#FBF7F1'],
    mock: 'blog',
  },
  {
    id: 'flowershop',
    title: 'Flower Shop App',
    subtitle: 'Mobile Application Project',
    description:
      'A mobile application engineered for an online flower store featuring an interactive product catalog, streamlined checkout ordering, and user profiles.',
    features: [
      'Product catalog browsing',
      'Order placement system',
      'User account management',
      'Mobile-optimized UX',
    ],
    technologies: ['Java', 'XML', 'phpMyAdmin', 'PHP'],
    github: null,
    featured: false,
    palette: ['#FF006E', '#FB5607', '#FBF7F1'],
    mock: 'catalog',
  },
];