<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Tipos de pruebas de servicio
    
    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p Las pruebas de #[em software] son importantes en el ciclo de vida y en el desarrollo del mismo #[em software]; generan tranquilidad al equipo desarrollador por un trabajo confiable y, por supuesto, al usuario final que es quien utilizará el producto; es necesario asegurar la funcionalidad, el rendimiento y la experiencia del usuario. En este sentido, las pruebas, sean manuales o automatizadas, tienen el objetivo de garantizar la calidad de un producto antes de salir al mercado, por lo que se expone a diversos test para evitar problemas y ahorrar dinero a la empresa, previniendo posibles inconvenientes con sus clientes, porque si los problemas trascienden al entorno de producción, con seguridad su solución resultará más costosa.
        .p-4.mt-4(style="background-color:#E1F6EF;")
          i.fas.fa-quote-right(style="color:#3EE2A8;font-size:40px;")
          p.fw-bold.mb-0.mt-2.ps-2.ps-md-3 Según IBM (s.f.), la prueba de #[em software] es el proceso de evaluación y verificación de un producto o aplicación de #[em software] para saber si hace lo que se supone que debe hacer. Los beneficios de las pruebas incluyen la prevención de errores, la reducción de los costos de desarrollo y la mejora del rendimiento (Párr.1).
          .text-end
            div(style="width:30px;height:30px;background-color:#3EE2A8;display:inline-block;")
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema3/1.png")
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/19.svg")
      .col-lg-9(data-aos="fade-left" style="place-self:center;")
        p.mb-0 Existen dos tipos de pruebas: funcionales y no funcionales; dentro de las funcionales se podría decir que existen unas subpruebas como las unitarias, de componentes, de humo, integración cordura y aceptación. De otra parte, dentro de las no funcionales se encuentran las pruebas de carga, de estrés, de volumen, de configuración, de usabilidad, de seguridad, de resistencia, de escalabilidad, de recuperación y de mantenibilidad. Cada prueba de #[em software] expone la aplicación para examinarla a fondo y tomar decisiones oportunas en caso que se detecte un error desde el código hasta la experiencia del usuario. 
    p.mt-4(data-aos="fade-right") A continuación, se tomará la prueba Performance que corresponde a la prueba de rendimiento del navegador Google Chrome. Esta herramienta, muy útil para los desarrolladores de #[em software], y se encuentra incorporada dentro de los navegadores Chrome y Mozilla.

    .cont_3_1.mt-4.pt-4
      .cont_titulo_decorativo(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure.ps-2
              img(src="@/assets/curso/tema1/16.svg")
          .col(style="place-self:center;")
            h4.mb-0.pe-4(style="padding-top:7px;") #[em Performance testing]
      
      p(data-aos="fade-left") La prueba #[em Performance testing] es del tipo no funcional; identifica la velocidad, estabilidad y escalabilidad de una aplicación de #[em software], es por eso que estas pruebas realizan la comprobación del rendimiento de la aplicación en los diferentes puntos de referencia del sistema y de la red, como la utilización de la CPU, la velocidad de carga de la página, el control de tráfico máximo, la utilización de recursos del servidor, etc. En estas pruebas de rendimiento, hay varios tipos de pruebas, como pruebas de carga y pruebas de esfuerzo.

      .row.mt-4
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
          figure.m-auto.col-8.col-md-6.col-lg-12
            img(src="@/assets/curso/tema3/2.png")
        .col-lg-8(data-aos="fade-left" style="place-self:center;")
          p Hoy en día, todas las empresas se han volcado a la era digital, por lo que se ha convertido en algo fundamental medir y rastrear el rendimiento de la prestación de servicios, especialmente, las métricas que arrojan los resultados provenientes del tiempo de actividad de los sistemas, de inactividad, debido a eventos inesperados y de la rapidez y eficiencia con que se restablecen los procesos; un pequeño fallo puede causar la parálisis de procesos vitales que presentan pérdidas económicas en millones de pesos para una compañía.
          .p-4.mt-4(style="background-color:#ADD3FD;border-radius:9px;")
            p.mb-0 MTTR, MTBF, MTTF y MTTA son las siglas de las métricas de gestión de incidentes más importantes. En el marco de los servicios de TI, estas métricas permiten llevar un plan estratégico y una organización efectiva de los recursos para garantizar la solución de fallos causados por #[em hardware] y #[em software] (Gupta, 21).

      p.mt-4(data-aos="fade-right") Conozcamos cada una de ellas:

      .row.mt-4
        .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
          AcordionA.acordion1(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Tiempo medio de reparación (MTTR)")
              p Es el tiempo medio que se tarda en recuperar un daño físico o lógico desde que llega el primer aviso de fallo, sin que se incluyan los retrasos en el sistema de alertas. Se involucra el apagado provocado por una interrupción hasta que el sistema vuelve a estar disponible al 100 %. MTTR es un excelente indicador para medir la velocidad de la recuperación del sistema general. 
              p En este caso, la R no siempre se relaciona con la reparación, aplica para recuperación, respuesta o resolución. Estas métricas tienen relación entre sí, pero también tienen diferencias puntuales, por lo que hace parte de las buenas prácticas identificar qué MTTR se utilizará.
              p MTTR normalmente se usa en ciberseguridad para medir la eficacia del equipo en la evasión de ataques que está sufriendo el sistema. Se utiliza para medir el tiempo que se utiliza para resolver un problema por completo del sistema, incluyendo el tiempo invertido en detectar, identificar y resolver el problema hasta asegurarse que no vuelva a ocurrir. Se emplea para medir la solución de problemas imprevistos, pero no para solicitudes de servicio.
            .row(titulo="Tiempo medio entre fallos (MTBF)")
              p Es una métrica muy importante, porque genera un aviso a los usuarios para realizar un mantenimiento preventivo contra un fallo o para reemplazar algún #[em hardware] antes que ocurra una parada del sistema, que pueda perjudicar la operación; si al realizar un mantenimiento preventivo, se observa que el MTBF ha mejorado, se plantea un parte positivo en la fiabilidad del #[em hardware]. El aumento de MTBF es una clara manifestación de efectividad de los procesos de mantenimiento. 
              p Este indicador corresponde al tiempo promedio que transcurre desde la solución de un problema hasta la siguiente vez en que se vuelve a ocasionar. El MTBF mide la disponibilidad y confiabilidad, es decir, entre mayor es el número de MTBF, más confiable es el sistema.
            .row(titulo="Tiempo medio para fallar (MTTF)")
              p Se refiere al tiempo que transcurre de una falla irreparable de un sistema. MTTF mide la confiabilidad de los sistemas no reparables y mide el tiempo que funcione el sistema antes de que falle por completo.
              p Esta métrica es importante para identificar la vida útil de los dispositivos reemplazables y no reemplazables, como teclados, baterías, teléfonos de escritorio, ratones, etc. Los datos históricos sobre el MTTF de cada tipo de #[em hardware], permiten al personal de TI tomar medidas de obsolescencia de manera escalonada.
              p Esta métrica se usa para identificar el ciclo de vida de un sistema, control de versiones y cuándo planificar las revisiones del sistema.
        .col-lg-3(data-aos="fade-left")
          figure.m-auto.col-7.col-md-5.col-lg-12
            img(src="@/assets/curso/tema3/3.svg")
    
    p.mt-4(data-aos="fade-right") Como se observa, cada una de estas métricas tiene una aplicación particular según la incidencia o fallo que un sistema puede presentar; pero, ¿cómo se calculan? A continuación, se presenta cómo calcular cada una de ellas.

    .row.mt-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        figure.m-auto.col-7.col-md-5.col-lg-12
          img(src="@/assets/curso/tema3/4.png")
      .col-lg-7(data-aos="fade-right")
        AcordionA.acordion2(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="¿Cómo calcular el MTTR?")
            p MTTR es una #[strong métrica de gestión de incidentes] que los equipos utilizan para estar al día con las reparaciones, se debe procurar mantener el número de MTTR lo más bajo posible, optimizando la eficiencia de los equipos que ejecutan los procesos de reparación. 
            figure.m-auto.col-md-10.col-lg-10
              img(src="@/assets/curso/tema3/20.svg" alt="MTRR es igual al tiempo total dedicaco a las reparaciones durante un período determinado, dividido el número de reparaciones.")
            p.mt-3.mb-0 Veamos el siguiente ejemplo:
            p Consideremos que hubo 6 fallas en un sistema y que el mantenimiento requerido para recuperarlo a la operatividad completa tomó 3 horas, que son 180 minutos. Entonces, el MTTR sería:  MTTR = 180/6 = 30 minutos.
            p.mb-0 #[strong(style="color:#273A89;") Esto es igual a que el MTTR de una organización es de 30 minutos, siendo este el tiempo promedio que la organización dedica a cada tiempo de inactividad.]
          .row(titulo="¿Cómo se calcula el MTBF?")
            p.mb-2 Consideremos que un sistema funciona perfectamente durante 13 horas. Durante este período, ocurren 3 fallas que causan un tiempo de inactividad total de 1 hora. Entonces, el MTBF se calcula así:
            figure.text-center.m-auto
              img(src="@/assets/curso/tema3/21.svg" style="max-width:100px;display:inline;")
            p.mt-2 #[strong(style="color:#273A89;") Este resultado nos indica que ocurre una falla en el sistema cada 4 horas, lo que origina que el sistema quede #[em off], con lo cual se generan pérdidas para la empresa. El acompañamiento de esta métrica puede reducir el tiempo de inactividad.]
            figure.m-auto.col-md-10.col-lg-10
              img(src="@/assets/curso/tema3/22.svg" alt="MTBF es igual al tiempo de actividad operativo total entre fallas, dividido el número totoal de fallas.")
          .row(titulo="¿Cómo se calcula el MTTF?")
            p MTTF es la principal métrica de confiabilidad de un #[em hardware] no reparable, por lo que el propósito es ampliar la vida útil del activo. Un MTTF más corto conlleva a repetidas interrupciones y tiempos de inactividad. 
            figure.m-auto.col-md-10.col-lg-10
              img(src="@/assets/curso/tema3/23.svg" alt="MTTF es igual a las horas totales de funcionamiento, dividido el número total de fallas.")
            p.mb-0.mt-3 Veamos el siguiente ejemplo:
            p.mb-0 Consideremos que se observan tres sistemas idénticos hasta que todos fallan. El primer sistema duró 14 horas, el segundo 16 horas y el tercero 12 horas. 
            p.mb-2 Entonces, MTTF se calcula así:
            figure.text-center
              img(src="@/assets/curso/tema3/24.svg" style="max-width:200px;display:inline;")
            p.mt-2 #[strong(style="color:#273A89;") El resultado se interpreta que, en promedio, este tipo de sistema debe ser reemplazado cada 14 horas para evitar tiempos de inactividad más prolongados y daños posteriores.]
          .row(titulo="¿Cómo se calcula el MTTA?")
            p Esta métrica se emplea para monitorear la capacidad de respuesta, es decir, si un equipo se demora en su respuesta y sufre de estrés por alerta, MTTA contribuye a resaltar el problema. 
            figure.m-auto.col-md-10.col-lg-10
              img(src="@/assets/curso/tema3/25.svg" alt="MTTA es igual al tiempo total transcurrido entre la alerta y el reconocimiento, dividido el número total de incidentes.")
            p.mb-0.mt-3 Veamos el siguiente ejemplo:
            p.mb-2 Hubo 5 incidentes en una empresa y tomó un total de 30 minutos de tiempo entre la alerta y el reconocimiento de todos los incidentes, entonces, el MTTA se calcula así:
            figure.text-center
              img(src="@/assets/curso/tema3/26.svg" style="max-width:200px;display:inline;")
            p.mt-2 #[strong(style="color:#273A89;") La respuesta a la métrica MTTA es de 6 minutos, por lo cual la organización debe trabajar en reducir este tiempo para optimizar su proceso de resolución.]
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_3_1 3.1  Gestión del proceso de pruebas
    
    p(data-aos="fade-left") La gestión de pruebas soporta el ciclo de vida de una prueba (diseño, recopilación, verificación, activación, corrección y compartición), a la vez que reutiliza pruebas en múltiples programas. Es una parte clave del proceso global de #[strong elegibilidad] y titularidad, comprendiendo que la elegibilidad se revaloriza de forma permanente, debido a los cambios en las circunstancias, reglas o tasas que tienen lugar a lo largo del tiempo.
    p(data-aos="fade-right") La gestión de pruebas proporciona las siguientes características:
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones.p-4(titulo="Traducción" style="background-color:#E1F6EF;")
            h4(style="color:#12263F;") Traducción rápida de la legislación y la política 
            p(style="color:#12263F;") Herramientas de usuario de negocio para una traducción rápida de la legislación y la política, en una estructura de pruebas y unos requisitos de verificación.
          .tarjeta.color-acento-botones.p-4(titulo="Auditorías" style="background-color:#E1F6EF;")
            h4(style="color:#12263F;") Auditorías
            p(style="color:#12263F;") Auditorías, históricos, seguridad y corrección de pruebas preconstruidas.
          .tarjeta.color-acento-botones.p-4(titulo="Flujos de trabajo" style="background-color:#E1F6EF;")
            h4(style="color:#12263F;") Flujos de trabajo
            p(style="color:#12263F;") Flujos de trabajo preconstruidos que supervisan la validez de las verificaciones, e inician el proceso de nueva verificación.
          .tarjeta.color-acento-botones.p-4(titulo="Preconstruidas" style="background-color:#E1F6EF;")
            h4(style="color:#12263F;") Preconstruidas
            p(style="color:#12263F;") Herramientas preconstruidas de gestión de pruebas, para la mejora de la productividad del asistente social. 
          .tarjeta.color-acento-botones.p-4(titulo="Experiencia de usuario " style="background-color:#E1F6EF;")
            h4(style="color:#12263F;") Experiencia de usuario 
            p(style="color:#12263F;") Una experiencia de usuario coherente a lo largo del ciclo de vida, como por ejemplo, admisión, verificación, activación, corrección y compartición entre programas.
          .tarjeta.color-acento-botones.p-4(titulo="Visualización" style="background-color:#E1F6EF;")
            h4(style="color:#12263F;") Visualización
            p(style="color:#12263F;") La visualización de pruebas centra la atención del usuario en tareas pendientes, tales como la verificación y la activación.
          .tarjeta.color-acento-botones.p-4(titulo="Espacio de trabajo" style="background-color:#E1F6EF;")
            h4(style="color:#12263F;") Espacio de trabajo
            p(style="color:#12263F;") Espacio de trabajo y flujos de trabajo de gestión de pruebas compartidas, para incorporar revisiones específicas de programa.
      .col-lg-3(data-aos="fade-left" )
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema3/10.svg")
    
    p.mt-4(data-aos="fade-right") Estos procesos de aseguramiento de calidad de #[em software], normalmente se caracterizan por el análisis en pruebas estáticas y dinámicas, pero, #[span.ps-1.pe-1(style="background-color:#273A89;color:#fff;") ¿cuáles son las diferencias entre estas pruebas?]

    .cont_3_2.mt-4.pb-4
      .col-xl-10.m-auto
        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="fade-right")
            .h-100.p-4.text-white(style="background-color:#273A89;border-radius:9px;")
              .text-end(style="position:absolute;right:0;top:0;width:100%;height:100%;")
                figure
                  img(src="@/assets/curso/tema3/11.svg" style="max-width:400px;display:inline;")
              figure
                img(src="@/assets/curso/tema3/7.svg" style="max-width:100px;")
              p.fw-bold.mt-4 Pruebas estáticas
              p Se enfocan en la calidad de la documentación del proyecto, realizando revisiones periódicas.
          .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="fade-left")
            .h-100.p-4.text-white(style="background-color:#273A89;border-radius:9px;")
              .text-end(style="position:absolute;right:0;top:0;width:100%;height:100%;")
                figure
                  img(src="@/assets/curso/tema3/11.svg" style="max-width:400px;display:inline;")
              figure
                img(src="@/assets/curso/tema3/8.svg" style="max-width:100px;")
              p.fw-bold.mt-4 Pruebas dinámicas
              p Precisan la ejecución del #[em software] para examinar la calidad del código con el que fue creado y verificar el cumplimiento con las especificaciones del sistema.
      
      p.mt-4(data-aos="fade-right") Cuando se efectúan pruebas dinámicas a un producto de #[em software], se piensa, normalmente, que se hace referencia a la ejecución del #[em software] y a la verificación de una serie de incidencias, al contrario de los productos robustos, se recomienda una metodología de pruebas que se ajuste a la metodología de desarrollo del #[em software].

    .row.mt-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema3/9.png")
      .col-lg-7(data-aos="fade-left" )
        p Para desarrollo basados en la metodología RUP o métodos tradicionales, se recomienda implementar una metodología de pruebas totalmente viable, considerando que estas metodologías están orientadas a la documentación y formalización de todas las actividades realizadas. Si la firma desarrolladora realiza un acompañamiento del proceso bajo los lineamientos basados en metodologías ágiles, se estudiará la conveniencia de iniciar las actividades que tengan que ver con el proceso de pruebas formal.
        p Los procesos de pruebas que se realizan correctamente contienen 5 etapas:
        ol.lista-ol--cuadro.mt-3.ps-3
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:;")
              span.fw-bold(style="color:initial;") 1
            div Planeación de pruebas.
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:;")
              span.fw-bold(style="color:initial;") 2
            div Diseño de pruebas.
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:;")
              span.fw-bold(style="color:initial;") 3
            div implementación de pruebas.
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:;")
              span.fw-bold(style="color:initial;") 4
            div Evaluación de criterios de salida.
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:;")
              span.fw-bold(style="color:initial;") 5
            div Cierre del proceso.
        p.mt-0 Se profundizará en la primera etapa.
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema1/16.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4(style="padding-top:7px;") Planeación de pruebas
    
    p(data-aos="fade-left") En esta etapa se realizan las primeras pruebas que generan un entregable denominado Plan de pruebas, el cual debe considerar los siguientes aspectos:

    .row.mt-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        AcordionA.acordion2(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Alcance de la prueba")
            p Se identifica qué funcionalidades del producto serán probadas durante el transcurso de la prueba. El listado de funcionalidades se realiza con base en el estudio de riesgos realizado previamente, teniendo en cuenta variables como la falla de una funcionalidad o la posible falla de una de estas. Con este análisis se obtiene información adicional, para determinar, además del detallado, la urgencia con la que las funcionalidades deben probarse.
          .row(titulo="Tipos de prueba")
            p Es fundamental seleccionar los tipos de prueba que se pueden emplear para determinada aplicación, debido a que no es posible utilizar todos los tipos de prueba; por eso es indispensable que el encargado plantee las preguntas necesaria para identificar las pruebas correctas que se deberán implementar. Dentro de estos posibles tipos de pruebas se encuentran las de estrés, de rendimiento, de carga, de usabilidad, de regresión, entre otros.
          .row(titulo="Estrategia de pruebas")
            p Por medio de un análisis de riesgos, se determina en qué funcionalidades del aplicativo se centrará nuestra aplicación; asimismo, en la estrategia de pruebas se indicarán los ciclos que se aplicarán y la intensidad o profundidad a realizar en cada nivel de prueba definido.
          .row(titulo="Criterios de salida")
            p Las partes involucradas en el proceso, definen los entregables y la profundidad con la que se realizará una prueba, así como a qué funcionalidades se le realizará las pruebas. Los criterios de salida se definen para cada nivel de pruebas; algunos de estos criterios son los siguientes:
            ul.lista-ul.ps-4
              li.d-flex
                i.far.fa-file-code(style="color:#273A89 !important;")
                div Porcentaje de funcionalidades de alto riesgo probadas con éxito.
              li.d-flex
                i.far.fa-file-code(style="color:#273A89 !important;")
                div Número de defectos críticos y/o mayores aceptados, etc.
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-7.col-md-5.col-lg-12
          img(src="@/assets/curso/tema3/12.png")
    
    .row.mt-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-5.col-lg-12
          img(src="@/assets/curso/tema3/13.png")
      .col-lg-7(data-aos="fade-left")
        AcordionA.acordion2(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Diseño de pruebas")
            p Cuando se haya definido el plan de pruebas, se debe realizar el examen de toda la documentación referente al sistema para empezar con el diseño de casos de pruebas; los entregables importantes podrían ser los siguientes: 
            ul.lista-ul.ps-3
              li.d-flex
                i.far.fa-file-code(style="color:#273A89 !important;")
                div Casos de uso.
              li.d-flex
                i.far.fa-file-code(style="color:#273A89 !important;")
                div Historias de usuario.
              li.d-flex
                i.far.fa-file-code(style="color:#273A89 !important;")
                div Arquitectura del sistema.
              li.d-flex
                i.far.fa-file-code(style="color:#273A89 !important;")
                div Diseños.
              li.d-flex
                i.far.fa-file-code(style="color:#273A89 !important;")
                div Manuales de usuario.
              li.d-flex
                i.far.fa-file-code(style="color:#273A89 !important;")
                div Manuales técnicos.
            p En el diseño de los  casos se deben tener en cuenta los casos positivos y negativos. En los casos de prueba negativas dejan evaluar el comportamiento ante situaciones atípicas y permite verificar la robustez del sistema.
          .row(titulo="Implementación y ejecución de pruebas")
            p Cuando se ejecutan las pruebas en el sistema, se debe indicar la creación de datos de prueba para realizar los casos diseñados. Estos se pueden ejecutar de manera manual o automatizada. Cuando se detecte un fallo en el sistema se debe documentar y registrar en una herramienta indicada para ello; una vez el defecto se corrige, se valida nuevamente en el proceso de depuración, para hacer la verificación de la corrección. Así, se necesita hacer un proceso de regresión para verificar que dicha corrección no genere otro tipo de errores.
          .row(titulo="Evaluación de criterios de salida")
            p La evaluación de criterios de salida se requiere para determinar si es posible dar por terminado el ciclo de pruebas; para ello, se necesita comparar, al final del proceso, las métricas obtenidas con las métricas esperadas; si estas métricas esperadas no son nada similares con las obtenidas, entonces, no es posible continuar con el proceso.
          .row(titulo="Cierre del proceso")
            p En la planeación no se dedica mucho tiempo a esta parte del proceso. Se deben cerrar las incidencias reportadas, se verifica si los entregables diseñados han sido entregados y aprobados y, finalmente, se realizan y aprueban los documentos de soporte de prueba.
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_3_2 3.2 Normas y estándares
    
    p(data-aos="fade-left") Normalmente, las aplicaciones son construidas por empresas desarrolladoras o terceros, y los contratantes de estos servicios confían en que el desarrollo que están adquiriendo tenga las condiciones de calidad; esto considerando que usualmente no tienen los medios para auditar el sistema que se les está entregando, por lo cual no pueden argumentar defectos en el proceso. Para este efecto se han establecido normas y estándares, que regulan estos servicios. 

    .p-4.ps-lg-5.pe-lg-5(style="background-color:#E1F6EF;border-radius:4px;")
      .row
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right" )
          figure.m-auto.col-7.col-md-6.col-lg-12
            img(src="@/assets/curso/tema3/14.svg")
        .col-lg-8(data-aos="fade-left" )
          .pt-2.cont_fondo_1.pb-3(style="border-top:1px #3EE2A8 solid;")
            .row
              .col-auto.pe-0
                i.fas.fa-quote-left(style="color:#3EE2A8;font-size:30px;")
              .col
                p.mt-3 Los estándares de calidad de #[em software] hacen parte de la ingeniería de #[em software], utilización de estándares y metodologías para el diseño, programación, prueba y análisis del #[em software] desarrollado, con el objetivo de ofrecer una mayor contabilidad, mantenibilidad en concordancia con los requisitos exigidos, con esto se eleva la productividad y el control en la calidad de #[em software], parte de la gestión de la calidad se establecen a mejorar su eficacia y eficiencia (Párr.1).
            .text-end.pe-4
              p.mb-0 #[strong Arciniega (2018) indica que:] #[i.fas.fa-quote-right(style="color:#3EE2A8;font-size:25px;bottom:-5px;position:relative;")]

    p.mt-5(data-aos="fade-right") Así, estos estándares de calidad del #[em software] ofrecen una mayor confiabilidad y concordancia con los requisitos exigidos. Pero, #[span.ps-1.pe-1(style="background-color:#273A89;color:#fff;") ¿cuáles son las normas que rigen la calidad del #[em software]?]

    TabsC.color-acento-botones.mt-4
      .py-3.py-md-4(titulo="ISO 12207 – Modelos de ciclos de vida del <em>software</em>")
        .row.col-xl-11.m-auto
          .col-lg-8.mb-4.mb-lg-0
            p.fw-bold ISO 12207 – Modelos de ciclos de vida del #[em software]
            p.mb-0 Este estándar se concibió para clientes de #[em software], así como para  desarrolladores y proveedores. Indica una serie de procesos desde la recopilación de requisitos hasta la culminación del #[em software].
            p El estándar comprende 17 procesos lo cuales son agrupados en tres categorías principales:
            ul.lista-ul
              li.d-flex
                i.far.fa-file-code(style="color:#1682FB !important;")
                div De apoyo.
              li.d-flex
                i.far.fa-file-code(style="color:#1682FB !important;")
                div De organización.
              li.d-flex
                i.far.fa-file-code(style="color:#1682FB !important;")
                div De organización.
            p.mt-3 La ISO 12207 agrupa las actividades que se pueden llevar a cabo durante el ciclo de vida del #[em software] en cinco procesos principales, ocho procesos de apoyo y cuatro procesos organizativos.
          .col-lg-4
            figure.m-auto.col-7.col-md-6.col-lg-12
              img(src='@/assets/curso/tema3/15.png')
      .py-3.py-md-4(titulo="Norma ISO/IEC 9126 de 1991")
        .row.col-xl-11.m-auto
          .col-lg-8.mb-4.mb-lg-0
            p.fw-bold Norma ISO/IEC 9126 de 1991
            p.mb-0 Esta norma evalúa los productos de #[em software], indica la calidad y la forma de uso, las características de calidad del desarrollo y las métricas aplicadas, es decir, facilita la evaluación del producto. Esta norma se define en un marco conceptual basado en factores como la calidad del proceso y la calidad del producto del #[em software] que contribuye a mejorar la calidad en el uso. Según la ISO/IEC 9126, la calidad en uso es la perspectiva del usuario de la calidad del producto #[em software] cuando se emplea en un ambiente específico y contexto específicos. Mide la extensión en la que los usuarios pueden conseguir sus metas en un ambiente particular, en vez de medir las propiedades del #[em software] en sí mismo.
          .col-lg-4
            figure.m-auto.col-7.col-md-6.col-lg-12
              img(src='@/assets/curso/tema3/16.png')
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_3_3 3.3 Herramientas de pruebas
    
    .cont_3_3
      .row
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          p Una de las herramientas de prueba es la de performance o rendimiento, que hace referencia a la evaluación del rendimiento, valga la redundancia, de un sistema que está sujeto a manipulación por parte del usuario para que este arroje un resultado; las pruebas performance que se realizan se refieren a los tiempos de respuesta y estabilidad de los recursos que se utilizan en cuanto a #[em hardware] y a la utilización de los recursos de red, aplicando una carga de trabajo. En general, estas pruebas se diseñan para verificar la velocidad, la solidez, la confiabilidad y el tamaño de la aplicación; cuando se realiza este proceso se involucran algunos indicadores como:
          ul.lista-ul.mt-4.ps-4.ps-lg-5
            li.d-flex
              i.far.fa-file-code(style="color:#1682FB !important;")
              div Tiempos de respuesta del navegador, la página y la red.
            li.d-flex
              i.far.fa-file-code(style="color:#1682FB !important;")
              div Tiempos de procesamiento de solicitudes del servidor.
            li.d-flex
              i.far.fa-file-code(style="color:#1682FB !important;")
              div Volúmenes de usuarios simultáneos aceptables.
            li.d-flex
              i.far.fa-file-code(style="color:#1682FB !important;")
              div Consumo de memoria del procesador, número y tipo de errores que se pueden encontrar con la aplicación.
        .col-lg-5(data-aos="fade-right")
          figure.m-auto.col-7.col-md-6.col-lg-12
            img(src="@/assets/curso/tema3/17.png")
      .col-xl-10.m-auto.mt-4
        .p-4(style="background-color:#ADD3FD;border-radius:13px;" data-aos="zoom-in")
          .row
            .col-md-auto.col-5.mx-auto.mb-4.mb-md-0(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/18.svg")
            .col-md.col-12(style="place-self:center;")
              p.mb-0 Las pruebas de performance verifican las pruebas de velocidad, la solidez, la confiabilidad y el tamaño correcto de una aplicación. Hay muchos indicadores, como el navegador, los tiempos de respuesta de la página y la red, el tiempo de procesamiento de consultas del servidor, la cantidad de usuarios conectados al tiempo, el consumo de memoria de la CPU y la cantidad y tipo de errores al usar alguna aplicación.
    
    p.mt-4(data-aos="fade-right") En el siguiente video se presenta la prueba de performance mediante el navegador de Google Chrome:

    figure.mt-4(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)








   
      
</template>

<script>
export default {
  name: 'Tema3',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cont_3_1, .cont_3_1 *
  position: relative
.cont_3_1:before
  content: ''
  position: absolute
  width: 125%
  height: 70%
  left: -15%
  top: 0
  background: url(../assets/curso/tema3/6.png)
  background-size: cover
  background-position: center
.acordion1 .acordion__accion__btn--b, .acordion2 .acordion__accion__btn--b
  border: 1px solid #111e61
  background-color: #FFCE00
  border-color: #FFCE00
  box-shadow: 0px 0px 10px rgba(0,0,0,.2)
.acordion1 .tarjeta--azul
  background-color: #DCECFE !important
.acordion1 .tarjeta.tarjeta--azul.acordion__activo
  background-color: #E1F6EF !important
.acordion1 .acordion__accion__btn--a
  background-color: #FFCE00
.acordion2 .tarjeta--azul
  background-color: #E1F6EF !important
.acordion2 .tarjeta.tarjeta--azul.acordion__activo
  background-color: #DCECFE !important
.acordion2 .acordion__accion__btn--a
  background-color: #FFCE00
.tabs-a.color-acento-botones .tabs-a__tab__selected
  color: #12263F
.tabs-a.color-acento-botones .tabs-a__tab:hover, .tabs-a.color-acento-botones .tabs-a__tab:active, .tabs-a.color-acento-botones .tabs-a__tab:focus
  color: #12263F
.cont_3_2, .cont_3_2 *
  position: relative
.cont_3_2:before
  content: ''
  position: absolute
  height: 90%
  width: 125%
  left: -15%
  bottom: 0
  background-color: #ADD3FD
.cont_3_3, .cont_3_3 *
  position: relative
.cont_3_3:before
  content: ''
  position: absolute
  height: 50%
  width: 125%
  left: -15%
  top: 30%
  bottom: 20%
  background-color: #DCECFE
.tabs-c__content-item
  background-color: #E1F6EF
  padding-top: 25px
.tabs-c__header
  margin-bottom: 0px
.tabs-c.color-acento-botones .tabs-c__tab--active
  font-weight: bold
@media screen and (max-width: 992px)
  .cont_3_2
    height: 100%
    top: 0
</style>
