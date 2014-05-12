function windowSize() {
   if(window.innerWidth <= 1200) {
     return true;
   } else {
     return false;
   }
}

$(document).on('ready', function() {
    $('.back-up').on('click', function() {
        $('html,body').animate({
          scrollTop: 0
        }, 1000);
    });
});

if(!windowSize()){
    $(document).on('ready', function() {
    
        var $window = $(window);
        $(window).scroll(function() {
            var $bgobj_1 = $('.grill');
            var yPos = ($window.scrollTop() / $bgobj_1.data('speed')); 
            var coords = '0 '+ yPos + 'px';
            $bgobj_1.css({ 'background-position': coords });
        });

        //main grill section
        $('.hero-nav').addClass("active");
        $('.hero-copy').addClass("active");

        
        // History info
        $(window).scroll(function() {
            if ($window.scrollTop() % 3 == 0) {
                var flame = $('.flame');
                flame.toggleClass('flicker');
            }
        });

            

        // Early History Background Parallax
        $(window).scroll(function() {
            var $bgobj_2 = $('.early-history');
            var yPos = -($window.scrollTop() / $bgobj_2.data('speed')); 
            var coords = '0 '+ yPos + 'px';
            $bgobj_2.css({ 'background-position': coords });
        });
         
        // Early History Images Movement
        $('.a1600').bind('inview', function (event, visible) {
            if (visible == true) {
                $(this).addClass("active");
            }else{
                $(this).removeClass("active");
            }
        });

        $('.a1700').bind('inview', function (event, visible) {
            if (visible == true) {
                $(this).addClass("active");
            }else{
                $(this).removeClass("active");
            }
        });

        $('.tree-info').bind('inview', function (event, visible) {
            if (visible == true) {
                $(this).addClass("active");
            }else{
                $(this).removeClass("active");
            }
        });

        $('.gray-stone').bind('inview', function (event, visible) {
            if (visible == true) {
                $(this).addClass("active");
            }else{
                $(this).removeClass("active");
            }
        });


            // Modern History Background Parallax
        $(window).scroll(function() {
            var $bgobj_3 = $('.modern-history');
            var yPos = -(($window.scrollTop() - 3000) / $bgobj_3.data('speed')); 
            var coords = '0 '+ yPos + 'px';
            $bgobj_3.css({ 'background-position': coords });
        });

        $('.brazier').bind('inview', function (event, visible) {
            if (visible == true) {
                $(this).addClass("active");
            }else{
                $(this).removeClass("active");
            }
        });

        $('.dome').bind('inview', function (event, visible) {
            if (visible == true) {
                $(this).addClass("active");
            }else{
                $(this).removeClass("active");
            }
        });

        $('.propane').bind('inview', function (event, visible) {
            if (visible == true) {
                $(this).addClass("active");
            }else{
                $(this).removeClass("active");
            }
        });


        $('.fireclay').bind('inview', function (event, visible) {
            if (visible == true) {
                //if (visiblePartY == 'bottom') {
                    $(this).addClass("active");
                //}
            }else{
                $(this).removeClass("active");
            }
        });

        $('.ceramic').bind('inview', function (event, visible) {
            if (visible == true) {
                $(this).addClass("active");
            }else{
                $(this).removeClass("active");
            }
        });

        $('.clam').bind('inview', function (event, visible) {
            if (visible == true) {
                $(this).addClass("active");
            }else{
                $(this).removeClass("active");
            }
        });

        $('.red').bind('inview', function (event, visible) {
            if (visible == true) {
                $(this).addClass("active");
            }else{
                $(this).removeClass("active");
            }
        });

        $('.plaid').bind('inview', function (event, visible) {
            if (visible == true) {
                $(this).addClass("active");
            }else{
                $(this).removeClass("active");
            }
        });
    })
}

