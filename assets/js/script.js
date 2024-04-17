$(document).ready(function() {
    // Cambio de color de la barra de navegación al hacer scroll
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $("#navbar").addClass("dark");
        } else {
            $("#navbar").removeClass("dark");
        }
    });
});
