(function() {
    // Propiedades des efecto scroll
    var propScroll = {
        posicion: window.pageYOffset,
        scroll_suave: document.getElementsByClassName('scroll-suave'),
        volver_arriba: document.getElementsByClassName('volver-arriba'),
        destino: null,
        seccion_distancia: null,
        intervalo: null
    }


    // Metodos del efecto scroll
    var metScroll = {
        inicio: function() {
            // Agrega los eventos click a todos los elementos y su respectiva funcion
            for (var i = 0; i < propScroll.scroll_suave.length; i++) {
                propScroll.scroll_suave[i].addEventListener('click', metScroll.moverse);
            }

            for (var i = 0; i < propScroll.volver_arriba.length; i++) {
                propScroll.volver_arriba[i].addEventListener('click', metScroll.subir);
            }
        },

        // Funcion que traslada la pantalla hacia la seccion seleccionada
        moverse: function(e) {
            // Quita la funcion por defecto del click
            e.preventDefault();
            clearInterval(propScroll.intervalo);

            // Setea la seccion destino y la distancia hacia dicha seccion. y Ademas la posicion actual
            propScroll.destino = this.getAttribute('href');
            propScroll.seccion_distancia = document.querySelector(propScroll.destino).offsetTop - 94;
            propScroll.posicion = window.pageYOffset;
            // Setea el intervalo
            propScroll.intervalo = setInterval(function() {
                // si la posicion actual es menos a la ubicacion de la seccion entonces aumenta la posicion en 30px cada 15ms
                if (propScroll.posicion < propScroll.seccion_distancia) {

                    propScroll.posicion += 30;

                    // Cuando llege a la seccion elimina el intervalo
                    if (propScroll.posicion >= propScroll.seccion_distancia) {
                        clearInterval(propScroll.intervalo);
                    }

                } else {
                    // En caso de la posicion este por debajo de la seccion seleccionada, entonces resta pixeles para subir
                    propScroll.posicion -= 30;

                    // Cuando llege a la seccion elimina el intervalo
                    if (propScroll.posicion <= propScroll.seccion_distancia) {
                        clearInterval(propScroll.intervalo);
                    }

                }

                // funcion que ejecuta un scroll hasta la posicion 
                window.scrollTo(0, propScroll.posicion);

            }, 15);
        },

        // Funcion que vuelve a la posicion inicial
        subir: function(e) {
            e.preventDefault();
            clearInterval(propScroll.intervalo);
            propScroll.posicion = window.pageYOffset;
            propScroll.intervalo = setInterval(function() {

                if (propScroll.posicion > 0) {

                    propScroll.posicion -= 30;

                    if (propScroll.posicion <= 0) {
                        clearInterval(propScroll.intervalo);
                    }

                } else {
                    return;
                }

                window.scrollTo(0, propScroll.posicion);

            }, 15);
        }
    }

    metScroll.inicio();
}())