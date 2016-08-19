function factsCarousel() {
  $('.facts-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    responsive: [
       {
         breakpoint: 640,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
  });
};
factsCarousel();