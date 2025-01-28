import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      download_cv: "Download CV",
      all_rights_reserved: "All rights reserved",
      contact_info: "Contact",
      hero: {
        name: "Rolando Orellana",
        title: {
          developer: "Developer",
          innovative: "Innovative",
          creative: "Creative",
          passionate: "Passionate",
        },
        description:
          "React Developer with 6+ years of experience in design and digital marketing.",
        scrollDown: "Scroll Down",
      },
      Projects: "Projects",
      projects_subtitle:
        "Creating products that serve consumers and their needs.",
      byteCode_description:
        "byteCode is a modern landing page built with React.js and Material UI. Designed to attract and convert users, it showcases a dynamic and responsive design.",
      Reco_description:
        "Reco is a recommendation app to connect users with reliable professionals such as plumbers, electricians, and carpenters. Built with React.js, it features a robust structure and a seamless user experience.",
      ToDo_description:
        "A simple yet effective ToDo List app. This project demonstrates the use of React.js and Material UI to manage tasks efficiently.",
      view_repo: "View Repo",
    },
  },
  es: {
    translation: {
      home: "Inicio",
      about: "Acerca",
      projects: "Proyectos",
      contact: "Contacto",
      download_cv: "Descargar CV",
      all_rights_reserved: "Todos los derechos reservados",
      contact_info: "Contacto",
      hero: {
        name: "Rolando Orellana",
        title: {
          developer: "Desarrollador",
          innovative: "Innovador",
          creative: "Creativo",
          passionate: "Apasionado",
        },
        description:
          "Desarrollador React con más de 6 años de experiencia en diseño y marketing digital.",
        scrollDown: "Deslizar hacia abajo",
      },
      Projects: "Proyectos",
      projects_subtitle:
        "Creando productos que sirven a los consumidores y sus necesidades.",
      byteCode_description:
        "byteCode es una página de aterrizaje moderna construida con React.js y Material UI. Diseñada para atraer y convertir usuarios, muestra un diseño dinámico y responsivo.",
      Reco_description:
        "Reco es una aplicación de recomendaciones para conectar a los usuarios con profesionales confiables como plomeros, electricistas y carpinteros. Construida con React.js, presenta una estructura robusta y una experiencia de usuario fluida.",
      ToDo_description:
        "Una aplicación de lista de tareas simple pero efectiva. Este proyecto demuestra el uso de React.js y Material UI para gestionar tareas de manera eficiente.",
      view_repo: "Ver repositorio",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
