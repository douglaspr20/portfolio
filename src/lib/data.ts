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
import type { Project, Skill } from "@/interfaces";

export const personalInfo = {
  name: "Douglas Pérez",
  title: "Software Engineer",
  location: "San Cristobal, Táchira, Venezuela",
  email: "douglas.eduardo2000@gmail.com",
  github: "https://github.com/douglaspr20",
  linkedin: "https://www.linkedin.com/in/douglas-perez-5969331b9/",
  phoneNumber: "+58 (424) 718-4408",
};

export const workExperience = [
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
      " Collaborated with cross-functional teams to gather requirements, design solutions, and deliver projects within deadlines.",
      "Contributed to the optimization of application performance by analyzing system bottlenecks and implementing effective solutions",
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
      "A dynamic software development agency, I worked on multiple projects simultaneously, specializing in the MERN stack. My role involved designing and implementing scalable web applications, ensuring high performance and maintainability",
      "Beyond MERN, I gained extensive experience with Next.js, NestJS, React Native, and AWS (Amplify, Elastic Beanstalk). I worked with PostgreSQL, MySQL, and MongoDB, optimizing database performance and ensuring seamless data management. Additionally, I participated to continuous integration workflows, enhancing deployment efficiency and system reliability.",
      "My ability to adapt to diverse technologies and collaborate across teams allowed me to deliver robust and efficient solutions tailored to client needs",
    ],
  },
  {
    company: "Hacking Lab HR",
    location: "Remote",
    position: "Full Stack Developer",
    period: "Aug 2021 - Sep 2022",
    achievements: [
      "Full-stack developer in charge of DevOps operations, maintenance and creation of new features for the growth of the platform",
    ],
  },
];

export const skills: Skill[] = [
  {
    id: "html",
    name: "HTML5",
    icon: HtmlLogo.src,
    color: "#E34F26",
    description:
      "Lenguaje de marcado para estructurar contenido web. Dominio completo de elementos semánticos, accesibilidad y mejores prácticas.",
    experience: "5 años",
    category: "Frontend",
  },
  {
    id: "css",
    name: "CSS3",
    icon: CssLogo.src,
    color: "#1572B6",
    description:
      "Hojas de estilo en cascada para diseño web. Experiencia con Flexbox, Grid, animaciones y diseño responsive.",
    experience: "5 años",
    category: "Frontend",
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: JsLogo.src,
    color: "#F7DF1E",
    description:
      "Lenguaje de programación dinámico. Dominio de ES6+, programación asíncrona, DOM manipulation y APIs.",
    experience: "4 años",
    category: "Frontend",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: TsLogo.src,
    color: "#007ACC",
    description:
      "Superset de JavaScript que añade tipado estático. Experiencia con interfaces, tipos genéricos y herramientas de desarrollo.",
    experience: "3 años",
    category: "Frontend",
  },
  {
    id: "react",
    name: "React",
    icon: ReactLogo.src,
    color: "#61DAFB",
    description:
      "Biblioteca de JavaScript para construir interfaces de usuario. Hooks, Context API, y patrones de diseño modernos.",
    experience: "3 años",
    category: "Frontend",
  },
  {
    id: "react-native",
    name: "React Native",
    icon: ReactNativeLogo.src,
    color: "#1572B6",
    description:
      "Framework para construir aplicaciones móviles utilizando React. Experiencia con componentes nativos y APIs de dispositivos.",
    experience: "2 años",
    category: "Frontend",
  },
  {
    id: "astro",
    name: "Astro",
    icon: AstroLogo.src,
    color: "#FF5C00",
    description:
      "Framework para construir sitios web rápidos y optimizados. Soporte para múltiples frameworks y generación de contenido estático.",
    experience: "1 año",
    category: "Frontend",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    icon: BootstrapLogo.src,
    color: "#7952B3",
    description:
      "Framework CSS para diseño responsivo y componentes predefinidos. Experiencia con personalización y temas.",
    experience: "3 años",
    category: "Frontend",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: TailwindLogo.src,
    color: "#06B6D4",
    description:
      "Framework CSS utilitario para diseño rápido y flexible. Dominio de clases utilitarias y configuración personalizada.",
    experience: "2 años",
    category: "Frontend",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: NextjsLogo.src,
    color: "#000000",
    description:
      "Framework React para aplicaciones web optimizadas. Soporte para SSR, SSG, API routes y optimización de rendimiento.",
    experience: "2 años",
    category: "Frontend",
  },
  {
    id: "nestjs",
    name: "NestJS",
    icon: NestjsLogo.src,
    color: "#E0234E",
    description:
      "Framework para construir aplicaciones del lado del servidor con Node.js. Arquitectura modular, inyección de dependencias y TypeScript.",
    experience: "2 años",
    category: "Backend",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: PostgresLogo.src,
    color: "#336791",
    description:
      "Sistema de gestión de bases de datos relacional. Experiencia con consultas avanzadas, optimización y administración.",
    experience: "3 años",
    category: "Database",
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: MysqlLogo.src,
    color: "#4479A1",
    description:
      "Sistema de gestión de bases de datos relacional. Dominio de consultas SQL, optimización y administración.",
    experience: "3 años",
    category: "Database",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: MongoLogo.src,
    color: "#47A248",
    description:
      "Base de datos NoSQL orientada a documentos. Experiencia con consultas, agregaciones y escalabilidad horizontal.",
    experience: "2 años",
    category: "Database",
  },
  {
    id: "python",
    name: "Python",
    icon: PythonLogo.src,
    color: "#3776AB",
    description:
      "Lenguaje de programación versátil y fácil de aprender. Experiencia en desarrollo web, automatización y análisis de datos.",
    experience: "2 años",
    category: "Backend",
  },
  {
    id: "docker",
    name: "Docker",
    icon: DockerLogo.src,
    color: "#2496ED",
    description:
      "Plataforma para crear, desplegar y ejecutar aplicaciones en contenedores. Experiencia con Docker Compose y orquestación.",
    experience: "2 años",
    category: "DevOps",
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    icon: KubernetesLogo.src,
    color: "#326CE5",
    description:
      "Sistema de orquestación de contenedores. Experiencia en despliegue, escalado y gestión de aplicaciones en contenedores.",
    experience: "1 año",
    category: "DevOps",
  },
  {
    id: "git",
    name: "Git",
    icon: GitLogo.src,
    color: "#F05032",
    description:
      "Sistema de control de versiones distribuido. Dominio de ramas, merges, pull requests y flujos de trabajo colaborativos.",
    experience: "4 años",
    category: "Version Control",
  },
  {
    id: "aws",
    name: "AWS",
    icon: AwsLogo.src,
    color: "#FF9900",
    description:
      "Plataforma de servicios en la nube. Experiencia con EC2, S3, Lambda y servicios de bases de datos.",
    experience: "1 año",
    category: "Cloud Computing",
  },
  {
    id: "graphql",
    name: "GraphQL",
    icon: GraphqlLogo.src,
    color: "#E10098",
    description:
      "Lenguaje de consulta para APIs. Experiencia en diseño de esquemas, resolvers y optimización de consultas.",
    experience: "1 año",
    category: "API Development",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Una plataforma de comercio electrónico completa construida con Next.js, TypeScript y Stripe. Incluye autenticación, carrito de compras, procesamiento de pagos y panel de administración con métricas en tiempo real.",
    image: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/usuario/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con funcionalidades de arrastrar y soltar, colaboración en tiempo real y notificaciones push. Desarrollada con React y Socket.io para sincronización instantánea.",
    image: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/usuario/task-manager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Dashboard del clima con pronósticos detallados, mapas interactivos y alertas meteorológicas. Integra múltiples APIs de clima y geolocalización para datos precisos y actualizados.",
    image: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/usuario/weather-dashboard",
    liveUrl: "https://weather-demo.vercel.app",
    technologies: ["Vue.js", "D3.js", "OpenWeather API", "Mapbox"],
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "Herramienta de análisis para redes sociales que proporciona insights detallados, métricas de engagement y reportes automatizados para múltiples plataformas sociales principales.",
    image: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/usuario/social-analytics",
    technologies: ["Python", "Django", "Chart.js", "PostgreSQL"],
  },
  {
    id: 5,
    title: "AI Chat Assistant",
    description:
      "Asistente de chat inteligente con procesamiento de lenguaje natural, integración con múltiples modelos de IA y capacidades de aprendizaje contextual para conversaciones más naturales.",
    image: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/usuario/ai-chat-assistant",
    liveUrl: "https://ai-chat-demo.vercel.app",
    technologies: ["Next.js", "OpenAI API", "Langchain", "Supabase"],
  },
];

