$(document).ready(function() {
    menuMovil();
    $("a.menu-abrir").click(function (event) { //Modificar icono, abrir/cerrar menú móvil
        event.preventDefault();
        $('a.menu-abrir i').toggleClass('fa-bars');
        $('a.menu-abrir i').toggleClass('fa-times');
        $("nav.movil").slideToggle();
    });
});

$( window ).resize(function() {
    menuMovil();
});

function menuMovil() {
    if (window.matchMedia('(max-width: 628px)').matches && $('nav.movil').length == 0)
    {
        $("nav.principal").appendTo("body > header").removeClass('principal').addClass('movil');
        $("nav.movil").hide();
    }

    if (window.matchMedia('(min-width: 628px)').matches)
    {
        $("a.menu-abrir i[class='fa fa-times']").removeClass('fa-times').addClass('fa-bars');
        $("nav.movil").show();
        $("nav.movil").removeClass('movil').addClass('principal').appendTo(".barra-menu");

    }
}