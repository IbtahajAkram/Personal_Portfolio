export const personalInfo = {
  name: "Muhammad Zawwar Akram",
  title: "MERN Stack Developer",
  tagline: "Passionate about building scalable fullstack web applications",
  email: "muhammadzawwarakram@gmail.com",
  github: "https://github.com/IbtahajAkram",
  linkedin: "https://github.com/IbtahajAkram",
  twitter: "https://github.com/IbtahajAkram"
}

import cook from "../assets/cook.png"
import athletehub from "../assets/athletehub.png"
import socialmeet from "../assets/socialmeetOverview.jpeg"
import postwriter from "../assets/contentwriter.jpeg"
import socialMeetVideo from "../assets/project-socialy-meet.mp4"
import athleteHubVideo from "../assets/project-athelete-hub.webm"
import aiChatbot from "../assets/ai-chatbot.png"
import projectAiChatbotVideo from "../assets/project-ai-chatbot.webm"
import aiContentWriterVideo from "../assets/project-ai-content-writter.webm"
import aiVoiceTranslationImage from "../assets/project-ai-voice-translation.png"
import aiVoiceTranslationVideo from "../assets/project-ai-voice-translation.webm"
import cateringVideo from "../assets/project-caterng-website.webm"
import cateringImage from "../assets/project-catering-website.png"  
import weddingHallVideo from "../assets/project-wedding-halls.webm"
import weddingHallImage from "../assets/project-wedding-halls.png"

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
    id: 6,
    title: "Socialy Meet – Full-Stack Social Media Platform",
    description:
      "A complete social media experience built from scratch, similar to Facebook. Includes post creation, editing, deletion, likes, comments, and sharing. Users can manage profiles, send and accept friend requests, follow others, get instant notifications, and interact in a vibrant online community.",
    image: socialmeet,
    video: socialMeetVideo,
    techStack: [
      "React.js",
      "TailwindCSS",
      "WebSockets",
      "Vite",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Neon",
      "Cloudinary",
    ],
    liveDemo: "https://socialy-meets.vercel.app",
    github: "#",
  },
  {
    id: 1,
    title: "Cooking Recipe Maestro – Smart Recipe Explorer",
    description:
      "A modern web app that helps users discover, create, and save delicious recipes with ease. Explore dishes by ingredients, cuisine, or dietary preferences — making cooking more fun and organized.",
    image: cook,
    techStack: ["React.js","vite", "TailwindCSS", "Shadcn","Motion"],
    liveDemo: "https://zawwar-cooking-recipe-mastero.vercel.app",
    github: "#",
  },
  {
  id: 7,
  title: "AthleteHub – Sports Management Dashboard",
  description:
    "A modern admin dashboard for managing athletes, coaches, groups, and performance analytics. Built with React, TailwindCSS, and Recharts, AthleteHub provides real-time stats, visual insights, and subscription management with a clean UI.",
  image: athletehub, // import your project screenshot here
  video: athleteHubVideo,
  techStack: ["React.js", "TailwindCSS", "TypeScript", "Recharts", "Shadcn", "Motion"],
  liveDemo: "#",
  github: "#",
},
  {
    id: 2,
    title: "AI Content Writer – Intelligent Writing Assistant",
    description:
      "An advanced AI-powered tool that generates high-quality blogs, articles, and social media posts in seconds — helping users write faster, smarter, and more creatively.",
    image: postwriter,
    video: aiContentWriterVideo,
    techStack: ["React.js","Vite", "TypeScript","ai","Gemini", "TailwindCSS", "Shadcn","Motion"],
    liveDemo: "https://ai-content-writer-orpin.vercel.app/",
    github: "#",
  },
  {
    id: 3,
    title: "AI ChatBot – Smart Conversational Assistant",
    description:
      "A full-stack AI chatbot that delivers natural, human-like conversations. Designed for customer support and task automation with real-time responses and contextual understanding.",
    image: aiChatbot,
    video: projectAiChatbotVideo,
    techStack: ["React.js", "Express.js", "PostgreSQL", "Chart.js", "Docker"],
    liveDemo: "https://social-dashboard-demo.vercel.app",
    github: "https://github.com/zawwarakram/social-dashboard",
  },
  {
    id: 4,
    title: "AI Voice Translator – Real-Time Speech Conversion",
    description:
      "An intelligent voice translation platform that converts spoken language into multiple languages in real time — perfect for travel, learning, and global communication.",
    image: aiVoiceTranslationImage,
    video: aiVoiceTranslationVideo,
    techStack: ["React.js", "Node.js","ExpressJS", "AI", "WebRTC", "TailwindCSS"],
    // liveDemo: "#",
    // github: "#",
  },{
  id: 4,
  title: "Catering Management System – Smart Event Catering Platform",
  description:
    "A full-featured catering management platform that allows customers to browse menus, book catering services for events.",
  image: cateringImage, // import karo apni catering image yahan
  video: cateringVideo, // optional: demo video link ya local import
  techStack: ["React.js", "Vite.js", "Tailwindcss", "Motion"],
  liveDemo: "https://catering-service-dusky.vercel.app/",
  // github: "https://github.com/yourusername/catering-management-system",
},
{
  id: 5,
  title: "Wedding Halls Management System – Smart Venue Booking Platform",
  description:
    "A modern web platform for managing wedding halls and event venues. Users can explore available halls, check availability, and make online bookings.",
  image: weddingHallImage, // import your image here
  video: weddingHallVideo, // optional: add your demo video if available
  techStack: ["React.js", "vite.js", "Motion", "Typescript", "TailwindCSS"],
  liveDemo: "https://wedding-halls-nu.vercel.app/",
  // github: "https://github.com/yourusername/wedding-hall-management-system",
},

  // {
  //   id: 5,
  //   title: "AI Voice to Text – Speech",
  //   description:
  //     "A powerful app that transcribes voice input into accurate text instantly. Built for accessibility, productivity, and seamless integration into modern workflows.",
  //   image: "/api/placeholder/600/400",
  //   techStack: ["React.js", "TailwindCSS", "OpenWeather API", "Mapbox"],
  //   liveDemo: "https://weather-app-demo.vercel.app",
  //   github: "https://github.com/zawwarakram/weather-forecast",
  // },
  // {
  //   id: 8,
  //   title: "Tech Blogs – Modern Blogging Platform",
  //   description:
  //     "✨ A sleek, responsive, and SEO-optimized tech blogging platform where users can explore insightful articles, tutorials, and trends in modern web development. Built with React.js and TailwindCSS, it delivers lightning-fast performance and an elegant reading experience.",
  //   image: "/api/placeholder/600/400",
  //   techStack: ["React.js", "TailwindCSS", "OpenWeather API", "Mapbox"],
  //   liveDemo: "https://weather-app-demo.vercel.app",
  //   github: "https://github.com/zawwarakram/weather-forecast",
  // },
];


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