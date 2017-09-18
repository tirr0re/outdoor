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

    // Smooth scroll
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
    $(window).on('load', function(){
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


    // Init Google Map
    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    var  myLatLng = function() {
      if (window.innerWidth >= 992) {
          var myLatLng = {lat: 50.742165, lng: 25.311487};
          return this;
      }
      else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
          var myLatLng = {lat: 50.742175, lng: 25.311477};
          return this;
      }
    };


    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 16,
            streetViewControl: false,
            // The latitude and longitude to center the map (always required)
            center: {lat: 50.742165, lng: 25.311487}, // Lutsk
            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"},{"weight":"4"},{"lightness":"-10"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"color":"#dbdbdb"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"color":"#0d0101"},{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#cde0fd"},{"visibility":"on"}]}]
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');



        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);
        //map.setCenter(new newLatLng(lat, lng));
        // Let's also add a marker while we're at it
        var image = new google.maps.MarkerImage('../images/marker.png',
            new google.maps.Size(127,127),    /* size */
            new google.maps.Point(0,0),    /* origin */
            new google.maps.Point(40,70),    /* anchor */
            new google.maps.Size(127,127)    /* scale size */
        );
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(50.741995, 25.319588),
            icon: image,
            map: map,
            title: 'OUTDOOR'
        });
    }
});