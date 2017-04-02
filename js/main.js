/* Menú principal */
$(document).ready(function () {
    var navmovil = $('nav.movil');
    var botonAbrirMenu = $('a.menu-abrir');
    $(navmovil).hide();
   $(botonAbrirMenu).click(function (event) {
       event.preventDefault();
       $('a.menu-abrir i').toggleClass('fa-bars');
       $('a.menu-abrir i').toggleClass('fa-times');
      $(navmovil).slideToggle();
   });
});