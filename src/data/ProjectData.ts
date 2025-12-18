// src/data/projectsData.js
export const projectsData = [
  {
    id: "1",
    title: "Annuaire du Royaume",
    shortDescription:
      "A platform listing companies, services and professionals with an advanced search engine.",
    fullDescription:
      "The Kingdom Directory is a modern platform that allows users to quickly search for businesses and services through a powerful search engine, well-structured categories, and detailed listings. I participated in the front-end development by optimizing the UX, page structure, navigation, and dynamic data management.",
    image: "/assets/img/Project/project-1.png",
    images: ["/assets/img/Project/project-2.png", "/assets/img/Project/project-3.png"],
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
      "Fast and dynamic search engine",
      "Navigation by categories and subcategories",
      "Detailed company profiles (contacts, activities, locations...)",
      "Responsive UI optimized for mobile",
      "Intelligent data loading (pagination / filtering)",
    ],
    challenges:
      "One of the major challenges was optimizing search performance and rendering lists of companies containing large amounts of data. To improve the experience, I implemented a pagination system and optimized API requests.",
    learnings:
      "This project helped me strengthen my skills in state management, React optimization, UI/UX structuring, and API integration. I also learned to design a highly performant interface despite a large volume of data.",
    duration: "2 months",
    role: "Front-End Developer",
  },
];
