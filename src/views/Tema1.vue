<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Inteligencia Artificial (IA)
        
      .row.justify-content-center.align-items-end.mb-5
        .col-lg-5.col-md-7.mb-3.mb-lg-0(data-aos="fade-left")
          img.img-a.img-t(src="@/assets/curso/temas/t1/2.png")
        .col-lg-7
          .row.align-items-center.mb-4
            .col-lg-auto.my-0.my-md-4.my-sm-4.d-none.d-lg-block(data-aos="fade-right")
              img.img-a.img-t(src="@/assets/curso/temas/t1/3.png")
            .col-lg(data-aos="fade-left")
              p.mb-0 La Inteligencia Artificial (IA) es un campo de la informática que busca desarrollar sistemas capaces de realizar tareas que normalmente requieren inteligencia humana. Estas tareas incluyen, entre otras, el reconocimiento de voz, la toma de decisiones, la interpretación de lenguaje natural y la percepción visual. La IA ha avanzado significativamente en las últimas décadas gracias a la evolución de algoritmos, el aumento de la potencia computacional y la disponibilidad de grandes conjuntos de datos.
          .bg-color-1.p-3(data-aos="fade-down")
            p En palabras simples, es lograr que una máquina pueda #[b “pensar” o comportarse de manera inteligente] frente a distintas situaciones.

            p.mb-0 #[b Ejemplo:] cuando usamos un traductor en línea, un asistente de voz como Alexa o un sistema que recomienda películas en Netflix, estamos interactuando con la IA.        

      p(data-aos="fade-down") Para que la IA funcione, necesita varios elementos clave:
      .row.align-items-start.mb-5(data-aos="fade-left") 
        .col-lg-8.mb-3.mb-lg-0  
          AcordionA(tipo="b" clase-tarjeta="tarjeta bg1")
            .div(titulo="Datos")
              p.mb-4 El “alimento” de la IA. Cuantos más datos de calidad se dispongan, mejor puede aprender el sistema.
              p.text-bold.mb-2 Ejemplo práctico
              p Fotos para entrenar un sistema de reconocimiento facial; historiales médicos para un modelo de diagnóstico.
            .div(titulo="Algoritmos")
              p.mb-4 Conjunto de instrucciones matemáticas y lógicas que permiten a la máquina aprender a partir de los datos.
              p.text-bold.mb-2 Ejemplo práctico
              p Algoritmos de clasificación para detectar correos #[em spam]; redes neuronales para visión artificial.
            .div(titulo="Computación")
              p.mb-4 Infraestructura tecnológica necesaria: procesadores potentes y con frecuencia, servicios en la nube para entrenar modelos complejos.
              p.text-bold.mb-2 Ejemplo práctico
              p Uso de GPU en la nube (como AWS o Google Cloud) para entrenar un modelo de traducción automática.
            .div(titulo="Retroalimentación")
              p.mb-4 Proceso mediante el cual el sistema mejora con el tiempo, corrigiendo errores y ajustando su rendimiento.
              p.text-bold.mb-2 Ejemplo práctico
              p Un asistente virtual que corrige sus respuestas según la valoración del usuario (ejemplo: “pulgar arriba / abajo”).                  
        .col-lg-4.d-none.d-lg-block
          img.img-a.img-t(src="@/assets/curso/temas/t1/4.png", alt="")      

      .row.justify-content-center.mb-4(data-aos="fade-left") 
        .col-lg-3.col-md-6.mb-3
          .bg-color-2.p-3.px-lg-4.h-100
            img.img-a.img-t.my-3.mb-4(src="@/assets/curso/temas/t1/5.png", alt="")
            h4.text-center Ventajas principales 
            ul.lista-ul--color.ico-lista.fa-lista
              li 
                img(src="@/assets/curso/temas/t1/11.svg", alt="")
                span Automatización de tareas repetitivas (mayor eficiencia y reducción de costos).
              li 
                img(src="@/assets/curso/temas/t1/11.svg", alt="")
                span Aumento de la productividad en empresas y organizaciones.
              li 
                img(src="@/assets/curso/temas/t1/11.svg", alt="")
                span Avances en salud, apoyando diagnósticos y tratamientos.
              li 
                img(src="@/assets/curso/temas/t1/11.svg", alt="")
                span Servicios personalizados como traductores automáticos, asistentes virtuales y sistemas de recomendación.   
        .col-lg-3.col-md-6.mb-3
          .bg-color-2.p-3.px-lg-4.h-100
            img.img-a.img-t.my-3.mb-4(src="@/assets/curso/temas/t1/6.png", alt="")
            h4.text-center Riesgos y desafíos 
            ul.lista-ul--color.ico-lista.fa-lista
              li 
                img(src="@/assets/curso/temas/t1/11.svg", alt="")
                span Pérdida de empleos por sustitución de actividades humanas.
              li 
                img(src="@/assets/curso/temas/t1/11.svg", alt="")
                span Reproducción de sesgos presentes en los datos (decisiones injustas).
              li 
                img(src="@/assets/curso/temas/t1/11.svg", alt="")
                span Dependencia tecnológica creciente.
              li 
                img(src="@/assets/curso/temas/t1/11.svg", alt="")
                span Problemas de privacidad y uso de datos personales. 
        .col-lg-3.col-md-6.mb-3
          .bg-color-2.p-3.px-lg-4.h-100
            img.img-a.img-t.my-3.mb-4(src="@/assets/curso/temas/t1/7.png", alt="")
            h4.text-center Retos éticos y sociales 
            ul.lista-ul--color.ico-lista.fa-lista
              li 
                img(src="@/assets/curso/temas/t1/11.svg", alt="")
                span Proteger la privacidad de los datos.
              li 
                img(src="@/assets/curso/temas/t1/11.svg", alt="")
                span Promover la transparencia de los algoritmos, que suelen funcionar como “cajas negras”.
              li 
                img(src="@/assets/curso/temas/t1/11.svg", alt="")
                span Establecer responsabilidad legal frente a errores de sistemas autónomos.
              li 
                img(src="@/assets/curso/temas/t1/11.svg", alt="")
                span Garantizar la equidad en el acceso a la tecnología, evitando brechas sociales.
        .col-lg-3.col-md-6.mb-3
          .bg-color-2.p-3.px-lg-4.h-100
            img.img-a.img-t.my-3.mb-4(src="@/assets/curso/temas/t1/8.png", alt="")
            h4.text-center Futuro de la IA
            ul.lista-ul--color.ico-lista.fa-lista
              li 
                img(src="@/assets/curso/temas/t1/11.svg", alt="")
                span Educación personalizada adaptada a cada estudiante.
              li 
                img(src="@/assets/curso/temas/t1/11.svg", alt="")
                span Medicina predictiva para anticipar enfermedades.
              li 
                img(src="@/assets/curso/temas/t1/11.svg", alt="")
                span Robótica avanzada en la industria y el hogar.
              li 
                img(src="@/assets/curso/temas/t1/11.svg", alt="")
                span Creatividad asistida en arte, música y literatura.   

        
      .row.justify-content-center.align-items-end.mb-5
        .col-lg-5.col-md-6.col-10.mb-3.mb-lg-0(data-aos="fade-right")
          img.img-a.img-t(src="@/assets/curso/temas/t1/12.png")
        .col-lg-7(data-aos='fade-left')
          p El impacto real de la IA dependerá de la capacidad de la sociedad para equilibrar la innovación con la ética, la justicia social y el bienestar colectivo.
          p La definición de inteligencia artificial varía según el contexto en el que se utiliza. En términos generales, se puede entender la IA como la capacidad de una máquina para imitar funciones cognitivas humanas. John McCarthy, uno de los pioneros de este campo, definió la IA en 1956 como "la ciencia y la ingeniería de hacer máquinas inteligentes". Esta definición resalta dos aspectos clave: la ciencia (teóricamente fundamentada) y la ingeniería (aplicada en la práctica).
          .bg-color-1.p-3(data-aos="fade-down")
            p.mb-0 La Inteligencia Artificial (IA) no se limita únicamente a imitar los comportamientos humanos, sino que también es capaz de desarrollar sus propias estrategias para la resolución de problemas. Gracias a ello, se han creado tecnologías que operan de manera autónoma, optimizan procesos y toman decisiones fundamentadas en el análisis de datos. 

      .row.bgcolor-1.tarjeta.align-items-center.p-2.p-md-4(data-aos="fade")
        .col-lg-12.col-12.px-lg-4
          .row.justify-content-center.align-items-center

            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img.img-a.img-t(src="@/assets/curso/temas/t1/13.png")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0.text-white
                    h4.mb-1 Principios fundamentales de la inteligencia artificial
                    p.mb-0 Se invita a explorar el siguiente video.
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=qXCV8dQepnY&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA')" target="_blank")
                      span Ir al sitio
                      i.fas.fa-file-video

      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Conceptos claves en Inteligencia Artificial (IA)

      .tarjeta.bg-slider.p-4.pb-0.mb-4(data-aos="fade-right")
        SlyderA.pb-lg-4.pb-3(tipo="b")
          .row.justify-content-center.align-items-center.my-lg-3
            .col-md-6.mb-4.mb-md-0
              h5 Aprendizaje automático (#[em Machine  Learning])
              p.mb-4 Subdisciplina de la IA que permite a las máquinas aprender de los datos y mejorar su rendimiento sin ser programadas de forma explícita. 
              h5.mb-2 Ejemplos de aplicación
              p Recomendaciones de Netflix, detección de fraudes en bancos.
            .col-md-5
              img(src='@/assets/curso/temas/t1/15.png', alt='')
          .row.justify-content-center.align-items-center.my-lg-3
            .col-md-6.mb-4.mb-md-0
              h5.mb-2 Tipos de aprendizaje automático
              ul.lista-ul--color.ico-lista.fa-lista.mb-4
                li 
                  img(src="@/assets/curso/temas/t1/11.svg", alt="")
                  span #[b Supervisado:] se entrena con datos etiquetados para predecir resultados en nuevos casos.
                li 
                  img(src="@/assets/curso/temas/t1/11.svg", alt="")
                  span #[b No supervisado:] analiza datos sin etiquetas para descubrir patrones ocultos.
                li 
                  img(src="@/assets/curso/temas/t1/11.svg", alt="")
                  span #[b Por refuerzo:] el agente aprende interactuando con su entorno, recibiendo recompensas o castigos. 
              h5.mb-2 Ejemplos de aplicación
              ul.lista-ul--color.ico-lista.fa-lista
                li 
                  img(src="@/assets/curso/temas/t1/11.svg", alt="")
                  span #[b Supervisado:] clasificación de correos #[em spam].
                li 
                  img(src="@/assets/curso/temas/t1/11.svg", alt="")
                  span #[b No supervisado:] segmentación de clientes.
                li 
                  img(src="@/assets/curso/temas/t1/11.svg", alt="")
                  span #[b Por refuerzo:] robots que aprenden a caminar. 
            .col-md-5
              img(src='@/assets/curso/temas/t1/16.png', alt='')
          .row.justify-content-center.align-items-center.my-lg-3
            .col-md-6.mb-4.mb-md-0
              h5.mb-2 Redes neuronales
              p.mb-4 Modelos inspirados en el cerebro humano, formados por capas de “neuronas” que procesan información de forma jerárquica. El #[em Deep Learning] permite trabajar con grandes volúmenes de datos y características complejas.
              h5.mb-2 Ejemplos de aplicación
              p Reconocimiento facial, asistentes de voz como Siri o Alexa.
            .col-md-5
              img(src='@/assets/curso/temas/t1/17.png', alt='')
          .row.justify-content-center.align-items-center.my-lg-3
            .col-md-6.mb-4.mb-md-0
              h5.mb-2 Procesamiento del Lenguaje Natural (PLN)
              p.mb-4 Área de la IA que busca la interacción entre humanos y computadoras mediante el lenguaje natural. Se centra en comprender, interpretar y generar texto y voz.
              h5.mb-2 Ejemplos de aplicación
              p #[em Chatbots], asistentes virtuales, traductores automáticos.
            .col-md-5
              img(src='@/assets/curso/temas/t1/18.png', alt='')
          .row.justify-content-center.align-items-center.my-lg-3
            .col-md-6.mb-4.mb-md-0
              h5.mb-2 Visión por computadora
              p.mb-4 Tecnología que permite a las máquinas interpretar e identificar objetos y escenas en imágenes o videos usando algoritmos y aprendizaje automático. 
              h5.mb-2 Ejemplos de aplicación
              p Vehículos autónomos, análisis de imágenes médicas, sistemas de seguridad.
            .col-md-5
              img(src='@/assets/curso/temas/t1/19.png', alt='')
          .row.justify-content-center.align-items-center.my-lg-3
            .col-md-6.mb-4.mb-md-0
              h5.mb-2 Agentes autónomos
              p.mb-4 Sistemas que actúan por sí mismos, tomando decisiones en función de datos y condiciones de su entorno. 
              h5.mb-2 Ejemplos de aplicación
              p Drones de reparto, robots industriales.
            .col-md-5
              img(src='@/assets/curso/temas/t1/20.png', alt='')                                                                                
          .row.justify-content-center.align-items-center.my-lg-3
            .col-md-6.mb-4.mb-md-0
              h5.mb-2 Ética y responsabilidad en la IA
              p.mb-4 Considera los riesgos sociales y éticos: privacidad de datos, sesgos algorítmicos y responsabilidad en las decisiones automatizadas. Busca un desarrollo justo y equitativo de la tecnología. 
              h5.mb-2 Ejemplos de aplicación
              p Regulaciones de IA, auditoría de algoritmos, políticas de protección de datos.
            .col-md-5
              img(src='@/assets/curso/temas/t1/21.png', alt='')

      .row.align-items-center.justify-content-center(data-aos="fade-down")
        .col-lg-10.bg-color-4.p-3
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img.img-a.img-t(src="@/assets/curso/temas/t1/22.png")
            .col-lg
              p.mb-0 La Inteligencia Artificial (IA) ha recorrido un largo camino desde sus inicios hasta convertirse en una de las áreas más fascinantes y prometedoras de la tecnología moderna. Su historia se puede dividir en varias etapas clave, cada una marcada por avances significativos y cambios de paradigma.    


      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Historia  y evolución
    
      .row.justify-content-center.mb-5
        .col-lg-9(data-aos="fade-right")        
          LineaTiempoD.color-acento-botones
            .row(numero="1940 - 1950" titulo="Los inicios de la IA")
              .col-md-11
                p El origen de la inteligencia artificial se sitúa a mediados del siglo XX, cuando comenzaron a desarrollarse las primeras bases teóricas. En 1943, McCulloch y Pitts diseñaron un modelo matemático de neuronas artificiales, antecedente directo de las redes neuronales actuales. Años más tarde, en 1950, Alan Turing publicó “#[em Computing Machinery and Intelligence]”, donde planteó la célebre pregunta “¿pueden pensar las máquinas?” y propuso el Test de Turing como criterio para evaluar la inteligencia de un sistema. En 1951 surgieron los primeros programas de ajedrez y, en 1956, durante la Conferencia de Dartmouth, John McCarthy acuñó el término “Inteligencia Artificial”, marcando el inicio formal de la disciplina.
            .row(numero="1960 - 1970" titulo="La era dorada y el primer invierno")
              .col-md-11
                p Las décadas de 1960 y 1970 fueron consideradas la primera gran etapa de auge de la IA. En este periodo se desarrollaron programas capaces de resolver problemas matemáticos y lógicos, así como sistemas pioneros de procesamiento de lenguaje natural. Entre ellos destacó ELIZA (1966), que simulaba conversaciones con un terapeuta, y SHRDLU, capaz de comprender y ejecutar instrucciones en entornos virtuales limitados. Sin embargo, las expectativas superaron a los logros reales y la tecnología no alcanzó el rendimiento esperado. Esto dio paso al primer “invierno de la IA”, caracterizado por la reducción de la financiación y el desinterés institucional. 
            .row(numero="1980 - 1990" titulo="El resurgimiento y los sistemas expertos")
              .col-md-11
                p En la década de 1980 la IA experimentó un resurgimiento gracias a los sistemas expertos, diseñados para reproducir la toma de decisiones en áreas específicas. Uno de los más destacados fue MYCIN, orientado al diagnóstico médico de enfermedades infecciosas. En 1986, Rumelhart, Hinton y Williams popularizaron el algoritmo de retro propagación, que permitió entrenar redes neuronales de manera más eficaz. Sin embargo, hacia finales de la década, los altos costos y limitaciones técnicas provocaron el segundo “invierno de la IA”. El campo recuperó impulso en los años 90, con avances en el aprendizaje automático, el reconocimiento de voz y el desarrollo de nuevas técnicas como las máquinas de soporte vectorial. En 1997, la IA alcanzó un hito histórico cuando Deep Blue, de IBM, derrotó al campeón mundial de ajedrez Garry Kasparov, demostrando la capacidad de las máquinas para superar a los humanos en tareas altamente complejas. 
            .row(numero="2000" titulo="La revolución de los datos ")
              .col-md-11
                p Con la llegada de internet y el acceso a grandes volúmenes de información, la IA entró en una fase de expansión sin precedentes. El auge del #[em big data] y la mayor capacidad de procesamiento facilitaron notables avances en el aprendizaje automático. En 2006, Geoffrey Hinton revitalizó el concepto de aprendizaje profundo (#[em Deep Learning]), que pronto se convertiría en la base de los sistemas más modernos. En paralelo, surgieron aplicaciones prácticas como la traducción automática, el reconocimiento de voz y los primeros proyectos de vehículos autónomos (Google, 2009). En 2011, el sistema Watson de IBM ganó el concurso Jeopardy, superando a los mejores jugadores humanos y mostrando avances impresionantes en el procesamiento del lenguaje natural. 
            .row(numero="2010" titulo="La expansión cotidiana de la IA")
              .col-md-11
                p Durante la década de 2010, la inteligencia artificial comenzó a integrarse en la vida diaria. En 2012, el modelo AlexNet revolucionó la visión por computadora al ganar la competencia ImageNet, gracias al uso de redes neuronales profundas. Poco después, en 2016, AlphaGo de DeepMind venció al campeón mundial de Go, un juego considerado mucho más complejo que el ajedrez. En esos mismos años, se popularizaron los asistentes virtuales como Siri, Alexa y Google Assistant, además de los sistemas de recomendación que hoy dominan plataformas de música, cine y redes sociales. En 2017, Google introdujo la arquitectura de los #[em Transformers], que dio origen a modelos de lenguaje de última generación como BERT y, posteriormente, GPT.
            .row(numero="2020" titulo="La era generativa y el presente")
              .col-md-11
                p En los últimos años, la inteligencia artificial ha experimentado una auténtica revolución con la llegada de la IA generativa. En 2020, modelos de lenguaje a gran escala como GPT-3 mostraron su capacidad para producir textos coherentes y creativos. En 2022, herramientas como ChatGPT y DALL·E se popularizaron, demostrando el potencial de la IA en la generación de texto e imágenes de alta calidad. Desde entonces, han surgido múltiples desarrollos, como Bard de Google o modelos abiertos como LLaMA y Falcon, que han impulsado la democratización del acceso a esta tecnología. Actualmente, la IA se aplica en medicina de precisión, biología computacional, educación personalizada, arte digital y robótica autónoma, al tiempo que se plantean debates éticos, sociales y legales. Estos han motivado el desarrollo de regulaciones, como la AI Act en Europa, con el objetivo de garantizar un uso responsable y seguro de la inteligencia artificial.
                p Además, la ética y la transparencia en la IA han surgido como preocupaciones fundamentales en el debate contemporáneo. La necesidad de un enfoque responsable y equitativo en el desarrollo de algoritmos se ha intensificado, impulsando iniciativas globales que abogan por la regulación y el uso responsable de la IA.                                                                                
        .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
          img.img-a.img-t(src='@/assets/curso/temas/t1/23.jpg', alt='') 

      .row.align-items-center.justify-content-center(data-aos="fade-down")
        .col-lg-10.bg-color-4.p-3
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img.img-a.img-t(src="@/assets/curso/temas/t1/22.png")
            .col-lg
              p.mb-0 La historia de la inteligencia artificial es un testimonio de la capacidad humana para crear y transformar. Desde la visión inicial de máquinas pensantes hasta la integración actual de la IA en la vida diaria, el viaje ha estado lleno de retos y oportunidades. A medida que nos adentramos en el futuro, seguir explorando y definiendo el papel de la IA será fundamental para asegurar un avance benéfico y ético en esta fascinante disciplina.   


      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.3 Aplicaciones en la vida cotidiana y en la industria      

      p.mb-4 La IA está presente en muchas acciones cotidianas, por ejemplo:  

      .row.mb-5.text-center(data-aos="fade-left")
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.img-a.img-t(src="@/assets/curso/temas/t1/24.png")
              .tarjeta.bg-color-5
                .p-4.pt-1
                  p.mb-0 Recomendaciones personalizadas en plataformas de #[em streaming] o tiendas #[em online].
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.img-a.img-t(src="@/assets/curso/temas/t1/25.png")
              .tarjeta.bg-color-5
                .p-4.pt-1
                  p.mb-0 Traducción automática de idiomas (Google Translate).
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.img-a.img-t(src="@/assets/curso/temas/t1/26.png")
              .tarjeta.bg-color-5
                .p-4.pt-1
                  p.mb-0 Filtros de #[em spam] en el correo electrónico.
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.img-a.img-t(src="@/assets/curso/temas/t1/27.png")
              .tarjeta.bg-color-5
                .p-4.pt-1
                  p.mb-0 Reconocimiento facial en teléfonos móviles.  

      p.mb-4 La IA también ha transformado procesos industriales y empresariales:

      SlyderF.mb-5(columnas="col-lg-4 col-md-6" data-aos="fade-down")
        .tarjeta.bg-color-6.p-4.text-center
          .row.justify-content-center.mb-3
            .col-lg-6.col-md-7.col-6
              img(src='@/assets/curso/temas/t1/28.png' alt='')
          h4 Salud
          p Diagnóstico médico asistido, análisis de imágenes, medicina personalizada.
        .tarjeta.bg-color-6.p-4.text-center
          .row.justify-content-center.mb-3
            .col-lg-6.col-md-7.col-6
              img(src='@/assets/curso/temas/t1/29.png' alt='')
          h4 Finanzas
          p Detección de fraudes, predicción de riesgos, automatización del #[em trading].
        .tarjeta.bg-color-6.p-4.text-center
          .row.justify-content-center.mb-3
            .col-lg-6.col-md-7.col-6
              img(src='@/assets/curso/temas/t1/30.png' alt='')
          h4 Manufactura
          p Mantenimiento predictivo, robots autónomos, control de calidad.
        .tarjeta.bg-color-6.p-4.text-center
          .row.justify-content-center.mb-3
            .col-lg-6.col-md-7.col-6
              img(src='@/assets/curso/temas/t1/31.png' alt='')
          h4 Transporte
          p Vehículos autónomos, optimización de rutas logísticas.
        .tarjeta.bg-color-6.p-4.text-center
          .row.justify-content-center.mb-3
            .col-lg-6.col-md-7.col-6
              img(src='@/assets/curso/temas/t1/32.png' alt='')
          h4 Educación
          p Tutores virtuales, sistemas adaptativos de aprendizaje.  

      .row.justify-content-center.align-items-end.mb-5
        .col-lg-5.col-md-7.mb-3.mb-lg-0(data-aos="fade-right")
          img.img-a.img-t(src="@/assets/curso/temas/t1/12.png")
        .col-lg-7(data-aos='fade-left')
          p La Inteligencia Artificial (IA) suele asociarse con conceptos futuristas, máquinas parlantes o programas avanzados capaces de escribir textos y generar imágenes. Sin embargo, gran parte de su impacto no está en los laboratorios ni en escenarios de ciencia ficción, sino en nuestra vida diaria. Desde las aplicaciones en el teléfono hasta los servicios de entretenimiento, la IA se ha integrado de manera tan natural que muchas veces la usamos sin darnos cuenta.
          .bg-color-4.p-3(data-aos="fade-down")
            p.mb-0 Para ilustrar esta presencia invisible, presentamos la historia de #[strong MarIA], una persona común cuya rutina refleja cómo los algoritmos y sistemas inteligentes ya forman parte de nuestra cotidianidad. Su día a día nos muestra que la inteligencia artificial no es solo una promesa del futuro, sino una realidad presente que transforma silenciosamente la forma en que vivimos, trabajamos y nos relacionamos. 

      .subt.mb-5(data-aos="fade-right")
        .d-flex.align-items-center.deco
          img(src='@/assets/curso/temas/t1/34.svg', alt='')
          h3.mb-0.px-3.pe-5 MarIA y la vida entre inteligencias artificiales: una historia cotidiana 

      .row.justify-content-center.mb-5
        .col-lg-5.col-md-9.mb-3.mb-md-0
          .bg-color-5.p-3.h-100.j1(data-aos="fade-down")
            p.mb-0 Cuando pensamos en inteligencia artificial, solemos imaginar robots parlantes o sistemas como ChatGPT. Sin embargo, las IA llevan mucho más tiempo acompañándonos de lo que creemos. Lo que hoy parece cotidiano, ayer fue asombroso. Para comprobarlo, basta seguir un día en la vida de MarIA.      
        .col-lg-3.col-md-3(data-aos="fade-left")
          img.mov(src="@/assets/curso/temas/t1/35.png")
        .col-lg-4
          img.img-t.mb-3(data-aos='fade-up')(src="@/assets/curso/temas/t1/36.svg")
          p.mb-0 MarIA no es ingeniera ni trabaja en tecnología. Es una persona común, curiosa y práctica, que usa lo necesario sin complicarse. Pero, sin darse cuenta, está rodeada de algoritmos que la acompañan desde que despierta hasta que se acuesta.

      .tarjeta.bg-slider.p-4.pb-0.mb-4(data-aos="fade-down")
        SlyderA.py-lg-5.p-4.pb-3(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-6.col-md-6.mb-4.mb-md-0
              h4 Despertar inteligente
              p Al abrir los ojos, lo primero que hace MarIA es mirar su reloj inteligente. Revisa la hora, los mensajes y su ritmo cardíaco. Detrás de esa rutina hay un sistema que aprende de sus hábitos y predice patrones. Hace unos años parecía ciencia ficción; hoy pasa inadvertido.
            .col-lg-5.col-md-6
              img.img-a.img-t(src="@/assets/curso/temas/t1/37.png", alt='')   
          .row.justify-content-center.align-items-center
            .col-lg-6.col-md-6.mb-4.mb-md-0
              h4 Recomendaciones a la carta
              p Por la tarde, enciende Netflix. En la pantalla aparece: “Porque viste Mindhunter, te recomendamos Orange Is the New Black”. Sin pensarlo demasiado, da clic. Ese motor de recomendaciones, también presente en Spotify o Amazon, filtra miles de opciones para ofrecerle lo que probablemente disfrute. 
            .col-lg-5.col-md-6
              img.img-a.img-t(src="@/assets/curso/temas/t1/38.png", alt='') 
          .row.justify-content-center.align-items-center
            .col-lg-6.col-md-6.mb-4.mb-md-0
              h4 Creatividad en un toque
              p Más tarde, revisa fotos de sus vacaciones. En una, un desconocido arruina el fondo. Usa la opción de “Borrador mágico” y, con un toque, la IA elimina al intruso y reconstruye la imagen. Algo que antes requería horas en Photoshop, hoy se resuelve en segundos desde el celular.
            .col-lg-5.col-md-6
              img.img-a.img-t(src="@/assets/curso/temas/t1/39.png", alt='') 
          .row.justify-content-center.align-items-center
            .col-lg-6.col-md-6.mb-4.mb-md-0
              h4 Jugando con algoritmos
              p Antes de dormir, MarIA juega una partida de ajedrez contra la computadora. Lo toma como un pasatiempo, pero detrás hay un programa capaz de predecir movimientos y aprender de cada jugada. Hace décadas, que una máquina venciera a un campeón mundial fue noticia; ahora cabe en un bolsillo.
            .col-lg-5.col-md-6
              img.img-a.img-t(src="@/assets/curso/temas/t1/40.png", alt='') 
          .row.justify-content-center.align-items-center
            .col-lg-6.col-md-6.mb-4.mb-md-0
              h4 La IA, sin darnos cuenta
              p En un solo día, MarIA interactuó con al menos cinco tipos de IA: en su reloj, en las recomendaciones de series, en la edición de imágenes, en el entretenimiento y en la salud. Todo sin ser experta. Como ella, millones de personas usan estas tecnologías sin saberlo.
            .col-lg-5.col-md-6
              img.img-a.img-t(src="@/assets/curso/temas/t1/41.png", alt='') 
          .row.justify-content-center.align-items-center
            .col-lg-6.col-md-6.mb-4.mb-md-0
              h4 Un futuro ya presente 
              p La experiencia de MarIA demuestra que la inteligencia artificial no es un fenómeno lejano, sino una realidad cotidiana. Está en el teléfono, la televisión, el auto o la nevera. Tan integrada en nuestras vidas que ya ni la llamamos por su nombre, aunque transforme en silencio la forma en que vivimos, trabajamos y nos divertimos.
            .col-lg-5.col-md-6
              img.img-a.img-t(src="@/assets/curso/temas/t1/42.png", alt='')


      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.4 Principios fundamentales

      .row.align-items-center.mb-5
        .col-lg-auto.mb-3.mb-md-4(data-aos="fade-right")
          img.img-a.img-t(src="@/assets/curso/temas/t1/43.png")
        .col-lg(data-aos="fade-left")
          p.mb-0 La Inteligencia Artificial (IA) puede entenderse como el esfuerzo humano por desarrollar máquinas capaces de aprender, razonar y actuar de maneras que tradicionalmente asociamos con las personas. Para comprenderla desde sus bases, es necesario partir de sus principios fundamentales, que funcionan como los cimientos sobre los cuales se construye toda esta tecnología. A continuación, se presentan dichos principios:                                                                     
      .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
        h5 Tabla 1.
        span Principios fundamentales 
      .tabla-a.tabla-a-1.mb-5(data-aos="fade-left")
        table(alt="La inteligencia artificial se fundamenta en principios que van desde la imitación de funciones cognitivas humanas hasta la capacidad de adaptación, autonomía y optimización. A través del aprendizaje de datos y algoritmos, la IA logra percibir su entorno, generalizar conocimientos y comunicarse con los usuarios de manera efectiva. Su desarrollo exige transparencia, ética y colaboración con el ser humano, entendiendo que se trata de un campo en evolución constante, con aplicaciones que abarcan desde la vida cotidiana hasta sectores especializados como la medicina, la educación y la industria.")
          thead
            tr
              th Principio
              th Descripción ampliada
              th Ejemplos y aplicaciones
          tbody
            tr
              td.text-bold.text-center Imitación humana 
              td.text-start La IA busca reproducir funciones cognitivas humanas: percibir, razonar, aprender y decidir. No significa copiar al ser humano, sino inspirarse en sus procesos.
              td.text-start Reconocimiento facial en #[em smartphones]; #[em chatbots] que simulan conversación.  
            tr
              td.text-bold.text-center Aprendizaje de datos 
              td.text-start El corazón de la IA: a través de ejemplos y grandes volúmenes de datos, los sistemas aprenden patrones y mejoran con la experiencia. Puede ser supervisado, no supervisado o por refuerzo.
              td.text-start Motores de recomendación (Netflix, Spotify), predicción del clima, traducción automática. 
            tr
              td.text-bold.text-center Adaptación
              td.text-start La IA ajusta su comportamiento ante nuevas condiciones, corrigiendo errores y perfeccionándose de forma continua.
              td.text-start Un GPS que cambia la ruta según el tráfico en tiempo real; sistemas antifraude en banca. 
            tr
              td.text-bold.text-center Autonomía
              td.text-start Capacidad de actuar sin intervención humana constante dentro de un marco definido. Permite que la IA ejecute tareas rutinarias o complejas de forma independiente.
              td.text-start Vehículos autónomos, robots aspiradores, asistentes virtuales que gestionan agendas. 
            tr
              td.text-bold.text-center Algoritmos
              td.text-start Conjuntos de reglas y procedimientos lógicos que procesan datos y generan decisiones o predicciones. Son la base matemática de la IA.
              td.text-start Algoritmos de búsqueda en Google, clasificación de correos (#[em spam] versus no #[em spam]). 
            tr
              td.text-bold.text-center Percepción artificial
              td.text-start Habilidad de "sentir" el entorno mediante sensores, cámaras, micrófonos o datos digitales, similar a los sentidos humanos.
              td.text-start Cámaras de seguridad con reconocimiento de movimiento, IA médica que analiza radiografías. 
            tr
              td.text-bold.text-center Generalización 
              td.text-start Capacidad de aplicar lo aprendido a situaciones nuevas, no vistas en el entrenamiento. Evita que la IA dependa solo de ejemplos específicos.
              td.text-start Un sistema entrenado con imágenes de perros reconoce una raza que nunca había visto. 
            tr
              td.text-bold.text-center Optimización
              td.text-start Selección de la mejor solución entre múltiples opciones según un objetivo específico, maximizando eficiencia y minimizando errores.
              td.text-start Optimización de rutas de entrega en logística, gestión energética en edificios inteligentes. 
            tr
              td.text-bold.text-center Interacción
              td.text-start La IA debe comunicarse de manera comprensible con los usuarios, a través de interfaces intuitivas y lenguaje natural.
              td.text-start ChatGPT, Siri, Alexa; #[em chatbots] en atención al cliente; traducción automática en tiempo real.  
            tr
              td.text-bold.text-center Ética
              td.text-start Los sistemas deben respetar principios de justicia, privacidad y no discriminación, priorizando el bienestar humano.
              td.text-start IA en reclutamiento laboral que evita sesgos de género o etnia; regulación del reconocimiento facial. 
            tr
              td.text-bold.text-center Transparencia 
              td.text-start Explicabilidad: los sistemas deben ofrecer razones claras de sus decisiones, sobre todo en contextos sensibles.
              td.text-start Informes médicos que detallan criterios de diagnóstico asistido por IA; auditorías algorítmicas.  
            tr
              td.text-bold.text-center Colaboración
              td.text-start La IA potencia las capacidades humanas en lugar de reemplazarlas, favoreciendo la cooperación entre ambos.
              td.text-start IA que ayuda a médicos a identificar anomalías, programas de apoyo educativo personalizados. 
            tr
              td.text-bold.text-center Evolución constante
              td.text-start La IA no es un producto terminado, sino un campo en crecimiento, con nuevos algoritmos, modelos y aplicaciones que surgen constantemente.
              td.text-start Avances en aprendizaje profundo, IA generativa (imágenes, texto), robótica avanzada.                                                            

      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-down")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/44.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Finalmente, un principio que integra y atraviesa a todos los demás es el de la evolución constante. La IA no debe entenderse como un producto terminado, sino como un campo en permanente crecimiento, impulsado por los avances tecnológicos, el aumento del poder de cómputo y la acumulación de datos. Cada día surgen nuevos modelos, algoritmos y aplicaciones que perfeccionan lo ya existente, lo que convierte a la IA en un proceso dinámico y en movimiento, construido de manera progresiva con la participación de científicos, ingenieros, gobiernos y usuarios de todo el mundo.


      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.5 Papel de la IA en el procesamiento de datos

      .row.align-items-center.mb-5
        .col-lg-auto.mb-3.mb-md-4(data-aos="fade-right")
          img.img-a.img-t(src="@/assets/curso/temas/t1/45.png")
        .col-lg(data-aos="fade-left")
          p.mb-0 La Inteligencia Artificial (IA) desempeña un papel clave en el procesamiento de datos, ya que convierte grandes volúmenes de información en conocimiento útil para la toma de decisiones. En la era del #[em big data], donde los datos se generan de forma continua y masiva, los métodos tradicionales resultan insuficientes. La IA aporta soluciones avanzadas para analizar, interpretar y aprender a partir de esa información, optimizando tanto la velocidad como la precisión del proceso.

      .subt.mb-5(data-aos="fade-right")
        .d-flex.align-items-center.deco
          img(src='@/assets/curso/temas/t1/34.svg', alt='')
          h3.mb-0.px-3.pe-5 Principales funciones de la IA en el procesamiento de datos

      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-11.col-md-6.col-xl-cinco.mb-3.mb-xl-0
          .tarjeta.tarjeta-flip
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.bg-color-7
                h5.elem.py-2.m-3.text-center.bg-color-8.p-3.br-2 Automatización del  análisis.
              .tarjeta-flip__contenido.p-4
                h5.mb-4 Automatización del  análisis.
                p Los algoritmos procesan millones de registros en segundos, detectando patrones, anomalías y correlaciones invisibles al ojo humano.       
        .col-11.col-md-6.col-xl-cinco.mb-3.mb-xl-0
          .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.bg-color-9
                h5.elem.py-2.m-3.text-center.bg-color-8.p-3.br-2 Limpieza y transformación.
              .tarjeta-flip__contenido.p-4
                h5.mb-4 Limpieza y transformación.
                p La IA corrige errores, elimina duplicados, completa datos faltantes y normaliza la información, garantizando calidad en los conjuntos de datos.  
        .col-11.col-md-6.col-xl-cinco.mb-3.mb-xl-0
          .tarjeta.tarjeta-flip
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.bg-color-10
                h5.elem.py-2.m-3.text-center.bg-color-8.p-3.br-2 Clasificación y segmentación.
              .tarjeta-flip__contenido.p-4
                h5.mb-4 Clasificación y segmentación.
                p Mediante técnicas como árboles de decisión o #[em clustering], organiza datos, agrupa clientes y categoriza eventos según sus similitudes.
        .col-11.col-md-6.col-xl-cinco.mb-3.mb-xl-0
          .tarjeta.tarjeta-flip
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.bg-color-11
                h5.elem.py-2.m-3.text-center.bg-color-8.p-3.br-2 Predicción y prescripción.
              .tarjeta-flip__contenido.p-4.pb-5
                h5.mb-4 Predicción y prescripción.
                p.pb-5 No solo anticipa comportamientos futuros (ventas, fraudes, tendencias), sino que también propone acciones concretas para afrontarlos.                
        .col-11.col-md-6.col-xl-cinco.mb-3.mb-xl-0
          .tarjeta.tarjeta-flip
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.bg-color-12
                h5.elem.py-2.m-3.text-center.bg-color-8.p-3.br-2 Procesamiento de datos no estructurados.
              .tarjeta-flip__contenido.p-4.pb-5
                h5.mb-4 Procesamiento de datos no estructurados.
                p.pb-5 Con #[em (Natural Language Processing)] NLP y visión por computador, interpreta textos, audios, imágenes y videos, transformando información compleja en datos analizables.  
  
      .pt-5
      .subt.mb-4(data-aos="fade-right")
        .d-flex.align-items-center.deco
          img(src='@/assets/curso/temas/t1/34.svg', alt='')
          h3.mb-0.px-3.pe-5 Impacto en distintas áreas

      p(data-aos="fade-down") La inteligencia artificial ha transformado múltiples sectores gracias a su capacidad de analizar datos, optimizar procesos y generar predicciones precisas.

      .row.mb-5.text-center.justify-content-center(data-aos="fade-right")
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.img-a.img-t(src="@/assets/curso/temas/t1/51.png")
              .tarjeta.bg-color-13.mt-3
                .p-4
                  h5.mb-3 Empresas
                  p.mb-0 Permite  optimizar operaciones, comprender mejor a los clientes y automatizar procesos de decisión.
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.img-a.img-t(src="@/assets/curso/temas/t1/52.png")
              .tarjeta.bg-color-13.mt-3
                .p-4
                  h5.mb-3 Gobiernos
                  p.mb-0 Facilita el monitoreo de servicios públicos, la predicción de delitos y el análisis de políticas para una gestión más eficiente.
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.img-a.img-t(src="@/assets/curso/temas/t1/53.png")
              .tarjeta.bg-color-13.mt-3
                .p-4
                  h5.mb-3 Salud 
                  p.mb-0 Contribuye al diagnóstico predictivo, el análisis de historias clínicas y la gestión de epidemias mediante modelos avanzados.

      p Conviene resaltar los ámbitos en los que la IA, y especialmente el #[em Machine Learning], ha logrado consolidarse y generar un alto valor añadido. Actualmente, tres áreas concentran gran parte de las inversiones y desarrollos más relevantes:

      .row.mb-5.text-center.justify-content-center(data-aos="fade-left")
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.img-a.img-t(src="@/assets/curso/temas/t1/54.png")
              .tarjeta.bg-color-13
                .p-4 
                  p.mb-0 #[b Apoyo a la toma de decisiones:] en contextos donde los criterios son vagos o cambiantes, la IA permite formular decisiones basadas  en patrones históricos y probabilísticos, en lugar de reglas rígidas.
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.img-a.img-t(src="@/assets/curso/temas/t1/55.png")
              .tarjeta.bg-color-13
                .p-4 
                  p.mb-0 #[b Visión por computador (#[em computer vision]):] tecnologías que capacitan a las máquinas para interpretar y analizar imágenes o videos, dotándolas de una habilidad semejante a la visión humana.
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.img-a.img-t(src="@/assets/curso/temas/t1/56.png")
              .tarjeta.bg-color-13
                .p-4
                  p.mb-0 #[b Procesamiento de lenguaje natural (NLP):] herramientas que posibilitan a los sistemas comprender, generar y manipular lenguaje humano en formato textual, facilitando la interacción hombre - máquina.

      .subt.mb-5(data-aos="fade-right")
        .d-flex.align-items-center.deco
          img(src='@/assets/curso/temas/t1/34.svg', alt='')
          h3.mb-0.px-3.pe-5 Apoyo a la toma de decisiones

      p.mb-4 La toma de decisiones, entendida como la elección entre diferentes alternativas, no es un concepto nuevo en computación. De hecho, constituye una de sus funciones esenciales desde los inicios de esta disciplina. Lo verdaderamente innovador en el contexto actual es la capacidad de los sistemas basados en Inteligencia Artificial (IA), especialmente mediante algoritmos de #[em Machine Learning], para operar incluso cuando los criterios son imprecisos, ambiguos o incompletos.                   

      .row.justify-content-center.align-items-end.mb-5
        .col-lg-4.col-md-6.mb-0(data-aos="fade-left")
          img.img-a.img-t(src="@/assets/curso/temas/t1/57.png")
        .col-lg-8
          .row.align-items-center.mb-5.bg-color-4.p-3
            .col-lg-auto.my-0.my-md-4.my-sm-4(data-aos="fade-right")
              img.img-a.img-t(src="@/assets/curso/temas/t1/3.png")
            .col-lg(data-aos="fade-left")
              p.mb-0 Un ejemplo paradigmático se encuentra en el ámbito médico. El diagnóstico clínico es un proceso complejo, condicionado por múltiples variables que pueden ser conocidas, desconocidas o estar sesgadas (por ejemplo, la percepción subjetiva del dolor). Frente a esta dificultad, un modelo de #[em Machine Learning] puede procesar grandes volúmenes de datos clínicos (estructurados y no estructurados), identificar patrones relevantes a partir de bases históricas y generar propuestas diagnósticas que reduzcan la incertidumbre.          
          p(data-aos="fade-down").mb-0 En un campo completamente distinto, los sistemas de recomendación constituyen otro ejemplo relevante. Hoy en día, la mayoría de plataformas de comercio electrónico utilizan algoritmos de #[em Machine Learning] para personalizar la experiencia del usuario. A partir del análisis de clics, búsquedas, interacciones e historial de compras, estos sistemas detectan comportamientos y preferencias individuales. Debido a la enorme cantidad de variables en juego, sería impracticable diseñar reglas estáticas para predecir qué acción llevará a una conversión (compra). Aquí es donde el aprendizaje automático resulta fundamental para anticipar comportamientos y ofrecer recomendaciones ajustadas a los intereses del usuario. 

      .pt-4
      .subt.mb-5(data-aos="fade-right")
        .d-flex.align-items-center.deco
          img(src='@/assets/curso/temas/t1/34.svg', alt='')
          h3.mb-0.px-3.pe-5 Visión por computadora  

      .row.justify-content-center.mb-5
        .col-lg-6
          p(data-aos="fade-down") Hasta hace pocos años, el procesamiento automatizado de imágenes y videos era un desafío considerable, y muchos se preguntaban si realmente era posible extraer información útil a partir de datos visuales no estructurados. Sin embargo, gracias al avance del #[em Deep Learning] y al aumento exponencial de la capacidad computacional, la visión por computador se ha consolidado como una de las áreas más dinámicas y con mayor potencial dentro de la IA.
          .bg-color-1.p-3.h-card.j1(data-aos="fade-right")
            p(data-aos="fade-down").mb-0 Este campo comprende el conjunto de técnicas y algoritmos que permiten a las máquinas “ver” e interpretar imágenes del entorno, simulando el funcionamiento de la percepción visual humana. Lo que para las personas resulta natural (identificar rostros, reconocer objetos o interpretar escenas), para una máquina supone superar retos técnicos como el reconocimiento de patrones, la interpretación contextual y la adaptación a variaciones de iluminación, perspectiva, forma o movimiento.
        .col-lg-6.d-none.d-lg-block(data-aos="fade-left")
          img.img-a.img-t(src="@/assets/curso/temas/t1/58.png")

      p.mb-4 El abanico de aplicaciones de la #[strong visión por computadora] es sumamente amplio y continúa creciendo gracias a los avances en #[em Deep Learning] y al incremento de la capacidad de cómputo. Entre los usos más destacados se encuentran:

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
          img(src='@/assets/curso/temas/t1/59.png', alt='')
        .col-lg-9(data-aos="fade-left")
          SlyderF.text-center.circl-arrow.mb-4(columnas="col-lg-4 col-md-6")
            .tarjeta.bg-color-1.p-4
              .row.justify-content-center.mb-3
                .col-md-8.col-lg-6.col-5
                  img(src='@/assets/curso/temas/t1/60.png' alt='')
              p #[b Clasificación  de objetos:] determina a qué categoría pertenece un objeto en una imagen, como identificar si se trata de un gato o un perro. 
            .tarjeta.bg-color-1.p-4
              .row.justify-content-center.mb-3
                .col-md-8.col-lg-6.col-5
                  img(src='@/assets/curso/temas/t1/61.png' alt='')
              p #[b Detección y localización de objetos:] reconoce qué objetos están presentes en una imagen o vídeo y señala su ubicación exacta mediante coordenadas.            
            .tarjeta.bg-color-1.p-4
              .row.justify-content-center.mb-3
                .col-md-8.col-lg-6.col-5
                  img(src='@/assets/curso/temas/t1/62.png' alt='')
              p #[b Reconocimiento facial:] permite identificar rostros humanos en multitudes o verificar identidades, con aplicaciones en seguridad, accesos biométricos y redes sociales.
            .tarjeta.bg-color-1.p-4
              .row.justify-content-center.mb-3
                .col-md-8.col-lg-6.col-5
                  img(src='@/assets/curso/temas/t1/63.png' alt='')
              p #[b Reconocimiento de caracteres (OCR, #[em Optical Character Recognition]):] extrae texto de documentos impresos, manuscritos o imágenes escaneadas. Su precisión ha mejorado notablemente gracias al #[em Deep Learning].
            .tarjeta.bg-color-1.p-4
              .row.justify-content-center.mb-3
                .col-md-8.col-lg-6.col-5
                  img(src='@/assets/curso/temas/t1/64.png' alt='')
              p #[b Procesamiento Inteligente de Documentos (IDP, #[em Intelligent Document Processing]):] evolución del OCR tradicional que incorpora contexto y semántica para extraer información estructurada de documentos como contratos, facturas u órdenes de compra.
            .tarjeta.bg-color-1.p-4
              .row.justify-content-center.mb-3
                .col-md-8.col-lg-6.col-5
                  img(src='@/assets/curso/temas/t1/65.png' alt='')
              p #[b Segmentación de imágenes:] divide una imagen en regiones con significado. Puede ser #[strong semántica], cuando clasifica cada píxel según una categoría, o #[strong por instancias], cuando distingue múltiples objetos de la misma clase.
            .tarjeta.bg-color-1.p-4
              .row.justify-content-center.mb-3
                .col-md-8.col-lg-6.col-5
                  img(src='@/assets/curso/temas/t1/66.png' alt='')
              p #[b Reconstrucción de imágenes:] permite completar rostros o paisajes a partir de fragmentos incompletos, e incluso añadir color a fotografías en blanco y negro.                                                
            .tarjeta.bg-color-1.p-4
              .row.justify-content-center.mb-3
                .col-md-8.col-lg-6.col-5
                  img(src='@/assets/curso/temas/t1/67.png' alt='')
              p #[b Aplicaciones urbanas y médicas:] va desde el análisis avanzado de imágenes médicas hasta la gestión del tráfico en ciudades inteligentes, mediante el reconocimiento de matrículas y la detección de vehículos.

      p.mb-4 En conjunto, la visión por computadora representa un ejemplo paradigmático de cómo la inteligencia artificial está ampliando las fronteras del análisis de datos, generando nuevas posibilidades en ámbitos tan diversos como la salud, la industria, la seguridad y el comercio electrónico.

      .row.bgcolor-1.tarjeta.align-items-center.p-2.p-md-4(data-aos="fade")
        .col-lg-12.col-12.px-lg-4
          .row.justify-content-center.align-items-center

            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img.img-a.img-t(src="@/assets/curso/temas/t1/13.png")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0.text-white
                    h4.mb-1 TESLA: la Inteligencia Artificial marca la diferencia.
                    p.mb-0 Se invita a explorar el siguiente video.
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=ut2JD8lpDgk&ab_channel=AutoIngenium')" target="_blank")
                      span Ir al sitio
                      i.fas.fa-file-video      
  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
    indicadorTarjetaFlip: true,
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
