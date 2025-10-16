export default {
  global: {
    Name: 'Inteligencia Artificial y productividad',
    Description:
      'Este componente aborda los conceptos fundamentales y la evolución de la inteligencia artificial, destacando su historia, los flujos de procesos y los diferentes tipos de aprendizaje. Asimismo, explora sus aplicaciones en la vida cotidiana, como los <i>chatbots</i> y asistentes virtuales, e incorpora una reflexión sobre los principios éticos y los retos sociales que plantea su uso. También incluye ejemplos prácticos de automatización con inteligencia artificial y un análisis de las herramientas actuales disponibles tanto para usuarios como para empresas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Inteligencia Artificial (IA)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos claves en Inteligencia Artificial (IA)',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Historia y evolución',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Aplicaciones en la vida cotidiana y en la industria',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Principios fundamentales',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Papel de la inteligencia artificial en el procesamiento de datos',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Flujos de proceso en Inteligencia Artificial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Beneficios de los flujos de proceso en IA',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Herramientas de inteligencia artificial (asistentes virtuales, de automatización, plataformas sin código y bajo código)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Áreas de aplicación',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Procesos automatizados (informaciones no estructuradas, capas, lógica de tareas, toma de decisiones autónomas)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Papel de la inteligencia artificial en el procesamiento de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2024). <i>Procesamiento de datos para modelos de inteligencia artificial</i>.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=XjsAcMuYM2Y&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: 'Beneficios de los flujos de proceso',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2024). <i>Integración y gestión avanzada de datos para inteligencia artificial</i>.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=mxb4fQq2CNw&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA ',
    },
    {
      tema:
        'Herramientas de inteligencia artificial (asistentes virtuales, de automatización, plataformas sin código y bajo código)',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2024). <i>Machine Learning con Python</i>.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=noMy4-zjR9Q&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA  ',
    },
  ],
  glosario: [
    {
      termino: 'Agentes autónomos',
      significado:
        'Sistemas que operan de forma independiente, tomando decisiones basadas en datos y condiciones específicas del entorno, usados en aplicaciones como drones y robots industriales.',
    },
    {
      termino: 'Algoritmos',
      significado:
        'Conjunto de instrucciones matemáticas que permiten a una máquina aprender de los datos y tomar decisiones.',
    },
    {
      termino: 'Aprendizaje automático',
      significado:
        'Subdisciplina de la inteligencia artificial donde las máquinas aprenden de datos para mejorar su rendimiento sin programación explícita. Incluye aprendizaje supervisado, no supervisado y por refuerzo.',
    },
    {
      termino: 'Automatización',
      significado:
        'Proceso de usar tecnología, como la IA, para realizar tareas repetitivas o análisis complejos sin intervención humana directa.',
    },
    {
      termino: '<i>Chatbots</i>',
      significado:
        'Programas con IA capaces de interactuar con usuarios mediante lenguaje natural para resolver consultas y automatizar la atención al cliente.',
    },
    {
      termino: 'Computación',
      significado:
        'Uso de procesadores potentes y tecnologías en la nube para entrenar modelos de inteligencia artificial.',
    },
    {
      termino: 'Datos no estructurados',
      significado:
        'Información que no sigue un formato fijo, como textos, imágenes o videos, que la IA analiza para extraer valor con técnicas como NLP o visión computacional.',
    },
    {
      termino: 'Redes neuronales',
      significado:
        'Modelos computacionales inspirados en el cerebro humano, organizados en capas, que permiten el aprendizaje profundo para analizar grandes volúmenes de datos.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'Proceso mediante el cual un sistema de IA mejora continuamente corrigiendo errores a partir de datos nuevos o resultados previos.',
    },
    {
      termino: 'Toma de decisiones autónomas',
      significado:
        'Capacidad de sistemas inteligentes para seleccionar la mejor acción según reglas, modelos del entorno o aprendizaje basado en experiencia.',
    },
    {
      termino: 'Visión por computadora',
      significado:
        'Tecnología que permite a máquinas interpretar imágenes y videos para identificar objetos y patrones mediante algoritmos y aprendizaje automático.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chollet, F. (2021). <i>Deep learning con Python<i> (2.ª ed.). Ediciones Anaya Multimedia.',
    },
    {
      referencia:
        'Chollet, F. (2022). <i>Deep learning con Python<i> (2.ª ed., J. Barceló, Trad.). Anaya Multimedia. (Obra original publicada en 2021).',
    },
    {
      referencia:
        'Cuatrecasas. (2024, noviembre 12). <i>Guía para el uso responsable de IA y datos personales en Colombia<i>. ',
      link:
        'https://www.cuatrecasas.com/es/spain/tecnologia-medios-digitales/art/guia-uso-responsable-ia-datos-personales-colombia',
    },
    {
      referencia:
        'De Prado, M. (2023). <i>Inteligencia artificial y análisis de datos: Fundamentos y aplicaciones</i>. Ediciones Pirámide.',
    },
    {
      referencia:
        'Fernández-Macías, E., & Sánchez, Á. (2022). <i>El impacto de la inteligencia artificial en el empleo y el trabajo</i>. Fundación Cotec.',
    },
    {
      referencia:
        'García, E., & López, F. (2023). <i>Inteligencia artificial: Fundamentos, ética y aplicaciones</i>. Alfaomega.',
    },
    {
      referencia:
        'Goodfellow, I., Bengio, Y., & Courville, A. (2022). <i>Deep learning: Introducción práctica con Python</i> (2.ª ed., J. Cordero, Trad.). Marcombo.',
    },
    {
      referencia:
        'González, M. A. (2023). <i>Inteligencia artificial generativa: Fundamentos, herramientas y aplicaciones prácticas</i>. Editorial Alfaomega.',
    },
    {
      referencia:
        'Lind, D. A., Marchal, W. G., & Wathen, S. A. (2022). <i>Estadística aplicada a los negocios y la economía </i>(17.ª ed.). Cengage Learning.',
    },
    {
      referencia:
        'Maldonado, G. (2021).<i> Estadística aplicada a las ciencias sociales y administrativas</i>. Ediciones de la U.',
    },
    {
      referencia:
        'Provost, F., & Fawcett, T. (2020).<i> Data science para los negocios: Lo que necesitas saber sobre minería de datos y análisis predictivo</i>. O’Reilly Media.',
    },
    {
      referencia:
        'Suárez, E. (2024). <i>Fuentes de información: Qué son, tipos y ejemplos</i>. Experto Universitario. ',
      link: 'https://expertouniversitario.es/blog/fuentes-de-informacion/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Javier Eduardo Díaz Machuca',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
