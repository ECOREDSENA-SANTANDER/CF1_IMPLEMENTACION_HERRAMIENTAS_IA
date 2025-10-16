<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Herramientas de inteligencia artificial (asistentes virtuales, de automatización, plataformas sin código y bajo código)

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img.p-top(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los asistentes virtuales impulsados por IA se han convertido en herramientas clave para la gestión personal y profesional. Son capaces de automatizar tareas, responder preguntas y optimizar la organización de información, lo que los hace útiles tanto para usuarios individuales como para empresas.


    p(data-aos="fade-down") A continuación, se presentan algunos ejemplos de asistentes virtuales populares: 

    .row.mb-4.pb-5(data-aos="fade-right")
      .col-sm-6.col-xl.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg-color-14
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/2.png')})`}")
            .tarjeta-flip__contenido.bg-color-4.p-4
              h4 ChatGPT 
              p.mb-0 Especializado en redacción, generación de ideas, corrección de textos y búsqueda de información. Ofrece una versión gratuita y planes de pago según el nivel de uso.

      .col-sm-6.col-xl.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg-color-14
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/3.png')})`}")
            .tarjeta-flip__contenido.bg-color-4.p-4
              h4 Amazon Alexa 
              p.mb-0 Funciona mediante comandos de voz y permite gestionar listas, hacer compras, reproducir música y acceder a información en tiempo real.

      .col-sm-6.col-xl.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg-color-14
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/4.png')})`}")
            .tarjeta-flip__contenido.bg-color-4.p-4
              h4 Google Assistant
              p.mb-0 facilita la programación de citas, alarmas y traducciones, además de controlar dispositivos inteligentes de manera manos libres.

      .col-sm-6.col-xl.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg-color-14
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/5.png')})`}")
            .tarjeta-flip__contenido.bg-color-4.p-4
              h4 Microsoft Copilot
              p.mb-0 Orientado al ámbito laboral, automatiza la creación de correos electrónicos, generación de código, elaboración de presentaciones y resúmenes en entornos empresariales.

      .col-sm-6.col-xl.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg-color-14
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/6.png')})`}")
            .tarjeta-flip__contenido.bg-color-4.p-4
              h4 Siri (Apple) y Cortana (Microsoft)
              p.mb-0 Ejecutan comandos de voz para tomar notas, gestionar calendarios y administrar diversas funciones en múltiples plataformas.   

    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.deco
        img(src='@/assets/curso/temas/t1/34.svg', alt='')
        h3.mb-0.px-3.pe-5 Otros asistentes especializados

    .row.justify-content-center.mb-4        
      .col-lg-4
        .bg-color-5.p-3.br-1.h-100
          img.img-t.mb-3(data-aos='fade-up')(src="@/assets/curso/temas/t3/7.png")
        
          h5 IBM Watson Assistant, Fireflies, Motion o Haptik
          p Especializado en redacción, generación de ideas, corrección de textos y búsqueda de información. Ofrece una versión gratuita y planes de pago según el nivel de uso.

      .col-lg-4
        .bg-color-5.p-3.br-1.h-100
          img.img-t.mb-3(data-aos='fade-up')(src="@/assets/curso/temas/t3/8.png")
        
          h5 Squaretalk y Enterprise Bot
          p Enfocados en ofrecer soporte 24/7 a través de múltiples canales de comunicación.

      .col-lg-4 
        img.img-t(data-aos='fade-up')(src="@/assets/curso/temas/t3/9.png")


    p(data-aos="fade-down") En conjunto, los asistentes virtuales con IA representan una solución eficaz y adaptable para mejorar la productividad, al permitir la automatización inteligente de procesos, la gestión de datos y la atención eficiente a usuarios y clientes.

    p(data-aos="fade-down").mb-5 A continuación, se presentan ejemplos destacados de asistentes de automatización:


    SlyderF.mb-5(columnas="col-lg-4 col-md-6" data-aos="fade-down")
      .tarjeta.bg-color-6.p-4.text-center
        .row.justify-content-center.mb-3
          .col-lg-12.col-md-7.col-6
            img.img-a.img-t(src='@/assets/curso/temas/t3/10.png' alt='')
        h4 UiPath
        p Plataforma líder en Automatización Robótica de Procesos (RPA) que combina #[em bots] y agentes de IA para gestionar tareas tanto manuales como cognitivas. Permite automatizar flujos empresariales completos y escalar procesos de manera eficiente.

      .tarjeta.bg-color-6.p-4.text-center
        .row.justify-content-center.mb-3
          .col-lg-12.col-md-7.col-6
            img.img-a.img-t(src='@/assets/curso/temas/t3/11.png' alt='')
        h4 Zapier
        p Herramienta que conecta múltiples aplicaciones empresariales para automatizar flujos de trabajo sin necesidad de programación. Facilita procesos administrativos como la facturación, los recordatorios de pago o la sincronización de datos. 

      .tarjeta.bg-color-6.p-4.text-center
        .row.justify-content-center.mb-3
          .col-lg-12.col-md-7.col-6
            img.img-a.img-t(src='@/assets/curso/temas/t3/12.png' alt='')
        h4 Automation Anywhere
        p Solución que integra IA y RPA para automatizar tareas administrativas, desde la entrada de datos hasta la generación de informes. Su uso contribuye a reducir costos operativos y liberar recursos humanos para labores estratégicas. 

      .tarjeta.bg-color-6.p-4.text-center
        .row.justify-content-center.mb-3
          .col-lg-12.col-md-7.col-6
            img.img-a.img-t(src='@/assets/curso/temas/t3/13.png' alt='')
        h4 Salesforce Einstein
        p Módulo de inteligencia artificial integrado en el CRM de Salesforce. Automatiza la gestión de ventas, predice tendencias del mercado y personaliza la experiencia del cliente con base en datos históricos y en tiempo real. 

      .tarjeta.bg-color-6.p-4.text-center
        .row.justify-content-center.mb-3
          .col-lg-12.col-md-7.col-6
            img.img-a.img-t(src='@/assets/curso/temas/t3/14.png' alt='')
        h4 Marketo
        p Plataforma de automatización de #[em marketing] impulsada por IA que permite segmentar audiencias, personalizar campañas y optimizar la eficacia de las estrategias de #[em marketing] digital.

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Áreas de aplicación 


    .tarjeta--container.row.mb-5(data-aos="fade-down")
      .col-md.tarjeta.bg-color-15.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t3/15.svg', alt='')          
        h5.text-center ERP y CRM inteligentes
        p Sistemas como SAP, Oracle, Salesforce, Zoho CRM y HubSpot permiten gestionar recursos, predecir tendencias y personalizar la relación con los clientes mediante IA. 
      
      .col-md.tarjeta.bg-color-16.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t3/16.svg', alt='')          
        h5.text-center Recursos humanos
        p Herramientas como Workday, BambooHR y Darwin AI automatizan reclutamiento, gestión de talento, tareas administrativas y fomenta la inclusión y diversidad.
      
      .col-md.tarjeta.bg-color-15.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t3/17.svg', alt='')          
        h5.text-center Análisis predictivo
        p Plataformas como IBM Watson y Azure Machine Learning procesan grandes volúmenes de datos para identificar patrones, prever demanda y apoyar la toma de decisiones.                                                   

    p(data-aos="fade-down").mb-5 También podemos hacer uso de plataformas de inteligencia artificial sin código y bajo código, que permiten diseñar, entrenar e implementar soluciones IA sin necesidad de programar, facilitando el acceso a estas tecnologías para usuarios no técnicos.

    .row.justify-content-center.mb-4        
      .col-lg-5(data-aos="fade-left")
        .br-color-1.p-3.br-1.h-100
          h5 Ejemplo 1:
          p.mb-5 Microsoft Power Apps es una plataforma de desarrollo de aplicaciones bajo código que permite crear aplicaciones empresariales personalizadas rápidamente, sin necesidad de conocimientos profundos en programación. Esta plataforma utiliza una interfaz visual intuitiva basada en arrastrar y soltar, y se integra con una amplia variedad de fuentes de datos, incluidos Microsoft Dataverse, SharePoint, Dynamics 365 y otros servicios en línea o locales.
          a.anexo(href="https://www.youtube.com/watch?v=JMJTZUpSXvE&ab_channel=IvanAlsiGo" target="_blank")
            .anexo__icono
              img(src="@/assets/curso/temas/t3/18.svg")
            .anexo__texto
              p #[b Video: Automatiza Procesos sin Programar con Copilot y Power Automate.] Se invita a explorar en siguiente video.         

      .col-lg-5(data-aos="fade-right")
        .br-color-2.p-3.br-1.h-100
          h5 Ejemplo 2:
          p.mb-5 Google Apps Script es una plataforma bajo código que permite automatizar tareas y crear soluciones personalizadas integradas con Google Workspace usando un lenguaje basado en JavaScript. Facilita la integración y automatización entre productos Google como Gmail, Drive, Sheets, Calendar y más, sin necesidad de ser un desarrollador profesional.
          a.anexo(href="https://www.youtube.com/watch?v=_-avlqxDgXM&ab_channel=TipsdeGooglesheets" target="_blank")
            .anexo__icono
              img(src="@/assets/curso/temas/t3/18.svg")
            .anexo__texto
              p #[b Video: Video: Automatiza Google Sheets con Apps Script + ChatGPT | Sin Saber Macros.] Se invita a explorar en siguiente video.              
</template>

<script>
export default {
  name: 'Tema3',
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
