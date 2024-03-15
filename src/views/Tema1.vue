<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 #[em Networking] y servicios de infraestructura
    
    p(data-aos="fade-right") Seguramente ha escuchado los términos servicios de infraestructura y #[em networking], pero, ¿a qué se refieren concretamente?

    .cont_1_1.pt-4
      .col-xl-10.m-auto
        .cont_1_2.p-4.text-white(data-aos="zoom-in")
          .col-xl-10.m-auto
            .row
              .col-md-auto.col-5.m-auto.mb-4.mb-md-0(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/3.svg")
              .col-md(style="place-self:center;")
                p Según Icot (2021), el servicio de infraestructura IT es el conjunto de dispositivos y aplicaciones de #[em software] necesarios para que cualquier empresa opere (Párr.1). 
                p.mt-4.mb-0 Por otro lado, #[em networking] es la posibilidad que tienen múltiples usuarios con diferente ubicación geográfica, para trabajar en línea sobre una tarea específica de manera segura y eficiente, las 24 horas del día, los 7 días de la semana (24/7).
      
      p.mt-4(data-aos="fade-left") Es así como #[em networking] es una actividad que se ha venido extendiendo, debido a que las empresas requieren de personal en ubicaciones remotas, generando una cantidad de servicios derivados que son aprovechados por la industria debido a la reducción de costos de funcionamiento y a la automatización de procesos; es decir, las empresas ya no tienen que adquirir un #[em hardware] costoso para el funcionamiento de sus actividades económicas, porque existen muchas otras empresas que se dedican a prestar servicios en la nube.

      .row.mt-4
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-7.col-md-6.col-lg-12
            img(src="@/assets/curso/tema1/4.png")
        .col-lg-8(data-aos="fade-left")
          .p-4(style="background-color:#BAE9D9;border-radius:12px;")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/5.svg")
              .col(style="place-self:center;")
                p.mb-0 #[em Networking] es un término muy robusto que involucra personas que se encuentran dispersas geográficamente, las cuales realizan actividades en conjunto para llevar a cabo un bien común, por lo que se requiere también de la agrupación de tecnología en #[em hardware] y #[em software] que intervienen en estas interacciones.
          p.mt-4 Los componentes #[em hardware] que poseen los servicios de infraestructura pueden ser utilizados por muchas empresas para ejecutar sus actividades comerciales y tener una continuidad en el negocio; este tipo de servicios hacen que las empresas no incurran en gastos elevados, adquiriendo tecnología y personal para su mantenimiento o instalación, agilizando así una cantidad considerable de posibilidades de acceso a la información del negocio desde cualquier ubicación geográfica, gracias a sus bondades. Este método de trabajo es muy común actualmente, porque uno de los activos de mayor valor para las compañías es la información.
    
    p.mt-4(data-aos="fade-right") Los servicios de infraestructura que se ofrecen corresponden al #[em hardware] que una empresa podría adquirir para llevar a cabo sus actividades, pero por la versatilidad que representan estos servicios y la reducción de costo se delega o terceriza a empresas que se encargan de los mantenimientos y actualizaciones, como parte de la actividad de sus negocios. 
    p.mt-4(data-aos="fade-left") Los servicios que se ofrecen en infraestructura se dividen en 4 elementos: 

    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones.p-4(titulo="Almacenamiento" style="background-color:#E1F6EF;")
            h4(style="color:#12263F;") Almacenamiento
            p(style="color:#12263F;") El servicio de almacenamiento de información es de vital importancia para las empresas que requieran copia de seguridad en una locación diferente a aquella en la que, normalmente, funcionan, o para el funcionamiento de sus aplicativos.
          .tarjeta.color-acento-botones.p-4(titulo="Servidores" style="background-color:#E1F6EF;")
            h4(style="color:#12263F;") Servidores
            p(style="color:#12263F;") Los servicios de servidores reducen los costos para las empresas que los requieran, debido a que pueden realizar sus actividades comerciales con normal operación, evitando muchos costos en mantenimientos y actualizaciones.
          .tarjeta.color-acento-botones.p-4(titulo="<em>Networking</em>" style="background-color:#E1F6EF;")
            h4(style="color:#12263F;font-style:italic;") Networking
            p(style="color:#12263F;") Son dispositivos de interconexión que permiten un trabajo seguro por medio de #[em(style="color:#12263F;") switchs] y conmutadores con conexiones seguras y rápidas entre los usuarios.
          .tarjeta.color-acento-botones.p-4(titulo="Seguridad" style="background-color:#E1F6EF;")
            h4(style="color:#12263F;") Seguridad
            p(style="color:#12263F;") La información contenida en dispositivos conectados a la red, hace parte importante en los activos de una empresa, de tal manera que se convierten en lo más preciado, porque contienen información crucial de la actividad económica y de procesos clave para el desempeño. Asimismo, se adiciona la información personal y de los proveedores. La seguridad de la información se realiza con dispositivos #[em(style="color:#12263F;") hardware] o #[em(style="color:#12263F;") software] que la protegen de cualquier ataque.
      .col-lg-3(data-aos="fade-left")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema1/6.svg")
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_1 1.1  Modelo de referencia OSI
    
    p(data-aos="fade-left") Durante años, este modelo ha sido la base de las redes informáticas y el referente inicial para comprender los medios de transmisión con sus diferentes actores, lo que posibilita una comunicación exitosa entre máquinas y con un producto interpretado por las partes. Este modelo se divide en siete capas, las cuales se presentan en la siguiente figura.

    .col-xl-7.m-auto.col-lg-11
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Figura 1.
        span Modelo de referencia OSI
      figure.mt-4(data-aos="zoom-in-up")
        img(src="@/assets/curso/tema1/7.svg")
    
    p.mt-5(data-aos="fade-right") De acuerdo con la figura anterior, en el modelo OSI encontramos las siguientes capas:

    .cont_1_3.pt-4.pt-lg-5.pb-4.pb-lg-5
      .col-xl-10.m-auto
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-acento-botones.p-4.pt-5.pb-5.text-white(style="background-color:#273A89;")
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/9.svg')
            h4.text-center.bg-white.m-auto.mt-4(style="padding:2px;color: #273A89 !important;max-width:fit-content;") Capa física
            p.text-center.mt-3.mb-0 Es la encargada de transmitir todo el flujo de #[em bits] sin procesar.
          .tarjeta.color-acento-botones.p-4.pt-5.pb-5.text-white(style="background-color:#273A89;")
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/10.svg')
            h4.text-center.bg-white.m-auto.mt-4(style="padding:2px;color: #273A89 !important;max-width:fit-content;") Capa de enlace de datos
            p.text-center.mt-3.mb-0 Se encarga de definir el formato de los datos en la red.
          .tarjeta.color-acento-botones.p-4.pt-5.pb-5.text-white(style="background-color:#273A89;")
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/11.svg')
            h4.text-center.bg-white.m-auto.mt-4(style="padding:2px;color: #273A89 !important;max-width:fit-content;") Capa de red
            p.text-center.mt-3.mb-0 Esta capa decide la ruta física por la que viajarán los datos.
          .tarjeta.color-acento-botones.p-4.pt-5.pb-5.text-white(style="background-color:#273A89;")
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/12.svg')
            h4.text-center.bg-white.m-auto.mt-4(style="padding:2px;color: #273A89 !important;max-width:fit-content;") Capa de transporte
            p.text-center.mt-3.mb-0 Se encarga de la transmisión de los datos por medio de los protocolos TCP y UDP.
          .tarjeta.color-acento-botones.p-4.pt-5.pb-5.text-white(style="background-color:#273A89;")
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/13.svg')
            h4.text-center.bg-white.m-auto.mt-4(style="padding:2px;color: #273A89 !important;max-width:fit-content;") Capa de sesión
            p.text-center.mt-3.mb-0 Es la capa que está pendiente de mantener la conexión entre puertos y sesiones.
          .tarjeta.color-acento-botones.p-4.pt-5.pb-5.text-white(style="background-color:#273A89;")
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/14.svg')
            h4.text-center.bg-white.m-auto.mt-4(style="padding:2px;color: #273A89 !important;max-width:fit-content;") Capa de presentación
            p.text-center.mt-3.mb-0 En esta capa se garantiza que los datos tengan un formato para ser interpretados, aquí se encriptan los datos.
          .tarjeta.color-acento-botones.p-4.pt-5.pb-5.text-white(style="background-color:#273A89;")
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/15.svg')
            h4.text-center.bg-white.m-auto.mt-4(style="padding:2px;color: #273A89 !important;max-width:fit-content;") Capa de aplicación
            p.text-center.mt-3.mb-0 En esta capa se establece la comunicación por medio de interfaces al usuario ocultando la complejidad del sistema.
    
    p.mt-5(data-aos="fade-right") Como se observa, los datos que transitan por los medios de comunicación son emitidos por un receptor y recibidos por otro receptor y están dirigidos por el concepto del modelo OSI.

    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema1/16.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4(style="padding-top:7px;") Capas de presentación y aplicación
    
    p(data-aos="fade-left") Las capas de presentación y aplicación, pertenecen al modelo OSI y se encuentran ubicadas en el lugar 6 y 7 cuando son receptores. Estas capas se encargan de trabajar y transformar la información al usuario. 
    p.mt-4(data-aos="fade-right") La capa de presentación se encarga de garantizar que la transmisión sea entendida tanto por el emisor como por el receptor. Proporciona el formato a la información, reúne los formatos de presentación eligiendo sintaxis y semántica de lo que se está utilizando y puede conformar la información, transformando del formato de aplicación al de red y al contrario:

    .row.mt-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        AcordionA.acordion1(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Formateo de datos")
            p Es el proceso mediante el cual se interpretan dos códigos, por ejemplo: el código de caracteres decimales codificados en binario (EBCDIC), utilizado para representar los caracteres en la pantalla, y el código americano (ASCII) que tiene la misma función de dar forma a la información para visualizarla o imprimirla.
          .row(titulo="Cifrado de datos")
            p Protección importante de la información durante la transmisión.
          .row(titulo="Compresión de datos")
            p Por medio de técnicas algorítmicas busca patrones repetidos y los reemplaza por un #[em token] que es un patrón de #[em bit] mucho más corto.
          .row(titulo="Encriptación")
            p Los datos se protegen con el procesos de encriptación.
          .row(titulo="Estructura de datos a transmitir")
            p.mb-2 Los protocolos presentes en esta capa de presentación son los siguientes:
            ul.lista-ul.ps-3
              li.d-flex
                i.far.fa-file-code(style="color:#1682FB;")
                div ASN.1
              li.d-flex
                i.far.fa-file-code(style="color:#1682FB;")
                div MIME
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema1/17.png")
    
    p.mt-4(data-aos="fade-right") Por su parte, la capa de aplicación, se encarga de permitir a las aplicaciones de los usuarios, el acceso a las bondades de las otras capas.
    p(data-aos="fade-left") Los usuarios interactúan directamente con la capa de aplicación; las que hacen este trabajo son las aplicaciones, escondiendo la complejidad del sistema al usuario.
    p.mt-4(data-aos="fade-right") En esta capa, existen algunos protocolos involucrados, que son interesantes nombrar:

    .row.mt-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-6.col-md-6.col-lg-12
          img(src="@/assets/curso/tema1/18.svg")
      .col-lg-7(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          p.text-small(numero="1" titulo="FTP") FTP (#[em File Transfer Protocol]), protocolo de transferencia de archivos  que, como su nombre lo indica, realiza la transferencia de archivos.
          p.text-small(numero="2" titulo="DNS") DNS (#[em Domain Name Service]), corresponde al servicio de nombres de dominio. 
          p.text-small(numero="3" titulo="DHCP") DHCP (#[em Dynamic Host Configuration Protocol]), o protocolo de configuración dinámica de anfitrión. 
          p.text-small(numero="4" titulo="HTTP") HTTP (#[em HyperText Transfer Protocol]), para acceso a páginas #[em web]. 
          p.text-small(numero="5" titulo="NAT") NAT (#[em Network Address Translation]), para traducción de dirección de red. 
          p.text-small(numero="6" titulo="POP") POP (#[em Post Office Protocol]), para correo electrónico.
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_2 1.2  IPv4 e IPv6
    
    p(data-aos="fade-left") Según Cisco, una dirección IP se emplea para identificar a un dispositivo en una red IP. La dirección se compone de 32 #[em bits] binarios, que pueden dividirse en una porción correspondiente a la red y otra correspondiente al #[em host], con la ayuda de una máscara de subred (Párr.6).
       
    .row.mt-4
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p Cuando se menciona IPv4 e IPv6, se hace referencia a las versiones que se ofrecen del famoso protocolo de Internet (#[em Internet Protocol Next Generation] - IPng). En este sentido, el direccionamiento IPv6 es la versión más reciente y aún tiene poco uso, aunque lentamente se está introduciendo a los hogares y a las compañías. Esta versión 6 del protocolo, presenta cambios relevantes frente a la versión 4.
        p.mt-4 La IPv4 está diseñada de la siguiente forma:
        ul.lista-ul.ps-3.mt-3
          li.d-flex
            i.far.fa-file-code(style="color:#1682FB;")
            div Dirección de 32 #[em bits].
          li.d-flex
            i.far.fa-file-code(style="color:#1682FB;")
            div Direcciones desde la 0.0.0.0 hasta la 255.255.255.255. 
          li.d-flex
            i.far.fa-file-code(style="color:#1682FB;")
            div Organización en 4 octetos, separados por puntos en nuestros computadores (192.168.0.99).
        p.mt-4 Si traducimos la IP anterior a su código binario tendremos: 
        .ps-4.pe-4.m-auto.mt-3(style="max-width:fit-content;background-color:#3EE2A8;border-radius:5px;")
          p.fw-bold.mb-0 192.168.0.99 = 11000000.10101000.00000000.1100011.
      .col-lg-6(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema1/19.png")
    
    p.mt-4(data-aos="fade-right") La transición al nuevo protocolo no debería afectar en nada el funcionamiento, gracias a su compatibilidad, porque está diseñado para solucionar múltiples problemas presentados en la versión 4, por ejemplo, la carencia de direcciones en el mercado mundial y el limitado direccionamiento requerido por los dispositivos. El protocolo versión 6 permite la entrada a nuevas redes de alto desempeño como ATM, #[em Gigabit Ethernet], etc.

    .row.mt-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema1/20.png")
      .col-lg-7(data-aos="fade-left" style="place-self:center;")
        p Actualmente, hay millones de computadores y otros dispositivos conectados al Internet, por lo que las direcciones previstas por las compañías ISP han escaseado, teniendo en cuenta que hace algunos años se liberó el último paquete de direcciones con lo que se dio fin a las conjugaciones de las mismas. Por esta razón se considera que el IPv4 ya cumplió un ciclo de vida de más de 30 años.
        .p-4.mt-4(style="background-color:#E1F6EF;border-radius:5px;")
          p.mb-0 Hace unos años era impensable que podríamos conectar a Internet cualquier tipo de producto, servicio o forma de comunicación, así como aplicaciones de control. Debido a estas necesidades llegó la versión 6 del mismo protocolo de Internet, para solventar estos requerimientos. 
        p.mt-4 Se ha venido identificando que, debido a la alta demanda de conexión a Internet, se ha requerido mayor cantidad de direcciones que se clasifican como privadas y públicas.
    
    .cont_titulo_decorativo.mt-4(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema1/16.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4(style="padding-top:7px;") Direcciones privadas
    
    p(data-aos="fade-left") Las direcciones IP privadas se encuentran en un esquema local; exactamente se refieren a las direcciones que asigna un #[em router], de manera manual o automática, por medio de un protocolo llamado DHCP y que, en su conjunto hacen una red LAN. Tienen la característica de ser privadas porque son direcciones que no son visibles ante Internet, debido a que permiten la navegación a través de un dispositivo que sí tiene asignada una dirección pública vista en Internet.
    p.mt-4(data-aos="fade-right") Estas direcciones están dispuestas en rangos o clases, como se presenta a continuación:

    .tarjeta.tarjeta--azul.p-4.p-lg-5.pt-lg-5.cont_slyder_1_1.mt-4(style="border-radius:0px;")
      SlyderA(tipo="b")
        .row.col-xl-11.m-auto
          .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
            h4(style="color:#FFCE00;") Clase A
            .text-white
              p Se utiliza por empresas de gran tamaño por la capacidad de conectar una cantidad considerable de equipos a la red; se pueden crear hasta 126 redes y conectar 16.777.214 dispositivos. El rango está comprendido entre: 10.0.0.0 a 10.255.255.255.
          .col-lg-6(style="place-self:center;")
            figure.m-auto.col-12.col-md-10.col-lg-12
              img(src='@/assets/curso/tema1/22.svg' alt="Imagen que presenta la Clase A, donde se identifica el bloque que define la red y los bloques que señalan los dispositivos que se conectan a la red.")
        .row.col-xl-11.m-auto
          .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
            h4(style="color:#FFCE00;") Clase B
            .text-white
              p La clase B se utiliza en redes de tamaño medio, en la que se derivan más redes que la clase A (alrededor de 16.384 redes), pero con menos cantidad de dispositivos (65.534).
              p.mt-4 El rango se define entre 172.16.0.0 a 172.31.255.255
          .col-lg-6(style="place-self:center;")
            figure.m-auto.col-12.col-md-10.col-lg-12
              img(src='@/assets/curso/tema1/23.svg' alt="Imagen que presenta la Clase B, donde se identifican los bloques que definen la red y los bloques que se conectan a la red.")
        .row.col-xl-11.m-auto
          .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
            h4(style="color:#FFCE00;") Clase C
            .text-white
              p La clase C se conoce en las redes comunes y se conecta a 2.097.152 redes, pero con menor cantidad de dispositivos conectados a ella (alrededor de 254).
              p.mt-4 El rango se encuentra desde 192.168.0.0 a 192.168.255.255
          .col-lg-6(style="place-self:center;")
            figure.m-auto.col-12.col-md-10.col-lg-12
              img(src='@/assets/curso/tema1/24.svg' alt="Imagen que presenta la Clase C, donde se identifican los bloques que identifican la red y el bloque que identifica los equipos.")
    
    .row.mt-4
      .col-md-auto.col-5.m-auto.mb-4.mb-md-0(style="place-self:center;" data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/25.svg")
      .col-md(style="place-self:center;" data-aos="fade-left")
        p Estas direcciones, independiente de la clase, deben ser únicas dentro de una red local, de tal manera que no exista otro dispositivo con la misma dirección IP. En caso de que llegara a suceder se generaría un conflicto de direcciones bloqueando a ambos dispositivos en la LAN.
        p.mt-4.mb-0 Las direcciones IP privadas pueden estar repetidas, pero en diferentes redes; por ese motivo no habrá conflictos, porque las redes están separadas; también, es posible tener dos direcciones iguales, pero en distintas ciudades.
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema1/16.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4(style="padding-top:7px;") Direcciones públicas
    
    p(data-aos="fade-left") Como ya se había indicado, también se presentan direcciones públicas, pero, ¿cómo funcionan?, ¿cuáles son sus características?, ¿presentan clases para su uso?
    p(data-aos="fade-right") A continuación, respondemos cada uno de estos interrogantes.
 
    .cont_1_4.mt-4
      .tarjeta.tarjeta--azul.p-4.p-lg-5.pt-lg-5.cont_slyder_1_1.mt-4(style="border-radius:0px;")
        SlyderA(tipo="b")
          .row.col-xl-11.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4(style="color:#FFCE00;") ¿Cómo funciona?
              .text-white
                p Una dirección pública se asigna a un equipo que está expuesto directamente a internet, por ejemplo, los routers que instalan las empresas prestadoras de servicio de internet (ISP), los servidores que alojan información para acceder de manera remota, los servidores #[em web], entre otros.
            .col-lg-4(style="place-self:center;")
              figure.m-auto.col-7.col-md-5.col-lg-12
                img(src='@/assets/curso/tema1/26.png' alt="")
          .row.col-xl-11.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4(style="color:#FFCE00;") ¿Cuáles son sus características? 
              .text-white
                p Estas direcciones públicas presentan las siguientes características:
                ul.lista-ul.ps-3.mt-3
                  li.d-flex
                    i.far.fa-file-code(style="color:#1682FB !important;")
                    div No se pueden repetir, son únicas.
                  li.d-flex
                    i.far.fa-file-code(style="color:#1682FB !important;")
                    div Son asignadas por los proveedores de Internet (ISP).
                  li.d-flex
                    i.far.fa-file-code(style="color:#1682FB !important;")
                    div Se les conoce como IP dinámicas, porque cambian en determinado tiempo o cuando se reinicia el dispositivo de conexión (router).
                  li.d-flex
                    i.far.fa-file-code(style="color:#1682FB !important;")
                    div Existen direcciones IP públicas fijas o estáticas, en caso ser necesario. Cuando se quiere realizar el cambio de IP pública dinámica a estática se necesita contactar al proveedor para que se efectúe dicho cambio.
            .col-lg-4(style="place-self:center;")
              figure.m-auto.col-7.col-md-5.col-lg-12
                img(src='@/assets/curso/tema1/28.png' alt="")
          .row.col-xl-11.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4(style="color:#FFCE00;") ¿Cuál es la clasificación?
              .text-white
                p Las direcciones IP públicas también está denominadas por rangos, que corresponden a los rangos excluidos de las IP privadas. En este tipo de dirección el rango inicia en 1. … hasta 191. …. 
                p De acuerdo con lo anterior, las clases de la IP pública se fijan así:
                ul.lista-ul.ps-3.mt-3
                  li.d-flex
                    i.far.fa-file-code(style="color:#1682FB !important;")
                    div Clase A: 1.0.0.0 a 126.255.255.255.
                  li.d-flex
                    i.far.fa-file-code(style="color:#1682FB !important;")
                    div Clase B: 128.0.0.0 a 191.255.255.255.
                  li.d-flex
                    i.far.fa-file-code(style="color:#1682FB !important;")
                    div Clase C: 192.0.0.0 a 223.255.255.255.
            .col-lg-4(style="place-self:center;")
              figure.m-auto.col-7.col-md-5.col-lg-12
                img(src='@/assets/curso/tema1/27.png' alt="")
      
      p.mt-4(data-aos="fade-right") En la siguiente tabla, se pueden identificar las diferencias entre las direcciones públicas y privadas.
      .col-xl-7.col-lg-10.m-auto
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
          h5 Tabla 1.
          span IP privada vs. IP pública
        .tabla-a.color-acento-botones(data-aos="zoom-in-up")
          table(style="min-width:100%;")
            thead(style="border:0;")
              tr(style="background-color:#273A89;")
                th.text-white.text-center(style="border:0;border-right:1px white solid;") IP privada
                th.text-white.text-center(style="border:0") IP pública
            tbody
              tr(style="background-color:#DCECFE;")
                td.p-3(style="border:1px white solid;") Es asignada por un dispositivo (router) a los aparatos que se conectan al punto de enlace.
                td.p-3(style="border:1px white solid;") Es asignada por el proveedor de Internet ISP; en este caso la dirección va al dispositivo que conecta al exterior o router.
              tr(style="background-color:#DCECFE;")
                td.p-3(style="border:1px white solid;") Los rangos se encuentran entre 10.0.0.0 a 192.168.255.255.
                td.p-3(style="border:1px white solid;") Las direcciones IP públicas también están denominadas por rangos y corresponden a aquellos que no están en las IP privadas (de 1… hasta 191).
              tr(style="background-color:#DCECFE;")
                td.p-3(style="border:1px white solid;")
                  p.mb-0 Clase A: 10.0.0.0 a 10.255.255.255.
                  p.mb-0 Clase B: 172.16.0.0 a 172.31.255.255.
                  p.mb-0 Clase C: 192.168.0.0 a 192.168.255.255.
                td.p-3(style="border:1px white solid;") 
                  p.mb-0 Clase A: 1.0.0.0 a 126.255.255.255.
                  p.mb-0 Clase B: 128.0.0.0 a 191.255.255.255.
                  p.mb-0 Clase C: 192.0.0.0 a 223.255.255.255.

      p.mt-4(data-aos="fade-left") De acuerdo con lo estudiado hasta el momento, se comprende que el protocolo IPv6 se creó para proporcionar direcciones IP a todos los dispositivos. Pero, en este sentido, es posible preguntarse: ¿cuántos dispositivos se podrían conectar con esta versión? A continuación, se presentan las características de este nuevo protocolo:

      .col-xl-10.m-auto.mt-4
        .cont_1_5.p-4.p-lg-0
          .row
            .col-lg-auto.col-6.m-auto.mb-4.mb-lg-0(style="place-self:center;" data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema1/31.png")
            .col-lg(style="place-self:center;" data-aos="fade-left")
              .pt-lg-4.pb-lg-4.col-xl-11
                ul.lista-ul.mb-0
                  li.d-flex.mb-1
                    i.far.fa-file-code(style="color:#1682FB !important;")
                    div Proporcionar IP fijas a todo tipo de dispositivos.
                  li.d-flex.mb-1
                    i.far.fa-file-code(style="color:#1682FB !important;")
                    div Aumenta la cantidad de direcciones.
                  li.d-flex.mb-1
                    i.far.fa-file-code(style="color:#1682FB !important;")
                    div Se utilizarán 128 #[em bits] de manera hexadecimal con menor espacio. 
                  li.d-flex.mb-1
                    i.far.fa-file-code(style="color:#1682FB !important;")
                    div Las direcciones se compondrán de 8 secciones cada sección con 16 #[em bits].
                  li.d-flex.mb-1
                    i.far.fa-file-code(style="color:#1682FB !important;")
                    div Las direcciones que se obtendrán: de 0:0:0:0:0:0:0:0  a  ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff.
                  li.d-flex.mb-1
                    i.far.fa-file-code(style="color:#1682FB !important;")
                    div Las direcciones de los equipos o #[em host] se visualizarán con 128 ceros y unos.
                  li.d-flex.mb-1
                    i.far.fa-file-code(style="color:#1682FB !important;")
                    div Con el nuevo protocolo IPv6 y los 128 #[em bits] se redireccionará un total de: 2128 = 340.282.366.920.938.463.463.374.607.431.768.211.456 #[em hosts].
                  li.d-flex.mb-0
                    i.far.fa-file-code(style="color:#1682FB !important;")
                    div Con este protocolo se podrán instalar los servidores que se quieran sin limitación debido a su capacidad.
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema1/16.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4(style="padding-top:7px;") TCP/IP
    
    p(data-aos="fade-left") El protocolo de comunicación TCP/IP (protocolo para el control de transmisión / protocolo de Internet), es el más común y usado en el mundo para conectar los dispositivos con el exterior.
    p.mt-4(data-aos="fade-right") A continuación, se presenta la forma en la que se conforma este protocolo.
    
    .col-xl-10.m-auto.mt-5
      .row
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
            h5 Figura 2.
            span Protocolo TCP/IP
          figure.mt-4(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema1/32.svg")
        .col-lg-5(data-aos="fade-left" style="place-self:end;")
          figure.m-auto.col-7.col-md-5.col-lg-12
            img(src="@/assets/curso/tema1/33.png")



              


   
      
</template>

<script>
export default {
  name: 'Tema1',
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
.cont_1_1, .cont_1_1 *
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 125%
  height: 70%
  left: -15%
  top: 0
  background: url(../assets/curso/tema1/1.png)
  background-size: cover
  background-position: center
.cont_1_2
  background: url(../assets/curso/tema1/2.png)
  background-size: cover
  background-position: center
  border-radius: 12px
.tabs-a.color-acento-botones .tabs-a__tab__selected
  color: #12263F
.tabs-a.color-acento-botones .tabs-a__tab:hover, .tabs-a.color-acento-botones .tabs-a__tab:active, .tabs-a.color-acento-botones .tabs-a__tab:focus
  color: #12263F
.cont_1_3, .cont_1_3 *
  position: relative
.cont_1_3:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(../assets/curso/tema1/8.svg)
  background-size: cover
  background-position: center
.slyder-f__btn i
  color: #FFCE00
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
.linea-tiempo-d__item.linea-tiempo-d__item--selected .linea-tiempo-d__item__content.tarjeta.tarjeta--gris
  background-color: #E1F6EF
.linea-tiempo-d.color-acento-botones .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  color: #12263F
  font-weight: bold
.slyder-a__bullets__item
  background-color: rgba(255, 255, 255, .35)
  border: 0px
.slyder-a__bullets__item--active
  background-color: #fff !important
  border-color: #fff !important
.cont_slyder_1_1
  background: url(../assets/curso/tema1/21.svg)
  background-size: cover
  background-position: center
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #FFCE00
  border: 1px solid #FFCE00
.cont_1_4, .cont_1_4 *
  position: relative
.cont_1_4:before
  content: ''
  position: absolute
  width: 125%
  height: 70%
  left: -15%
  top: 15%
  bottom: 15%
  background: url(../assets/curso/tema1/29.png)
  background-size: cover
  background-position: center
.cont_1_5
  background: url(../assets/curso/tema1/30.png)
  background-size: 100% 100%
  background-position: center
  border-radius: 15px
@media screen and (max-width: 992px)
  .cont_1_5
    ackground: url(../assets/curso/tema1/30.png)
    background-size: cover
    background-position: center
</style>
