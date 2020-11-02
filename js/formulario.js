(function() {
    // Propiedades del formulario
    var propFormulario = {

        formulario: document.formulario_contacto,
        elementos: document.formulario_contacto.elements,
        error: null,
        textoError: null
    }

    // Metodos del formulario

    var metFormulario = {

        // Le agrega los eventos Focus y Blur a los elementos de Form que sean del tipo texto
        inicio: function() {
            for (var i = 0; i < propFormulario.elementos.length; i++) {
                if (propFormulario.elementos[i].type == 'text' || propFormulario.elementos[i].type == 'email' || propFormulario.elementos[i].nodeName.toLowerCase() == 'textarea') {
                    propFormulario.elementos[i].addEventListener('focus', metFormulario.focusInput);
                    propFormulario.elementos[i].addEventListener('blur', metFormulario.blurInput);
                }
            }

            // Agrega el evento submit al formulario
            propFormulario.formulario.addEventListener('submit', metFormulario.validarInputs);
        },

        // Le agrega la clase Active cuando se ejecuta el evento Focus
        focusInput: function() {
            this.parentElement.children[1].className = 'label active';
        },

        // Le quita la clase Active cuando se ejecuta el evento Blur si es que textbox esta vacio
        blurInput: function() {
            if (this.value == '') {
                this.parentElement.children[1].className = 'label';
            }
        },

        // Funcion para validar los campos
        validarInputs: function(e) {
            // Recorre todos los elementos del formulario
            for (var i = 0; i < propFormulario.elementos.length; i++) {

                // Si los texbox estan vacios, desactiva la accion del boton y muestra el mensaje de error
                if (propFormulario.elementos[i].value == '') {
                    e.preventDefault();

                    // Solo se ejecuta si no existe actualmente una etiqueta <p>
                    if (propFormulario.elementos[i].parentElement.children.length < 3) {

                        // Crea la etiqueta <p> para mostrar el error
                        propFormulario.error = document.createElement('p');
                        propFormulario.textoError = document.createTextNode('Por favor llena el campo con tu ' + propFormulario.elementos[i].name);
                        propFormulario.error.appendChild(propFormulario.textoError);
                        propFormulario.error.className = 'error';

                        propFormulario.elementos[i].parentElement.appendChild(propFormulario.error);

                    }

                } else {
                    // En caso de que los campos no esten vacios, y hay una etiqueta <p> de error, se la remueve
                    if (propFormulario.elementos[i].parentElement.children.length >= 3) {
                        propFormulario.error = propFormulario.elementos[i].parentElement.getElementsByTagName('p')[0];
                        propFormulario.elementos[i].parentElement.removeChild(propFormulario.error);
                    }

                }

            }
        }
    }

    metFormulario.inicio();
}())