$(function () {
    'use strict';

    /* --------------------------------------------------------------------------- */
    /*  Flex Slider
    /* --------------------------------------------------------------------------- */
    (function () {
        $('.flexslider').flexslider({
            animation: 'fade',              //String: Select your animation type, 'fade' or 'slide'
            slideDirection: 'horizontal',   //String: Select the sliding direction, 'horizontal' or 'vertical'
            slideshow: true,                //Boolean: Animate slider automatically
            slideshowSpeed: 3000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationDuration: 600,         //Integer: Set the speed of animations, in milliseconds
            directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
            controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
            keyboardNav: true,              //Boolean: Allow slider navigating via keyboard left/right keys
            mousewheel: false,              //Boolean: Allow slider navigating via mousewheel
            prevText: '',                   //String: Set the text for the 'previous' directionNav item
            nextText: '',                   //String: Set the text for the 'next' directionNav item
            pausePlay: false,               //Boolean: Create pause/play dynamic element
            pauseText: '',                  //String: Set the text for the 'pause' pausePlay item
            playText: 'Play',               //String: Set the text for the 'play' pausePlay item
            randomize: false,               //Boolean: Randomize slide order
            slideToStart: 0,                //Integer: The slide that the slider should start on. Array notation (0 = first slide)
            animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received 'disable' classes at either end
            pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
            pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
            controlsContainer: '',          //Selector: Declare which container the navigation elements should be appended too. Default container is the flexSlider element. Example use would be '.flexslider-container', '#container', etc. If the given element is not found, the default action will be taken.
            manualControls: '',             //Selector: Declare custom control navigation. Example would be '.flex-control-nav li' or '#tabs-nav li img', etc. The number of elements in your controlNav should match the number of slides/tabs.
            start: function () {
            },            //Callback: function(slider) - Fires when the slider loads the first slide
            before: function () {
            },           //Callback: function(slider) - Fires asynchronously with each slider animation
            after: function () {
            },            //Callback: function(slider) - Fires after each slider animation completes
            end: function () {
            }              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
        });
    })();


    /* --------------------------------------------------------------------------- */
    /*  Info slider
    /* --------------------------------------------------------------------------- */
    (function () {
        var $slideWrap = $('.info-slide-wrapper'),
            scrollSlider = $slideWrap.position().left - $('.info-slide-item').outerWidth();

        setInterval(function () {
            $slideWrap.animate({left: scrollSlider}, 500, function () {
                $slideWrap
                    .find('.info-slide-item:first')
                    .appendTo($slideWrap)
                    .parent()
                    .css({'left': 0});
            });
        }, 6000);
    })();


    /* ---------------------------------------------------------------------- */
    /*  Easytabs
    /* ---------------------------------------------------------------------- */
    (function () {
        // Run easytabs
        $('#content-wrapper').easytabs({
            animate: true,
            updateHash: true,
            transitionIn: 'slideDown',
            transitionOut: 'slideUp',
            animationSpeed: 600,
            tabs: '.tab',
            tabActiveClass: 'active'
        });
    })();


    /* ---------------------------------------------------------------------- */
    /*  Logo, Slider and audio
    /* ---------------------------------------------------------------------- */
    (function () {
        // Needed variables
        var $logo = $('#logo'),
            $slider = $('.slider-wrapper'),
            audio = document.getElementsByTagName('audio')[0];

        $('.tab-notmain').click(function () {
            $logo.fadeIn('slow');
            $slider.slideUp(500);
            if (this.id == 'click-pub') {
                var click_pub = function() {
                    var $container = $('.portfolio-content'),
                        $filter = $('#portfolio-filter');
                    $container.isotope({
                        filter: '.f-conference',
                        layoutMode: 'masonry',
                        animationOptions: {
                            duration: 750,
                            easing: 'linear'
                        }
                    });
                    $filter.find('a').removeClass('current');
                    $('#click-conf').addClass('current');
                }
                setTimeout(click_pub, 1000);
            }
        });

        $('.tab-main').click(function () {
            $logo.fadeOut('slow');
            $slider.delay(1000).slideDown(500);
        });

        // Audio
        $('.tab').click(function () {
            audio.play();
        });
    })();


    /* ---------------------------------------------------------------------- */
    /*  Portfolio
    /* ---------------------------------------------------------------------- */
    (function () {
        // Needed variables
        var $container = $('.portfolio-content'),
            $filter = $('#portfolio-filter');

        if (document.location.hash.substr(1) === 'portfolio') {
            $container.isotope();
        } else {
            $(window).hashchange(function () {
                if (document.location.hash.substr(1) === 'portfolio') {
                    $container.isotope();
                }
            });
        }

        $container.imagesLoaded(function () {
            $container.isotope({
                filter: '.f-conference',
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });
        });

        // Isotope Filter
        $filter.find('a').click(function () {
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });


        // Copy categories to item classes
        $filter.find('a').click(function () {
            $filter.find('a').removeClass('current');
            $(this).addClass('current');
        });
    })();


    /* ---------------------------------------------------------------------- */
    /*  Fancybox
    /* ---------------------------------------------------------------------- */
    (function () {
        $('.fancybox').fancybox();
        $('.fancybox-media').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            helpers: {
                media: {}
            }
        });
    })();


    /* ---------------------------------------------------------------------- */
    /*  Modernizr Check csstransforms3d
    /* ---------------------------------------------------------------------- */
     (function(){
     Modernizr.load({
     test: Modernizr.csstransforms3d && Modernizr.csstransitions,
     yep : 'jquery.hoverfold.js'/*tpa=http://www.cs.cmu.edu/~diyiy/js/js/jquery.hoverfold.js*/,
     nope: 'fallback-portfolio.css'/*tpa=http://www.cs.cmu.edu/~diyiy/js/css/fallback-portfolio.css*/,
     callback : function( url, result, key ) {

     if( url === 'jquery.hoverfold.js'/*tpa=http://www.cs.cmu.edu/~diyiy/js/js/jquery.hoverfold.js*/ ) {
     $( '#portfolio-content' ).hoverfold();
     }
     }
     });
     })();



    /* --------------------------------------------------------------------------- */
    /*  In-Field Labels
    /* --------------------------------------------------------------------------- */
    (function () {
        $('.flabel').inFieldLabels();
    })();


    /* --------------------------------------------------------------------------- */
    /*  Google Maps
    /* --------------------------------------------------------------------------- */
    (function () {
        if (document.location.hash.substr(1) === 'contacts') {
            initGmap();
        } else {
            $(window).hashchange(function () {
                if (document.location.hash.substr(1) === 'contacts') {
                    initGmap();
                }
            });
        }

        // Initialize Gmap
        function initGmap() {
            var position = new google.maps.LatLng(36.143247, -115.160151);

            $('#map').gmap3({
                map: {
                    options: {
                        center: position,
                        zoom: 15,
                    }
                },
                marker: {
                    values: [
                        {latLng: position},
                        {latLng: [36.149762, -115.152726]}
                    ],
                    options: {
                        draggable: false,
                        icon: 'gmap_marker.png'/*tpa=http://www.cs.cmu.edu/~diyiy/js/images/gmap_marker.png*/
                    }
                }
            });
        }

        // Pan map
        $('.pan').click(function () {
            var lat = $(this).data('lat'),
                lng = $(this).data('lng');
            $('#map').gmap3('get').panTo(new google.maps.LatLng(lat, lng));
            $('.map-pan').find('div').removeClass('pan-active');
            $(this).addClass('pan-active');
        });
    })();
});
