function loader() {
  setTimeout(function(){
    $('body').css('overflow', 'auto');
    $('.logo').removeClass('preload');
    $('.preloader').removeClass('large-z');
    // $('.preloader').fadeOut('500', function(){
      // $(this).remove();
      // $('.logo').removeClass('preload');
    // });
  }, 3500);
};
loader();