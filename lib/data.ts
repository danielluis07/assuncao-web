import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpoPlaza from "@/public/images/corpo-plaza.png";
import dashboard from "@/public/images/dashboard.png";
import playmaker from "@/public/images/playmaker.png";
import barbearia from "@/public/images/barbearia.png";
import vignolli from "@/public/images/vignolli.png";
import airbnb from "@/public/images/airbnb.png";

export const links = [
  {
    name: "Início",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Direito - UNIDAVI",
    location: "Rio do Sul, SC",
    description:
      "Estudei direito durante 4 anos, incluindo estágio no Núcleo de Práticas Jurídicas da UNIDAVI.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2020",
  },
  {
    title: "Auxiliar Administrativo",
    location: "Rio do Sul, SC",
    description:
      "Trabalhei na empresa Persol Ind e Com, realizando o controle de estoque e emissão de notas fiscais",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2021",
  },
  {
    title: "Estágio - Cadore Advocacia",
    location: "Rio do Sul, SC",
    description:
      "Trabalhei como estagiário em um escritório de advocacia, elaborando petições",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Desenvolvedor - IPM Sistemas",
    location: "Rio do Sul, SC",
    description:
      "Através do programa Jovens Talentos, entrei na IPM Sistemas, onde atuei como desnvolvedor",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Faculdade - Estácio",
    location: "Rio do Sul, SC",
    description:
      "Desde 2023, iniciei faculdade na área de Análise e Desenvolvimento de Sistemas",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - presente",
  },
] as const;

export const projectsData = [
  {
    title: "Ecommerce Dashboard",
    description:
      "Um dashboard que permite a criação de lojas online, onde é possível administrar seus produtos, usuários, pagamentos categorias, banners e etc.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Auth.js",
      "Pusher",
      "Prisma",
      "Stripe",
      "Shadcn/ui",
    ],
    url: "https://e-dashboard-dun.vercel.app",
    imageUrl: dashboard,
  },
  {
    title: "Corpo Plaza",
    description:
      "Uma loja online fictícia, que permite a compra de produtos, envio de comentários, avaliações e com integração direta com o Ecommerce Dashboard.",
    tags: [
      "React",
      "Next.js",
      "Zustand",
      "Tailwind",
      "Prisma",
      "Stripe",
      "Auth.js",
      "Shadcn/ui",
    ],
    url: "https://suit-store-eight.vercel.app",
    imageUrl: corpoPlaza,
  },
  {
    title: "Playmaker",
    description:
      "Um blog sobre NFL e NBA. Além de artigos de opinião, há também notícias e estatísticas sobre os esportes. Há integração com um dashboard que está em desenvolvimento",
    tags: ["React", "Next.js", "Drizzle", "Tailwind", "Hono.js", "Shadcn/ui"],
    url: "https://playmaker-five.vercel.app",
    imageUrl: playmaker,
  },
  {
    title: "Restaurante Vignolli",
    description: "Uma simples landing page sobre um restaurante fictício.",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://danielluis07.github.io/vignollirestaurante",
    imageUrl: vignolli,
  },
  {
    title: "Barbearia e Spa",
    description: "Uma simples landing page sobre uma barbearia fictícia.",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://danielluis07.github.io/barber",
    imageUrl: barbearia,
  },
  {
    title: "Clone Airbnb",
    description:
      "Como sugere o título, se trata de um clone básico do site Airbnb",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDb"],
    url: "https://site-de-aluguel.vercel.app",
    imageUrl: airbnb,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Drizzle",
  "Redux",
  "PHP",
  "Express",
  "PostgreSQL",
  "Mongodb",
] as const;
