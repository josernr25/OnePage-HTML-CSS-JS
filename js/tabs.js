(function() {
    // Propiedades de los Tabs
    var propTabs = {
        primer_encabezado: document.getElementById('encabezado_menu').firstElementChild,
        primer_contenido: document.getElementById('contenido_menu').firstElementChild,
        enlaces_encabezado: document.querySelectorAll('#encabezado_menu li a'),
        li_encabezado: document.querySelectorAll('#encabezado_menu li'),
        divs_contenido: document.querySelectorAll('#contenido_menu > div'),
        contenido_activo: null
    }

    // Metodos de los Tabs
    var metTabs = {

        inicio: function() {
            // Coloca la clase Active al primer elemento del encabezado y del contenido
            propTabs.primer_encabezado.className = 'active';
            propTabs.primer_contenido.className = 'active';

            // Coloca el evento Click a los elementos del encabezado
            for (var i = 0; i < propTabs.enlaces_encabezado.length; i++) {
                propTabs.enlaces_encabezado[i].addEventListener('click', metTabs.evento);
            }
        },

        // Evento que se ejecuta con el Evento Click de los encabezados
        evento: function(e) {
            // Desactiva la accion por defecto del evento click
            e.preventDefault();

            // Le quita la clase Active a todos los elementos del encabezado y contenido
            for (var i = 0; i < propTabs.li_encabezado.length; i++) {
                propTabs.li_encabezado[i].className = '';
            }

            for (var i = 0; i < propTabs.divs_contenido.length; i++) {
                propTabs.divs_contenido[i].className = '';
            }

            // le agrega la clase Active al "li" que es padre del "a" que se clickeo
            this.parentElement.className = 'active';

            // Se guarda el id del encabezado al que se cleckeo
            propTabs.contenido_activo = this.getAttribute('href');

            // Le agrega la clase Active al contenido que tiene el id que se guardo anteriormente
            document.querySelector(propTabs.contenido_activo).className = 'active';

            // Para darle un efecto de cambio mas suave se manipula la opcidad del contenido
            document.querySelector(propTabs.contenido_activo).style.opacity = 0;
            setTimeout(function() {
                document.querySelector(propTabs.contenido_activo).style.opacity = 1;
            }, 100);
        }

    }

    metTabs.inicio();

}())