const projects = [
  {
    title: "Big Trail Magazine",
    category: "Proyecto real publicado",
    status: "Produccion",
    role: "Frontend development",
    description:
      "Participacion en una web publicada con trabajo real sobre autenticacion, formularios con imagenes, proteccion de rutas e integracion con backend.",
    context:
      "Proyecto desarrollado con React, TypeScript y Vite para una plataforma con logica de usuario, rutas protegidas y flujo autenticado.",
    impact:
      "La parte en la que trabaje dejo una base mas solida para experiencia de usuario, gestion de sesion, envio de rutas y futuras integraciones de contenido externo.",
    stack: ["React", "TypeScript", "Vite", "JWT", "AuthContext", "Fetch API"],
    highlights: [
      "Implementacion de login, registro y contexto global de usuario.",
      "Formulario de subida de rutas con validacion, hasta 5 imagenes y envio autenticado.",
      "Proteccion de rutas con redireccion automatica si no existe sesion.",
      "Integracion con endpoints de backend para auth, perfil, rutas compartidas y uploads.",
      "Preparacion de base para futura integracion con Instagram y carrusel dinamico.",
    ],
    primaryLink: {
      label: "Ver web",
      href: "https://bigtrailmagazine.es/",
    },
    secondaryLink: {
      label: "Repositorio privado",
      href: null,
    },
  },
  {
    title: "RutaLab",
    category: "Proyecto personal",
    status: "Portfolio demo",
    role: "Full-stack build",
    description:
      "Demo de generacion de rutas en moto con experiencia tipo IA, interfaz propia, API estructurada y persistencia local para poder ensenarla sin depender de servicios de pago.",
    context:
      "Proyecto propio planteado como MVP de producto para portfolio, con frontend, backend en Express, modo demo sin coste y respuesta estructurada.",
    impact:
      "Me permite ensenar diseno de API, estructura backend, flujo de generacion y guardado, y una presentacion de proyecto mucho mas cercana a producto real que a simple ejercicio tecnico.",
    stack: ["Node.js", "Express", "JavaScript", "HTML", "CSS", "JSON storage"],
    highlights: [
      "Backend estructurado con rutas, controladores, servicios y configuracion.",
      "Modo demo gratuito para generar rutas sin cuota de API.",
      "Interfaz visual con flujo generar y guardar.",
      "Persistencia local en JSON para mantener historial de rutas.",
      "Base preparada para reactivar proveedor IA real mas adelante.",
    ],
    primaryLink: {
      label: "Ver GitHub",
      href: "https://github.com/DexpinBe/ia-rutas",
    },
    secondaryLink: {
      label: "Demo local",
      href: null,
    },
  },
];

const projectGrid = document.querySelector("#project-grid");

function renderLink(projectLink, variant) {
  if (!projectLink.href) {
    return `<span class="btn ${variant}" aria-disabled="true">${projectLink.label}</span>`;
  }

  return `<a class="btn ${variant}" href="${projectLink.href}" target="_blank" rel="noreferrer">${projectLink.label}</a>`;
}

function renderProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  article.innerHTML = `
    <div class="project-topline">
      <span class="project-badge">${project.category}</span>
      <span class="project-status">${project.status}</span>
      <span class="project-role">${project.role}</span>
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

    <section class="project-block">
      <h4>Contexto</h4>
      <p>${project.context}</p>
    </section>

    <section class="project-block">
      <h4>Valor</h4>
      <p>${project.impact}</p>
    </section>

    <ul class="project-highlights">
      ${project.highlights.map((item) => `<li>${item}</li>`).join("")}
    </ul>

    <div class="project-links">
      ${renderLink(project.primaryLink, "btn-primary")}
      ${renderLink(project.secondaryLink, "btn-secondary")}
    </div>
  `;

  return article;
}

projects.forEach((project) => {
  projectGrid.appendChild(renderProjectCard(project));
});
