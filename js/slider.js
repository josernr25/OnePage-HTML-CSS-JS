(function() {
    // Propiedades del Slider
    var propSlider = {
        slider: document.getElementById('slider'),
        primerSlide: null
    }

    // Metodos del Slider
    var metSlider = {
        // Funcion de inicio que ejecuta el slide en intervalos de 4s
        inicio: function() {
            setInterval(metSlider.moverSlide, 4000);
        },


        moverSlide: function() {
            propSlider.slider.style.transition = 'all 1s ease';
            // Se aplica -100% al margen izq para cambiar de una imagen a la otra
            propSlider.slider.style.marginLeft = '-100%';

            setTimeout(function() {
                // Se guarda la primer imagen
                propSlider.primerSlide = propSlider.slider.firstElementChild;

                // Se la incorpora nuevamente pero en la ultima posicion
                propSlider.slider.appendChild(propSlider.primerSlide);

                // Se quita la transicion para que no se ejecute al mover la primer imagen
                propSlider.slider.style.transition = 'unset';
                // Se setea el margen nuevamente para la siguiente transicion
                propSlider.slider.style.marginLeft = 0;
            }, 1000);
        }
    }

    metSlider.inicio();
}())