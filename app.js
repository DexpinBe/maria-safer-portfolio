const projects = [
  {
    title: "Big Trail Magazine",
    category: "Proyecto real publicado",
    status: "Produccion",
    description:
      "Trabajo de frontend sobre una web publicada, con foco en autenticacion, formularios complejos, integracion con backend y base preparada para nuevas funcionalidades.",
    stack: ["React", "Vite", "JWT", "AuthContext", "Fetch API"],
    highlights: [
      "Desarrollo del frontend con React + Vite.",
      "Implementacion de login, registro y contexto de usuario.",
      "Formulario de subida de rutas con validacion, hasta 5 imagenes y envio autenticado.",
      "Integracion con endpoints protegidos y redireccion automatica si no hay sesion.",
      "Base preparada para futura integracion con Instagram y carrusel dinamico.",
    ],
    primaryLink: {
      label: "Ver web",
      href: "https://bigtrailmagazine.es/",
    },
    secondaryLink: {
      label: "Repo privado",
      href: null,
    },
  },
  {
    title: "RutaLab",
    category: "Proyecto personal",
    status: "Portfolio demo",
    description:
      "Demo full-stack de generacion de rutas en moto con experiencia tipo IA, UI propia, API estructurada y persistencia local para poder ensenarla sin depender de servicios de pago.",
    stack: ["Node.js", "Express", "JavaScript", "HTML", "CSS"],
    highlights: [
      "Backend estructurado con rutas, controladores, servicios y config.",
      "Modo demo gratuito para generar rutas sin cuota de API.",
      "Frontend visual con flujo generar y guardar.",
      "Persistencia local en JSON para mantener historial de rutas.",
      "Pensado como MVP ensenable en entrevistas y GitHub.",
    ],
    primaryLink: {
      label: "Ver GitHub",
      href: "https://github.com/DexpinBe/ia-rutas",
    },
    secondaryLink: {
      label: "Ver demo local",
      href: "http://localhost:3001",
    },
  },
];

const projectGrid = document.querySelector("#project-grid");

function renderProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const secondaryLinkMarkup = project.secondaryLink.href
    ? `<a class="btn btn-secondary" href="${project.secondaryLink.href}" target="_blank" rel="noreferrer">${project.secondaryLink.label}</a>`
    : `<span class="btn btn-secondary" aria-disabled="true">${project.secondaryLink.label}</span>`;

  article.innerHTML = `
    <div class="project-topline">
      <span class="project-badge">${project.category}</span>
      <span class="project-status">${project.status}</span>
    </div>

    <div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
    </div>

    <div class="project-meta">
      ${project.stack
        .map((item) => `<span class="project-tag">${item}</span>`)
        .join("")}
    </div>

    <ul class="project-highlights">
      ${project.highlights.map((item) => `<li>${item}</li>`).join("")}
    </ul>

    <div class="project-links">
      <a class="btn btn-primary" href="${project.primaryLink.href}" target="_blank" rel="noreferrer">${project.primaryLink.label}</a>
      ${secondaryLinkMarkup}
    </div>
  `;

  return article;
}

projects.forEach((project) => {
  projectGrid.appendChild(renderProjectCard(project));
});
