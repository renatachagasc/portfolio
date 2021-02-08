// Botão de buscar

$("#inpt_search").on("focus", function() {
    $(this).parent("label").addClass("active");
});

$("#inpt_search").on("blur", function() {
    if ($(this).val().length == 0) $(this).parent("label").removeClass("active");
});

// Animação scroll

var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
    var boxOffset = $(idBox).offset().top;
    return boxOffset;
}

$(document).ready(function() {
    var $target = $('.anime'),
        animationClass = 'anime-init',
        windowHeight = $(window).height(),
        offset = windowHeight - (windowHeight / 4);

    function animeScroll() {
        var documentTop = $(document).scrollTop();
        $target.each(function() {
            if (documentTop > boxTop(this) - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        });
    }
    animeScroll();
    $(document).scroll(function() {
        setTimeout(function() {
            animeScroll()
        }, 150);
    });
});