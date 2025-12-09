// src/data/projectsData.js
export const projectsData = [
  {
    id: "1",
    title: "Annuaire du Royaume",
    shortDescription:
      "Une plateforme référençant des entreprises, services et professionnels avec un moteur de recherche avancé.",
    fullDescription:
      "Annuaire du Royaume est une plateforme moderne permettant aux utilisateurs de rechercher rapidement des entreprises et services à travers un moteur de recherche performant, des catégories bien structurées et des fiches détaillées. J’ai participé au développement front-end en optimisant l’UX, la structure des pages, la navigation et la gestion dynamique des données.",
    image: "/img/Project/project-1.png",
    images: ["/img/Project/project-2.png", "/img/Project/project-3.png"],
    technologies: [
      { name: "React", icon: "FaReact", color: "blue-300", bg: "gray-800" },
      {
        name: "Tailwind CSS",
        icon: "RiTailwindCssFill",
        color: "blue-300",
        bg: "gray-800",
      },
      { name: "Axios", icon: "SiAxios", color: "blue-300", bg: "gray-800" },
    ],
    githubLink: "",
    liveLink: "https://www.annuaireduroyaume.com/",
    features: [
      "Moteur de recherche rapide et dynamique",
      "Navigation par catégories et sous-catégories",
      "Fiches entreprises détaillées (contacts, activités, localisations…)",
      "UI responsive et optimisée mobile",
      "Chargement intelligent des données (pagination / filtrage)",
    ],
    challenges:
      "L’un des défis majeurs a été d’optimiser les performances de recherche et le rendu des listes d’entreprises contenant de nombreuses données. Pour améliorer l'expérience, j’ai implémenté un système de pagination et optimisé les requêtes API.",
    learnings:
      "Ce projet m’a permis de renforcer mes compétences en gestion d'état, optimisation React, structuration d’UI/UX et intégration d’API. J’ai également appris à concevoir une interface hautement performante malgré un volume de données important.",
    duration: "2 mois",
    role: "Développeur Front-End React",
  },
];
