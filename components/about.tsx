"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Conóceme");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Conóceme</SectionHeading>
      <p className="mb-3">
        {" "}
        Me describo como una persona apasionada, meticulosa y con un agudo sentido del{" "}
        buen gusto. Actualmente, estoy a punto de completar mi título en{" "}
        <span className="font-medium">Ingeniería Informática</span> y he obtenido{" "}
        dos certificaciones destacadas en Desarrollo Web (Makaia y Oracle).{" "}
        <br /><br />
        <span className="italic">Me encanta la resolución</span>  {" "}
        de problemas con elegancia y estilo, especialmente en proyectos de 
        <span className="underline"> React</span>, donde{" "}
        he acumulado alrededor de 6 meses de experiencia y logrado un impacto significativo.{" "}
        Contribuyendo de manera clave al desarrollo de interfaces de usuario efectivas y la{" "}
        implementación de características que mejoran la experiencia del usuario.{" "}
        Mi conjunto principal de habilidades incluye
        <span className="font-medium"> React y Java,</span>  y he trabajado también con{" "}
        Angular, Astro, C#, y .NET.{" "}
      </p>

      <p>
        <span className="italic">Cuando no estoy codeando</span>,
        disfruto del fútbol, el tiempo en familia y la búsqueda constante de conocimiento en 
        cosas de mi interés.
      </p>
    </motion.section>
  );
}
