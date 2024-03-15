<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Alta disponibilidad
    
    .p-4(style="background-color:#E1F6EF;border-radius:7px;")
      .row
        .col-md-auto.col-5.mx-auto.mb-4.mb-md-0(style="place-self:center;" data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema2/1.svg")
        .col-md.col-12(style="place-self:center;" data-aos="fade-left")
          p.mb-0 #[em High Availability] (HA) es la característica que tiene una arquitectura tecnológica que determina el grado con el que los servicios TI están activos o disponibles para ser usados por el cliente final. Por lo tanto, la alta disponibilidad garantiza que los sistemas estén disponibles, a pesar que existan fallos en las tecnologías que los soportan.
    
    p.mt-4(data-aos="fade-right") Una alta disponibilidad se mide en términos de porcentaje del tiempo que un sistema está disponible. En la siguiente tabla se presentan las categorías de los sistemas según su disponibilidad:

    .col-xl-8.col-lg-10.m-auto
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Tabla 2.
        span Categorías de los sistemas según su disponibilidad
      .tabla-a.color-primario(data-aos="zoom-in-up")
        table
          thead
            tr(style="background-color:#273A89;")
              th.text-white.text-center(style="border:0;border-right:1px white solid;") T disponibilidad
              th.text-white.text-center(style="border:0;border-right:1px white solid;") No Hay disponibilidad
              th.text-white.text-center(style="border:0;border-right:1px white solid;") Falla anual
              th.text-white.text-center(style="border:0") Falla semanal
          tbody
            tr(style="background-color:#DCECFE;")
              td.p-3.text-center(style="border:1px white solid;") 97 %
              td.p-3.text-center(style="border:1px white solid;") 3 %
              td.p-3.text-center(style="border:1px white solid;") 7,3 días
              td.p-3.text-center(style="border:1px white solid;") 3 horas 22 minutos
            tr(style="background-color:#DCECFE;")
              td.p-3.text-center(style="border:1px white solid;") 92 %
              td.p-3.text-center(style="border:1px white solid;") 8 %
              td.p-3.text-center(style="border:1px white solid;") 3,65 días
              td.p-3.text-center(style="border:1px white solid;") 1 hora, 41 minutos
            tr(style="background-color:#DCECFE;")
              td.p-3.text-center(style="border:1px white solid;") 99 %
              td.p-3.text-center(style="border:1px white solid;") 1 %
              td.p-3.text-center(style="border:1px white solid;") 17 horas, 30 minutos
              td.p-3.text-center(style="border:1px white solid;") 20 minutos, 10 segundos
            tr(style="background-color:#DCECFE;")
              td.p-3.text-center(style="border:1px white solid;") 90 %
              td.p-3.text-center(style="border:1px white solid;") 10 %
              td.p-3.text-center(style="border:1px white solid;") 8 horas, 45 minutos
              td.p-3.text-center(style="border:1px white solid;") 10 minutos, 5 segundos
            tr(style="background-color:#DCECFE;")
              td.p-3.text-center(style="border:1px white solid;") 99 %
              td.p-3.text-center(style="border:1px white solid;") 1 %
              td.p-3.text-center(style="border:1px white solid;") 52,5 minutos
              td.p-3.text-center(style="border:1px white solid;") 1 minuto
            tr(style="background-color:#DCECFE;")
              td.p-3.text-center(style="border:1px white solid;") 99,777 %
              td.p-3.text-center(style="border:1px white solid;") 0,223 %
              td.p-3.text-center(style="border:1px white solid;") 5,25 minutos
              td.p-3.text-center(style="border:1px white solid;") 6 segundos
    
    p.mt-4(data-aos="fade-right") Existen dos formas de activar la alta disponibilidad y mantener los servicios en operación: Activo-Activo y Activo-Pasivo.

    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right" )
        figure.m-auto.col-10.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/2.svg")
      .col-lg-6(data-aos="fade-left" )
        p En conclusión, se puede decir que el término redundancia se vincula a la implementación de alta disponibilidad, específicamente, mediante la implantación de, al menos, un dispositivo adicional que se emplea como respaldo (según el modelo activo-pasivo) o balanceador de carga (en el caso activo-activo).    
        p.mt-4 Cuando se ofrecen servicios de alta disponibilidad (#[em Higth Availability] - HA), se puede suponer, en primer lugar, que se hace referencia al backup de los datos. Por lo tanto, este es el primer concepto que se debe excluir, debido a que la alta disponibilidad no conlleva copia de la información, de manera que se considera importante tener claridad en su significado. 
    
    p.mt-4(data-aos="fade-right") Otro término fundamental es redundancia de #[em hardware], #[span.ps-1.pe-1(style="background-color:#273A89;color:#fff;") ¿qué significa?, ¿cuál es su objetivo?, ¿qué se logra?] A continuación, responderemos estas preguntas.

    .row.mt-5
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones.p-4(titulo="¿A qué hace referencia?" style="background-color:#E1F6EF;")
            h4(style="color:#12263F;") ¿A qué hace referencia?
            p(style="color:#12263F;") Se relaciona con un componente del sistema duplicado. Considera que los proveedores de servicios en la nube ofrecen dichos servicios operando dentro de los Centros de Procesos de Datos (CPD), también conocidos como #[em(style="color:#12263F;") Data Centers], y las máquinas en algún momento terminan fallando, porque tienen un tiempo de vida estimado muy difícil de garantizar. 
          .tarjeta.color-acento-botones.p-4(titulo="¿Cuál es el objetivo?" style="background-color:#E1F6EF;")
            h4(style="color:#12263F;") ¿Cuál es el objetivo?
            p(style="color:#12263F;") El objetivo general no es evitar estos fallos, sino impedir que estas fallas no afecten a los usuarios, empresas o clientes con quienes se tienen contratos de servicios TI en la nube. 
          .tarjeta.color-acento-botones.p-4(titulo="¿Cómo se logra?" style="background-color:#E1F6EF;")
            h4(style="color:#12263F;") ¿Cómo se logra?
            p(style="color:#12263F;") Se logra duplicando el dispositivo de manera que cuando falle la máquina, los servicios que dependen de ese #[em(style="color:#12263F;") hardware] sean trasladados de forma automática a un dispositivo que no esté afectado. De tal forma, que cuando dos dispositivos están publicados, se puede decir que están redundados.
      .col-lg-3(data-aos="fade-left" )
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema2/3.svg")
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_2_1 2.1  Métricas de niveles de servicio
    
    p(data-aos="fade-left") El funcionamiento del #[em hardware] sin fallas es la base para dotar a un sistema con alta disponibilidad; para ello, es imprescindible saber cómo presentar este valor según la norma IEEE 762/2006, que suministra el método del cálculo de este indicador para sistemas eléctricos, pero que se aplica también a todo sistema electrónico.

    .cont_2_1.mt-4.pt-4.pb-4.pb-lg-5
      .row
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-6.col-md-5.col-lg-12
            img(src="@/assets/curso/tema2/5.svg")
        .col-lg-8(data-aos="fade-left")
          p En esta norma se mencionan algunos indicadores: 
          ul.lista-ul.mt-3.ps-3
            li.d-flex
              i.far.fa-file-code(style="color:#1682FB !important;")
              div Fiabilidad.
            li.d-flex
              i.far.fa-file-code(style="color:#1682FB !important;")
              div Disponibilidad.
            li.d-flex
              i.far.fa-file-code(style="color:#1682FB !important;")
              div Tiempo medio entre paradas (MTBF, #[Eem Mid Time Between failures]).
            li.d-flex
              i.far.fa-file-code(style="color:#1682FB !important;")
              div Duración de las paradas (MTTR, o #[Eem Mid Time to Repair]).
            li.d-flex
              i.far.fa-file-code(style="color:#1682FB !important;")
              div Número de paradas por mantenimiento. 
            li.d-flex
              i.far.fa-file-code(style="color:#1682FB !important;")
              div Tiempo total perdido por mantenimiento. 
          p.mt-4 En los casos MTTR y MTBF, aunque se refieren a paradas por falla, también se emplea para cualquier motivo por el que se detiene el servicio.
          p Para realizar estos cálculos se necesita tener los servicios con los siguientes datos:
          ul.lista-ul.mt-3.ps-3
            li.d-flex
              i.far.fa-file-code(style="color:#1682FB !important;")
              div Servicio que se ha parado.
            li.d-flex
              i.far.fa-file-code(style="color:#1682FB !important;")
              div Motivo de la parada (mantenimiento, actualización, falla, etc.).
            li.d-flex
              i.far.fa-file-code(style="color:#1682FB !important;")
              div Duración de la parada (en minutos o segundos).
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_2_2 2.2 Clústeres
    
    .row
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        p Cuando la HA es Activo-Activo, se puede tener mejor desempeño porque existe un balanceo de cargas; a este tipo de “agrupación” se le denomina clúster, nombre que se le da a un sistema compuesto con más de una unidad de procesamiento que trabajan de manera unificada hacia el mismo objetivo. Estas máquinas tienen en común que realizan las mismas tareas, debido a que tienen la misma configuración y sistemas informáticos para trabajar de forma simultánea.
        p.mt-4 La técnica del clúster se puede aplicar a:
        .p-4.p-lg-3.mt-4(style="background-color:#DCECFE;border-radius:7px;")
          .row
            .col-md-auto.col-5.mx-auto.mb-4.mb-md-0(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/6.svg")
            .col-md.col-12(style="place-self:center;")
              ul.lista-ul.mb-0
                li.d-flex
                  i.far.fa-file-code(style="color:#1682FB !important;")
                  div Máquinas virtuales.
                li.d-flex
                  i.far.fa-file-code(style="color:#1682FB !important;")
                  div Contenedores.
                li.d-flex
                  i.far.fa-file-code(style="color:#1682FB !important;")
                  div Arquitectura de computación.
                li.d-flex
                  i.far.fa-file-code(style="color:#1682FB !important;")
                  div Redes.
                li.d-flex
                  i.far.fa-file-code(style="color:#1682FB !important;")
                  div Computación en la nube.
                li.d-flex.mb-0
                  i.far.fa-file-code(style="color:#1682FB !important;")
                  div Banco de datos.
      .col-lg-6(data-aos="fade-left")
        figure.m-auto.col-7.col-md-5.col-lg-12
          img(src="@/assets/curso/tema2/7.png")
    
    p.mt-4(data-aos="fade-right") El nodo es el nombre que se atribuye a cada computador o unidad de procesamiento (máquina virtual, o contenedor) agregado a un clúster, sea virtual o físico.

    .row.mt-4
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right" )
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/8.png")
      .col-lg-6(data-aos="fade-left" )
        p En un clúster, los nodos se interconectan gracias a una tecnología o infraestructura de red, generalmente, una que ya es conocida por la empresa, con lo que se facilita el mantenimiento del sistema y control de los costos.
        p.mt-4 Cada nodo desempeña la misma función que los demás nodos, siendo posible suprimir o adicionar nodos cuando sea necesario, aún si el clúster se mantiene en funcionamiento sin interrupciones, de tal forma que estas operaciones de agregar o quitar no perjudican el proceso, ya que las tareas se distribuyen automáticamente sin ocasionar problemas.
    
    p.mt-4(data-aos="fade-right") Existen dos tipos de clústeres o motivos que se configuran:

    .row.mt-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        AcordionA.acordion1(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Clúster de alto desempeño (<em>High Performance Computing Cluster</em>)")
            p El objetivo es resolver problemas que requieren de mucho procesamiento concurrente (simultáneo); se realiza en un tiempo útil, cumpliendo la expectativa del usuario. Para lograr buenos resultados, se usa la técnica de balanceo de carga (#[em Load Balancing]), que consiste en repartir las tareas de manera similar o equilibrada entre los nodos.
          .row(titulo="Clúster de alta disponibilidad (<em>High Availability Computing Cluster</em>)")
            p Su principal objetivo es mantener el sistema en funcionamiento, es decir, está centrado en saber responder automáticamente a fallos sin afectar la continuidad de la prestación del servicio. Se requiere dotar al clúster de herramientas de control y monitoreo de fallas en la interconexión o en los nodos, redundancia de sistemas, sistemas sustitutos o de respaldo, entre otros.
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-8.col-md-6.col-lg-12
          img(src="@/assets/curso/tema2/9.png")
    
    p.mt-4(data-aos="fade-right") Para que el sistema sea escalable, es importante saber que no existe límite de nodos que se puedan operar en un solo clúster; esta información es relevante cuando las empresas están en proceso de crecimiento continuo.

    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_2_3 2.3 Computación en la nube
    
    p(data-aos="fade-left") La migración de información a la nube, es un paso obligado para particulares y empresas que tienen un alto nivel de infraestructura y cuentan con equipos de servidores, aplicaciones, redes, etc. Todo esto implica un largo y, a veces, complejo proceso de migración, que consiste en una serie de pasos para lograr una identificación, planificación, ejecución y evaluación de migración de servicios de TI locales a servicios en la nube. 

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right" )
        figure.m-auto.col-8.col-md-6.col-lg-12
          img(src="@/assets/curso/tema2/10.png")
      .col-lg-8(data-aos="fade-left" )
        p Todo proyecto de implementación de servicios en la nube debe estar basado y dirigido por un plan estratégico hacia la migración, el cual varía según múltiples factores, teniendo en cuenta que para el abanico de productos TI no existen estrategias definidas.
        .p-4(style="background-color:#E1F6EF;border-radius:7px;")
          .row
            .col-md-auto.col-5.mx-auto.mb-4.mb-md-0(style="place-self:center;" data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema2/11.svg")
            .col-md.col-12(style="place-self:center;" data-aos="fade-left")
              p.mb-0 Una de las ventajas de la infraestructura cloud es permitir combinar servicios que consoliden las necesidades de la organización. En el #[em cloud computing] es normal trabajar con las fórmulas de las 6 Rs para identificar diferentes estrategias de migración que se utilizan, según las características del proyecto TI.
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_2_4 2.4 Continuidad del negocio
    
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p Es importante que las empresas siempre tengan en cuenta los riesgos o amenazas que puedan tener en sus sistemas, redes, y datos. Desafortunadamente, no solo los desastres naturales están latentes en el día a día de una empresa, sino que también deben estar preparadas para delitos en la propiedad y fallas en la seguridad cibernética, dos riesgos de gran importancia. Se invita a analizar el siguiente caso:
        .p-4.mt-4(style="background-color:#DCECFE;border-radius:7px;")
          .row
            .col-md-auto.col-5.mx-auto.mb-4.mb-md-0(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/12.svg")
            .col-md.col-12(style="place-self:center;")
              p.mb-0 El sector de la salud es muy regulado y una falla en la seguridad cibernética puede significar la afectación para muchas personas. En algunos países una situación similar implica auditorías ante las entidades regulatorias; por ejemplo, en los Estados Unidos se debe notificar al Departamento de Salud y Servicios Humanos inmediatamente.
        p.mt-4 Por ello, es fundamental que al realizar un plan, se tengan en cuenta las regulaciones pertinentes al sector de la industria en el que se encuentre la organización. Cuando se considera realizar un respaldo de información, se necesita plantearlo a gran escala. Una de las soluciones más importantes para asegurar que la información y los sistemas puedan recuperarse con pérdidas mínimas, es la implementación de múltiples centros de datos ubicados estratégicamente en diferentes regiones, o lo que se impone por estos días, una solución en la nube.
      .col-lg-5(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema2/13.png")
    
    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-8.col-md-6.col-lg-12
          img(src="@/assets/curso/tema2/14.png")
      .col-lg-8(data-aos="fade-left" style="place-self:center;")
        p En este mundo tan competitivo y de rápida evolución tecnológica, muchas organizaciones dependen de aplicaciones de terceros para sus diferentes dependencias, como contabilidad, informática, mercadotecnia digital y recursos humanos. 
        .p-4(style="background-color:#DCECFE;border-radius:7px;")
          p.mb-0 Es importante que el plan de contingencia y continuidad de negocio, tenga en cuenta que las aplicaciones de terceros pueden disolverse o dejar de prestar servicios esenciales; por lo tanto, las empresas deben tener bajo la manga una lista de alternativas de proveedores adjunto a su plan de contingencia y, en caso de ser necesario, migrar la información para minimizar su dependencia en un solo proveedor.
        p.mt-4 Las empresas que preparan y organizan su contenido en la nube deben estar un paso adelante en caso de desastres. Entonces, #[span.ps-1.pe-1(style="background-color:#273A89;color:#fff;") ¿cómo se podrían preparar para enfrentar una situación extrema?]
    
    .p-4.mt-4(style="background-color:#3EE2A8;border-radius:7px;")
      .row
        .col-md-auto.col-6.mx-auto.mb-4.mb-md-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/15.svg")
        .col-md.col-12(style="place-self:center;")
          p.mb-0 La gestión de contenido empresarial (ECM), es una aplicación diseñada para realizar de manera digital contenido y procesos de una compañía, con lo cual las empresas pueden tener continuidad en sus procesos durante situaciones complejas. El personal puede tener acceso a sus labores empresariales desde cualquier lugar del mundo, lo que actualmente es una necesidad latente, transformándose en una tendencia empresarial. De esta manera, la empresa puede continuar con todos sus procesos.

    p.mt-5(data-aos="fade-right") Es así, que tener un plan de continuidad apoyado con un sistema de ECM es una opción que puede soportar las actividades empresariales en caso de fallos o de catástrofes:  

    .row.mt-4.justify-content-center
      .col-xl.col-md-6.mb-4.mb-xl-0(data-aos="zoom-in")
        .h-100.p-4.cont_hover1(style="background-color:#DCECFE;border-radius:12px;")
          .text-end 
            figure.cont_image_hover1
              img(src="@/assets/curso/tema2/16.svg" style="max-width:60px;display:inline;")
            figure.cont_image_hover2(style="display:none;")
              img(src="@/assets/curso/tema2/17.svg" style="max-width:60px;display:inline;")
          figure
            img(src="@/assets/curso/tema2/18.svg" style="max-width:90px;display:inline;")
          p.mt-4 Permite acceder a las labores de la empresa desde cualquier parte, garantizando la continuidad del negocio.
      .col-xl.col-md-6.mb-4.mb-xl-0(data-aos="zoom-in")
        .h-100.p-4.cont_hover1(style="background-color:#DCECFE;border-radius:12px;")
          .text-end 
            figure.cont_image_hover1
              img(src="@/assets/curso/tema2/16.svg" style="max-width:60px;display:inline;")
            figure.cont_image_hover2(style="display:none;")
              img(src="@/assets/curso/tema2/17.svg" style="max-width:60px;display:inline;")
          figure
            img(src="@/assets/curso/tema2/19.svg" style="max-width:90px;display:inline;")
          p.mt-4 Proporciona controles de versiones de los documentos con lo que se garantizan documentos actualizados.
      .col-xl.col-md-6.mb-4.mb-xl-0(data-aos="zoom-in")
        .h-100.p-4.cont_hover1(style="background-color:#DCECFE;border-radius:12px;")
          .text-end 
            figure.cont_image_hover1
              img(src="@/assets/curso/tema2/16.svg" style="max-width:60px;display:inline;")
            figure.cont_image_hover2(style="display:none;")
              img(src="@/assets/curso/tema2/17.svg" style="max-width:60px;display:inline;")
          figure
            img(src="@/assets/curso/tema2/20.svg" style="max-width:90px;display:inline;")
          p.mt-4 Los servicios en la nube garantizan, sin necesidad de tener un lugar físico, que el negocio y los procesos tengan normal continuidad.
      .col-xl.col-md-6.mb-4.mb-xl-0(data-aos="zoom-in")
        .h-100.p-4.cont_hover1(style="background-color:#DCECFE;border-radius:12px;")
          .text-end 
            figure.cont_image_hover1
              img(src="@/assets/curso/tema2/16.svg" style="max-width:60px;display:inline;")
            figure.cont_image_hover2(style="display:none;")
              img(src="@/assets/curso/tema2/17.svg" style="max-width:60px;display:inline;")
          figure
            img(src="@/assets/curso/tema2/21.svg" style="max-width:90px;display:inline;")
          p.mt-4 La automatización de procesos importantes aseguran la estandarización, consistencia y continuidad para generar una tranquilidad en los usuarios y garantizar el correcto funcionamiento.
    
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema2/22.png")
      .col-lg-8(data-aos="fade-left" style="place-self:center;")
        p Por otra parte, los valores del Objetivo de Punto de Recuperación (RPO, por sus siglas en inglés) y Tiempo Objetivo de Recuperación (RTO, por sus siglas en inglés), se deben incluir en el análisis de riesgos de negocio y se deben exponer los pasos para alcanzar estos valores dentro del plan. Es importante recordar que toda estrategia toma un tiempo estimado para la implementación, por lo que no se descartan estrategias que estén dentro de los parámetros de RPO y RTO.
        p.mt-4 Entonces, mantener varias de las opciones de servicio operando (clúster activo-activo) es una de las estrategias más rápidas, porque si una parte del servicio falla, la otra estará activa. La medida más suave es tener un sistema que se active manualmente como respaldo (también conocido como espera pasiva) en términos de RPO; la duplicación en tiempo real de la información (funcionalidad que comúnmente se incluye en las soluciones en la nube), se puede realizar una restauración de los datos de hasta segundos atrás, mientras una copia de un momento específico (snapshot) puede no estar al día y no llenar los requisitos para su RPO.
        p.mt-4 Entonces, #[span.ps-1.pe-1(style="background-color:#273A89;color:#fff;") ¿cómo se definen el RTO y el RPO?]
    
    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones.p-4(titulo="RPO" style="background-color:#E1F6EF;")
            h4(style="color:#12263F;") RPO
            p(style="color:#12263F;") Objetivo de Punto de Recuperación (#[em(style="color:#12263F;") Recovery Point Objective]), se refiere a la copia de seguridad de los datos dentro del marco de una catástrofe. Establece un tiempo desde la última copia de seguridad directamente relacionada a la cantidad de datos que la empresa puede perder en caso de un desastre. RPO significa la pérdida tangible de datos, entre la copia de seguridad y el incidente.
          .tarjeta.color-acento-botones.p-4(titulo="RTO" style="background-color:#E1F6EF;")
            h4(style="color:#12263F;") RTO
            p(style="color:#12263F;") Tiempo Objetivo de Recuperación (#[em(style="color:#12263F;") Recovery Time Objective]), es el tiempo máximo que una empresa define para recuperar sus procesos; en los casos en los que se ha sufrido algún inconveniente de cualquier índole, que haya generado la suspensión de las operaciones. Entonces, el RTO es el tiempo requerido para solucionar el incidente, en el que se reanuden todas las operaciones con normalidad.
      .col-lg-3(data-aos="fade-left" )
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema2/23.svg")
    
    .p-4.mt-4(style="background-color:#273A89;border-radius:7px;")
      .row
        .col-md-auto.col-5.mx-auto.mb-4.mb-md-0(style="place-self:center;" data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema2/24.svg")
        .col-md.col-12(style="place-self:center;" data-aos="fade-left")
          p.mb-0.text-white Sin importar la actividad económica que tenga la empresa, en un inesperado desastre, los datos corren un alto riesgo de perderse. En el plan de continuidad del negocio y en el de una recuperación ante desastres, se requiere saber cuánto tiempo se va a estar sin servicio, cuánto tiempo tardarán los procesos en restaurarse y qué datos se pueden llegar a perder, antes de recuperar la continuidad operacional.






   
      
</template>

<script>
export default {
  name: 'Tema2',
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
.tabs-a.color-acento-botones .tabs-a__tab__selected
  color: #12263F
.tabs-a.color-acento-botones .tabs-a__tab:hover, .tabs-a.color-acento-botones .tabs-a__tab:active, .tabs-a.color-acento-botones .tabs-a__tab:focus
  color: #12263F
.cont_2_1, .cont_2_1 *
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(../assets/curso/tema2/4.png)
  background-size: cover
  background-position: center
.acordion1 .acordion__accion__btn--b
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
.cont_hover1:hover
  background-color: #273A89 !important
.cont_hover1:hover *
  color: #fff !important
.cont_hover1:hover .cont_image_hover1
  display: none !important
.cont_hover1:hover .cont_image_hover2
  display: block !important
</style>
