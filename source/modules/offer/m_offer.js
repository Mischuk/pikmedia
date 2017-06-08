function kp() {
  var leadScreen = $('.offer-lead').height();
  var pageHeight = $('.m_offer').height();
  $(window).scroll(function(){
    if ($(this).scrollTop() > leadScreen) {
      $('.fixed-pluses-buttons').addClass('active');
      $('.offer-menu').addClass('active');
    } else {
      $('.fixed-pluses-buttons').removeClass('active');
      $('.offer-menu').removeClass('active');
    }

    if ($(this).scrollTop() > pageHeight) {
      $('.fixed-pluses-buttons').addClass('static');
    } else {
      $('.fixed-pluses-buttons').removeClass('static');
    }
  });




  var hashTagActive = "";
      $(".scroll").on("click touchstart" , function (event) {
          if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
              event.preventDefault();
              //calculate destination place
              var dest = 0;
              if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                  dest = $(document).height() - $(window).height();
              } else {
                  dest = $(this.hash).offset().top;
              }
              //go to destination
              $('html,body').animate({
                  scrollTop: dest - 90
              }, 1000, 'swing');
              hashTagActive = this.hash;
          }
      });
}
kp();