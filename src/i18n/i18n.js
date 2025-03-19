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
          "React Developer with 1+ year of experience in web apps and a background in 6+ years of design & digital marketing.",
        scrollDown: "Scroll Down",
      },
      Projects: "Projects",
      projects_subtitle:
        "Creating products that serve consumers and their needs.",
      byteCode_description:
        "byteCode is a modern landing page built with React.js and Material UI. Designed to attract and convert users, it showcases a dynamic and responsive design.",
      Reco_description:
        "Reco, developed in React.js with Redux and RTK Query, connects users with verified professionals. Its atomic design ensures scalability and a seamless experience.",
      Portfolio_description:
        "This portfolio was built with React.js, Vite, and Material UI, it features a modern, responsive design and smooth animations.",
      view_repo: "View Repo",
      live_preview: "Live preview",
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
          "Desarrollador React con 1+ año de experiencia en aplicaciones web y un backgroun de 6+ años en diseño y marketing digital.",
        scrollDown: "Deslizar hacia abajo",
      },
      Projects: "Proyectos",
      projects_subtitle:
        "Creando productos que sirven a los consumidores y sus necesidades.",
      byteCode_description:
        "byteCode es una página de aterrizaje moderna construida con React.js y Material UI. Diseñada para atraer y convertir usuarios, muestra un diseño dinámico y responsivo.",
      Reco_description:
        "Desarrollada en React.js con Redux y RTK Query, conecta usuarios con profesionales verificados. Su diseño atómico garantiza escalabilidad y fluidez.",
      Portfolio_description:
        "Este portafolio fue construido con React.js, Vite y Material UI, cuenta con un diseño moderno, responsivo y animaciones fluidas.",
      view_repo: "Ver Repositorio",
      live_preview: "Vista previa",
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
