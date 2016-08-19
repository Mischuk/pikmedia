function fullCarousel() {
  $('.full-carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    swipeToSlide: true,
    responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
         }
       },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 2,
         }
       },
       {
         breakpoint: 568,
         settings: {
           slidesToShow: 1,
         }
       }
     ]
  });
};

fullCarousel();
