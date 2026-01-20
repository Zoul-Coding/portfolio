export const projectsData = [
  {
    id: "1",
    title: "Plateforme d’annuaire professionnel",
    shortDescription:
      "Une plateforme de référencement d’entreprises, de services et de professionnels avec un moteur de recherche avancé.",
    fullDescription:
      "Annuaire du Royaume est une plateforme moderne permettant aux utilisateurs de rechercher rapidement des entreprises et des services grâce à un moteur de recherche performant, des catégories bien structurées et des fiches détaillées. J’ai contribué au développement front-end en optimisant l’expérience utilisateur, la structure des pages, la navigation et la gestion dynamique des données.",
    image: "/assets/img/Project/mockup-3.webp",
    imageDetail: "/assets/img/Project/mockup-4.webp",
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
  {
    id: "2",
    title: "Portail Institutionnel – Ministère des Télécommunications du Tchad",
    shortDescription:
      "Portail institutionnel gouvernemental permettant l’accès à l’information publique, aux actualités ministérielles et à la participation citoyenne.",
    fullDescription:
      "Ce projet est un portail institutionnel officiel du Ministère des Télécommunications et de l’Économie Numérique du Tchad. Il permet aux citoyens de consulter les sessions, les actualités, les communications officielles et d’interagir avec le ministère via l’envoi de préoccupations et de suggestions. J’ai assuré le développement front-end au sein d’une équipe, avec un fort accent sur la performance, l’ergonomie et la gestion efficace de l’état global de l’application.",
    image: "/assets/img/Project/mockup-2.webp",
    imageDetail: "/assets/img/Project/mockup-1.webp",
    images: [
      "/assets/img/Project/mockup-2.webp",
      "/assets/img/Project/mockup-1.webp",
    ],
    technologies: [
      { name: "React", icon: "FaReact", color: "blue-300", bg: "gray-800" },
      {
        name: "Tailwind CSS",
        icon: "RiTailwindCssFill",
        color: "blue-300",
        bg: "gray-800",
      },
      { name: "Jotai", icon: "SiJotai", color: "blue-300", bg: "gray-800" },
      { name: "Axios", icon: "SiAxios", color: "blue-300", bg: "gray-800" },
    ],
    githubLink: "",
    liveLink: "https://seylehakouma.mten.gouv.td/",
    features: [
      "Consultation des actualités et sessions ministérielles",
      "Recherche rapide et fluide des sessions et actualités",
      "Soumission de préoccupations et suggestions citoyennes",
      "Interface responsive adaptée aux usages mobiles",
      "Architecture frontend modulaire et maintenable",
    ],
    challenges:
      "Le principal défi était la gestion et le partage des mêmes données entre plusieurs composants sans complexifier l’architecture. J’ai résolu ce problème en utilisant Jotai et son système d’atoms pour centraliser l’état global. Un autre enjeu important était d’assurer des recherches très rapides dans les sessions et les actualités. Pour cela, j’ai optimisé la gestion des états, limité les re-renders inutiles et mis en place une logique de filtrage efficace côté frontend afin d’offrir une expérience utilisateur fluide.",
    learnings:
      "Ce projet m’a permis d’approfondir la gestion d’état globale avec Jotai, d’améliorer mes compétences en optimisation des performances React et de travailler sur une application à forte visibilité institutionnelle. J’ai également renforcé ma capacité à collaborer en équipe sur un projet gouvernemental à enjeux réels.",
    duration: "1 mois",
    role: "Développeur Frontend",
  },
];
