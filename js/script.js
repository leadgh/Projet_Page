//Navbar Burger
function openNav(){
    document.getElementById("sideNavigation").style.width = "50%";
}
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//Navbar scroll
(function(){
    var timeout;
    var $window = $(window);
    var $navbar = $('#nav');
    
    $window.on('scroll', function(e){
      clearTimeout(timeout);
      
      timeout = setTimeout(function(){
        if ($window.scrollTop() > 15) {
          $navbar.addClass('hide');
        } else {
          $navbar.removeClass('hide');
        }
      }, 10);
    });
  }());

  //Section 1

  $(window).load(function() {
      $('#section1').fadeOut(1);
      $('#section1').fadeIn(1000);
  });

  //Section 2
  (function(){
    var timeout;
    var $window = $(window);
	var $section2 = $('#section2');

    $window.on('scroll', function(e){
      clearTimeout(timeout);
      
      timeout = setTimeout(function(){
        if ($window.scrollTop() > 30) {
          $section2.addClass('app');
		
        } else {
          $section2.removeClass('app');
        }
      }, 100);
    });
  }());
  