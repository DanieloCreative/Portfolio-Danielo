import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Mail, Rss, Twitch, Phone, Crop, Pencil, Computer, Book, Rocket, Speech, Notebook, Smartphone } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Mail size={30} strokeWidth={1} />, // Ícono de correo
        src: "mailto:danieloctubre93@gmail.com", // Enlace para correo
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />, // Ícono de LinkedIn
        src: "https://www.linkedin.com/in/daniel-morano-boiza-822343178/", // Perfil de LinkedIn
    },
    {
        id: 3,
        logo: <Phone size={30} strokeWidth={1} />, // Ícono de teléfono
        src: "tel:+34644430473", // Enlace para teléfono
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    }
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Empleos no IT",
        subtitle: "Mantenimiento ferroviario y de aeronaves",
        description: "Técnico de mantenimiento de aeronaves con Globalia Mto. y técnico de mto ferroviario en Actren.",
        date: "Oct 2018",
    },
    {
        id: 2,
        title: "Estudiante Desarrollo de Aplicaciones Multiplataforma",
        subtitle: "Formacion profesional grado superior",
        description: "En busqueda de prácticas laborales para la finalizacion del ciclo superior DAM",
        date: "Jun 2025",
    },
    
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 1,
        text: "Años de experiencia IT",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 1,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 1,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
];

export const serviceData = [
    {
      icon: <Smartphone />,
      title: "Desarrollo de apps móviles",
      description: "Aplicaciones móviles para dispositivos Android, adaptadas a necesidades específicas y con diseño funcional.",
    },
    {
      icon: <Computer />,
      title: "Aprendizaje en desarrollo web",
      description: "En constante formación para diseñar y desarrollar sitios web dinámicos y responsivos utilizando tecnologías modernas.",
    },
    {
      icon: <Rocket />,
      title: "Optimización de proyectos",
      description: "Colaboración en pequeños proyectos para optimizar el código y aprender mejores prácticas de desarrollo.",
    },
    {
      icon: <Book />,
      title: "Apoyo en proyectos educativos",
      description: "Participación en proyectos académicos para mejorar habilidades y ampliar mi experiencia práctica.",
    },
  ];
  

export const dataPortfolio = [
    {
        id: 1,
        title: "FitLivePro.apk",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/DanieloCreative/FitLivePro",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Portfolio Danielo",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    
];

