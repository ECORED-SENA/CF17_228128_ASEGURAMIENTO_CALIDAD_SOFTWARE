<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-right") Bienvenido al presente componente formativo, en el que se estudiarán las métricas de calidad de servicios. A través del siguiente video, podrá identificar la relevancia de este contenido.

    figure.mt-4(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nbZ427Jp15c" title="Métricas de calidad de servicios" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

    
 


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
