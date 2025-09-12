export const personalInfo = {
  name: "Muhammad Zawwar Akram",
  title: "MERN Stack Developer",
  tagline: "Passionate about building scalable fullstack web applications",
  email: "muhammadzawwarakram@gmail.com",
  github: "https://github.com/IbtahajAkram",
  linkedin: "https://github.com/IbtahajAkram",
  twitter: "https://github.com/IbtahajAkram"
}

export const skills = {
  frontend: [
    { name: "HTML", icon: "Code" },
    { name: "CSS", icon: "Palette" },
    { name: "TailwindCSS", icon: "Wind" },
    { name: "React.js", icon: "Atom" },
    { name: "Next.js", icon: "Triangle" },
    { name: "TypeScript", icon: "FileCode" },
    { name: "Bootstrap", icon: "Grid3x3" }
  ],
  backend: [
    { name: "Node.js", icon: "Server" },
    { name: "Express.js", icon: "Zap" },
    { name: "Clerk Auth", icon: "Shield" },
    { name: "REST APIs", icon: "Globe" }
  ],
  databases: [
    { name: "PostgreSQL", icon: "Database" },
    { name: "Neon", icon: "Cloud" },
    { name: "MongoDB", icon: "Leaf" }
  ],
  tools: [
    { name: "Docker", icon: "Container" },
    { name: "Git", icon: "GitBranch" },
    { name: "GitHub", icon: "Github" }
  ]
}

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL featuring user authentication, payment integration, and admin dashboard.",
    image: "/api/placeholder/600/400",
    techStack: ["React.js", "Node.js", "PostgreSQL", "TailwindCSS", "Stripe"],
    liveDemo: "https://ecommerce-demo.vercel.app",
    github: "https://github.com/zawwarakram/ecommerce-platform"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
    image: "/api/placeholder/600/400",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Socket.io", "Clerk"],
    liveDemo: "https://taskapp-demo.vercel.app",
    github: "https://github.com/zawwarakram/task-manager"
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with data visualization, scheduling features, and multi-platform integration.",
    image: "/api/placeholder/600/400",
    techStack: ["React.js", "Express.js", "PostgreSQL", "Chart.js", "Docker"],
    liveDemo: "https://social-dashboard-demo.vercel.app",
    github: "https://github.com/zawwarakram/social-dashboard"
  },
  {
    id: 4,
    title: "Learning Management System",
    description: "Educational platform with course management, progress tracking, video streaming, and interactive quizzes for students and instructors.",
    image: "/api/placeholder/600/400",
    techStack: ["Next.js", "Node.js", "MongoDB", "AWS S3", "Stripe"],
    liveDemo: "https://lms-demo.vercel.app",
    github: "https://github.com/zawwarakram/learning-management"
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics using OpenWeatherMap API.",
    image: "/api/placeholder/600/400",
    techStack: ["React.js", "TailwindCSS", "OpenWeather API", "Mapbox"],
    liveDemo: "https://weather-app-demo.vercel.app",
    github: "https://github.com/zawwarakram/weather-forecast"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Responsive portfolio website built with modern web technologies, featuring glassmorphism design, smooth animations, and optimized performance.",
    image: "/api/placeholder/600/400",
    techStack: ["React.js", "TailwindCSS", "Framer Motion", "Vite"],
    liveDemo: "https://zawwarakram.vercel.app",
    github: "https://github.com/zawwarakram/portfolio"
  }
]

export const experience = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    duration: "2023 - Present",
    description: [
      "Lead development of scalable web applications serving 100K+ users",
      "Architected microservices infrastructure using Node.js and Docker",
      "Mentored junior developers and conducted code reviews",
      "Improved application performance by 40% through optimization"
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Innovations Inc",
    duration: "2022 - 2023",
    description: [
      "Developed responsive web applications using React.js and Express.js",
      "Integrated third-party APIs and payment gateways",
      "Collaborated with design team to implement pixel-perfect UI/UX",
      "Reduced loading times by 50% through code optimization"
    ]
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "StartupHub",
    duration: "2021 - 2022",
    description: [
      "Built interactive user interfaces using React.js and TypeScript",
      "Implemented responsive designs with TailwindCSS",
      "Collaborated with backend team for API integration",
      "Enhanced user experience through performance optimization"
    ]
  }
]