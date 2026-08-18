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
    nav_inicio:     { es:"Inicio",                  en:"Home" },
    nav_casos:      { es:"Casos de negocio",         en:"Business Cases" },
    nav_soluciones: { es:"Soluciones",              en:"Solutions" },
    nav_investigacion: { es:"Investigación",       en:"Research" },
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
    help_text:   { es:"¿Un dashboard que por fin conecte ventas, margen e inventario? ¿Comparar varias alternativas con criterios claros antes de decidir? Diseño esas herramientas a la medida del problema real, no plantillas genéricas.",
                   en:"A dashboard that finally connects sales, margin and inventory? Comparing several alternatives with clear criteria before deciding? I design those tools around the real problem, not generic templates." },
    link_email:  { es:"Escríbeme", en:"Email me" },

    stack_kicker:       { es:"Stack principal",   en:"Main stack" },
    stack_others_label: { es:"Otras herramientas:", en:"Other tools:" },
    stack_others:       { es:"Power Query · SICEX · Euromonitor · IA aplicada",
                          en:"Power Query · SICEX · Euromonitor · Applied AI" },

    highlights_kicker:    { es:"Lo que he construido", en:"What I've built" },
    highlights_caso_label:{ es:"Caso destacado", en:"Featured case" },
    highlights_tool_label:{ es:"Herramienta propia", en:"Own tool" },
    casos_seeall:         { es:"Ver casos de negocio →", en:"See business cases →" },
    tools_seeall:    { es:"Ver todas en Soluciones →", en:"See all in Solutions →" },
    btn_view_project: { es:"Ver herramienta →", en:"View tool →" },
    pill_live:       { es:"En uso", en:"Live" },
    pill_soon:       { es:"Próximamente", en:"Coming soon" },

    cv_kicker:    { es:"Documentos", en:"Documents" },
    cv_desc:      { es:"Perfil profesional completo y portafolio de servicios.",
                    en:"Full professional profile and service portfolio." },
    cv_btn:       { es:"Hoja de vida", en:"Resume" },
    brochure_btn: { es:"Brochure", en:"Brochure" },

    sec_casos:      { es:"Casos de negocio", en:"Business cases" },
    sec_soluciones: { es:"Soluciones", en:"Solutions" },
    sec_investigacion: { es:"Investigación", en:"Research" },
    investigacion_note: { es:"Análisis de mercado, tendencias e investigaciones propias.",
                           en:"Market analysis, trends and original research." },
    investigacion_empty: { es:"El primer estudio está en preparación: análisis de mercado y hallazgos aplicados a decisiones de negocio.",
                            en:"The first study is in preparation: market analysis and findings applied to business decisions." },
    casos_note:     { es:"Casos reales de trabajo, con datos y nombres modificados o sintetizados para proteger información confidencial.",
                      en:"Real work cases, with data and names modified or synthesized to protect confidential information." },
    sec_about:    { es:"Sobre mí", en:"About me" },

    btn_soon:         { es:"Próximamente",   en:"Coming soon" },

    impact_kicker: { es:"Esto se traduce en", en:"This translates into" },
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
      label:{ es:"Análisis comercial y BI en retail especializado",
              en:"Commercial analysis and BI in specialty retail" } },
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
      categoria:{ es:"Decision Intelligence", en:"Decision Intelligence" },
      url:"https://matriz-ponderacion.vercel.app/",
      estado:"live",
      desc:{ es:"Evalúa y prioriza opciones según criterios ponderados.",
             en:"Evaluates and prioritizes options using weighted criteria." } }
    /* Próximas herramientas: agregar aquí con estado:"soon" y url:null
    ,{ nombre:"Sales Forecasting", url:null, estado:"soon",
       desc:{ es:"...", en:"..." } }
    */
  ],

  /* -------------------------------------------------------- CASOS DE NEGOCIO
     Trabajo real (empleador o clientes independientes), estructura y
     metodología reales — nombres, cifras y datos siempre modificados o
     sintetizados. Ver casos_note en el bloque `t` para el texto de aviso.
     color: token de acento · preview: clave de PREVIEWS en app.js
     cta: { label:{es,en}, url } o null para mostrar "Próximamente"          */
  casos: [
    { num:"01", color:"orange-fill", preview:"dashboard",
      categoria:{ es:"Inteligencia Comercial", en:"Commercial Intelligence" },
      tipo:{ es:"Dashboard Power BI · Sector motos", en:"Power BI Dashboard · Motorcycle sector" },
      desc:{ es:"Modelo de ventas, margen e inventario para un distribuidor del sector motos. En preparación — anonimizando cifras.",
             en:"Sales, margin and inventory model for a motorcycle sector distributor. In preparation — anonymizing figures." },
      items:[
        { es:"Ventas y margen por canal", en:"Sales and margin by channel" },
        { es:"Inventario y rotación",     en:"Inventory and turnover" },
        { es:"Desempeño comercial",       en:"Commercial performance" },
        { es:"Indicadores clave",         en:"Key indicators" }
      ],
      cta:null }
    /* Próximo caso: agregar aquí con la misma estructura */
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

  /* -------------------------------------------------- FRANJA DE IMPACTO
     Reducida a frase corta (sin párrafo): vive dentro de Inicio, no como
     sección propia. La prueba detallada de estos puntos vive en Casos de
     negocio, con hechos concretos — esta franja es solo el resumen.       */
  impacto: [
    { icono:"diana",     color:"violet",      frase:{ es:"Mejores decisiones", en:"Better decisions" } },
    { icono:"tendencia", color:"mint",        frase:{ es:"Optimización",       en:"Optimization" } },
    { icono:"moneda",    color:"orange-fill", frase:{ es:"Rentabilidad",       en:"Profitability" } },
    { icono:"equipo",    color:"cyan",        frase:{ es:"Impacto real",       en:"Real impact" } }
  ]
};
