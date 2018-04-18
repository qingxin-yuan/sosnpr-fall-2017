(function ($) {
  
    $('.main-navigation  .search-submit').on('click touchstart', function (e) {
      e.preventDefault();
      
      $('.main-navigation  .search-field').stop().animate(
        {width:200},'slow').focus();
      $('.main-navigation  .search-submit').addClass('search-bar-open');
      $('.main-navigation  .menu-toggle').addClass('search-bar-open');
      
      // listen for enter key and submit form
      $(document).on('keydown', function(event){
        if(event.which === 13 && $('.main-navigation  .search-field').val() !== ''){
          $('.main-navigation .search-form').submit();
        }
        if(event.which === 13 && $('.main-navigation  .search-field').val() === ''){
          event.preventDefault();
        }
      });
  
    });
  
    $('.main-navigation .search-field').on('blur', function(){
      $('.main-navigation .search-field').stop().animate(
        {
          width:0
        }, 500
      );

      $(document).unbind('keydown');
        
        function showIcons(){
          $('.main-navigation .search-submit').removeClass('search-bar-open');
          $('.main-navigation .menu-toggle').removeClass('search-bar-open');
        }

        setTimeout(showIcons, 501);  
  
    });





  
  })(jQuery);

