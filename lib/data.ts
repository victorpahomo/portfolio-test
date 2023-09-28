import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerceImg from "@/public/ecommerce.png";
import casaroyalImg from "@/public/casaroyal.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import codelmsImg from "@/public/codelms.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Conóceme",
    hash: "#about",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
    {
    title: "Mantenimiento WordPress",
    location: "Madrid, ES",
    description:
      "Monitoreo, diseño, creación de contenido, optimización, configuración, instalación y actualización de plugins y temas.",
    icon: React.createElement(CgWorkAlt),
    date: "2018-2019",
  },
  {
    title: "Estudios / Certificaciones",
    location: "Colombia - España",
    description:
      "Ingeniería Informática 4/5 años (Unicauca y UNIR) - Certificación Front-end (Makaia 2022) - Cetificación Back-end (Oracle 2023)",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2023",
  },
  {
    title: "Front-end Developer Trainee",
    location: "Colombia",
    description:
      "Planificación, Diseño y ejecución de proyectos Web haciendo uso de tecnologías HTML5,CSS3,JS y librerías modernas como Boostrap, Tailwind, React.js. Consumo de APIS y microservicios.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "CodeLMS",
    description:
      "Proyecto más ambicioso. Full-stack developer. Plataforma académica multirol, posee servicios de inteligencia artificial.",
    tags: ["React", "Vite js", "Firestore", "Tailwind","Firebase", "Redux","FullCalendar", "OpenAI API"],
    imageUrl: codelmsImg,
  },
  {
    title: "Casa Royal",
    description:
      "Portal de alquiler y venta de propiedades. Rol Front-end Developer, a petición se usó HTML, CSS y JS Vanilla.",
    tags: ["JS Vanilla", "Webpack", "CSS", "SQL", "API"],
    imageUrl: casaroyalImg,
  },  {
    title: "Delivery App",
    description:
      "Ecommerce con todo tipo de funcionalidades, como Login, Carrito, Historial de Ordenes, Estado de pedido, Pasarela de pago. Rol Front-end developer.",
    tags: ["React", "TypeScript","Firestore", "Context", "SASS", "Auth0","API"],
    imageUrl: ecommerceImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Java",
  "Git",
  "Tailwind",
  "SASS",
  "Bootstrap",
  "Redux",
  "Context",
  "Astro",
  "Firebase"
] as const;
