<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La Inteligencia Artificial (IA) es un campo de la informática que busca que las máquinas imiten funciones humanas como aprender, razonar y tomar decisiones. Su evolución, desde los planteamientos de Turing hasta el actual aprendizaje profundo, ha permitido aplicaciones en salud, educación, transporte, finanzas y entretenimiento. Basada en datos, algoritmos y retroalimentación, la IA integra tecnologías como el aprendizaje automático, redes neuronales, procesamiento de lenguaje natural y visión por computadora. Sus principios fundamentales incluyen la autonomía, la capacidad de adaptación, la optimización y la ética. A través de flujos de proceso (desde la recolección de datos hasta la optimización continua), ofrece beneficios como mayor eficiencia, productividad y reducción  de errores, aunque también plantea retos éticos y sociales que requieren un uso consciente y responsable.
    

    .row.justify-content-center
      .col-lg-12.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente Inteligencia Artificial y Productividad integra los fundamentos de la IA, sus flujos de proceso, herramientas y aplicaciones en distintos sectores, junto con los procesos automatizados que impulsan eficiencia, innovación y toma de decisiones autónomas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
