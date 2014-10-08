/**
         * PARALLAX
         * ----------------------------------------------
         *
         *   Date: 2014-01-31
         *
         * Author: Hillsong Digital Team
         *
         *  Notes: Initiates the Parallax Effects
         *
         * Requires: jquery.stellar.min.js
         *
         */


        var stellarApplied = false;

        function removeParallax(vertOffset) {
            if (stellarApplied) {
                stellarApplied = false;
                $.stellar("destroy");
                $("*[data-stellar-ratio]").attr("style", "");
                $(".parallax[data-stellar-background-ratio]").css("background-position", "1000px 1000px");
            }
        }

        function SetUpParallax(vertOffset) {
            vertOffset = vertOffset ? vertOffset : 0;

            // Don't enable parallax on touch devices (aka mobile/tablet)
            if (window.screen.width > 768) {
                if ($(window).width() <= 768) {
                    removeParallax();
                } else {
                    if (!stellarApplied) {
                        $.stellar({
                            verticalOffset:50,
                            //-- Set scrolling to be in either one or both directions
                            horizontalScrolling: false,
                            verticalScrolling: true,
                            scrollProperty: 'scroll',
                            positionProperty: 'transform',
                            parallaxBackgrounds: true,
                            parallaxElements: true,
                            responsive: true,
                            hideDistantElements: false
                        });

                        stellarApplied = true;
                    }
                }
            }
        }
        
        SetUpParallax();

        /*$.stellar({
            horizontalScrolling: false,
            verticalScrolling: true,
            scrollProperty: 'scroll',
            positionProperty: 'transform',
            parallaxBackgrounds: true,
            parallaxElements: true,
            responsive: true,
            hideDistantElements: false
        });*/