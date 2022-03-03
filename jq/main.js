$(document).ready(function () {

    $("#hamburguesa").click(function (e) {
        e.preventDefault();

        if ($("#menu-toggle").css("left") !== "0px") {

            $("#menu-toggle").animate({
                left: "0rem"
            }, "fast");

            $("html, body").css({
                'overflow': 'hidden',
            })
        } else {

            menuPlegado()
        }
    });
});

/**
 * Animacion que realiza lka recogida del menu desplegable,
 * ocultandolo con un slide hacia la izquierda
 */
function menuPlegado() {

    $("#menu-toggle").animate({
        left: "-20rem"
    }, "fast");

    $("html, body").css({
        'overflow-y': 'visible',
    })
}