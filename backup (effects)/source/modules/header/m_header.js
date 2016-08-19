$(window).scroll(function(){
  var $header = $('.m_header');

  if ($(this).scrollTop() > 90) {
      $header.addClass('fixed');
  } else {
      $header.removeClass('fixed');
  }
});

function mobileMenu() {
  $('.mobile-menu-trigger').on('click', function(){
    $(this).toggleClass('open');
    $('.m_header .nav').toggleClass('open');
  });
};
mobileMenu();

function headerMenuDropdown() {
  $('.m_header nav li').on('click', function(){
    if ( $(this).find('.dropdown').length) {
      $(this).toggleClass('open');
      $(this).find('.dropdown').toggleClass('open');
    }
  });
};
headerMenuDropdown();