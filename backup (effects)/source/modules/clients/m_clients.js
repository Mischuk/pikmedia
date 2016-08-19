function clientCarousels() {

  $('.client-carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: true,
    responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
         }
       },
       {
         breakpoint: 568,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
  });

  $('.partners-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
    responsive: [
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
         }
       },
       {
         breakpoint: 568,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
  });
};
clientCarousels();