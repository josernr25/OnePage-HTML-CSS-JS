(function() {

    // Propiedades del Parallax
    var propParallax = {
        seccion: document.querySelector('.parallax'),
        recorrido: null,
        limite: null
    }


    // Métodos del Parallax
    var metParallax = {

        // Agrega al evento scroll a la ventana
        inicio: function() {
            window.addEventListener('scroll', metParallax.scrollParallax);
        },

        // Cada vez que se haga scroll se ejecutara esta funcion
        scrollParallax: function() {
            // Guarda los pixeles recorridos actualmente
            propParallax.recorrido = window.pageYOffset;

            /*Define la cantidad de pixeles de limite sumando la distancia entre el inicio de la pagina y la seccion
                con la altura de la seccion*/
            propParallax.limite = propParallax.seccion.offsetTop + propParallax.seccion.offsetHeight;

            // Se ejecutara el efecto parallax cuando la pantalla empieze a mostrar la seccion
            if (propParallax.recorrido > propParallax.seccion.offsetTop - window.outerHeight && propParallax.recorrido <= propParallax.limite) {

                propParallax.seccion.style.backgroundPositionY = (propParallax.recorrido - propParallax.seccion.offsetTop) / 1.5 + 'px';

            } else {
                propParallax.seccion.style.backgroundPositionY = 0;
            }

        }

    }
    metParallax.inicio();
}())