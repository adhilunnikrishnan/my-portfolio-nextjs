// This file contains constants and data used across the portfolio template.
// Update the values to personalize your portfolio.

export const ABOUT_ME = {
  name: "Adhil Unnikrishnan P",
  title: "Backend Developer",
  location: "Irinjalakuda, Thrissur, Kerala, India",
  email: "adhilunnikrishnanofficial@gmail.com",
  description: [
    "Hi, I’m Adhil Unnikrishnan P, a backend developer with a strong focus on building reliable, scalable, and secure server-side applications. I enjoy solving complex problems and turning ideas into efficient APIs and systems.",
    "I’m passionate about developing secure authentication flows, robust RESTful APIs, and intelligent data-driven applications. I enjoy crafting backend systems that are scalable, maintainable, and built with clean, modern architecture.",
  ],
  profileImage: "/profile-image.png", // Replace with your profile image
  profileGif: "/profile-gif.gif", // Replace with your personalised gif
};

export const USER_NAMES = {
  githubUsername: "adhilunnikrishnan",
  leetcodeUsername: "adhilunnikrishnan", // remove or keep blank if you don't have a LeetCode profile
  //   hashnodeUsername: "your-hashnode-username", // remove or keep blank if you don't have a Hashnode profile
};

export const SOCIAL_LINKS = {
  github: "https://github.com/adhilunnikrishnan",
  linkedin: "https://www.linkedin.com/in/adhilunnikrishnan/",
  // twitter: "https://twitter.com/your-twitter",
  leetcode: "https://leetcode.com/u/adhilunnikrishnan/",
  // peerlist: "https://peerlist.io/your-peerlist", // remove or keep blank if you don't have a Peerlist profile
  instagram: "",
  email: "mailto:adhilunnikrishnanofficial@gmail.com",
  // blog: "https://yourblog.com", // remove if you don't have a blog
  resume:
    "https://drive.google.com/file/d/1lf2eQpjK10k9CFMpI7HCLGmskxRb3hdT/view?usp=sharing",
  phone: "+91 7907933057",
  whatsapp: "https://wa.me/ 7907933057",
};

// Contact form endpoint (update with your own Formspree endpoint)
export const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

export const SKILLS = {
  // Keep only the skills you want to showcase and remove the rest
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    // "React",
    // "Next.js",
    "Bootstrap",
  ],
  backend: ["Node.js", "Express.js"],
  databases: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
  languages: [
    "JavaScript",
    "TypeScript",
  ],
  cloudDevOps: ["AWS", "Docker", "Vercel", "GitHub Actions"],
  tools: [
    "VS Code",
    "Git",
    "GitHub",
    "GitLab",
    "Postman",
    "Figma",
    "Jest",
    "Windows",
  ],
};

export const PROJECTS = [
  {
    name: "task-manager-api-ts",
    description:
      " A production-ready Task Manager REST API built with TypeScript, Express, PostgreSQL, Prisma, and Redis — featuring secure auth, role-based access, task management, comments, user controls, and Cloudinary uploads.",
    tech: [
      "Node.js",
      "TypeScript",
      "JWT",
      "Redis",
      "PostgreSQL",
      "Prisma ORM",
      "argon2",
      "Cloudinary",
      "Jest + Supertest",
    ],
    link: "",
    github: "https://github.com/adhilunnikrishnan/node-rest-api-typescript",
  },
  {
    name: "Moonlight-Reads-Ecommerce-WebApp",
    description:
      "Moonlight Reads is designed to offer a modern online bookstore experience for passionate readers. Users can explore a vast collection of books, add favorites to their wishlist, manage their cart, and place orders effortlessly. Admins can efficiently manage books, users, and orders to ensure a smooth and enjoyable reading journey for every customer.",
    tech: [
      "Node.js",
      "JavaScript",
      "Bootstrap 5",
      "Handlebars",
      "Chart.js",
      "Express.js",
      "Multer",
      "MongoDBAtlas",
      "JWT",
    ],
    link: "moonlight-reads.onrender.com/",
    github: "https://github.com/adhilunnikrishnan/Moonlight-Reads-Ecommerce-WebApp",
  },
  // Add more projects as needed
];

export const EXPERIENCE = [
  {
    company: "G-Tec Computer Education",
    companyLink: "",
    role: "Full Stack Development Intern",
    period: "Jul 2025 - Feb 2026 (Expected)",
    location: "Onsite",
    description:
      "Working on full-stack development with a focus on backend engineering. Building secure RESTful APIs, implementing caching and session management with Redis, designing scalable architectures, and integrating relational and NoSQL databases. Gaining hands-on experience with containerization, API performance optimization, and modern JavaScript development workflows.",
    skills: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "TypeScript",
      "React",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "REST APIs",
      "Backend Architecture",
    ],
  },
];

export const EDUCATION = [
  // {
  //   degree: "Bachelor of Computer Applications (BCA) – Online Degree",
  //   institution: " Yenepoya University",
  //   institutionLink: "https://www.yenepoya.edu.in/",
  //   period: "Jul 2025 - Jul 2028  Expected",
  // },
  {
    degree: "Senior Secondary (Plus Two) ",
    institution: "National Higher Secondary School ",
    institutionLink: "",
    period: "Jul 2023 - Mar 2025",
  },
  {
    degree: "Secondary (SSLC)",
    institution: "St.Mary's Higher Secondary School ",
    institutionLink: "",
    period: "Jul 2022 - Mar 2023",
  },

  // Add more education as needed
];
