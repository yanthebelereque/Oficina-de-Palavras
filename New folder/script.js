document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slide");
    const indicadores = document.querySelectorAll(".indicator");

    let slideAtual = 0;

    function mostrarSlide(numero) {

        if (slides.length === 0) {
            return;
        }

        slideAtual = numero;

        if (slideAtual >= slides.length) {
            slideAtual = 0;
        }

        if (slideAtual < 0) {
            slideAtual = slides.length - 1;
        }

        slides.forEach(function (slide, index) {
            slide.classList.remove("active");

            if (index === slideAtual) {
                slide.classList.add("active");
            }
        });

        indicadores.forEach(function (indicador, index) {
            indicador.classList.remove("active");

            if (index === slideAtual) {
                indicador.classList.add("active");
            }
        });
    }

    window.mudarSlide = function (direcao) {
        mostrarSlide(slideAtual + direcao);
    };

    window.irParaSlide = function (numero) {
        mostrarSlide(numero);
    };

    if (slides.length > 0) {

        mostrarSlide(0);

        setInterval(function () {
            mostrarSlide(slideAtual + 1);
        }, 3000);
    }


    const slidesInternos = document.querySelectorAll(".inner-slide");

    let slideInternoAtual = 0;

    function mostrarSlideInterno(numero) {

        if (slidesInternos.length === 0) {
            return;
        }

        slideInternoAtual = numero;

        if (slideInternoAtual >= slidesInternos.length) {
            slideInternoAtual = 0;
        }

        if (slideInternoAtual < 0) {
            slideInternoAtual = slidesInternos.length - 1;
        }

        slidesInternos.forEach(function (slide, index) {

            slide.classList.remove("active");

            if (index === slideInternoAtual) {
                slide.classList.add("active");
            }

        });
    }

    window.mudarSlideInterno = function (direcao) {
        mostrarSlideInterno(slideInternoAtual + direcao);
    };

    if (slidesInternos.length > 0) {

        mostrarSlideInterno(0);

        setInterval(function () {
            mostrarSlideInterno(slideInternoAtual + 1);
        }, 3000);
    }

});