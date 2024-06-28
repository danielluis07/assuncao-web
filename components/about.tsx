"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
        Após percorrer a carreira jurídica por alguns anos, acabei me
        apaixonando pela programação. Comecei estudando por conta prória e
        adquiri vários certificados, me especializando no desenvolvimento{" "}
        <span className="font-medium">Front-end</span>.{" "}
        <span className="italic">Minha parte favorita da programação</span> é o
        aspecto de resolução de problemas. É muito bom o sentimento de
        finalmente superar os desafios inerentes ao processo de desenvolvimento.
        Atualmente, minhas ferramentas favoritas para construir aplicações são{" "}
        <span className="font-medium">
          React, Next.js, Hono.js e Drizzle (PostgreSql).
        </span>
      </p>
      <p>
        Ao longo da minha jornada, tive a oportunidade de trabalhar em uma
        empresa onde atuei como desenvolvedor, contribuindo para diversos
        projetos e colaborando com equipes para entregar soluções de alta
        qualidade. Essa experiência me proporcionou uma compreensão prática do
        ciclo de desenvolvimento de software, além de habilidades em resolução
        de problemas, trabalho em equipe e comunicação eficaz. Aprendi
        linguagens novas como PHP, o que contribuiu para meu objetivo de me
        tornar um desenvolvedor <span className="font-bold">Full Stack</span>
      </p>
    </motion.section>
  );
}
