import AstroLogo from "@/assets/icons/astro.svg";
import HtmlLogo from "@/assets/icons/html.svg";
import CssLogo from "@/assets/icons/css.svg";
import JsLogo from "@/assets/icons/javascript.svg";
import TsLogo from "@/assets/icons/typescript.svg";
import ReactLogo from "@/assets/icons/react.svg";
import ReactNativeLogo from "@/assets/icons/react-native.svg";
import BootstrapLogo from "@/assets/icons/bootstrap.svg";
import TailwindLogo from "@/assets/icons/tailwind.svg";
import NextjsLogo from "@/assets/icons/nextjs.svg";
import NestjsLogo from "@/assets/icons/nestjs.svg";
import PostgresLogo from "@/assets/icons/postgresql.svg";
import MysqlLogo from "@/assets/icons/mysql.svg";
import MongoLogo from "@/assets/icons/mongo.svg";
import PythonLogo from "@/assets/icons/python.svg";
import DockerLogo from "@/assets/icons/docker.svg";
import KubernetesLogo from "@/assets/icons/kubernetes.svg";
import GitLogo from "@/assets/icons/git.svg";
import AwsLogo from "@/assets/icons/aws.svg";
import GraphqlLogo from "@/assets/icons/graphql.svg";
import { personalInfo } from "@/lib/data";