export const education = {
  degree: [
    {
      id: 1,
      title: "Bachelor of Science in Computer Science",
      institution: "University Name",
      location: "City, Country",
      period: "2018 - 2022",
      gpa: "3.8/4.0",
      description:
        "Comprehensive study in computer science fundamentals, software engineering, and advanced programming concepts.",
      highlights: [
        "Dean's List",
        "Computer Science Society President",
        "Senior Capstone Project: AI-Powered Web Application",
      ],
      skills: [
        "Data Structures",
        "Algorithms",
        "Software Engineering",
        "Database Systems",
        "Machine Learning",
      ],
    },
    {
      id: 2,
      title: "High School Diploma",
      institution: "High School Name",
      location: "City, Country",
      period: "2014 - 2018",
      gpa: "3.9/4.0",
      description:
        "Strong foundation in mathematics and sciences with focus on computer programming.",
      highlights: [
        "Valedictorian",
        "National Honor Society",
        "Programming Club Founder",
      ],
      skills: ["Mathematics", "Physics", "Basic Programming", "Leadership"],
    },
  ],
  certifications: [
    {
      id: 1,
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "March 2023",
      credentialId: "AWS-PSA-12345",
      description:
        "Advanced certification demonstrating expertise in designing distributed systems on AWS.",
      skills: [
        "AWS Architecture",
        "Cloud Security",
        "Cost Optimization",
        "High Availability",
      ],
    },
    {
      id: 2,
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "January 2023",
      credentialId: "GCP-PD-67890",
      description:
        "Professional-level certification for developing scalable applications on Google Cloud Platform.",
      skills: ["GCP Services", "Kubernetes", "Microservices", "CI/CD"],
    },
    {
      id: 3,
      title: "Microsoft Azure Developer Associate",
      issuer: "Microsoft",
      date: "November 2022",
      credentialId: "AZ-204-11111",
      description:
        "Certification in developing cloud solutions using Microsoft Azure services.",
      skills: [
        "Azure Services",
        "Azure Functions",
        "Cosmos DB",
        "Application Insights",
      ],
    },
  ],
};
