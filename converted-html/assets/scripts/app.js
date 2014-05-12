function windowSize() {
   if(window.innerWidth <= 768) {
     return true;
   } else {
     return false;
   }
}

$(document).on('ready', function() {

    var opts = { lines: 13, length: 2, width: 30, radius: 0, corners: 1, rotate: 0, direction: 1, color: '#fff', speed: 1, trail: 50 };

	//Hero Image Size
	var $hero 		= $('.hero');
    var $inHero		= $('.hero .inner');
    var $window  	= $(window);

    $inHero.hide();

    var target = document.getElementById('loader');
    var spinner = new Spinner(opts).spin(target);
    $(window).load(function() {
        $inHero.fadeIn(1000);
        spinner.stop();
    });


    $('.hero .inner img').css({ 'padding-top': (($window.height()) - 340) / 2 });
    //console.log((($window.height()) - 280));
	var $team          = $('.team');
    var $ability       = $('.ability');
    // var $abilityBlur   = $('.ability .blur');
	var $work          = $('.work');
	var $contact       = $('.contact');

    $window.resize(function() {
        $hero.height($window.height());
        $inHero.height($window.height());
        if(!windowSize()){
            $team.height( $window.height() );
            $ability.height( $window.height() - 100 );
            // $abilityBlur.height( $window.height() - 160 );
            $work.height( $window.height() );
            $contact.height( $window.height() - 100 );
        }
    }).resize();


    // Hero Parrallax
    if(!windowSize()){
        $(window).scroll(function() {
            console.log($window.scrollTop());
            var yPos = -($window.scrollTop() / $inHero.data('speed')); 
            var coords = '0 '+ yPos + 'px';
            $inHero.css({ 'background-position': coords });
        });
    }
 


    $('.scroll').on('click',function(event){
        var $anchor = $(this);
 
        $('html, body').animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 800);
        event.preventDefault();
    });

    $('#phone').on('click', function(e) {
        e.preventDefault();
        $('.contacter').html('<h2>(678) 463-5737</h2>');
    });
    $('#mail').on('click', function(e) {
        e.preventDefault();
        $('.contacter').html('<h2>tj@standardco.de</h2>');
    });


});

