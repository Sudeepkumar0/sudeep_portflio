import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  milk,
  css,
  port,
  reactjs,
  redux,
  tailwind,
  nodejs,
  node,
  git,
  java,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  sweetshop,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  stone,
  coverhunt,
  dcc,
  kelhel,
  socgen,
  socgen2,
  microverse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "Rails",
  //   icon: rubyrails,
  // },
  // {
  //   name: "graphql",
  //   icon: graphql,
  // },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Societe Generale Global Solution Centre",
    icon: socgen,
    iconBg: "#333333",
    date: "Sep 2026 - Present",
  },
  {
    title: "Software Engineer - Intern",
    company_name: "Societe Generale Global Solution Centre",
    icon: socgen,
    iconBg: "#333333",
    date: "Feb 2026 - Aug 2026",
  },
];

const projects = [
  {
    id: "project-1",
    name: "SweetShop",
    description: "A Sweet shop managemnt Aplication (Ecomerce Application).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sweetshop,
    repo: "https://github.com/Sudeepkumar0/Sweet-shop",
    demo: "https://github.com/Sudeepkumar0/Sweet-shop",
  },
  {
    id: "project-2",
    name: "Stone - Paper - Scissor",
    description:
      "Built an interactive Stone Paper Scissor game with responsive design, real-time scoring, smooth animations, and intuitive gameplay.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: stone,
    repo: "https://github.com/Sudeepkumar0/Stone_paper_scissor",
    demo: "https://stone-paper-scissor-ml9wccu94-sudeep-s-projects-943be963.vercel.app/",
  },
  {
    id: "project-3",
    name: "Node Farm",
    description:
      "Developed scalable Node.js farm management application featuring RESTful APIs, dynamic content rendering.",
    tags: [{}],
    image: node,
    repo: "https://github.com/Sudeepkumar0/NODE_FARM",
    demo: "https://github.com/Sudeepkumar0/NODE_FARM",
  },
  {
    id: "project-4",
    name: "First PortFolio",
    description: `Designed my first developer portfolio showcasing projects, skills, creativity, and continuous growth.
`,
    tags: [{}],
    image: port,
    repo: "https://github.com/Sudeepkumar0/Portfolio",
    demo: "https://www.sudeepkumar.online/",
  },
  {
    id: "project-5",
    name: "Milk Link",
    description:
      "Reserch paper - Built an IoT-powered smart dairy advisory system integrating weather analytics, machine learning and real-time insights.",
    tags: [{}],
    image: milk,
    repo: "",
    demo: "https://drive.google.com/file/d/15Gry-ZD3Jl0LOYAH1PmqLz-pB7nks_V5/view",
  },
];

export { services, technologies, experiences, projects };
