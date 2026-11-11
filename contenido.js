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
    email: "Juandavidzquiceno@gmail.com",
    linkedin: "https://www.linkedin.com/in/juan-david-cano-quiceno/",
    github: "https://github.com/JuanDavidCanoQ",
    nombre: "Juan David Cano",
    foto: "foto-juan-david.jpg"
  },

  /* -------------------------------------------------------------- TEXTOS */
  t: {
    brand_sub:      { es:"Portafolio profesional",  en:"Professional portfolio" },
    nav_inicio:     { es:"Inicio",                  en:"Home" },
    nav_casos:      { es:"Casos de negocio",         en:"Business Cases" },
    nav_soluciones: { es:"Soluciones",              en:"Solutions" },
    nav_iniciativas: { es:"Iniciativas",          en:"Initiatives" },
    nav_investigacion: { es:"Investigación",       en:"Research" },
    nav_sobremi:    { es:"Sobre mí",                en:"About" },
    nav_contacto:   { es:"Contacto",                en:"Contact" },

    hero_greet:       { es:"Hola, soy", en:"Hi, I'm" },
    hero_position:    { es:"Analista de Inteligencia Comercial y Planeación de Ventas",
                        en:"Commercial Intelligence & Sales Planning Analyst" },
    hero_focus:       { es:"Business Intelligence · Pronóstico y econometría · Automatización con SQL, Python e IA",
                        en:"Business Intelligence · Forecasting & Econometrics · Automation with SQL, Python & AI" },
    hero_credentials: { es:"Economista · Negociador Internacional",
                        en:"Economist · International Negotiator" },
    hero_tagline:     { es:"Convierto procesos manuales de planeación y reporte comercial en <b>modelos y herramientas confiables</b>, con conocimiento del negocio y métodos cuantitativos.",
                        en:"I turn manual sales planning and reporting processes into <b>reliable models and tools</b>, combining business knowledge with quantitative methods." },

    help_kicker: { es:"¿En qué puedo aportar?", en:"Where I can contribute" },
    help_text:   { es:"¿El presupuesto se arma en hojas sueltas, los reportes toman días o nadie confía del todo en las cifras? Ese es el tipo de problema que resuelvo.",
                   en:"Is the budget built in scattered spreadsheets, do reports take days, or does nobody fully trust the numbers? That's the kind of problem I solve." },
    link_email:  { es:"Escríbeme", en:"Email me" },

    stack_kicker:       { es:"Stack y métodos",   en:"Stack & methods" },

    highlights_kicker:    { es:"Lo que he construido", en:"What I've built" },
    highlights_caso_label:{ es:"Caso destacado", en:"Featured case" },
    highlights_tool_label:{ es:"Herramienta propia", en:"Own tool" },
    highlights_ini_label: { es:"Iniciativa destacada", en:"Featured initiative" },
    ini_seeall:           { es:"Ver iniciativas →", en:"See initiatives →" },
    pill_demo:            { es:"Demo", en:"Demo" },
    btn_more:             { es:"Más información", en:"More info" },
    btn_close:            { es:"Cerrar", en:"Close" },
    casos_seeall:         { es:"Ver casos de negocio →", en:"See business cases →" },
    tools_seeall:    { es:"Ver todas en Soluciones →", en:"See all in Solutions →" },
    btn_view_project: { es:"Abrir", en:"Open" },
    btn_view_case:    { es:"Ver caso", en:"View case" },
    pill_live:       { es:"En uso", en:"Live" },
    pill_soon:       { es:"Próximamente", en:"Coming soon" },
    pill_published:  { es:"Publicado", en:"Published" },

    cv_kicker:    { es:"Documentos", en:"Documents" },
    cv_desc:      { es:"Disponible a solicitud: el botón abre un correo listo para completar con tus datos y la vacante.",
                    en:"Available on request: the button opens a ready-to-fill email for your details and the role (resume in Spanish)." },
    cv_btn:       { es:"Solicitar hoja de vida", en:"Request resume" },
    cv_mail_subject: { es:"Solicitud de hoja de vida — portafolio", en:"Resume request — portfolio" },
    cv_mail_body:    { es:"Hola Juan David:\n\nVi tu portafolio y me gustaría recibir tu hoja de vida.\n\nNombre:\nEmpresa:\nCargo:\nVacante o motivo de la solicitud:\nCorreo o teléfono de contacto:\n\nGracias.",
                       en:"Hi Juan David,\n\nI saw your portfolio and would like to receive your resume.\n\nName:\nCompany:\nRole:\nPosition or reason for the request:\nContact email or phone:\n\nThank you." },

    sec_casos:      { es:"Casos de negocio", en:"Business cases" },
    sec_soluciones: { es:"Soluciones", en:"Solutions" },
    sec_iniciativas: { es:"Proyectos e iniciativas", en:"Projects & initiatives" },
    iniciativas_note: { es:"Proyectos propios y en equipo fuera de mi empleo, con su estado real.",
                        en:"Personal and team projects outside my job, shown with their real status." },
    btn_view_demo:    { es:"Ver demo", en:"View demo" },
    sec_investigacion: { es:"Investigación", en:"Research" },
    investigacion_note: { es:"Informes propios sobre el entorno de negocio y regulatorio en Colombia.",
                           en:"Original reports on Colombia's business and regulatory environment." },
    investigacion_empty: { es:"Dos informes en preparación para publicación: facturación electrónica y asuntos regulatorios en Colombia.",
                            en:"Two reports being prepared for publication: e-invoicing and regulatory affairs in Colombia." },
    casos_note:     { es:"Trabajo real, presentado con datos sintéticos y sin nombres de la empresa para proteger información confidencial.",
                      en:"Real work, shown with synthetic data and without company names to protect confidential information." },
    sec_about:    { es:"Sobre mí", en:"About me" },

    btn_soon:         { es:"Próximamente",   en:"Coming soon" },

    impact_kicker: { es:"Esto se traduce en", en:"This translates into" },
    footer_kicker: { es:"¿Hablamos?", en:"Let's talk" },
    footer_text:   { es:"Conversemos sobre planeación comercial, Business Intelligence o automatización.",
                     en:"Happy to talk about sales planning, Business Intelligence or automation." },
    footer_place:  { es:"Cali, Colombia", en:"Cali, Colombia" },

    mail_subject: { es:"Contacto desde tu portafolio", en:"Contact from your portfolio" },
    mail_body:    { es:"Hola Juan David,\n\nVi tu portafolio y me gustaría hablar contigo sobre...",
                    en:"Hi Juan David,\n\nI saw your portfolio and I'd like to talk to you about..." },

    seo_title: { es:"Juan David Cano — Inteligencia Comercial y Planeación de Ventas",
                 en:"Juan David Cano — Commercial Intelligence & Sales Planning" }
  },

  /* ------------------------------------------------------------ MÉTRICAS
     Para agregar una: copia un objeto. Para quitarla: bórralo.
     icono: clave de ICONOS en app.js · color: token CSS sin "--"          */
  metricas: [
    { icono:"caja", color:"orange-fill",
      valor:{ es:"~18.000", en:"~18,000" },
      label:{ es:"Productos cubiertos por el presupuesto anual de ventas que diseño",
              en:"Products covered by the annual sales budget I design" } },
    { icono:"grafico", color:"grad-a",
      valor:{ es:"131 pronósticos", en:"131 forecasts" },
      label:{ es:"De ventas por categoría y canal, que alimentan ese presupuesto",
              en:"By category and channel, feeding that sales budget" } },
    { icono:"barras", color:"cyan",
      valor:{ es:"600+ cálculos", en:"600+ calculations" },
      label:{ es:"En el tablero ejecutivo de Power BI de 16 páginas que construí",
              en:"In the 16-page executive Power BI dashboard I built" } },
    { icono:"tendencia", color:"mint",
      valor:{ es:"2 días → 5 h", en:"2 days → 5 h" },
      label:{ es:"Para preparar los reportes de ventas, tras unificar los datos en una sola base",
              en:"To prepare sales reports, after unifying the data in a single database" } }
  ],

  /* ---------------------------------------------------------------- STACK */
  stack: [
    { icono:"barras", color:"gold",        nombre:"Power BI" },
    { icono:"dax",    color:"orange-fill", nombre:"DAX" },
    { icono:"db",     color:"cyan",        nombre:"SQL" },
    { icono:"codigo", color:"grad-a",      nombre:"Python" },
    { icono:"excel",  color:"mint",        nombre:"Excel" },
    { icono:"ia",     color:"violet",      nombre:{ es:"IA", en:"AI" } }
  ],

  /* Líneas de detalle bajo los íconos del stack (fuente: CV y
     Perfil-Profesional/03_Formacion-y-habilidades.md, nivel real).       */
  stack_detalle: [
    { label:{ es:"IA y agentes", en:"AI & agents" },
      texto:{ es:"Claude, Claude Code, ChatGPT, modelo de decisión JEV",
              en:"Claude, Claude Code, ChatGPT, JEV decision model" } },
    { label:{ es:"Otras herramientas", en:"Other tools" },
      texto:{ es:"Power Query, n8n, HTML, conexión de SAP a Power BI",
              en:"Power Query, n8n, HTML, SAP-to-Power BI connection" } },
    { label:{ es:"Métodos", en:"Methods" },
      texto:{ es:"Series de tiempo (Holt-Winters), elasticidad precio, variables instrumentales",
              en:"Time series (Holt-Winters), price elasticity, instrumental variables" } }
  ],

  /* --------------------------------------------------------- HERRAMIENTAS
     estado: "live" | "soon"                                               */
  herramientas: [
    { nombre:{ es:"Matriz de Ponderación", en:"Weighted Decision Matrix" },
      categoria:{ es:"Decision Intelligence", en:"Decision Intelligence" },
      url:"https://matriz-ponderacion.vercel.app/",
      estado:"live",
      desc:{ es:"Evalúa y prioriza opciones según criterios ponderados.",
             en:"Evaluates and prioritizes options using weighted criteria." },
      detalle:[
        { titulo:{ es:"Qué es", en:"What it is" },
          items:[
            { es:"Herramienta web para evaluar y priorizar opciones con criterios ponderados.", en:"A web tool to evaluate and prioritize options using weighted criteria." }
          ] },
        { titulo:{ es:"Qué hace", en:"What it does" },
          items:[
            { es:"Criterios y pesos editables, con redistribución automática de los pesos.", en:"Editable criteria and weights, with automatic weight redistribution." },
            { es:"Puntaje y ranking en vivo, con conclusiones generadas automáticamente.", en:"Live scoring and ranking, with automatically generated conclusions." },
            { es:"Escenarios predefinidos para empezar rápido; exporta a PNG y Excel; español e inglés.", en:"Preset scenarios for a quick start; PNG and Excel export; Spanish and English." }
          ] },
        { titulo:{ es:"Herramientas", en:"Tools" },
          items:[
            { es:"HTML, CSS y JavaScript, sin frameworks", en:"HTML, CSS and JavaScript, no frameworks" }
          ] },
        { titulo:{ es:"Estado", en:"Status" },
          items:[
            { es:"En línea.", en:"Live." }
          ] }
      ] }
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
      categoria:{ es:"Business Intelligence", en:"Business Intelligence" },
      tipo:{ es:"Panel ejecutivo de mercadeo", en:"Executive marketing dashboard" },
      desc:{ es:"Informe de Power BI para el análisis comercial de un área de mercadeo y su réplica web interactiva de uso interno, verificada contra el modelo.",
             en:"A Power BI report for a marketing team's commercial analysis and its interactive web replica for internal use, verified against the model." },
      items:[
        { es:"Ventas y márgenes por canal",       en:"Sales and margins by channel" },
        { es:"Compras y portafolio de productos", en:"Purchasing and product portfolio" },
        { es:"Modelo semántico y DAX",            en:"Semantic model and DAX" },
        { es:"Versión web verificada",            en:"Verified web version" }
      ],
      /* La página del caso abre en inglés con ?lang=en (vive en otro dominio,
         así que la preferencia de idioma del sitio no pasa sola).           */
      cta:{ url:{ es:"https://caso-panel-ejecutivo.vercel.app",
                  en:"https://caso-panel-ejecutivo.vercel.app/?lang=en" } },
      detalle:[
        { titulo:{ es:"Qué es", en:"What it is" },
          items:[
            { es:"Rediseño del panel de análisis comercial de un área de mercadeo, con dos entregables sobre el mismo modelo de datos.", en:"A redesign of a marketing team's commercial analysis dashboard, with two deliverables built on the same data model." }
          ] },
        { titulo:{ es:"Qué construí", en:"What I built" },
          items:[
            { es:"Informe de Power BI de 16 páginas: conexiones en Power Query, modelo semántico de 19 tablas y 31 relaciones, y 633 medidas DAX.", en:"A 16-page Power BI report: Power Query connections, a semantic model with 19 tables and 31 relationships, and 633 DAX measures." },
            { es:"Tablero web interactivo de uso interno del equipo y la gerencia, que replica el informe en el navegador, generado con Python a partir del informe.", en:"An interactive web dashboard for internal use by the team and management that replicates the report in the browser, generated with Python from the report." },
            { es:"Verificación automática: cada texto de la web se compara con el valor del modelo, en las 16 vistas y con filtros aplicados. Resultado: 0 diferencias.", en:"Automated check: every number on the web page is compared with the model's value, across the 16 views and with filters applied. Result: 0 differences." }
          ] },
        { titulo:{ es:"Herramientas", en:"Tools" },
          items:[
            { es:"Power BI (PBIP/PBIR) · DAX · Power Query · SAP BW · Python · Playwright · Claude + MCP · HTML/CSS/JS", en:"Power BI (PBIP/PBIR) · DAX · Power Query · SAP BW · Python · Playwright · Claude + MCP · HTML/CSS/JS" }
          ] },
        { titulo:{ es:"Estado", en:"Status" },
          items:[
            { es:"Publicado. Las capturas se tomaron sobre una copia del modelo con datos sintéticos; las cifras de construcción (páginas, tablas, relaciones, medidas, pruebas) son reales.", en:"Published. Screenshots were taken on a copy of the model loaded with synthetic data; the build figures (pages, tables, relationships, measures, tests) are real." }
          ] }
      ] }
    /* Próximo caso: agregar aquí con la misma estructura */
  ],

  /* ------------------------------------------------ PROYECTOS E INICIATIVAS
     Fuente: Perfil-Profesional/02-Proyectos/. Sin nombres de terceros.
     estado: texto que reemplaza a "Próximamente" cuando no hay enlace.     */
  iniciativas: [
    { preview:"vobo",
      categoria:{ es:"IA aplicada", en:"Applied AI" },
      nombre:"VoBo",
      tipo:{ es:"VoBo · Hackathon 30X, oct 2026", en:"VoBo · 30X Hackathon, Oct 2026" },
      desc:{ es:"Control para agentes de IA: decide si una acción se ejecuta, pasa a revisión humana o se bloquea. En la prueba del equipo, con acciones simuladas, las riesgosas sin detectar bajaron de 34 (reglas fijas) a 3.",
             en:"A control layer for AI agents: it decides whether an action runs, goes to human review or is blocked. In the team's test with simulated actions, undetected risky actions dropped from 34 (fixed rules) to 3." },
      url:"https://vobo-jev.vercel.app/", estado:null,
      detalle:[
        { titulo:{ es:"Qué es", en:"What it is" },
          items:[
            { es:"Una «puerta de salida» para agentes de IA: antes de que un agente envíe un correo, un mensaje o actualice un CRM, VoBo decide si la acción sale, pasa a revisión humana o se bloquea.", en:"An “exit gate” for AI agents: before an agent sends an email or a message, or updates a CRM, VoBo decides whether the action goes out, goes to human review or is blocked." },
            { es:"Combina reglas en código con el modelo de decisión JEV (siete preguntas) y registra el porqué de cada decisión.", en:"It combines coded rules with the JEV decision model (seven questions) and logs the reason behind every decision." }
          ] },
        { titulo:{ es:"Resultado de la prueba", en:"Test result" },
          items:[
            { es:"Una corrida con 145 acciones simuladas, 74 de ellas peligrosas.", en:"One run with 145 simulated actions, 74 of them dangerous." },
            { es:"Acciones peligrosas que se escapaban: 34 con reglas fijas, 31 con JEV solo y 3 con VoBo.", en:"Dangerous actions that slipped through: 34 with fixed rules, 31 with JEV alone and 3 with VoBo." },
            { es:"Es un resultado de prueba, no de producción.", en:"This is a test result, not a production result." }
          ] },
        { titulo:{ es:"Mi rol", en:"My role" },
          items:[
            { es:"Equipo de tres personas. Me encargué de la parte conceptual: producto, negocio, reglas, datos de prueba, pitch y video. La parte técnica la trabajamos los tres por igual.", en:"Three-person team. I owned the conceptual side: product, business case, rules, test data, pitch and video. The three of us shared the technical work equally." }
          ] },
        { titulo:{ es:"Contexto", en:"Context" },
          items:[
            { es:"Hackathon 30X (HackRadar), 16 al 18 de octubre de 2026.", en:"30X Hackathon (HackRadar), October 16–18, 2026." }
          ] }
      ] },
    { preview:"norvia", nombre:"Norvia",
      categoria:{ es:"Emprendimiento", en:"Entrepreneurship" },
      tipo:{ es:"Norvia · Cofundador, 2026", en:"Norvia · Co-founder, 2026" },
      desc:{ es:"Servicio de gestión de registros sanitarios INVIMA para fabricantes e importadores. Estoy a cargo de validar el servicio con empresas y de la prospección comercial, que automaticé con agentes de IA.",
             en:"A service that manages INVIMA health registrations (Colombia's food and drug authority) for manufacturers and importers. I'm in charge of validating the service with companies and of commercial prospecting, which I automated with AI agents." },
      url:null, estado:{ es:"En validación", en:"In validation" },
      detalle:[
        { titulo:{ es:"Qué es", en:"What it is" },
          items:[
            { es:"Servicio B2B de gestión y asesoría de registros sanitarios INVIMA para el titular del producto: fabricantes nacionales e importadores. No es software.", en:"A B2B service that manages and advises on INVIMA health registrations for the product holder: domestic manufacturers and importers. It is not software." }
          ] },
        { titulo:{ es:"Estado", en:"Status" },
          items:[
            { es:"Pre-producto, en validación con entrevistas a empresas de sectores como farmacéutico, agro y bebidas.", en:"Pre-product, being validated through interviews with companies in sectors such as pharma, agribusiness and beverages." }
          ] },
        { titulo:{ es:"Mi rol", en:"My role" },
          items:[
            { es:"Cofundador, junto con un socio economista con experiencia en asuntos regulatorios.", en:"Co-founder, alongside a partner economist with regulatory affairs experience." },
            { es:"Me encargo del segmento de importadores, de la validación del servicio con empresas y de la prospección comercial.", en:"I cover the importer segment, service validation with companies and commercial prospecting." },
            { es:"Automaticé la búsqueda de prospectos y la elaboración de sus fichas con agentes de IA.", en:"I automated prospect search and profile building with AI agents." }
          ] }
      ] }
  ],

  /* --------------------------------------------------------------- PERFIL
     El cargo actual vive aquí, no en el hero: el hero comunica hacia dónde
     voy, esta sección respalda con lo que hago hoy.
     El sitio NO nombra al empleador actual (decisión 2026-11-02): rompería
     la anonimización del caso C1. El CV sí lo nombra.                      */
  perfil: {
    kicker:   { es:"Actualmente", en:"Currently" },
    cargo:    { es:"Analista de Mercadeo", en:"Marketing Analyst" },
    empresa:  { es:"Empresa del sector de acabados para la construcción · Cali, Colombia",
                en:"Construction finishing-materials company · Cali, Colombia" },
    texto:    { es:"Más de tres años en retail especializado. Empecé como Asistente de Precios y desde 2024, como Analista de Mercadeo, construyo los modelos, tableros y automatizaciones que se resumen en esta página, para las decisiones de la gerencia y la presidencia. En paralelo hago consultoría independiente en BI: modelos de datos y tableros de ventas, margen e inventario para empresas. Antes hice mi práctica de trade marketing en DIRECTV Latinoamérica. Mi forma de trabajar: una fuente única de verdad por proyecto, hechos separados de supuestos y procesos documentados para que se puedan repetir.",
                en:"Over three years in specialty retail. I started as a Pricing Assistant and, since 2024, as Marketing Analyst, I build the models, dashboards and automations summarized on this page, supporting decisions by senior management. I also do independent BI consulting: data models and sales, margin and inventory dashboards for companies. Before that, I did my trade marketing internship at DIRECTV Latin America. How I work: a single source of truth per project, facts kept apart from assumptions, and documented processes that can be repeated." },
    formacion:{ es:"Economía y Negocios Internacionales, Universidad Icesi (2023) · Diplomado en Programación y Codificación, Javeriana y Samsung (2020)",
                en:"Economics and International Business, Universidad Icesi (2023) · Diploma in Programming and Coding, Javeriana University & Samsung (2020)" }
  },

  /* -------------------------------------------------- FRANJA DE IMPACTO
     Reducida a frase corta (sin párrafo): vive dentro de Inicio, no como
     sección propia. La prueba detallada de estos puntos vive en Casos de
     negocio, con hechos concretos — esta franja es solo el resumen.       */
  /* Cada frase está emparejada por color e ícono con la métrica que la
     origina (métrica 1 naranja -> frase 1 naranja, etc.) para
     que se lea como "esta cifra se traduce en esto", no como adjetivos
     sueltos.                                                            */
  impacto: [
    { icono:"caja", color:"orange-fill",
      frase:{ es:"El modelo calcula; los gerentes deciden la estrategia",
              en:"The model does the math; managers set the strategy" } },
    { icono:"grafico", color:"grad-a",
      frase:{ es:"Presupuestos que consideran la venta perdida por agotados",
              en:"Budgets that account for sales lost to stockouts" } },
    { icono:"barras", color:"cyan",
      frase:{ es:"Ventas, márgenes y compras en un solo tablero",
              en:"Sales, margins and purchasing in one dashboard" } },
    { icono:"tendencia", color:"mint",
      frase:{ es:"Informes con controles que validan las cifras",
              en:"Reports with checks that validate the numbers" } }
  ]
};
