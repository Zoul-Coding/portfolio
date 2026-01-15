export const projectsData = [
  {
    id: "1",
    title: "Annuaire du Royaume",
    shortDescription:
      "Une plateforme de référencement d’entreprises, de services et de professionnels avec un moteur de recherche avancé.",
    fullDescription:
      "Annuaire du Royaume est une plateforme moderne permettant aux utilisateurs de rechercher rapidement des entreprises et des services grâce à un moteur de recherche performant, des catégories bien structurées et des fiches détaillées. J’ai contribué au développement front-end en optimisant l’expérience utilisateur, la structure des pages, la navigation et la gestion dynamique des données.",
    image: "/assets/img/Project/project-1.webp",
    imageDetail: "/assets/img/Project/laptop.webp",
    images: [
      "/assets/img/Project/project-2.webp",
      "/assets/img/Project/project-3.webp",
    ],
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
      "Interface responsive optimisée pour mobile",
      "Chargement intelligent des données (pagination / filtrage)",
    ],
    challenges:
      "L’un des principaux défis a été l’optimisation des performances du moteur de recherche et de l’affichage des listes d’entreprises contenant un grand volume de données. Pour améliorer l’expérience utilisateur, j’ai mis en place un système de pagination et optimisé les requêtes API.",
    learnings:
      "Ce projet m’a permis de renforcer mes compétences en gestion d’état, optimisation React, structuration UI/UX et intégration d’API. J’ai également appris à concevoir une interface hautement performante malgré un volume de données important.",
    duration: "2 mois",
    role: "Développeur Frontend",
  },
];
