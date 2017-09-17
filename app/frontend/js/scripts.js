$(document).ready(function () {
    $('.slider').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true

    });

    $('.about-slider').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        },
        dots: false

    });

    $('.team-slider').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        },
        dots: false

    });

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                }
            }
        });

    // animate skill bar
    $(window).scroll(function(){
        var $skills = $('.skills').offset().top - $(window).height()*70/100;

        if ($(this).scrollTop() >= $skills) {
            $('.skill-status').css('max-width', function(){
                var newWidth = $(this).data('status') + '%';
                return newWidth;
            });
        }
    });

    // init Isotope
    var $grid = $('.portfolio-items').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });
    // bind filter button click
    $('#filters').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value

        $grid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.portfolio-btns').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });
});