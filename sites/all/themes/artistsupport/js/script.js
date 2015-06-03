/* Author: Dan Linn */
//(function($) {
//  $(window).resize(function(){
//    if(!$(".mobileselect").length) {
//      createMobileMenu();
//    } else if ($(window).width()>=700) {
//      $('#navigation ul').show();
//      $('.mobileselect').hide();
//      $('#block-views-photo_collage-block').removeClass('move');
//      $('header').removeClass('fixed-header');
//    } else {
//      $('#navigation ul').hide();
//      $('.mobileselect').show();
//      $('#block-views-photo_collage-block').addClass('move');
//      $('header').addClass('fixed-header');
//    }
//  });
//  function createMobileMenu(){
//    $('#navigation ul').mobileSelect({
//      autoHide: true, // Hide the ul automatically
//      defaultOption: "Navigation", // The default select option
//      deviceWidth: 480, // The select will be added for screensizes smaller than this
//      appendTo: '', // Used to place the drop-down in some location other than where the primary nav exists
//      className: 'mobileselect', // The class name applied to the select element
//      useWindowWidth: true // Use the width of the window instead of the width of the screen
//    });
//  }
//  Drupal.behaviors.mobileMenu = {
//    attach: function (context) {
//      createMobileMenu();
//    }
//  }
//})(jQuery);

(function ($, Drupal, window, document, undefined) {
  
  Drupal.behaviors.toggleMenu = {
    attach: function (context, settings) {
      // toggle menu
      $(document).on('click touchstart MSPointerDown', "#js-nav-toggle", function(e){
      
        var body = $('body');
        if(body.hasClass('menu-expanded')) {
          body.removeClass('menu-expanded');
        } else {
          body.addClass('menu-expanded');
        }
        
      e.preventDefault();
      });
    }
  };  
  
  Drupal.behaviors.toggleSubMenu = {
    attach: function (context, settings) {
      // toggle submenu
      $("#primary li:nth-child(2), .secondary-wrapper").hover(function(){
      
        var body = $('body');
        if(body.hasClass('submenu-expanded')) {
          body.removeClass('submenu-expanded');
          $(this).attr("aria-expanded", "false");
        } else {
          body.addClass('submenu-expanded');
          $(this).attr("aria-expanded", "true");
        }
        
      });
    }
  };
  
  Drupal.behaviors.loadSequence = {
    attach: function (context, settings) {
      // Load div elements in order
      var loadSequence = [];
          k = 0;
      for (var i=0; i < 10; i++) {
        loadSequence[i] = $('.js-load-sequence-' + i);
      }
      function fadeInElement() {
        if(loadSequence[k].length) {
          loadSequence[k].addClass('fade-in');
          k += 1;
          setTimeout(fadeInElement, 400);
        }
      }
      setTimeout(fadeInElement, 200);
    }
  };

  Drupal.behaviors.AdjustLangOptions = {
    attach: function (context, settings) {
      // Adjust height for language options
      var $lang_dropdown = $('.ddsDefault');
      $('.dd-container').removeAttr('style');
      $('.dd-select').removeAttr('style');
      $('.dd-options').removeAttr('style');
      $('.dd-select').on('click', function () {
        $lang_dropdown.find('.dd-option').each(function () {
          $(this).find('.dd-option-text').css('line-height', '1.4');
        });
      });
    }
  };
  
  Drupal.behaviors.TwoLangOptions = {
    attach: function (context, settings) {
      // Show only two language options  
      var $lang_list = $('.dd-option');
      var $body = $('body');
      if($lang_list.hasClass('dd-option-selected')) {
        $body.addClass('hidden-lang');
      } else {
        $body.removeClass('hidden-lang');
      }
    }
  }; 
  
  Drupal.behaviors.ScrollToTopArrow = {
    attach: function (context, settings) {
      // Check to see if the window is close to top
      // if not then display arrow
      $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
          $('.scrollToTopArrow').fadeIn();
        } else {
          $('.scrollToTopArrow').fadeOut();
        }
      });
      
      // Click to scroll to top
      $('.scrollToTopArrow').on('click', function (event) {
        $('html, body').animate({scrollTop : 0}, 800);
        event.preventDefault();
      });
      
    }
  }; 

  Drupal.behaviors.RandomBackImage = {
    attach: function (context, settings) {
      var randombg = Math.floor(Math.random() * 5);
      $('.front #content-header').removeClass().addClass('bg' + randombg);
    }
  }; 
 
})(jQuery, Drupal, this, this.document);



