const projects = [
  {
    id: "gestor-tareas",
    title: "Gestor de Tareas",
    title_es: "Gestor de Tareas",
    description: "Task manager with priorities, filters, sorting, undo and JSON import/export. Built with TypeScript and MVC architecture.",
    description_es: "Gestor de tareas con prioridades, filtros, ordenamiento, deshacer e importación/exportación JSON. Hecho con TypeScript y arquitectura MVC.",
    image: "/assets/screenshots/gestor-tareas.png",
    status: "deployed",
    role: "owner",
    tech: ["TypeScript", "HTML", "CSS", "localStorage", "Vitest"],
    github: "https://github.com/YonaZakkart/gestor-tareas",
    demo: "https://gestor-de-tareas-yonazakkart.netlify.app/"
  },
  {
    id: "agroalerta",
    title: "AgroAlerta",
    title_es: "AgroAlerta",
    description: "Event-driven platform for agricultural risk prevention in Morazán, El Salvador. Auth, crop viability and dashboard.",
    description_es: "Plataforma orientada a eventos para prevención de riesgos agrícolas en Morazán, El Salvador. Auth, viabilidad de cultivos y dashboard.",
    image: "/assets/screenshots/agroalerta.png",
    status: "no-demo",
    role: "contributor",
    tech: ["TypeScript", "Node.js", "Express", "Angular", "Prisma", "MySQL", "Docker"],
    github: "https://github.com/YonaZakkart/agroalerta-sv",
    demo: null
  },
  {
    id: "yoro",
    title: "Yoro",
    title_es: "Yoro",
    description: "A small robot that learns to create browser games. Minigames, local memory and music. Pure HTML, CSS and vanilla JS.",
    description_es: "Un pequeño robot que aprende a crear videojuegos en el navegador. Minijuegos, memoria local y música. HTML, CSS y JavaScript vanilla.",
    image: "/assets/screenshots/Yoro.jpeg",
    status: "development",
    role: "owner",
    tech: ["HTML", "CSS", "JavaScript", "localStorage"],
    github: "https://github.com/YonaZakkart/yoro",
    demo: "https://yonazakkart.github.io/yoro/"
  },
  {
    id: "numeros-y-formas",
    title: "Números y Formas",
    title_es: "Números y Formas",
    description: "Interactive educational web app for primary math (2nd grade). Lessons, mini-tests, scoring and leaderboard.",
    description_es: "Aplicación web educativa interactiva para matemáticas de primaria (2.° grado). Lecciones, mini-tests, puntuación y clasificación.",
    image: "/assets/screenshots/numeros-y-formas.png",
    status: "no-demo",
    role: "contributor",
    tech: ["React", "TypeScript", "Node.js", "Express", "MySQL", "Tailwind"],
    github: "https://github.com/YonaZakkart/numeros-y-formas",
    demo: null
  }
];

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const lang = currentLang || "en";

  grid.innerHTML = projects.map(p => {
    const title = lang === "es" ? p.title_es : p.title;
    const statusLabel = t(`status.${p.status}`);
    const roleLabel = t(`role.${p.role}`);

    return `
      <article class="project-card" data-id="${p.id}">
        <img src="${p.image}" alt="${title}" loading="lazy" />
        <div class="project-info">
          <div class="project-badges">
            <span class="badge ${p.status}">${statusLabel}</span>
            <span class="badge ${p.role}">${roleLabel}</span>
          </div>
          <h3>${title}</h3>
        </div>
      </article>
    `;
  }).join("");

  grid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.dataset.id;
      const project = projects.find(p => p.id === id);
      if (project) openModal(project);
    });
  });
}

function openModal(project) {
  const modal = document.getElementById("project-modal");
  const lang = currentLang || "en";

  document.getElementById("modal-img").src = project.image;
  document.getElementById("modal-img").alt = project.title;
  document.getElementById("modal-title").textContent = lang === "es" ? project.title_es : project.title;
  document.getElementById("modal-desc").textContent = lang === "es" ? project.description_es : project.description;

  // Badges
  const badgesEl = document.getElementById("modal-badges");
  const statusLabel = t(`status.${project.status}`);
  const roleLabel = t(`role.${project.role}`);
  badgesEl.innerHTML = `
    <span class="badge ${project.status}">${statusLabel}</span>
    <span class="badge ${project.role}">${roleLabel}</span>
  `;

  // Tech
  const techEl = document.getElementById("modal-tech");
  techEl.innerHTML = project.tech.map(tech => `<span>${tech}</span>`).join("");

  // Links
  const linksEl = document.getElementById("modal-links");
  let links = `<a href="${project.github}" target="_blank" rel="noopener">GitHub</a>`;
  if (project.demo) {
    links += `<a href="${project.demo}" target="_blank" rel="noopener">Demo</a>`;
  }
  linksEl.innerHTML = links;

  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  modal.hidden = true;
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  renderProjects();

  // Modal close
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.querySelector(".modal-close").addEventListener("click", closeModal);
    modal.querySelector(".modal-overlay").addEventListener("click", closeModal);
  }

  // Escape key
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
});
