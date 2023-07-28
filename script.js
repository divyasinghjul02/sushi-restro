$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#head a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });

   
}

$(document).ready(function() {
    $('#search').click(function() {
      $('#head').toggle();
      $('#in').toggle();
    //   $('#logo').toggle();
    });
  });

  


  $(document).ready(function() {
    $(window).scroll(function() {
      let sP = window.scrollY;
  
      if (sP > 80) {
        $('.wrap-1').css({
          'background-color': '#21243d68'
        });
      } else {
        $('.wrap-1').css({
          'background-color': '#21243d'
        });
      }
    });
  });
  