const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
preguntas.forEach((pregunta) =>{
    pregunta.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('activa');

        const respuesta = pregunta.querySelector('.respuesta');
        const alturaRealRespuesta = respuesta.scrollHeight;

        if(!respuesta.style.maxHeight){
           //si esta vacio el maxHeight ponemos un valor//
           respuesta.style.maxHeight = alturaRealRespuesta + 'px';
        }
        else{
            respuesta.style.maxHeight = null;
        }

        //reiniciamos las preguntas abiertas, para que solo quede una//
        
        preguntas.forEach((elemento) =>{
            //solamente queremos ejecutar el codigo para las preguntas que no sean la pregunta a la que le dimos click//
            if(pregunta !== elemento){
            elemento.classList.remove('activa');
            elemento.querySelector('.respuesta').style.maxHeight = null;
            };
        });
    });
});