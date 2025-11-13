<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.align-items-center.mb-5
      .col-lg-auto.mb-0.mb-md-4(data-aos="fade-right")
        img.img-a.img-t(src="@/assets/curso/temas/1.svg")
      .col-lg(data-aos="fade-left")
        p.mb-0 Este componente formativo permite comprender los conceptos fundamentales, la historia y las aplicaciones actuales de la Inteligencia Artificial (IA). Presenta los principales elementos que hacen posible que una máquina realice tareas inteligentes, como el reconocimiento de voz, la toma de decisiones y el procesamiento del lenguaje natural. Asimismo, aborda las ventajas y los retos éticos asociados a la IA, junto con los flujos de proceso que guían su funcionamiento. El contenido incluye ejemplos prácticos de automatización con IA, como #[i chatbots] y asistentes virtuales, y ofrece una visión sobre el futuro de esta tecnología y su impacto en diferentes sectores, con un enfoque didáctico que facilita la comprensión de estudiantes principiantes.     
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/8lO_yp9cNn4?si=w4t24notJm6j1e-d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Inteligencia Artificial (IA) y productividad – introducción 

</template>

<script>
export default {
  name: 'Introduccion',
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

<style lang="sass"></style>
