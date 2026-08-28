
document.addEventListener('DOMContentLoaded', function () {

    // 1) Muestra el campo de contraseña solo si el torneo es privado.
    var seleccionVisibilidad = document.getElementById('seleccion-visibilidad');
    var campoPassword = document.getElementById('campo-password-torneo');

    if (seleccionVisibilidad && campoPassword) {
        seleccionVisibilidad.addEventListener('change', function () {
            campoPassword.hidden = seleccionVisibilidad.value !== 'privado';
        });
    }

    
    var rol = new URLSearchParams(location.search).get('rol') || 'jugador';
    var paginaTorneos = (rol === 'jugador') ? 'torneos-jugador.html' : 'torneos-organizador.html';

    var enlaceNav = document.getElementById('enlace-torneos-nav');
    var tarjetaPanel = document.getElementById('tarjeta-torneos-panel');
    if (enlaceNav) enlaceNav.href = paginaTorneos;
    if (tarjetaPanel) tarjetaPanel.href = paginaTorneos;
});