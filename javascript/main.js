/*
* ----------------------------------------------------------------------------------------
Author        : Rama Hardian
Template Name : Simplixe - multipurpose onepage portfolio
Version       : 1.0 FREE
* ----------------------------------------------------------------------------------------
*/
"use strict";

// ==============================================
// INTERNATIONALIZATION (i18n) SYSTEM
// ==============================================
var i18n = {
  currentLang: 'en',

  translations: {
    en: {
      // Page meta
      page_title: "Daniel Bobadilla | Software Engineer",
      // Navigation
      nav_about: "About me",
      nav_work: "My work",
      nav_resume: "My Resume",
      nav_contact: "Contact",
      // Hero
      hero_intro_label: "Introduction",
      hero_iam: "I am",
      hero_desc: "Backend Developer focused on building high-performance systems and automation solutions.",
      hero_cta: "Explore More",
      typed_strings: ["Backend Developer", "Python Expert", "FastAPI & Django", "AI & LLM Integration", "Software Engineer"],
      // About
      about_label: "Brief Story",
      about_title_html: 'About <span class="sec-word">me</span>',
      about_p1: "I am a Software Engineer driven by the challenge of building high-performance backend systems and integrating cutting-edge AI technologies. My expertise lies in bridging the gap between robust server-side logic and real-time intelligent automation.",
      about_p2: "My mastery of Python extends beyond standard web development; I specialize in leveraging its ecosystem to process complex data and deploy AI-driven features. I have a proven track record of implementing Generative AI (LLMs), Computer Vision, and Real-time Audio Processing into functional business tools.",
      about_tech_title: "Technical Expertise:",
      about_tech_1_html: "<strong>Advanced Python Development:</strong> Deep proficiency in FastAPI and Flask, focusing on asynchronous programming, security, and scalable architecture.",
      about_tech_2_html: "<strong>AI & Machine Learning Integration:</strong> Implementation of Large Language Models (LLMs) via Groq & Llama, and specialized experience in Speech-to-Text (Whisper) for automated workflows.",
      about_tech_3_html: "<strong>Computer Vision & Media:</strong> Real-time visual data processing using MediaPipe, camera control automation, and multimedia synchronization.",
      about_tech_4_html: "<strong>Ecosystem & Full-stack:</strong> Intermediate JavaScript for dynamic logic, high-level HubSpot API integrations, and advanced SQL (PostgreSQL, MariaDB) for complex data structures.",
      about_fullname_label: "Full Name",
      about_dob_label: "Date of birth",
      about_dob_value: "October 4, 2002",
      about_degree_label: "Degree",
      about_degree_value: "Software Engineering (In progress)",
      about_location_label: "Location",
      about_cv_btn: "Download CV",
      about_cv_url: "CV/cv_daniel_bobadilla_english.pdf",
      // What I Do
      whatido_backend_title: "Backend Specialist",
      whatido_backend_desc: "Architecting robust APIs and server-side logic using Python, FastAPI, Django, and Flask.",
      whatido_ai_title: "AI & Automation",
      whatido_ai_desc: "Integrating AI models and LLMs to automate workflows and optimize business processes.",
      whatido_db_desc: "Designing and managing complex database architectures for high-availability applications.",
      // Portfolio
      portfolio_label: "portfolio",
      portfolio_title_html: 'Featured <span class="sec-word">Work</span>',
      portfolio_desc: "A selection of projects that demonstrate my software engineering expertise.",
      portfolio_comunion_desc: "Full-stack church platform with live Bible projection, real-time sync, and a complete Bible reader.",
      portfolio_comunion_detail: "A complete ecosystem for churches. It includes a native Android application for the congregation with daily devotionals, prayer requests, and events. The system features a high-performance 'Command Center' for operators and a 'Exhibition Canvas' synchronized in real-time via BroadcastChannel API for seamless Bible and lyrics projection.",
      portfolio_comunion_tech: "Flask, Vue.js, Android (Native/Flutter), PostgreSQL, BroadcastChannel API.",
      portfolio_cliper_desc: "AI tool to convert long videos into viral reels with 16:9 intelligent tracking.",
      portfolio_cliper_detail: "Advanced AI suite designed to transform long-form video into viral short-form content. It features intelligent face and action tracking to reframe content into 16:9 vertical format. The entire pipeline is managed by a multi-agent AI architecture that handles clip selection, dynamic subtitling, and social media optimization.",
      portfolio_cliper_tech: "Python, Multi-Agent AI, Groq (Llama), Computer Vision (Tracking), Whisper AI.",
      portfolio_shift_desc: "Licensing and internal business management system.",
      portfolio_shift_detail: "Comprehensive system for license control and internal administrative processes. I developed the backend architecture integrating Treli and HubSpot APIs for seamless data synchronization and customer management.",
      portfolio_shift_tech: "Flask, Treli API, HubSpot API, SQL.",
      portfolio_retenciones_desc: "Automated application for downloading tax retention certificates.",
      portfolio_retenciones_detail: "A specialized tool designed to automate the generation and download of tax certificates. I implemented a secure communication layer based on data obfuscation techniques to protect sensitive information transfer.",
      portfolio_retenciones_tech: "Flask, Data Obfuscation, Python Automation.",
      portfolio_view_details: "Click to view details",
      portfolio_built_with: "Built With:",
      // Resume
      resume_label: "Resume",
      resume_title_html: 'Professional <span class="sec-word">Experience</span>',
      resume_job1_title: "Software Developer",
      resume_job1_date: "AUG 2022 - Present",
      resume_job1_type: "Full Time",
      resume_job1_desc: "Developing scalable backend solutions using Python, Flask, and MySQL. Focused on optimizing database performance and building robust APIs for business management systems.",
      resume_job2_title: "Full Stack Developer",
      resume_job2_date: "Present",
      resume_job2_company: "Personal Projects & Consulting",
      resume_job2_desc: "Building custom web applications and automation tools. Implementing modern stacks like FastAPI, Django, and Vue.js to solve specific client needs.",
      resume_edu_heading: "Education",
      resume_edu_school: "Manuela Beltrán University",
      resume_edu_date: "2021 - 2027 (Expected)",
      resume_edu_status: "Enrolled",
      resume_edu_degree: "Software Engineering",
      resume_edu_desc: "Focused on software architecture, algorithms, and advanced programming paradigms.",
      resume_skills_heading: "My Skills",
      resume_skills_backend_desc: "Main tech stack and core competencies.",
      resume_skills_ai_label: "AI Automation (LLM Integration)",
      resume_skills_frontend_title: "Frontend & Tools",
      resume_skills_frontend_desc: "UI development and workflow technologies.",
      resume_skills_git_label: "Git & Deployment",
      resume_skills_english_label: "English Language",
      // Contact
      contact_title: "Let's Work Together.",
      contact_desc: "Feel free to reach out for collaborations or project inquiries.",
      contact_phone_label: "Phone Number",
      contact_connect: "Connect",
      // Courses
      courses_label: "Certifications",
      courses_title_html: 'Courses & <span class="sec-word">Certifications</span>',
      courses_show_more: "Show All Courses",
      courses_show_less: "Show Less",
      course_view_cert: "View Certificate"
    },
    es: {
      // Page meta
      page_title: "Daniel Bobadilla | Ingeniero de Software",
      // Navigation
      nav_about: "Sobre mí",
      nav_work: "Mi trabajo",
      nav_resume: "Mi CV",
      nav_contact: "Contacto",
      // Hero
      hero_intro_label: "Introducción",
      hero_iam: "Soy",
      hero_desc: "Desarrollador Backend enfocado en construir sistemas de alto rendimiento y soluciones de automatización.",
      hero_cta: "Explorar Más",
      typed_strings: ["Desarrollador Backend", "Experto en Python", "FastAPI & Django", "Integración IA & LLM", "Ingeniero de Software"],
      // About
      about_label: "Breve historia",
      about_title_html: 'Sobre <span class="sec-word">mí</span>',
      about_p1: "Soy un Ingeniero de Software motivado por el desafío de construir sistemas backend de alto rendimiento e integrar tecnologías de IA de vanguardia. Mi experiencia radica en cerrar la brecha entre una lógica de servidor robusta y la automatización inteligente en tiempo real.",
      about_p2: "Mi dominio de Python se extiende más allá del desarrollo web estándar; me especializo en aprovechar su ecosistema para procesar datos complejos y desplegar funciones impulsadas por IA. Tengo una trayectoria comprobada en la implementación de IA Generativa (LLMs), Visión Artificial y Procesamiento de Audio en tiempo real en herramientas comerciales funcionales.",
      about_tech_title: "Experiencia Técnica:",
      about_tech_1_html: "<strong>Desarrollo Avanzado de Python:</strong> Profundo dominio en FastAPI y Flask, centrándose en programación asíncrona, seguridad y arquitectura escalable.",
      about_tech_2_html: "<strong>Integración de IA y Machine Learning:</strong> Implementación de Modelos de Lenguaje Extensos (LLMs) a través de Groq y Llama, y experiencia especializada en Speech-to-Text (Whisper) para flujos de trabajo automatizados.",
      about_tech_3_html: "<strong>Visión Artificial y Medios:</strong> Procesamiento de datos visuales en tiempo real utilizando MediaPipe, automatización del control de cámaras y sincronización multimedia.",
      about_tech_4_html: "<strong>Ecosistema y Full-stack:</strong> JavaScript intermedio para lógica dinámica, integraciones de API de HubSpot de alto nivel y SQL avanzado (PostgreSQL, MariaDB) para estructuras de datos complejas.",
      about_fullname_label: "Nombre Completo",
      about_dob_label: "Fecha de nacimiento",
      about_dob_value: "4 de Octubre, 2002",
      about_degree_label: "Grado",
      about_degree_value: "Ingeniería de Software (En curso)",
      about_location_label: "Ubicación",
      about_cv_btn: "Descargar CV",
      about_cv_url: "CV/cv_daniel_bobadilla_espanol.pdf",
      // What I Do
      whatido_backend_title: "Especialista Backend",
      whatido_backend_desc: "Arquitectando APIs robustas y lógica de servidor usando Python, FastAPI, Django y Flask.",
      whatido_ai_title: "IA y Automatización",
      whatido_ai_desc: "Integrando modelos de IA y LLMs para automatizar flujos de trabajo y optimizar procesos de negocio.",
      whatido_db_desc: "Diseñando y gestionando arquitecturas de bases de datos complejas para aplicaciones de alta disponibilidad.",
      // Portfolio
      portfolio_label: "portafolio",
      portfolio_title_html: 'Trabajos <span class="sec-word">Destacados</span>',
      portfolio_desc: "Selección de proyectos que demuestran mi experiencia en ingeniería de software.",
      portfolio_comunion_desc: "Plataforma completa para iglesias con proyección bíblica en vivo y lector de Biblia sincronizado.",
      portfolio_comunion_detail: "Ecosistema completo para iglesias. Incluye una aplicación Android nativa para la congregación con devocionales diarios, peticiones de oración y gestión de eventos. El sistema cuenta con un 'Centro de Comando' de alta eficiencia para operadores y un 'Lienzo de Exhibición' sincronizado en tiempo real mediante BroadcastChannel API para la proyección fluida de Biblia y letras.",
      portfolio_comunion_tech: "Flask, Vue.js, Android (Nativo/Flutter), PostgreSQL, BroadcastChannel API.",
      portfolio_cliper_desc: "Herramienta de IA para convertir videos largos en reels virales con tracking 16:9.",
      portfolio_cliper_detail: "Suite avanzada de IA diseñada para transformar videos de formato largo en contenido corto viral. Utiliza algoritmos de tracking inteligente para reencuadrar el contenido a formato vertical 16:9. Todo el proceso es gestionado por una arquitectura de multi-agentes de IA que se encargan de la selección de clips, subtitulado dinámico y optimización para redes.",
      portfolio_cliper_tech: "Python, IA Multi-Agente, Groq (Llama), Computer Vision (Tracking), Whisper AI.",
      portfolio_shift_desc: "Sistema de licenciamiento y gestión interna empresarial.",
      portfolio_shift_detail: "Sistema integral para el control de licencias y procesos administrativos internos. Desarrollé la arquitectura del backend integrando las APIs de Treli y HubSpot para la sincronización de datos y gestión de clientes.",
      portfolio_shift_tech: "Flask, Treli API, HubSpot API, SQL.",
      portfolio_retenciones_desc: "Aplicación automatizada para descarga de certificados de retenciones.",
      portfolio_retenciones_detail: "Herramienta especializada diseñada para automatizar la generación y descarga de certificados tributarios. Implementé una capa de comunicación segura basada en técnicas de ofuscamiento para proteger la transferencia de datos sensibles.",
      portfolio_retenciones_tech: "Flask, Ofuscamiento de Datos, Python Automation.",
      portfolio_view_details: "Click para ver detalles",
      portfolio_built_with: "Construido con:",
      // Resume
      resume_label: "Resumen",
      resume_title_html: 'Experiencia <span class="sec-word">Profesional</span>',
      resume_job1_title: "Desarrollador de Software",
      resume_job1_date: "AGO 2022 - Actualidad",
      resume_job1_type: "Tiempo Completo",
      resume_job1_desc: "Desarrollando soluciones backend escalables usando Python, Flask y MySQL. Enfocado en optimizar el rendimiento de bases de datos y construir APIs robustas para sistemas de gestión empresarial.",
      resume_job2_title: "Desarrollador Full Stack",
      resume_job2_date: "Actualidad",
      resume_job2_company: "Proyectos Personales y Consultoría",
      resume_job2_desc: "Construyendo aplicaciones web personalizadas y herramientas de automatización. Implementando stacks modernos como FastAPI, Django y Vue.js para resolver necesidades específicas de clientes.",
      resume_edu_heading: "Educación",
      resume_edu_school: "Universidad Manuela Beltrán",
      resume_edu_date: "2021 - 2027 (Esperado)",
      resume_edu_status: "Estudiando",
      resume_edu_degree: "Ingeniería de Software",
      resume_edu_desc: "Enfocado en arquitectura de software, algoritmos y paradigmas de programación avanzada.",
      resume_skills_heading: "Mis Habilidades",
      resume_skills_backend_desc: "Stack técnico principal y competencias centrales.",
      resume_skills_ai_label: "Automatización IA (LLM Integration)",
      resume_skills_frontend_title: "Frontend y Herramientas",
      resume_skills_frontend_desc: "Desarrollo de UI y tecnologías de flujo de trabajo.",
      resume_skills_git_label: "Git y Despliegue",
      resume_skills_english_label: "Idioma Inglés",
      // Contact
      contact_title: "Trabajemos Juntos.",
      contact_desc: "No dudes en contactarme para colaboraciones o consultas de proyectos.",
      contact_phone_label: "Teléfono",
      contact_connect: "Conectar",
      // Courses
      courses_label: "Certificaciones",
      courses_title_html: 'Cursos y <span class="sec-word">Certificaciones</span>',
      courses_show_more: "Ver todos los cursos",
      courses_show_less: "Ver menos",
      course_view_cert: "Ver Certificado"
    }
  },

  // Keys that contain HTML and should use innerHTML instead of textContent
  htmlKeys: [
    'about_title_html', 'about_tech_1_html', 'about_tech_2_html',
    'about_tech_3_html', 'about_tech_4_html', 'portfolio_title_html',
    'resume_title_html', 'courses_title_html'
  ],

  courses: [
    {
      title: { en: "FastAPI: Fundamentals, Path Operations and Validations", es: "FastAPI: Fundamentos, Path Operations y Validaciones" },
      issuer: "Platzi",
      url: "https://platzi.com/p/danielbobadilla/curso/2513-fastapi/diploma/detalle/"
    },
    {
      title: { en: "FastAPI: Modularization, Advanced Data and Errors", es: "FastAPI: Modularización, Datos Avanzados y Errores" },
      issuer: "Platzi",
      url: "https://platzi.com/p/danielbobadilla/curso/2514-fastapi-modularizacion-datos/diploma/detalle/"
    },
    {
      title: { en: "Professional Python Course", es: "Curso Profesional de Python" },
      issuer: "Platzi",
      url: "https://platzi.com/p/danielbobadilla/curso/2397-python-profesional/diploma/detalle/"
    },
    {
      title: { en: "Practical Python Course: CRUD Creation", es: "Curso Práctico de Python: Creación de un CRUD" },
      issuer: "Platzi",
      url: "https://platzi.com/p/danielbobadilla/curso/1378-python-practico/diploma/detalle/"
    },
    {
      title: { en: "Basic Python Course", es: "Curso Básico de Python" },
      issuer: "Platzi",
      url: "https://platzi.com/p/danielbobadilla/curso/1937-python/diploma/detalle/"
    },
    {
      title: { en: "Flask Course", es: "Curso de Flask" },
      issuer: "Platzi",
      url: "https://platzi.com/p/danielbobadilla/curso/1540-course/diploma/detalle/"
    },
    {
      title: { en: "Intermediate Django: Testing, Static Files, Django Admin", es: "Curso de Django Intermedio: Testing, Static Files, Django Admin" },
      issuer: "Platzi",
      url: "https://platzi.com/p/danielbobadilla/curso/2728-django-intermedio/diploma/detalle/"
    },
    {
      title: { en: "Basic Django Course", es: "Curso Básico de Django" },
      issuer: "Platzi",
      url: "https://platzi.com/p/danielbobadilla/curso/2694-django/diploma/detalle/"
    },
    {
      title: { en: "Algorithmic Complexity with Python", es: "Curso de Complejidad Algorítmica con Python" },
      issuer: "Platzi",
      url: "https://platzi.com/p/danielbobadilla/curso/1775-algoritmos-python/diploma/detalle/"
    },
    {
      title: { en: "Practical SQL and MySQL Course", es: "Curso Práctico de SQL y MySQL" },
      issuer: "Platzi",
      url: "https://platzi.com/p/danielbobadilla/curso/1272-sql-mysql/diploma/detalle/"
    },
    {
      title: { en: "Practical SQL Course", es: "Curso Práctico de SQL" },
      issuer: "Platzi",
      url: "https://platzi.com/p/danielbobadilla/curso/2059-practico-sql/diploma/detalle/"
    },
    {
      title: { en: "Python Programming Fundamentals", es: "Fundamentos de Programación con Python" },
      issuer: "Misión TIC 2022 / U. Sergio Arboleda",
      url: "image/certificates/Daniel_Yecid_Bobadilla_Avila-sign_12.pdf"
    },
    {
      title: { en: "Basic Java Programming", es: "Programación Básica con Lenguaje Java" },
      issuer: "Misión TIC 2022 / U. Sergio Arboleda",
      url: "image/certificates/Daniel_Yecid__Bobadilla_Auvila-sign_1.pdf"
    },
    {
      title: { en: "Python 101 for Data Science", es: "Python 101 for Data Science" },
      issuer: "Cognitive Class (IBM)",
      url: "https://courses.cognitiveclass.ai/certificates/b89f5778efc3487fbdfa49029b6b9d7d"
    },
    {
      title: { en: "Introduction to Google Cloud", es: "Introducción al mundo de Google Cloud" },
      issuer: "Netzun",
      url: "image/certificates/certificate.pdf"
    },
    {
      title: { en: "Professional Git and GitHub Course", es: "Curso Profesional de Git y GitHub" },
      issuer: "Platzi",
      url: "https://platzi.com/p/danielbobadilla/curso/1557-git-github/diploma/detalle/"
    },
    {
      title: { en: "Introduction to Web Development I & II", es: "Introducción Al Desarrollo Web I y II" },
      issuer: "Google Activate",
      url: "image/certificates/certificado (1).pdf"
    },
    {
      title: { en: "Cloud Computing", es: "Cloud Computing" },
      issuer: "Google Activate",
      url: "image/certificates/certificado (3).pdf"
    },
    {
      title: { en: "Mobile Apps Development", es: "Desarrollo De Apps Móviles" },
      issuer: "Google Activate",
      url: "image/certificates/certificado.pdf"
    },
    {
      title: { en: "Angular & NodeJS in Production - VPS Setup", es: "Angular y NodeJS en producción - Configurar un servidor VPS" },
      issuer: "Udemy",
      url: "https://www.udemy.com/certificate/UC-07688cd2-8a4e-4c06-b607-4f8c85edf587/"
    }
  ],

  init: function () {
    // Check for saved language preference, default to Spanish (native)
    var savedLang = localStorage.getItem('portfolio_lang');
    if (savedLang && this.translations[savedLang]) {
      this.currentLang = savedLang;
    } else {
      // Auto-detect browser language
      var browserLang = (navigator.language || navigator.userLanguage || 'en').substring(0, 2);
      this.currentLang = browserLang === 'es' ? 'es' : 'en';
    }
    this.applyLanguage();
    this.updateToggleButtons();
    this.bindEvents();
  },

  bindEvents: function () {
    var self = this;
    $(document).on('click', '#lang-toggle-desktop, #lang-toggle-mobile', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var newLang = self.currentLang === 'en' ? 'es' : 'en';
      self.switchLanguage(newLang);
    });

    $(document).on('click', '#btn-show-more-courses', function (e) {
      e.preventDefault();
      var container = $('#courses-container');
      container.toggleClass('showing-all');
      self.renderCourses();
    });
  },

  switchLanguage: function (lang) {
    if (lang === this.currentLang) return;
    this.currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);

    // Fade out, apply, fade in for smooth transition
    var elements = $('[data-i18n]');
    elements.css('opacity', '0');
    
    var self = this;
    setTimeout(function () {
      self.applyLanguage();
      self.updateToggleButtons();
      self.reinitTyped();
      elements.css('opacity', '1');
    }, 200);
  },

  applyLanguage: function () {
    var self = this;
    var translations = this.translations[this.currentLang];
    
    // Update page title
    document.title = translations.page_title;
    
    // Update html lang attribute
    document.documentElement.lang = this.currentLang === 'es' ? 'es' : 'en';

    // Apply translations to all data-i18n elements
    $('[data-i18n]').each(function () {
      var key = $(this).attr('data-i18n');
      if (translations[key] !== undefined) {
        if (self.htmlKeys.indexOf(key) !== -1) {
          $(this).html(translations[key]);
        } else {
          $(this).text(translations[key]);
        }
      }
    });

    // Apply href translations
    $('[data-i18n-href]').each(function () {
      var key = $(this).attr('data-i18n-href');
      if (translations[key] !== undefined) {
        $(this).attr('href', translations[key]);
      }
    });

    this.renderCourses();
  },

  renderCourses: function () {
    var container = $('#courses-container');
    if (!container.length) return;
    
    var self = this;
    var translations = this.translations[this.currentLang];
    var isShowingAll = container.hasClass('showing-all');
    
    container.empty();
    
    this.courses.forEach(function (course, index) {
      var isHidden = !isShowingAll && index >= 6;
      var card = $('<div class="course-card' + (isHidden ? ' hidden' : '') + '"></div>');
      
      var icon = $('<div class="course-icon"><i class="icofont-certificate-alt-1"></i></div>');
      var info = $('<div class="course-info"></div>');
      
      var title = $('<h4>' + course.title[self.currentLang] + '</h4>');
      var issuer = $('<p>' + course.issuer + '</p>');
      var linkText = translations.course_view_cert || "View Certificate";
      var link = $('<a href="' + course.url + '" target="_blank" class="course-link">' + linkText + '</a>');
      
      info.append(title).append(issuer).append(link);
      card.append(icon).append(info);
      container.append(card);
    });

    var btn = $('#btn-show-more-courses');
    if (this.courses.length <= 6) {
      btn.hide();
    } else {
      btn.show();
      var moreText = translations.courses_show_more || "Show All Courses";
      var lessText = translations.courses_show_less || "Show Less";
      btn.text(isShowingAll ? lessText : moreText);
    }
  },

  updateToggleButtons: function () {
    // Show the opposite language as the option to switch to
    var targetLang = this.currentLang === 'en' ? 'es' : 'en';
    var flag = targetLang === 'es' ? '🇪🇸' : '🇺🇸';
    var label = targetLang.toUpperCase();

    $('#lang-toggle-desktop .lang-flag, #lang-toggle-mobile .lang-flag').text(flag);
    $('#lang-toggle-desktop .lang-label, #lang-toggle-mobile .lang-label').text(label);
  },

  reinitTyped: function () {
    // Destroy existing typed instance and reinitialize with new language strings
    var typedEl = document.getElementById('typed-text');
    if (typedEl && typedEl._typed) {
      typedEl._typed.destroy();
    }
    // Clear the element
    $('#typed-text').empty();
    // Remove cursor if any
    $('.typed-cursor').remove();

    var strings = this.translations[this.currentLang].typed_strings;
    var typedInstance = new Typed('#typed-text', {
      strings: strings,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 3000,
      startDelay: 300,
      loop: true,
      showCursor: true
    });
    // Store reference to destroy later
    typedEl._typed = typedInstance;
  }
};

