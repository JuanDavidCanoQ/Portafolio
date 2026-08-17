/* ==========================================================================
   CONTENIDO — Portafolio Juan David Cano
   --------------------------------------------------------------------------
   ESTE ES EL ÚNICO ARCHIVO QUE EDITAS PARA CAMBIAR TEXTOS O AGREGAR CONTENIDO.
   No hay que tocar index.html ni app.js para añadir un proyecto o una métrica.

   Regla: cada pieza de contenido se escribe UNA vez, con sus versiones es/en.
   ========================================================================== */

const CONTENIDO = {

  /* ---------------------------------------------------------------- SITIO */
  sitio: {
    url: "https://jdc-portafolio.vercel.app",
    email: "David.cano.quiceno@gmail.com",
    linkedin: "https://www.linkedin.com/in/juan-david-cano-quiceno/",
    github: "https://github.com/JuanDavidCanoQ",
    nombre: "Juan David Cano",
    foto: "foto-juan-david.jpg",
    cv: "CV_JuanDavidCano.pdf",
    brochure: "Brochure_JuanDavidCano.pdf"
  },

  /* -------------------------------------------------------------- TEXTOS */
  t: {
    brand_sub:      { es:"Portafolio profesional",  en:"Professional portfolio" },
    nav_proyectos:  { es:"Proyectos",               en:"Projects" },
    nav_sobremi:    { es:"Sobre mí",                en:"About" },
    nav_contacto:   { es:"Contacto",                en:"Contact" },

    hero_greet:       { es:"Hola, soy", en:"Hi, I'm" },
    hero_position:    { es:"Inteligencia de Negocios · Estrategia · Toma de Decisiones",
                        en:"Business Intelligence · Strategy · Decision Making" },
    hero_credentials: { es:"Economista · Negociador Internacional",
                        en:"Economist · International Negotiator" },
    hero_tagline:     { es:"Transformo información en <b>inteligencia</b> para tomar mejores decisiones de negocio.",
                        en:"I turn information into <b>intelligence</b> for better business decisions." },

    help_kicker: { es:"¿Cómo puedo ayudar?", en:"How can I help?" },
    help_text:   { es:"Diseño herramientas, modelos y dashboards que convierten grandes volúmenes de datos en información clara y accionable para equipos de marketing, ventas y negocio.",
                   en:"I design tools, models and dashboards that turn large volumes of data into clear, actionable insight for marketing, sales and business teams." },
    link_email:  { es:"Escríbeme", en:"Email me" },

    stack_kicker:       { es:"Stack principal",   en:"Main stack" },
    stack_others_label: { es:"Otras herramientas:", en:"Other tools:" },
    stack_others:       { es:"Power Query · SICEX · Euromonitor · IA aplicada",
                          en:"Power Query · SICEX · Euromonitor · Applied AI" },

    tools_kicker:    { es:"Herramientas propias", en:"Own tools" },
    tools_intro:     { es:"Desarrollo soluciones que automatizan procesos y facilitan la toma de decisiones basadas en datos.",
                       en:"I develop solutions that automate processes and support data-driven decision making." },
    tools_seeall:    { es:"Ver todas las herramientas →", en:"See all tools →" },
    pill_prod_suffix:{ es:"en producción", en:"in production" },
    pill_live:       { es:"En uso", en:"Live" },
    pill_soon:       { es:"Próximamente", en:"Coming soon" },

    cv_kicker:    { es:"Documentos", en:"Documents" },
    cv_desc:      { es:"Perfil profesional completo y portafolio de servicios.",
                    en:"Full professional profile and service portfolio." },
    cv_btn:       { es:"Hoja de vida", en:"Resume" },
    brochure_btn: { es:"Brochure", en:"Brochure" },

    sec_projects: { es:"Proyectos destacados", en:"Featured projects" },
    sec_about:    { es:"Sobre mí", en:"About me" },
    sec_impact:   { es:"Impacto en el negocio", en:"Business impact" },

    btn_soon:         { es:"Próximamente",   en:"Coming soon" },

    footer_kicker: { es:"¿Hablamos?", en:"Let's talk" },
    footer_text:   { es:"Estoy abierto a colaborar en proyectos de datos, marketing y decisiones de negocio.",
                     en:"I'm open to collaborating on data, marketing and business decision projects." },
    footer_place:  { es:"Cali, Colombia", en:"Cali, Colombia" },

    mail_subject: { es:"Hablemos de un proyecto", en:"Let's talk about a project" },
    mail_body:    { es:"Hola Juan David,\n\nVi tu portafolio y me gustaría hablar contigo sobre...",
                    en:"Hi Juan David,\n\nI saw your portfolio and I'd like to talk to you about..." },

    seo_title: { es:"Juan David Cano — Business Intelligence, Estrategia y Decisiones",
                 en:"Juan David Cano — Business Intelligence, Strategy & Decisions" }
  },

  /* ------------------------------------------------------------ MÉTRICAS
     Para agregar una: copia un objeto. Para quitarla: bórralo.
     icono: clave de ICONOS en app.js · color: token CSS sin "--"          */
  metricas: [
    { icono:"maletin", color:"violet",
      valor:{ es:"3+ años", en:"3+ years" },
      label:{ es:"Experiencia en análisis de datos y mercadeo",
              en:"Experience in data analysis and marketing" } },
    { icono:"dolar", color:"mint",
      valor:{ es:"Multicanal", en:"Multichannel" },
      label:{ es:"Presupuesto comercial por canal, regional y punto de venta",
              en:"Commercial budgeting by channel, region and point of sale" } },
    { icono:"tienda", color:"orange-fill",
      valor:{ es:"Dirección", en:"Executive" },
      label:{ es:"Reportes ejecutivos para gerencia nacional y presidencia",
              en:"Executive reporting for country management and presidency" } },
    { icono:"caja", color:"cyan",
      valor:{ es:"20.000+", en:"20,000+" },
      label:{ es:"SKUs gestionados en modelos de compra",
              en:"SKUs managed in purchase models" } }
  ],

  /* ---------------------------------------------------------------- STACK */
  stack: [
    { icono:"excel",  color:"mint",   nombre:"Excel" },
    { icono:"barras", color:"gold",   nombre:"Power BI" },
    { icono:"sap",    color:"grad-a", nombre:"SAP" },
    { icono:"db",     color:"cyan",   nombre:"SQL" }
  ],

  /* --------------------------------------------------------- HERRAMIENTAS
     estado: "live" | "soon"                                               */
  herramientas: [
    { nombre:"Matriz de Ponderación",
      url:"https://matriz-ponderacion.vercel.app/",
      estado:"live",
      desc:{ es:"Evalúa y prioriza opciones según criterios ponderados.",
             en:"Evaluates and prioritizes options using weighted criteria." } }
    /* Próximas herramientas: agregar aquí con estado:"soon" y url:null
    ,{ nombre:"Sales Forecasting", url:null, estado:"soon",
       desc:{ es:"...", en:"..." } }
    */
  ],

  /* ------------------------------------------------------------ PROYECTOS
     color: token de acento · preview: clave de PREVIEWS en app.js
     cta: { label:{es,en}, url } o null para mostrar "Próximamente"        */
  proyectos: [
    { num:"01", color:"orange-fill", preview:"matriz",
      titulo:{ es:"Herramientas construidas", en:"Tools built" },
      desc:{ es:"Modelos y herramientas para optimizar análisis, evaluación y toma de decisiones.",
             en:"Models and tools to optimize analysis, evaluation and decision making." },
      items:[
        { es:"Matriz de Ponderación", en:"Weighted Decision Matrix" },
        { es:"Próxima herramienta (completar)", en:"Next tool (to complete)" },
        { es:"Próxima herramienta (completar)", en:"Next tool (to complete)" }
      ],
      cta:{ label:{ es:"Ver proyecto →", en:"View project →" },
            url:"https://matriz-ponderacion.vercel.app/" } },

    { num:"02", color:"cyan", preview:"dashboard",
      titulo:{ es:"Dashboards de análisis", en:"Analytics dashboards" },
      desc:{ es:"Dashboards interactivos que convierten los datos en información clara y accionable.",
             en:"Interactive dashboards that turn data into clear, actionable insight." },
      items:[
        { es:"Ventas y margen por canal", en:"Sales and margin by channel" },
        { es:"Inventario y rotación",     en:"Inventory and turnover" },
        { es:"Desempeño de campañas",     en:"Campaign performance" },
        { es:"Indicadores comerciales",   en:"Commercial KPIs" }
      ],
      cta:null }
  ],

  /* --------------------------------------------------------------- PERFIL
     El cargo actual vive aquí, no en el hero: el hero comunica hacia dónde
     voy, esta sección respalda con lo que hago hoy.                        */
  perfil: {
    kicker:   { es:"Actualmente", en:"Currently" },
    cargo:    { es:"Analista de Datos Comerciales y Marketing",
                en:"Commercial Data & Marketing Analyst" },
    empresa:  { es:"Grupo Decor · Retail especializado · Cali, Colombia",
                en:"Grupo Decor · Specialty retail · Cali, Colombia" },
    texto:    { es:"Trabajo en la intersección de datos, mercadeo y estrategia comercial: análisis de ventas y márgenes, presupuesto comercial, estimados de compra sobre portafolios de más de 20.000 SKUs y evaluación de campañas. Antes, trade marketing en DirecTV Latinoamérica.",
                en:"I work at the intersection of data, marketing and commercial strategy: sales and margin analysis, commercial budgeting, purchase forecasting across portfolios of more than 20,000 SKUs, and campaign evaluation. Previously, trade marketing at DirecTV Latin America." },
    formacion:{ es:"Economía y Negocios Internacionales · Universidad Icesi",
                en:"Economics and International Business · Universidad Icesi" }
  },

  /* -------------------------------------------------------------- IMPACTO */
  impacto: [
    { icono:"diana", color:"violet",
      titulo:{ es:"Mejores decisiones", en:"Better decisions" },
      texto:{ es:"Información clara y oportuna que reduce la incertidumbre y mejora la toma de decisiones.",
              en:"Clear, timely information that reduces uncertainty and improves decision making." } },
    { icono:"tendencia", color:"mint",
      titulo:{ es:"Optimización", en:"Optimization" },
      texto:{ es:"Modelos y análisis que optimizan inventarios, campañas y resultados comerciales.",
              en:"Models and analysis that optimize inventory, campaigns and commercial results." } },
    { icono:"moneda", color:"orange-fill",
      titulo:{ es:"Rentabilidad", en:"Profitability" },
      texto:{ es:"Estrategias basadas en datos que maximizan márgenes y mejoran la rentabilidad del negocio.",
              en:"Data-driven strategies that maximize margins and improve business profitability." } },
    { icono:"equipo", color:"cyan",
      titulo:{ es:"Impacto real", en:"Real impact" },
      texto:{ es:"Trabajo colaborativo con equipos comerciales, marketing y operaciones.",
              en:"Collaborative work with sales, marketing and operations teams." } }
  ]
};
