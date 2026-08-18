// Home Page 1 

$(document).ready(function () {
    var owl = $('.testimonial-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
})

// Home Page 2 

$(document).ready(function () {
    var owl = $('.banner2-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            }
        }
    })
})

// Home Page 3 

$(document).ready(function () {
    var owl = $('.banner3-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            }
        }
    })
})


$(document).ready(function () {

    $('.client-logo-carousel').owlCarousel({

        loop: true,

        margin: 10,

        nav: true,

        dots: false,

        autoplay: true,

        autoplayTimeout: 2000,

        autoplayHoverPause: true,

        smartSpeed: 600,

        responsive: {

            0: {
                items: 1
            },

            576: {
                items: 2
            },

            768: {
                items: 3
            },

            992: {
                items: 4
            }

        }

    });


    // Client Logo Popup
    $('.client-popup').on('click', function (e) {

        e.preventDefault();

        var imageUrl = $(this).attr('href');

        $('body').append(
            '<div class="client-image-popup">' +
                '<div class="client-popup-overlay"></div>' +
                '<div class="client-popup-content">' +
                    '<button class="client-popup-close">&times;</button>' +
                    '<img src="' + imageUrl + '" alt="Client Logo">' +
                '</div>' +
            '</div>'
        );

    });


    // Close popup
    $(document).on('click', '.client-popup-close, .client-popup-overlay', function () {

        $('.client-image-popup').remove();

    });

});
