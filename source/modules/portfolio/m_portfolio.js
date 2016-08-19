function portfolioCarousel() {
  $('.portfolio-carousel-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true,
    infinite: false,
    asNavFor: '.portfolio-carousel-thumbs'
  });
  $('.portfolio-carousel-thumbs').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    asNavFor: '.portfolio-carousel-single',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
};
portfolioCarousel();

function portfolioAllProjects() {
  $('.portfolio-all-projects').on('click', function(){
    $('.full-carousel').slick('unslick');
    $(this).parent().fadeOut('300', function(){
      $('.portfolio-all-projects').parent().next().show();
      fullCarousel();
    });
  });
};
portfolioAllProjects();

function portfolioAllProjectsTabs() {
  $('.portfolio-all-projects-nav a').on('click', function(){
    var type = $(this).data('sort');
    $('.full-carousel').slick('unslick');
    $('.tags-carousels').show();
    $('.portfolio-all-projects-nav').next().hide();

    $('.tags-carousels .full-carousel').each(function(){
      if ( $(this).data('sort') == type ) {
        $(this).show();
        fullCarousel();
      } else {
        $(this).hide();
      }
    });
  });
};
portfolioAllProjectsTabs();