// ==============================================
// ORIGINAL MAIN.JS FUNCTIONALITY
// ==============================================
var Window = $(window);
var Slide1 = $('#slide-brand');
var limit = 300;
var Wrapload = $('.preloader');
var Headder = $('#header-wrap');
var offset = Headder.offset().top;
var goup = $('.scroll-top');
var partner = $('#craxpartner-slide');
var slideoutMenu = $('.wrap-mobilemenu');
var slideoutMenuWidth = $('.wrap-mobilemenu').width();
//Filtering items on portfolio
var portfolioFilter = $('.filter-list li');
// filter items on button click
$(portfolioFilter).on('click', function () {
  var filterValue = $(this).attr('data-filter');
  $('.porto-content').isotope({
    filter: filterValue
  });
});
//Add/remove class on filter list
$(portfolioFilter).on('click', function () {
  $(this).addClass('aktip').siblings().removeClass('aktip');
});
// documennt ready
$(document).ready(function () {
  // Initialize i18n system
  i18n.init();

  $('.skill-bar').each(function (i) {
    var width = $(this).attr('data-valuenow');
    $(this).append('<div style="width: ' + width + '%"></div>');
    $(this).find('span').text(width + '%');
  });
  //animated typed init — uses i18n strings
  var typedStrings = i18n.translations[i18n.currentLang].typed_strings;
  var typedInstance = new Typed('#typed-text', {
    strings: typedStrings,
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 3000,
    startDelay: 1000,
    loop: true,
    showCursor: true
  });
  // Store reference for language switching
  var typedEl = document.getElementById('typed-text');
  if (typedEl) typedEl._typed = typedInstance;

  // owl caraousel
  $('#wrapido').owlCarousel({
    loop: true,
    items: 4,
    lazyLoad: false,
    margin: 50,
    autoplay: true,
    dots: true,
    slideSpeed: 200,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 1
      },
      700: {
        items: 1
      },
      1000: {
        items: 2
      },
      1200: {
        items: 3
      },
      1920: {
        items: 3
      }
    }
  });
  // partner slide
  partner.owlCarousel({
    loop: true,
    nav: false,
    autoPlay: true,
    touchDrag: true,
    margin: 80,
    slideSpeed: 1000,
    dots: false,
    mouseDrag: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      960: {
        items: 3
      },
      999: {
        items: 4
      }
    }
  });
  /* isotope */
  $('.porto-content').isotope({
    resizable: false,
    itemSelector: '.porto-item',
    layoutMode: 'masonry',
    filter: '*'
  });
  /*parallax hero */
  $('.jarallax').jarallax({
    speed: 0.5,
    disableParallax: function () {
      return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
    },
    disableVideo: function () {
      return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
    }
  });
  // magnific image init ----------------------
  $('.image-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  
  // Project Detail Popup init ------------------
  $('.project-detail-popup').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'mfp-zoom-in'
  });
  // mobile navigation init ----------------------
  $('.menu-mobile > .navigation-list li a').on("click", function (e) {
    var anchor = $(this);
    slideoutMenu.animate({
      right: -slideoutMenuWidth
    }, 500);    
    $('.overlay-fade').fadeOut(); 
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 50
    }, 800);
    e.preventDefault();
  });
  // mobile navigation burger toggle switch init ----------------------
  $('#openmenu').on('click', function (e) {
    slideoutMenu.show(50);
    slideoutMenu.animate({
      right: "0px"
    }, 500);
    $('.overlay-fade').show();
  });
  // navbar mobile overlay close init ----------------------
  $(document).on('click', '#closesmenu', function () {
    slideoutMenu.animate({
      right: -slideoutMenuWidth
    }, 500);
    $('.overlay-fade').fadeOut();
    slideoutMenu.hide();
  });
  // scrollspy init ----------------------
  $("body").scrollspy({
    target: "",
    offset: 1
  })
  if ($('.image-popup').length > 0) {
    $('.image-popup').magnificPopup({
      type: 'image',
      fixedContentPos: true,
      gallery: {
        enabled: true
      },
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });
  }
  //Video Popup init
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: true
  });
  //Video Popup init
  if ($('.video-popup').length > 0) {
    $('.video-popup').magnificPopup({
      type: "iframe",
      removalDelay: 300,
      mainClass: "mfp-fade",
      overflowY: "hidden",
      iframe: {
        markup: '<div class="mfp-iframe-scaler">' +
          '<div class="mfp-close"></div>' +
          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
          '</div>',
        patterns: {
          youtube: {
            index: 'youtube.com/',
            id: 'v=',
            src: '//www.youtube.com/embed/%id%?autoplay=1'
          },
          vimeo: {
            index: 'vimeo.com/',
            id: '/',
            src: '//player.vimeo.com/video/%id%?autoplay=1'
          },
          gmaps: {
            index: '//maps.google.',
            src: '%id%&output=embed'
          }
        },
        srcAction: 'iframe_src'
      }
    });
  };
});
/*scroll window */
$(window).on('scroll', function () {
  if ($(window).scrollTop() > 300) {
    goup.addClass('show');
    Headder.addClass('fixed');
  } else {
    goup.removeClass('show');
    Headder.removeClass('fixed');
  }
});
// window on load
Window.on('load', function () {
  Wrapload.fadeOut(600);
});