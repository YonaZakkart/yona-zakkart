const translations = {
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.greeting": "Hi, I'm",
    "hero.role": "Software Developer",
    "hero.bio": "Software Development Engineering student focused on building useful web applications and interactive experiences.",
    "services.title": "What I do?",
    "services.web.title": "Web Development",
    "services.web.desc": "Building responsive web applications and interfaces with modern tools.",
    "services.backend.title": "Backend",
    "services.backend.desc": "APIs, databases and server-side logic with Node.js and TypeScript.",
    "services.games.title": "Games & Interactive",
    "services.games.desc": "Browser games and interactive experiences with vanilla JS.",
    "services.edu.title": "Educational Software",
    "services.edu.desc": "Tools and apps designed for learning and classroom use.",
    "projects.title": "My work",
    "contact.title": "Let's talk",
    "contact.intro": "Have a question or a project in mind? Feel free to reach out.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.location": "Location",
    "contact.cv": "Download CV",
    "status.deployed": "Deployed",
    "status.development": "In development",
    "status.no-demo": "No demo",
    "role.owner": "Owner",
    "role.contributor": "Contributor",
    "education.title": "Education & Path",
    "education.uni.title": "Software Development Engineering",
    "education.uni.desc": "Currently in 5th academic cycle. Focus on OOP, Event-Driven Programming, Data Structures and Web Server Management.",
    "education.bootcamp.title": "Full Stack Developer Bootcamp",
    "education.certs.title": "Key Certifications",
    "education.certs.desc": "Linux Essentials (Cisco) · Fundamentals of Software Engineering (Platzi) · Git & GitHub (Platzi)",
  },
  es: {
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.greeting": "Hola, soy",
    "hero.role": "Desarrollador de Software",
    "hero.bio": "Estudiante de Ingeniería en Desarrollo de Software enfocado en crear aplicaciones web útiles y experiencias interactivas.",
    "services.title": "¿Qué hago?",
    "services.web.title": "Desarrollo Web",
    "services.web.desc": "Construcción de aplicaciones web responsive e interfaces con herramientas modernas.",
    "services.backend.title": "Backend",
    "services.backend.desc": "APIs, bases de datos y lógica del lado del servidor con Node.js y TypeScript.",
    "services.games.title": "Juegos e Interactivos",
    "services.games.desc": "Juegos de navegador y experiencias interactivas con JavaScript vanilla.",
    "services.edu.title": "Software Educativo",
    "services.edu.desc": "Herramientas y apps diseñadas para el aprendizaje y el aula.",
    "projects.title": "Mi trabajo",
    "contact.title": "Hablemos",
    "contact.intro": "¿Tienes una pregunta o un proyecto en mente? No dudes en escribirme.",
    "contact.name": "Nombre",
    "contact.email": "Correo",
    "contact.message": "Mensaje",
    "contact.send": "Enviar mensaje",
    "contact.location": "Ubicación",
    "contact.cv": "Descargar CV",
    "status.deployed": "Desplegado",
    "status.development": "En desarrollo",
    "status.no-demo": "Sin demo",
    "role.owner": "Owner",
    "role.contributor": "Contributor",
    "education.title": "Formación y trayectoria",
    "education.uni.title": "Ingeniería en Desarrollo de Software",
    "education.uni.desc": "Cursando 5.º ciclo académico. Enfoque en POO, Programación Orientada a Eventos, Estructuras de Datos y Gestión de Servidores Web.",
    "education.bootcamp.title": "Bootcamp Full Stack Developer",
    "education.certs.title": "Certificaciones clave",
    "education.certs.desc": "Linux Essentials (Cisco) · Fundamentos de Ingeniería de Software (Platzi) · Git y GitHub (Platzi)",
  }
};

let currentLang = localStorage.getItem("portfolio-lang") || (navigator.language.startsWith("es") ? "es" : "en");

function t(key) {
  return translations[currentLang][key] || translations.en[key] || key;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = t(key);
  });

  const btn = document.getElementById("lang-toggle");
  if (btn) btn.textContent = currentLang === "en" ? "ES" : "EN";

  document.documentElement.lang = currentLang;
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "es" : "en";
  localStorage.setItem("portfolio-lang", currentLang);
  applyTranslations();
  // Re-render projects so badges update
  if (typeof renderProjects === "function") renderProjects();
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.addEventListener("click", toggleLanguage);
});
