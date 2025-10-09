<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Flujos de proceso en Inteligencia Artificial

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Cuando hablamos de flujos de proceso en Inteligencia Artificial (IA) nos referimos a las etapas que sigue un sistema inteligente desde que recibe los datos hasta que produce un resultado útil para las personas. Comprender este recorrido es fundamental para entender cómo funciona la IA en la práctica.

    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.deco
        img(src='@/assets/curso/temas/t1/34.svg', alt='')
        h3.mb-0.px-3.pe-5 El proceso puede resumirse en las siguientes fases principales:

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-8.mb-3.mb-lg-0  
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg1")
          .div(titulo="Recolección de  datos")
            p Los datos son la materia prima de cualquier sistema de IA. Sin ellos, la máquina no puede aprender. Pueden provenir de sensores, cámaras, micrófonos, bases de datos, registros históricos o incluso de la información que generan los usuarios en internet. 
          .div(titulo="Preparación o limpieza de datos")
            p Una vez recopilada la información, se eliminan errores, duplicados e inconsistencias, y se organiza en un formato adecuado. Esto es clave, ya que los datos en bruto suelen estar desordenados y llenos de “ruido”. 
          .div(titulo="Selección de características o variables")
            p Se identifican los aspectos relevantes de los datos para el problema que se desea resolver. Por ejemplo, en un modelo que predice el precio de una vivienda, variables como ubicación, tamaño y número de habitaciones son más útiles que el color de las paredes.
          .div(titulo="Entrenamiento del modelo")
            p Aquí se utilizan algoritmos matemáticos y de Machine Learning que, alimentados con los datos preparados, aprenden a encontrar patrones y relaciones entre las variables. Durante este proceso, el modelo ajusta sus parámetros para reducir errores, repitiéndose miles de veces hasta alcanzar un nivel aceptable de precisión.
          .div(titulo="Evaluación del modelo")
            p El modelo se prueba con datos que nunca ha visto antes. Esto permite comprobar si realmente aprendió a generalizar o si simplemente memorizó los ejemplos de entrenamiento. Esta etapa es esencial para garantizar que funcione correctamente en el mundo real.
          .div(titulo="Implementación o despliegue")
            p Una vez validado, el modelo se integra en aplicaciones concretas: chatbots en páginas web, asistentes de voz en celulares, sistemas de recomendación o reconocimiento facial en aeropuertos.
          .div(titulo="Monitorización y retroalimentación")
            p El sistema es observado de forma continua para detectar errores, mejorar su precisión y adaptarse a cambios en los datos o en el entorno. Gracias a este ciclo, la IA no permanece estática, sino que evoluciona y se actualiza constantemente.
          .div(titulo="Optimización")
            p En muchos casos, se realizan ajustes adicionales para mejorar la velocidad, la eficiencia y el consumo de recursos, logrando resultados más precisos y sostenibles.            
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/t2/2.png", alt="")   

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-auto.mb-0(data-aos="fade-left")
        img.img-a.img-t(src="@/assets/curso/temas/t2/3.png")
      .col-lg
        .row.align-items-center
          .col-lg-auto.my-0.my-md-4.my-sm-4(data-aos="fade-right")
            img.img-a.img-t(src="@/assets/curso/temas/t2/4.svg")
          .col-lg(data-aos="fade-left")
            p.mb-0 Este conjunto de pasos constituye un ciclo iterativo, ya que puede repetirse una y otra vez. Así es como los sistemas de IA parecen “aprender” con el tiempo: no porque piensen como los humanos, sino porque constantemente pasan por procesos de aprendizaje y corrección.                      
        p(data-aos="fade-down") De hecho, este flujo guarda cierta analogía con el aprendizaje humano: primero recibimos información, la organizamos, seleccionamos lo más importante, practicamos hasta comprenderlo, comprobamos lo aprendido en nuevas situaciones y, si nos equivocamos, corregimos para hacerlo mejor la próxima vez.

    .row.justify-content-center.mb-5
      .col-lg-5
        .bg-color-4.br-1.p-3.h-100.j1(data-aos="fade-down")
          p.mb-0 En conclusión, los flujos de proceso en IA son el núcleo de cualquier sistema inteligente. Comprenderlos ayuda a desmitificar la IA, mostrando que detrás de su aparente complejidad existe un conjunto ordenado de pasos que transforman datos en conocimiento y conocimiento en acciones útiles para la sociedad.   
      .col-lg-3(data-aos="fade-left")
        img.mov(src="@/assets/curso/temas/t2/5.png")
      .col-lg-4
        img.img-t.mb-3(data-aos='fade-up')(src="@/assets/curso/temas/t2/6.png")

        p(data-aos='fade-down').mb-0 Finalmente, estos procesos suelen representarse mediante diagramas de flujo, que muestran de manera visual la secuencia de pasos, decisiones y acciones. Hoy en día, incluso existen herramientas asistidas por IA que facilitan la creación de diagramas claros y profesionales, haciendo más comprensible el funcionamiento interno de los sistemas inteligentes.  

    .row.align-items-center.mb-5
      .col-lg-auto.mb-0.mb-md-4(data-aos="fade-left")
        img.img-a.img-t(src="@/assets/curso/temas/t2/7.png")
      .col-lg(data-aos="fade-right")
        p.mb-0 Los flujos de proceso en inteligencia artificial se aplican en la automatización de tareas como la extracción de datos, la gestión de inventarios, la atención al cliente, la incorporación de nuevos usuarios y el análisis predictivo. Estos flujos permiten que los agentes de IA ejecuten actividades de forma autónoma, integrando distintos módulos como chatbots, motores de recomendación o sistemas de análisis de información, lo que incrementa la eficiencia y reduce la intervención humana en tareas repetitivas o de gran volumen.   

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Beneficios de los flujos de proceso en IA

    p(data-aos="fade-down").mb-5 Los flujos de proceso en inteligencia artificial no solo transforman la manera en que las organizaciones gestionan sus tareas, sino que también aportan ventajas significativas en términos de eficiencia, productividad y adaptabilidad. Al automatizar actividades repetitivas y optimizar la gestión de datos, permiten que los equipos humanos se concentren en funciones estratégicas de mayor valor. Además, reducen la probabilidad de errores, facilitan la toma de decisiones basadas en información precisa y garantizan que los sistemas puedan evolucionar de manera continua frente a los cambios del entorno digital. 


    .row.justify-content-center.mb-5.pt-5(data-aos="fade-right")
        .col-lg-9.position-relative
          .avatar
            figure
              img(src="@/assets/curso/temas/t2/8.svg", alt="alt").img250
          
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t2/9.svg", alt="alt").img100
              .col
                h5 Eficiencia
                p Eliminan tareas manuales y repetitivas, optimizando el tiempo de ejecución.
          
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t2/10.svg", alt="alt").img100
              .col
                h5 Productividad
                p Permiten concentrar recursos humanos en actividades estratégicas de mayor valor.
          .crd.crd--avatarHorizontal.py-4.crd--mid
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t2/11.svg", alt="alt").img100
              .col
                h5 Escalabilidad
                p Facilitan la expansión y optimización de procesos dentro de las organizaciones.
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t2/12.svg", alt="alt").img100
              .col
                h5 Precisión
                p Reducen errores humanos y mejoran la toma de decisiones mediante automatización inteligente.                          
          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t2/13.svg", alt="alt").img100
              .col
                h5 Adaptabilidad
                p Favorecen el aprendizaje continuo y la evolución de los procesos digitales. 

    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.deco
        img(src='@/assets/curso/temas/t1/34.svg', alt='')
        h3.mb-0.px-3.pe-5 Factores clave para crear flujos de proceso efectivos

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")        
        LineaTiempoD.color-acento-botones
          .row(numero="a" titulo="Definición clara de metas")
            .col-md-11
              p Antes de diseñar un flujo, es indispensable establecer objetivos precisos: identificar qué tareas se van a automatizar y qué resultados se espera obtener.

          .row(numero="b" titulo="Selección, integración y pruebas de herramientas de IA")
            .col-md-11
              p Es fundamental elegir plataformas compatibles con las necesidades específicas, que permitan integración con sistemas existentes, ofrezcan personalización y fomenten la colaboración. Probar las herramientas antes de su implementación ayuda a detectar ventajas, limitaciones y estilos de funcionamiento.

          .row(numero="c" titulo="Diseño lógico y manejo de eventos")
            .col-md-11
              p El flujo debe detallar cada etapa, los desencadenantes y las reglas de automatización. Separar los “caminos felices” (escenarios ideales) de los casos de error, con rutas alternativas, asegura que la IA pueda tomar decisiones adecuadas frente a imprevistos.

          .row(numero="d" titulo="Calidad, integración y gestión de datos")
            .col-md-11
              p Trabajar con datos precisos, relevantes y actualizados es crucial para la efectividad del sistema. Datos incompletos o desbalanceados pueden afectar el rendimiento. Por eso, es necesario limpiar, analizar y dividir correctamente la información en conjuntos de entrenamiento, validación y prueba.

          .row(numero="e" titulo="Documentación y modularidad")
            .col-md-11
              p Mantener una documentación clara y estructurar los procesos de forma modular garantiza la reproducibilidad y facilita el mantenimiento. Evitar flujos de código opacos y añadir comentarios adecuados reduce riesgos futuros y ahorra tiempo en actualizaciones.
            
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img.img-a.img-t(src='@/assets/curso/temas/t2/14.png', alt='') 

    .row.bgcolor-1.tarjeta.align-items-center.p-2.p-md-4(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img.img-a.img-t(src="@/assets/curso/temas/t1/13.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h4.mb-1 Video: Integra Salesforce y WhatsApp con dos clicks usando Treble
                  p.mb-0 Se invita a explorar en siguiente video.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=arr8nZw6K5g&ab_channel=trebleai')" target="_blank")
                    span Ir al sitio
                    i.fas.fa-file-video                                                              
</template>

<script>
export default {
  name: 'Tema2',
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
