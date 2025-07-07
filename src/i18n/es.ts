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
    title: "Douglas Pérez - Portafolio",
    description: "Compromiso, eficiencia y buen código",
  },

  nav: {
    home: "Inicio",
    experience: "Experiencia",
    skills: "Habilidades",
    projects: "Proyectos",
    education: "Educación",
    contact: "Contacto",
  },
  footer: {
    title: "Douglas Pérez",
    rights: "Todos los derechos reservados.",
    madeWith: "Hecho con",
    andALotOf: "y un montón de",
  },

  home: {
    greeting: "Hola, soy",
    name: "Douglas Pérez",
    roles: [
      "Ingeniero de Software",
      "Desarrollador Full Stack",
      "Solucionador de Problemas",
      "Entusiasta del Código",
    ],
    slang:
      "Compromiso con la excelencia, dedicación al detalle y pasión por el desarrollo.",
    coffee: "Siempre con una taza de café en la mano",
  },
  experience: {
    titles: [
      "Experiencia laboral",
      "Antecedentes profesionales",
      "Historial laboral",
      "Experiencia relevante",
    ],
    workExperience: [
      {
        company: "Blue Express",
        location: "Remoto",
        position: "Desarrollador de Software",
        period: "Mar 2023 - Presente",
        achievements: [
          "Desarrollé un sistema de colas usando SQS/SNS de AWS para conseguir el estado de las ordenes de los clientes, lo que mejoró la eficiencia del seguimiento de pedidos y redujo el tiempo de respuesta al cliente.",
          "Me comprometí a entregar código de alta calidad mediante la implementación de pruebas unitarias y de integración, lo que resultó en una reducción significativa de errores y una mayor estabilidad del software.",
          "Utilicé lenguajes de programación y marcos como Next.js y Nest.js para entregar aplicaciones de alto rendimiento dentro de los plazos establecidos.",
          "Participé en la decición y planificación de la arquitectura de microfrontend para los productos de la empresa, lo que permitió una mayor escalabilidad y flexibilidad en el desarrollo.",
        ],
      },
      {
        company: "Runa",
        location: "Remoto",
        position: "Desarrollador de Software",
        period: "Abr 2024 - Jun 2024",
        achievements: [
          "Contribuí de manera significativa a mejorar el rendimiento de la aplicación, eliminando cuellos de botella, optimizando funciones y preveniendo vulnerabilidades",
          "Trabaje en implementar una arquitectura de microservicios usando GRPC para una comunicación efectiva entre cada una de las partes de la infraestructura",
          "Desarrolle un sistema de generación de nomina de los empleados el cual después era enviado y revisado por el SAT (Mexico)",
        ],
      },
      {
        company: "Sirge",
        location: "Remoto",
        position: "Desarrollador Full Stack",
        period: "Ene 2023 - Abr 2024",
        achievements: [
          "Integración con cuentas de redes sociales (Google, Facebook, Tiktok) para obtener los anuncios del usuario en dichas plataforma y administrarlos",
          "Me encargé de crear vistas bajo el modelo mobile first para asegurar que lucieran comodas y llamativas a la vista del usuario sin importar el dispositivo desde el que acceda al sitio",
          "Optimicé y mejoré los queries de la base de datos para obtener data fidedigna y confiable",
          "Garantizé una experiencia de usuario fluida y optimicé los mecanismos de seguimiento para mejorar el rendimiento de las campañas.",
        ],
      },
      {
        company: "Crazy Imagine Software",
        location: "San Cristobal, Venezuela",
        position: "Desarrollador Full Stack",
        period: "Mar 2021 - Abr 2024",
        achievements: [
          "Me especialicé en el stack MERN para desarrollar soluciones completas tando de back como de front",
          "Desempeñe mis labores con equipos multidisiplinarios de diferentes partes del mundo",
          "Adquirí umucha experiencia con tecnologias imnovadoras como Next.js, NestJS, React Native y AWS (Amplify, Elastic Beanstalk).",
          "Participé en flujos de trabajo de integración continua, mejorando la eficiencia de implementación y la confiabilidad del sistema.",
        ],
      },
      {
        company: "Hacking Lab HR",
        location: "Remoto",
        position: "Desarrollador Full Stack",
        period: "Ago 2021 - Sep 2022",
        achievements: [
          "Desarrollador full-stack a cargo de las operaciones de DevOps, mantenimiento y creación de nuevas funciones para el crecimiento de la plataforma.",
          "Cree un chat interactivo para que los usuarios de la plataforma pudieran conectar entre ellos",
          "Cree el sistema de certificado para los cursos que se brindaban en la plataforma",
          "Realicé la migración de Heroku a AWS de toda la plataforma",
        ],
      },
    ],
    keyAchievements: "Logros clave",
  },
  skills: {
    titles: ["Habilidades", "Tecnologías", "Experiencia", "Poderes"],
    experienceLevelLabel: "Nivel de Experiencia",
    skills: [
      {
        id: "html",
        name: "HTML5",
        icon: HtmlLogo.src,
        color: "#E34F26",
        description:
          "Lenguaje de marcado de hipertexto para estructurar contenido web. Dominio total de elementos semánticos, accesibilidad y mejores prácticas.",
        experience: "5 años",
        category: "Frontend",
      },
      {
        id: "css",
        name: "CSS3",
        icon: CssLogo.src,
        color: "#1572B6",
        description:
          "Hojas de estilo en cascada para diseño web. Experiencia con Flexbox, Grid, animaciones y diseño responsivo.",
        experience: "5 años",
        category: "Frontend",
      },
      {
        id: "javascript",
        name: "JavaScript",
        icon: JsLogo.src,
        color: "#F7DF1E",
        description:
          "Lenguaje de programación dinámico. Dominio de ES6+, programación asíncrona, manipulación del DOM y APIs.",
        experience: "5 años",
        category: "Frontend",
      },
      {
        id: "typescript",
        name: "TypeScript",
        icon: TsLogo.src,
        color: "#007ACC",
        description:
          "Superset de JavaScript que añade tipado estático. Experiencia con interfaces, tipos genéricos y herramientas de desarrollo.",
        experience: "4 años",
        category: "Frontend",
      },
      {
        id: "react",
        name: "React",
        icon: ReactLogo.src,
        color: "#61DAFB",
        description:
          "Biblioteca de JavaScript para construir interfaces de usuario. Hooks, Context API y patrones de diseño modernos.",
        experience: "5 años",
        category: "Frontend",
      },
      {
        id: "react-native",
        name: "React Native",
        icon: ReactNativeLogo.src,
        color: "#1572B6",
        description:
          "Framework para construir aplicaciones móviles utilizando React. Experiencia con componentes nativos y APIs de dispositivos.",
        experience: "3 años",
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
        experience: "4 años",
        category: "Frontend",
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        icon: TailwindLogo.src,
        color: "#06B6D4",
        description:
          "Framework CSS de utilidad primero para un diseño rápido y flexible. Dominio de clases de utilidad y configuración personalizada.",
        experience: "3 años",
        category: "Frontend",
      },
      {
        id: "nextjs",
        name: "Next.js",
        icon: NextjsLogo.src,
        color: "#000000",
        description:
          "Framework de React para aplicaciones web optimizadas. Soporte para SSR, SSG, rutas API y optimización del rendimiento.",
        experience: "4 años",
        category: "Frontend",
      },
      {
        id: "nestjs",
        name: "NestJS",
        icon: NestjsLogo.src,
        color: "#E0234E",
        description:
          "Framework para construir aplicaciones del lado del servidor con Node.js. Arquitectura modular, inyección de dependencias y TypeScript.",
        experience: "4 años",
        category: "Backend",
      },
      {
        id: "postgresql",
        name: "PostgreSQL",
        icon: PostgresLogo.src,
        color: "#336791",
        description:
          "Sistema de gestión de bases de datos relacional. Experiencia con consultas avanzadas, optimización y administración.",
        experience: "4 años",
        category: "Database",
      },
      {
        id: "mysql",
        name: "MySQL",
        icon: MysqlLogo.src,
        color: "#4479A1",
        description:
          "Sistema de gestión de bases de datos relacional. Dominio de consultas SQL, optimización y administración.",
        experience: "4 años",
        category: "Database",
      },
      {
        id: "mongodb",
        name: "MongoDB",
        icon: MongoLogo.src,
        color: "#47A248",
        description:
          "Base de datos NoSQL orientada a documentos. Experiencia con consultas, agregaciones y escalabilidad horizontal.",
        experience: "4 años",
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
          "Sistema de orquestación de contenedores. Experiencia en implementación, escalado y gestión de aplicaciones en contenedores.",
        experience: "1 año",
        category: "DevOps",
      },
      {
        id: "git",
        name: "Git",
        icon: GitLogo.src,
        color: "#F05032",
        description:
          "Sistema de control de versiones distribuido. Dominio de ramas, fusiones, solicitudes de extracción y flujos de trabajo colaborativos.",
        experience: "5 años",
        category: "Control de Versiones",
      },
      {
        id: "aws",
        name: "AWS",
        icon: AwsLogo.src,
        color: "#FF9900",
        description:
          "Plataforma de servicios en la nube. Experiencia con EC2, S3, Lambda y servicios de bases de datos.",
        experience: "2 años",
        category: "Cloud Computing",
      },
      {
        id: "graphql",
        name: "GraphQL",
        icon: GraphqlLogo.src,
        color: "#E10098",
        description:
          "Lenguaje de consulta para APIs. Experiencia en diseño de esquemas, resolutores y optimización de consultas.",
        experience: "2 años",
        category: "Desarrollo de APIs",
      },
    ],
  },
  projects: {
    titles: ["Proyectos", "Trabajos", "Éxitos"],
    projects: [
      {
        id: 1,
        title: "Astro Store",
        description:
          "Plataforma de comercio electrónico construida con Astro, que cuenta con un diseño moderno, gestión de productos e integración de pagos seguros. Autenticación con Auth.js, almacenamiento de datos en Turso y despliegues en Netlify.",
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
          "Extensión de Chrome construida con React y TypeScript, diseñada para mejorar la productividad del usuario creando un gestor de contactos con capacidades avanzadas de búsqueda y filtrado.",
        githubUrl: `${personalInfo.github}/Chrome-extension`,
        technologies: ["React", "TypeScript", "Webpack", "Babel"],
      },
      {
        id: 3,
        title: "Discord Python Bot",
        description:
          "Discord bot desarrollado en Python, con integración de IA para procesamiento de lenguaje natural, interacción con el usuario y respuestas automatizadas. También integra capacidades de búsqueda de Wikipedia y YouTube.",
        githubUrl: `${personalInfo.github}/discord-bot-python`,
        technologies: ["Python", "Discord API", "Natural Language Processing"],
      },
      {
        id: 4,
        title: "Microservicios Rest Api",
        description:
          "Arquitectura de microservicios REST API construida con Nest.js, diseñada para escalabilidad y modularidad. Incluye autenticación de usuarios, gestión de productos y funcionalidades de procesamiento de pedidos. Desplegada en AWS con contenedores Docker.",
        githubUrl: `https://github.com/orgs/Nest-Microservices-Curso-Douglas/repositories`,
        technologies: [
          "Nest.js",
          "TypeScript",
          "Docker",
          "Kubernetes",
          "stripe",
        ],
      },
      {
        id: 5,
        title: "Douglas's Blog",
        description:
          "Un blog personal construido con Astro, que muestra artículos sobre tecnología, programación y experiencias personales. Cuenta con un diseño limpio, un layout responsivo y una navegación fácil.",
        image: "/images/astro-blog.webp",
        githubUrl: `${personalInfo.github}/douglas-blog`,
        liveUrl: "https://douglas-blog.netlify.app/",
        technologies: ["Astro", "TypeScript", "Markdown"],
      },
    ],
    buttonMoreProjectOnGitHub: "Más proyectos en GitHub",
  },
  education: {
    titles: [
      "Trayectoria Profesional",
      "Formación Académica",
      "Certificaciones",
      "Logros Académicos",
    ],
    tabsLabels: {
      education: "Educación",
      certifications: "Certificaciones",
    },
    degrees: [
      {
        id: 1,
        title: "Ingeniero en Informática",
        institution:
          "Universidad Politécnica Territorial Agroindustrial del Estado Táchira",
        location: "San Cristóbal, Venezuela",
        period: "2017 - 2021",
        description:
          "Educación integral en informática, con enfoque en desarrollo de software, algoritmos y estructuras de datos. Desarrollo de habilidades sólidas para la resolución de problemas y experiencia práctica a través de proyectos y pasantías.",
        highlights: [
          "Graduado con honores",
          "Lista del Decano por excelencia académica",
          "Proyecto final sobre algoritmos de aprendizaje automático",
        ],
        skills: [
          "Estructuras de Datos",
          "Algoritmos",
          "Ingeniería de Software",
          "Sistemas de Bases de Datos",
          "Aprendizaje Automático",
          "Desarrollo Web",
          "Desarrollo de Aplicaciones Móviles",
        ],
      },
      {
        id: 2,
        title: "Bachiller en Ciencias",
        institution: "U.E Colegio Aplicación",
        location: "Cárdenas, Venezuela",
        period: "2012 - 2017",
        description:
          "Educación básica con enfoque en matemáticas, física e informática. Desarrollo de habilidades analíticas y pasión por la tecnología a través de actividades extracurriculares.",
        highlights: [
          "Graduado con distinción",
          "Participación en ferias de ciencias y competiciones de programación",
        ],
        skills: ["Matemáticas", "Física", "Programación Básica", "Liderazgo"],
      },
    ],
    certifications: [
      {
        id: 1,
        title:
          "Udemy certificado NestJS + Microservicios: Aplicaciones escalables y modulares",
        issuer: "Udemy",
        date: "Ago 2024",
        credentialId: "UC-28e6158a-19e5-4977-b6f3-6502de4666b3",
        description:
          "Curso completo sobre NestJS y microservicios, cubriendo arquitectura modular, patrones de diseño y mejores prácticas para construir aplicaciones escalables.",
        skills: [
          "NestJS",
          "Microservicios",
          "TypeScript",
          "Desarrollo de API",
          "Kubernetes",
          "Docker",
          "PostgreSQL",
          "MongoDB",
          "Google Cloud",
        ],
      },
      {
        id: 2,
        title: "Udemy certificado Principios SOLID y Clean Code",
        issuer: "Udemy",
        date: "Sept 2024",
        credentialId: "UC-8518806e-ad37-4bee-b10f-29812e807227",
        description:
          "Curso en profundidad sobre los principios SOLID y las prácticas de Clean Code para escribir software mantenible y escalable.",
        skills: [
          "Principios SOLID",
          "Clean Code",
          "Diseño de Software",
          "Refactorización",
          "Mejores Prácticas",
        ],
      },
      {
        id: 3,
        title:
          "Udemy certificado Astro: El framework para sitios web orientados al contenido",
        issuer: "Udemy",
        date: "Abr 2025",
        credentialId: "UC-bbd27e1c-bb83-477a-bb79-6846c985815c",
        description:
          "Curso completo sobre la construcción de sitios web centrados en el contenido utilizando Astro, que abarca la generación de sitios estáticos, la arquitectura basada en componentes y la optimización del rendimiento.",
        skills: [
          "Astro",
          "Generación de Sitios Estáticos",
          "Arquitectura Basada en Componentes",
          "Optimización del Rendimiento",
        ],
      },
    ],
  },
  contact: {
    titles: [
      "Trabajemos juntos",
      "Contáctame",
      "Ponte en contacto",
      "Inicia tu proyecto",
      "Salúdame",
    ],
    contactsMethods: [
      {
        id: "email",
        title: "Email",
        description: personalInfo.email,
        backgroundGradientIcon: "from-blue-500 to-blue-600",
      },
      {
        id: "phone",
        title: "Teléfono",
        description: personalInfo.phoneNumber,
        backgroundGradientIcon: "from-yellow-500 to-yellow-600",
      },
      {
        id: "location",
        title: "Ubicación",
        description: personalInfo.location,
        backgroundGradientIcon: "from-sky-500 to-sky-600",
      },
      {
        id: "hours",
        title: "Horas",
        description: "Lun - Vie: 9 AM - 6 PM",
        backgroundGradientIcon: "from-amber-500 to-amber-600",
      },
    ],
    inputs: {
      name: {
        label: "Nombre",
        placeholder: "Tu nombre",
        errors: {
          required: "El nombre es obligatorio",
          minLength: "El nombre debe tener al menos 2 caracteres",
        },
      },
      email: {
        label: "Email",
        placeholder: "tu@email.com",
        errors: {
          required: "El email es obligatorio",
          invalid: "El email no es válido",
        },
      },
      message: {
        label: "Mensaje",
        placeholder: "Cuéntame sobre tu proyecto...",
        errors: {
          required: "El mensaje es obligatorio",
          minLength: "El mensaje debe tener al menos 10 caracteres",
          maxLength: "El mensaje no puede exceder los 500 caracteres",
        },
      },
      turnstileToken: {
        errors: {
          required: "Por favor complete la verificación",
        },
      },
    },
    submitButton: "Enviar mensaje",
    letsTalk: "¡Hablemos!",
    description:
      "Estoy disponible para nuevos proyectos y colaboraciones. No dudes en ponerte en contacto para discutir tus ideas.",
  },
};