export default {
  seo: {
    title: "Douglas Pérez - Portfolio",
    description: "Commitment, efficiency and good code",
  },
  nav: {
    home: "home",
    experience: "experience",
    skills: "skills",
    projects: "projects",
    education: "education",
    contact: "contact",
  },
  footer: {
    title: "Douglas Pérez",
    rights: "All rights reserved.",
    madeWith: "Made with",
    andALotOf: "and a lot of",
  },

  home: {
    greeting: "Hello, I'm",
    name: "Douglas Pérez",
    roles: [
      "Software Engineer",
      "Full Stack Developer",
      "Problem Solver",
      "Code Enthusiast",
    ],
    slang:
      "Commitment to excellence, dedication to detail, and passion for development.",
    coffee: "Always with a cup of coffee in hand",
  },
  experience: {
    titles: [
      "Work experience",
      "Career background",
      "Employment history",
      "Relevant experience",
    ],
    workExperience: [
      {
        company: "Blue Express",
        location: "Remote",
        position: "Software Developer",
        period: "Mar 2023 - Present",
        achievements: [
          "Developed, tested, and deployed software solutions to optimize business processes and enhance operational efficiency.",
          "Conducted code reviews and applied best practices to improve code quality and maintainability.",
          "Utilized programming languages and frameworks such as Next.js and Nest.js to deliver high performing applications within set deadlines.",
          "Troubleshot, debugged, and resolved software issues to ensure uninterrupted system functionality and user satisfaction.",
          "Contributed to the continuous improvement of development workflows by integrating tools and methodologies such as Agile, CI/CD, Docker, and Kubernetes.",
        ],
      },
      {
        company: "Runa",
        location: "Remote",
        position: "Software Developer",
        period: "Apr 2024 - Jun 2024",
        achievements: [
          "Developed and maintained software applications to meet business requirements, ensuring functionality and performance standards were achieved.",
          "Enforced coding best practices, resulting in improved code quality and software reliability.",
          "Collaborated with cross-functional teams to gather requirements, design solutions, and deliver projects within deadlines.",
          "Contributed to the optimization of application performance by analyzing system bottlenecks and implementing effective solutions.",
        ],
      },
      {
        company: "Sirge",
        location: "Remote",
        position: "Full Stack Developer",
        period: "Jan 2023 - Apr 2024",
        achievements: [
          "At Sirge, I worked as a full-stack developer, primarily dedicated to frontend development. My role involved designing and implementing a robust solution that enabled users to efficiently track their advertisements. I ensured a seamless user experience and optimized tracking mechanisms to enhance campaign performance.",
          "Additionally, I was responsible for integrating social media platforms with Sirge’s system. Through API connections, I facilitated the extraction of users' advertisements from their accounts, allowing for streamlined data management and improved analytics. My contributions helped refine the platform’s capabilities, ensuring a smooth and effective ad-tracking experience.",
        ],
      },
      {
        company: "Crazy Imagine Software",
        location: "San Cristobal, Venezuela",
        position: "Full Stack Developer",
        period: "Mar 2021 - Apr 2024",
        achievements: [
          "A dynamic software development agency, I worked on multiple projects simultaneously, specializing in the MERN stack. My role involved designing and implementing scalable web applications, ensuring high performance and maintainability.",
          "Beyond MERN, I gained extensive experience with Next.js, NestJS, React Native, and AWS (Amplify, Elastic Beanstalk). I worked with PostgreSQL, MySQL, and MongoDB, optimizing database performance and ensuring seamless data management. Additionally, I participated in continuous integration workflows, enhancing deployment efficiency and system reliability.",
          "My ability to adapt to diverse technologies and collaborate across teams allowed me to deliver robust and efficient solutions tailored to client needs.",
        ],
      },
      {
        company: "Hacking Lab HR",
        location: "Remote",
        position: "Full Stack Developer",
        period: "Aug 2021 - Sep 2022",
        achievements: [
          "Full-stack developer in charge of DevOps operations, maintenance and creation of new features for the growth of the platform.",
        ],
      },
    ],
    keyAchievements: "Key achievements",
  },
  skills: {
    titles: ["Skills", "Technologies", "Expertise", "Powers"],
    experienceLevelLabel: "Experience Level",
    skills: [
      {
        id: "html",
        name: "HTML5",
        icon: HtmlLogo.src,
        color: "#E34F26",
        description:
          "Markup language for structuring web content. Full mastery of semantic elements, accessibility, and best practices.",
        experience: "5 years",
        category: "Frontend",
      },
      {
        id: "css",
        name: "CSS3",
        icon: CssLogo.src,
        color: "#1572B6",
        description:
          "Cascading Style Sheets for web design. Experience with Flexbox, Grid, animations, and responsive design.",
        experience: "5 years",
        category: "Frontend",
      },
      {
        id: "javascript",
        name: "JavaScript",
        icon: JsLogo.src,
        color: "#F7DF1E",
        description:
          "Dynamic programming language. Mastery of ES6+, asynchronous programming, DOM manipulation, and APIs.",
        experience: "5 years",
        category: "Frontend",
      },
      {
        id: "typescript",
        name: "TypeScript",
        icon: TsLogo.src,
        color: "#007ACC",
        description:
          "Superset of JavaScript that adds static typing. Experience with interfaces, generic types, and development tools.",
        experience: "4 years",
        category: "Frontend",
      },
      {
        id: "react",
        name: "React",
        icon: ReactLogo.src,
        color: "#61DAFB",
        description:
          "JavaScript library for building user interfaces. Hooks, Context API, and modern design patterns.",
        experience: "5 years",
        category: "Frontend",
      },
      {
        id: "react-native",
        name: "React Native",
        icon: ReactNativeLogo.src,
        color: "#1572B6",
        description:
          "Framework for building mobile applications using React. Experience with native components and device APIs.",
        experience: "3 years",
        category: "Frontend",
      },
      {
        id: "astro",
        name: "Astro",
        icon: AstroLogo.src,
        color: "#FF5C00",
        description:
          "Framework for building fast and optimized websites. Support for multiple frameworks and static content generation.",
        experience: "1 year",
        category: "Frontend",
      },
      {
        id: "bootstrap",
        name: "Bootstrap",
        icon: BootstrapLogo.src,
        color: "#7952B3",
        description:
          "CSS framework for responsive design and predefined components. Experience with customization and themes.",
        experience: "4 years",
        category: "Frontend",
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        icon: TailwindLogo.src,
        color: "#06B6D4",
        description:
          "Utility-first CSS framework for fast and flexible design. Mastery of utility classes and custom configuration.",
        experience: "3 years",
        category: "Frontend",
      },
      {
        id: "nextjs",
        name: "Next.js",
        icon: NextjsLogo.src,
        color: "#000000",
        description:
          "React framework for optimized web applications. Support for SSR, SSG, API routes, and performance optimization.",
        experience: "3 years",
        category: "Frontend",
      },
      {
        id: "nestjs",
        name: "NestJS",
        icon: NestjsLogo.src,
        color: "#E0234E",
        description:
          "Framework for building server-side applications with Node.js. Modular architecture, dependency injection, and TypeScript.",
        experience: "4 years",
        category: "Backend",
      },
      {
        id: "postgresql",
        name: "PostgreSQL",
        icon: PostgresLogo.src,
        color: "#336791",
        description:
          "Relational database management system. Experience with advanced queries, optimization, and administration.",
        experience: "4 years",
        category: "Database",
      },
      {
        id: "mysql",
        name: "MySQL",
        icon: MysqlLogo.src,
        color: "#4479A1",
        description:
          "Relational database management system. Mastery of SQL queries, optimization, and administration.",
        experience: "4 years",
        category: "Database",
      },
      {
        id: "mongodb",
        name: "MongoDB",
        icon: MongoLogo.src,
        color: "#47A248",
        description:
          "Document-oriented NoSQL database. Experience with queries, aggregations, and horizontal scalability.",
        experience: "4 years",
        category: "Database",
      },
      {
        id: "python",
        name: "Python",
        icon: PythonLogo.src,
        color: "#3776AB",
        description:
          "Versatile and easy-to-learn programming language. Experience in web development, automation, and data analysis.",
        experience: "2 years",
        category: "Backend",
      },
      {
        id: "docker",
        name: "Docker",
        icon: DockerLogo.src,
        color: "#2496ED",
        description:
          "Platform for creating, deploying, and running applications in containers. Experience with Docker Compose and orchestration.",
        experience: "2 years",
        category: "DevOps",
      },
      {
        id: "kubernetes",
        name: "Kubernetes",
        icon: KubernetesLogo.src,
        color: "#326CE5",
        description:
          "Container orchestration system. Experience in deployment, scaling, and management of containerized applications.",
        experience: "1 year",
        category: "DevOps",
      },
      {
        id: "git",
        name: "Git",
        icon: GitLogo.src,
        color: "#F05032",
        description:
          "Distributed version control system. Mastery of branches, merges, pull requests, and collaborative workflows.",
        experience: "5 years",
        category: "Version Control",
      },
      {
        id: "aws",
        name: "AWS",
        icon: AwsLogo.src,
        color: "#FF9900",
        description:
          "Cloud services platform. Experience with EC2, S3, Lambda, and database services.",
        experience: "1 year",
        category: "Cloud Computing",
      },
      {
        id: "graphql",
        name: "GraphQL",
        icon: GraphqlLogo.src,
        color: "#E10098",
        description:
          "Query language for APIs. Experience in schema design, resolvers, and query optimization.",
        experience: "2 year",
        category: "API Development",
      },
    ],
  },
  projects: {
    titles: ["Projects", "Works", "Successes"],
    projects: [
      {
        id: 1,
        title: "Astro Store",
        description:
          "E-commerce platform built with Astro, featuring a modern design, product management, and secure payment integration. Authenticatio with Auth.js, data storage on Turso, and deployments on Netlify",
        image: "/images/astro-store.webp",
        githubUrl: `${personalInfo.github}/astro-store`,
        liveUrl: "https://douglasastrostore.netlify.app/",
        technologies: [
          "Astro",
          "TypeScript",
          "Stripe",
          "React",
          "Turso",
          "Auth.js",
        ],
      },
      {
        id: 2,
        title: "Chrome Extension",
        description:
          "Chrome extension built with React and TypeScript, designed to enhance user productivity creating a contacts manager with advanced search and filtering capabilities",
        githubUrl: `${personalInfo.github}/Chrome-extension`,
        technologies: ["React", "TypeScript", "Webpack", "Babel"],
      },
      {
        id: 3,
        title: "Discord Python Bot",
        description:
          "Discord bot developed in Python, featuring IA integration for natural language processing, user interaction, and automated responses. Also integrate search capabilities from wikipedia and YouTube.",
        githubUrl: `${personalInfo.github}/discord-bot-python`,
        technologies: ["Python", "Discord API", "Natural Language Processing"],
      },
      {
        id: 4,
        title: "Microservices Rest Api",
        description:
          "Microservices architecture REST API built with Nest.js, designed for scalability and modularity. Includes user authentication, product management, and order processing functionalities. Deployed on AWS with Docker containers.",
        githubUrl: `https://github.com/orgs/Nest-Microservices-Curso-Douglas/repositories`,
        technologies: [
          "Nest.js",
          "TypeScript",
          "PostgreSQL",
          "MongoDB",
          "Docker",
          "Kubernetes",
          "stripe",
        ],
      },
      {
        id: 5,
        title: "Douglas's Blog",
        description:
          "A personal blog built with Astro, showcasing articles on technology, programming, and personal experiences. Features a clean design, responsive layout, and easy navigation.",
        image: "/images/astro-blog.webp",
        githubUrl: `${personalInfo.github}/douglas-blog`,
        liveUrl: "https://douglas-blog.netlify.app/",
        technologies: ["Astro", "TypeScript", "Markdown"],
      },
    ],
    buttonMoreProjectOnGitHub: "More projects on GitHub",
  },
  education: {
    titles: [
      "Professional Journey",
      "Education background",
      "Certifications",
      "Achievements",
    ],
    tabsLabels: {
      education: "Education",
      certifications: "Certifications",
    },
    degrees: [
      {
        id: 1,
        title: "Bachelor of Science in Computer Science",
        institution:
          "Universidad Politécnica Territorial Agroindustrial del Estado Táchira",
        location: "San Cristóbal, Venezuela",
        period: "2017 - 2021",
        description:
          "Comprehensive education in computer science, focusing on software development, algorithms, and data structures. Developed strong problem-solving skills and practical experience through projects and internships.",
        highlights: [
          "Graduated with honors",
          "Dean's List for academic excellence",
          "Capstone project on machine learning algorithms",
        ],
        skills: [
          "Data Structures",
          "Algorithms",
          "Software Engineering",
          "Database Systems",
          "Machine Learning",
          "Web Development",
          "Mobile Application Development",
        ],
      },
      {
        id: 2,
        title: "High School Diploma",
        institution: "U.E Colegio Aplicación",
        location: "Cárdenas, Venezuela",
        period: "2012 - 2017",
        description:
          "Foundational education with a focus on mathematics, physics, and computer science. Developed analytical skills and a passion for technology through extracurricular activities.",
        highlights: [
          "Graduated with distinction",
          "Participated in science fairs and coding competitions",
        ],
        skills: ["Mathematics", "Physics", "Basic Programming", "Leadership"],
      },
    ],
    certifications: [
      {
        id: 1,
        title:
          "Udemy certified NestJS + Microservicios: Aplicaciones escalables y modulares",
        issuer: "Udemy",
        date: "Ago 2024",
        credentialId: "UC-28e6158a-19e5-4977-b6f3-6502de4666b3",
        description:
          "Comprehensive course on building scalable and modular applications using NestJS and microservices architecture.",
        skills: [
          "NestJS",
          "Microservices",
          "TypeScript",
          "API Development",
          "Kubernetes",
          "Docker",
          "PostgreSQL",
          "MongoDB",
          "Google Cloud",
        ],
      },
      {
        id: 2,
        title: "Udemy certified Principios solid and Clean Code",
        issuer: "Udemy",
        date: "Sept 2024",
        credentialId: "UC-8518806e-ad37-4bee-b10f-29812e807227",
        description:
          "In-depth course on SOLID principles and Clean Code practices for writing maintainable and scalable software.",
        skills: [
          "SOLID Principles",
          "Clean Code",
          "Software Design",
          "Refactoring",
          "Best Practices",
        ],
      },
      {
        id: 3,
        title:
          "Udemy certified Astro: El framework para sitios web orientados al contenido",
        issuer: "Udemy",
        date: "Abr 2025",
        credentialId: "UC-bbd27e1c-bb83-477a-bb79-6846c985815c",
        description:
          "Comprehensive course on building content-focused websites using Astro, covering static site generation, component-based architecture, and performance optimization.",
        skills: [
          "Astro",
          "Static Site Generation",
          "Component-based Architecture",
          "Performance Optimization",
        ],
      },
    ],
  },
  contact: {
    titles: [
      "Let's work together",
      "Contact me",
      "Get in touch",
      "Start your project",
      "Say hello",
    ],
    inputs: {
      name: {
        label: "Name",
        placeholder: "Your name",
      },
      email: {
        label: "Email",
        placeholder: "your@email.com",
      },
      message: {
        label: "Message",
        placeholder: "Tell me about your project...",
      },
    },
    submitButton: "Send message",
    letsTalk: "Let's talk!",
    description:
      "I'm available for new projects and collaborations. Don't hesitate to reach out to discuss your ideas.",
  },
};
