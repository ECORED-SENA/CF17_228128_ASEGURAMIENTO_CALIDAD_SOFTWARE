export default {
  global: {
    componenteFormativo: 'Métricas de calidad de servicios',
    descripcionCurso:
      'En este componente formativo se determinará la importancia que tienen las métricas de calidad del <em>software</em> como herramienta fundamental con miras a cumplir los requerimientos implícitos y explícitos de los clientes, y que el producto entregado satisfaga las expectativas para la cual fue desarrollado, cumpliendo con las características puntuales para que las pruebas arrojen su resultado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: '<em>Networking</em> y servicios de infraestructura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Modelo de referencia OSI',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'IPv4 e IPv6',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Alta disponibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Métricas de niveles de servicio',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clústeres',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Computación en la nube',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Continuidad del negocio',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tipos de pruebas de servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Gestión del proceso de pruebas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Normas y estándares',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Herramientas de pruebas',
            hash: 't_3_3',
          },
        ],
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
        download: 'downloads/prueba.pdf',
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
      tema: 'IPv4 e IPv6',
      referencia:
        'Mastering IT. (2020). <em>Un resumen completo del modelo #TCPIP (Todas sus capas en menos de 7 minutos)</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/1pB2kan_AFk',
    },
  ],
  glosario: [
    {
      termino: 'Capa',
      significado:
        'capa compleja que permite conectividad y elige una ruta entre dos sistemas de hosts que pueden estar ubicados en redes geográficamente distintas (Todo de Redes. 2021). ',
    },
    {
      termino: 'Interoperabilidad',
      significado:
        'capacidad de comunicación entre distintos sistemas con distintos datos en distintos formatos de modo que la información pueda ser compartida, accesible desde distintos entornos y comprendida por cualquiera de ellos (Ecityclic, 2019). ',
    },
    {
      termino: '<em>Performance testing</em>',
      significado:
        'reúnen todas las pruebas que verifican la velocidad, la solidez, la confiabilidad y el tamaño correcto de una aplicación. Examina varios indicadores, como el navegador, los tiempos de respuesta de la página y la red, el tiempo de procesamiento de consultas del servidor, la cantidad de usuarios simultáneos aceptables diseñados, el consumo de memoria de la CPU y la cantidad/tipo de errores que se pueden encontrar al usar una aplicación.',
    },
    {
      termino: 'Red de datos',
      significado:
        'infraestructuras o redes de comunicación que se han diseñado específicamente para la transmisión de información mediante el intercambio de datos. Las redes de datos se diseñan y construyen en arquitecturas que pretenden servir a sus objetivos de uso. Las redes de datos, generalmente, están basadas en la Comunicación de paquetes y se clasifican de acuerdo con su tamaño, la distancia que cubre y su arquitectura física (EcuRed, 2021). ',
    },
  ],
  referencias: [
    {
      referencia:
        'Arciniegas, A. (2018). <em>Normas y estándares de calidad para el desarrollo de software</em>.',
      link: 'http://fcaenlinea.unam.mx/anexos/1728/Unidad_2/u2_act2_1.pdf',
    },
    {
      referencia:
        'Cisco. (2023). <em>Configuración de direcciones IP y subredes únicas para nuevos usuarios</em>.',
      link:
        'https://www.cisco.com/c/es_mx/support/docs/ip/routing-information-protocol-rip/13788-3.html',
    },
    {
      referencia:
        'Gupta. A. (2021). <em>¿Qué son MTTR, MTBF, MTTF y MTTA? Motadata</em>.',
      link: 'https://www.motadata.com/es/blog/incident-management-metrics',
    },
    {
      referencia: 'IBM. (s.f.). <em>¿Qué es una prueba de software?</em>',
      link: 'https://www.ibm.com/ar-es/topics/software-testing',
    },
    {
      referencia: 'Icot. (2021). Infraestructura IT',
      link: 'https://www.icot.es/infraestructura-it/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jonathan Guerrero Astaiza',
          cargo: 'Experto temático',
          centro:
            'Regional Cauca - Centro de teleinformática y producción industrial',
        },
        {
          nombre: 'Zulema Yidney León Escobar',
          cargo: 'Experto temático',
          centro:
            'Regional Cauca - Centro de teleinformática y producción industrial',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Regional Santander - Centro industrial del diseño y la manufactura',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Regional Tolima - Centro de comercio y servicios',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseño web y Producción Audiovisual',
          centro:
            'Regional Santander - Centro industrial del diseño y la manufactura',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseño web y Producción Audiovisual',
          centro:
            'Regional Santander - Centro industrial del diseño y la manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Diseño web y Producción Audiovisual',
          centro:
            'Regional Santander - Centro industrial del diseño y la manufactura',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Diseño web y Producción Audiovisual',
          centro:
            'Regional Santander - Centro industrial del diseño y la manufactura',
        },
        {
          nombre: 'Wilson Andres Arenales Cáceres',
          cargo: 'Diseño web y Producción Audiovisual',
          centro:
            'Regional Santander - Centro industrial del diseño y la manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Desarrollo Front-End',
          centro:
            'Regional Santander - Centro industrial del diseño y la manufactura',
        },
        {
          nombre: 'Rafael Augusto Mantilla',
          cargo: 'Revisor de contenidos',
          centro:
            'Regional Santander - Centro industrial del diseño y la manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación de recursos',
          centro: 'Regional Tolima - Centro de comercio y servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
