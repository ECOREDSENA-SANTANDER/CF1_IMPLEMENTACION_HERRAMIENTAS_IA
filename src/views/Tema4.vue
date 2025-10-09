<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Procesos automatizados (informaciones no estructuradas, capas, lógica de tareas, toma de decisiones autónomas)

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-auto.mb-0(data-aos="fade-left")
        img.img-a.img-t(src="@/assets/curso/temas/t4/1.png")
      .col-lg
        .row.align-items-center
          .col-lg-auto.my-0.my-md-4.my-sm-4(data-aos="fade-right")
            img.img-a.img-t(src="@/assets/curso/temas/t4/2.png")
          .col-lg(data-aos="fade-left")
            p.mb-0 Los procesos automatizados en inteligencia artificial permiten que los sistemas trabajen de forma autónoma con información no estructurada, utilizando diferentes capas y lógicas de tareas para tomar decisiones sin intervención humana directa. 
        .bg-color-1.p-3(data-aos="fade-down")                                
          p.mb-0 La información no estructurada incluye datos que no siguen un formato fijo, como textos, imágenes, vídeos, grabaciones de voz y documentos digitales. La inteligencia artificial utiliza técnicas como el procesamiento del lenguaje natural (NLP), la visión computarizada y el reconocimiento de voz para analizar y extraer valor de estos datos, habilitando aplicaciones como análisis de sentimientos, detección de objetos e identificación de patrones complejos. 

    p(data-aos="fade-down").mb-5 Los procesos automatizados por IA suelen estar estructurados en diversas capas que trabajan juntas para lograr la autonomía y la eficiencia:   

    .tarjeta--container.row.mb-5(data-aos="fade-down")
      .col-md.tarjeta.bg-color-17.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t4/3.png', alt='')          
        p #[b Capa de entrada y comprensión:] recibe datos no estructurados y los procesa utilizando IA para extraer información relevante.
      
      .col-md.tarjeta.bg-color-18.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t4/4.png', alt='')          
        p #[b Capa de procesamiento:] aplica algoritmos de aprendizaje automático o reglas definidas para analizar y clasificar la información.

      .col-md.tarjeta.bg-color-17.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t4/5.png', alt='')          
        p #[b Capa de decisión:] determina acciones basadas en la lógica de reglas, modelos predictivos o sistemas híbridos.      
      
      .col-md.tarjeta.bg-color-18.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t4/6.png', alt='')          
        p #[b Capa de ejecución:] implementa las acciones decididas, como enviar alertas, generar informes o activar bots automáticos. 

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-auto.mb-0(data-aos="fade-left")
        img.img-a.img-t(src="@/assets/curso/temas/t4/7.png")
      .col-lg
        p(data-aos="fade-down") La automatización implica la creación de una lógica de tareas bien definida, que puede incluir reglas explícitas, flujos de decisión y modelos predictivos entrenados con datos históricos. Un sistema de IA puede clasificar la información, procesar solicitudes, validar documentos y asignar prioridades de ejecución.

        p(data-aos="fade-down") En sistemas complejos, la lógica puede incorporar aprendizaje automático para adaptar las tareas según nuevos datos o resultados, permitiendo que el sistema evolucione y mejore su desempeño a lo largo del tiempo.  
        .bg-color-4.p-3(data-aos="fade-down") 
          .row.align-items-center
            .col-lg-auto.my-0.my-md-4.my-sm-4(data-aos="fade-right")
              img.img-a.img-t(src="@/assets/curso/temas/t4/8.png")
            .col-lg(data-aos="fade-left")
              p.mb-0 Un aspecto clave de estos procesos es la toma de decisiones autónomas. Los agentes inteligentes priorizan objetivos, desglosan tareas en subtareas y seleccionan la mejor acción según criterios como urgencia y recursos disponibles.                         

    .row.justify-content-center.mb-5
      .col-lg-4
        .bg-color-4.p-3.h-100.j1(data-aos="fade-down")
          p.mb-0 Estas decisiones pueden estar gobernadas por:
          ul.lista-ul--color.ico-lista.fa-lista.mb-0
            li 
              img.img-a.img-t(src="@/assets/curso/temas/t1/11.svg", alt="")
              span Reglas programadas (sistemas basados en reglas).
            li 
              img.img-a.img-t(src="@/assets/curso/temas/t1/11.svg", alt="")
              span Modelos internos del entorno (agentes deliberativos).
            li.mb-0 
              img.img-a.img-t(src="@/assets/curso/temas/t1/11.svg", alt="")
              span.mb-0 Aprendizaje por refuerzo, donde el sistema aprende a partir de la experiencia y retroalimentación.             
      .col-lg-4(data-aos="fade-left")
        img.mov(src="@/assets/curso/temas/t4/9.png")
      .col-lg-4
        p(data-aos='fade-down') Para garantizar la trazabilidad y el control, los sistemas suelen operar bajo arquitecturas que registran cada decisión, supervisan el flujo y permiten intervenir si es necesario, integrando capacidades humanas de supervisión cuando es preciso.

        p(data-aos='fade-down').mb-0  Un ejemplo de automatización con inteligencia artificial es el uso de #[i chatbots] en la atención al cliente, que permiten responder consultas y resolver problemas de usuarios las 24 horas al día sin intervención humana.

    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.deco
        img(src='@/assets/curso/temas/t1/34.svg', alt='')
        h3.mb-0.px-3.pe-5 Ejemplo: #[i chatbot] para atención al cliente

    .row.justify-content-center.align-items-center.mb-5.pt-5
      .col-lg-8(data-aos="fade-left")             
        .crd.crd--avatarHorizontal.p-right.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t4/11.svg", alt="alt").img100
            .col
              p Un #[i chatbot] con IA atiende a los clientes a través de mensajería instantánea, respondiendo preguntas frecuentes sobre productos, procesando reservas, atendiendo reclamaciones o guiando en procesos de compra.
        
        .crd.crd--avatarHorizontal.p-right.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t4/12.svg", alt="alt").img100
            .col
              p El sistema entiende preguntas en lenguaje natural, busca la información en bases de datos y da respuestas instantáneas, filtrando solo los casos más complejos para que los atiendan personas.
        .crd.crd--avatarHorizontal.p-right.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t4/13.svg", alt="alt").img100
            .col
              p Empresas como aerolíneas, bancos y tiendas en línea han reducido los tiempos de espera y mejorado la satisfacción del cliente utilizando esta tecnología.   

      .col-lg-4.p-0(data-aos="fade-right")        
        figure
          img.img-t(src="@/assets/curso/temas/t4/10.png", alt="alt")    

    .row.bgcolor-1.tarjeta.align-items-center.p-2.p-md-4.mb-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img.img-a.img-t(src="@/assets/curso/temas/t1/13.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h4.mb-1 Video: Qué son los chatbots, para qué sirven y qué tipos de chatbots hay | Nuevas tecnologías
                  p.mb-0 Se invita a explorar en siguiente video.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=Q6aNuo39nEM&ab_channel=GCFAprendeLibre')" target="_blank")
                    span Ir al sitio
                    i.fas.fa-file-video    

    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.deco
        img(src='@/assets/curso/temas/t1/34.svg', alt='')
        h3.mb-0.px-3.pe-5 Otros ejemplos relevantes: 


    .row.justify-content-center.cursor-pointer.mb-5(data-aos="fade-up")
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t4/14.png", alt="")
          .crd_hover_txt--body
            h4.mb-4 Reconocimiento automático de documentos
            p.mb-0 Sistemas que usan IA para escanear, extraer datos y validar información de facturas, contratos o identificaciones, acelerando procesos administrativos.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t4/15.png", alt="")
          .crd_hover_txt--body
            h4.mb-4 Envío personalizado de correos o promociones
            p.mb-0 plataformas de ventas usan IA para analizar las preferencias del usuario y enviar ofertas relevantes automáticamente.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t4/16.png", alt="")
          .crd_hover_txt--body
            h4.mb-4 Optimización logística
            p.mb-0 Algoritmos de IA para ajustar rutas de entrega y gestionar inventarios en tiempo real, anticipando la demanda y reduciendo costos de transporte. 

    .row.bgcolor-1.tarjeta.align-items-center.p-2.p-md-4(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img.img-a.img-t(src="@/assets/curso/temas/t1/13.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h4.mb-1 Video: HABLEMOS DE... Cómo Netflix aplica la Inteligencia Artificial
                  p.mb-0 Se invita a explorar en siguiente video.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=D3yCuvyCOm4&ab_channel=MIOTITech%26BusinessSchool')" target="_blank")
                    span Ir al sitio
                    i.fas.fa-file-video    
</template>

<script>
export default {
  name: 'Tema4',
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
