(function() {

    // Propiedades del Menu movil
    var propMenu = {
        burger_menu: document.getElementById('burger_menu'),
        slideMenu: document.getElementById('slideMenu'),
        menu_activo: false,
        elem_menu: document.querySelectorAll('#slideMenu .menu-principal a')
    }

    // Metodos del Menu movil
    var metMenu = {
        inicio: function() {
            // le agrega el evento click al boton que despliega el menu
            propMenu.burger_menu.addEventListener('click', metMenu.toggleMenu);

            // Le agrega un evento click a los elementos del menu
            for (var i = 0; i < propMenu.elem_menu.length; i++) {
                propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);
            }
        },

        ocultarMenu: function() {
            propMenu.menu_activo = false;
            propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
        },

        toggleMenu: function() {

            // Si el menu esta desactivado, entonces lo activa sino lo desactiva
            if (propMenu.menu_activo == false) {
                propMenu.menu_activo = true;
                propMenu.slideMenu.className = propMenu.slideMenu.className + ' active';

            } else {
                metMenu.ocultarMenu();
            }
        }
    }

    metMenu.inicio();
}())