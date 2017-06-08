$(function() {
    $('a[href="#"]').click(function(e){ e.preventDefault(); });

    function detectIE() {
      var BrowserDetect = {
              init: function () {
                  this.browser = this.searchString(this.dataBrowser) || "Other";
                  this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
              },
              searchString: function (data) {
                  for (var i = 0; i < data.length; i++) {
                      var dataString = data[i].string;
                      this.versionSearchString = data[i].subString;

                      if (dataString.indexOf(data[i].subString) !== -1) {
                          return data[i].identity;
                      }
                  }
              },
              searchVersion: function (dataString) {
                  var index = dataString.indexOf(this.versionSearchString);
                  if (index === -1) {
                      return;
                  }

                  var rv = dataString.indexOf("rv:");
                  if (this.versionSearchString === "Trident" && rv !== -1) {
                      return parseFloat(dataString.substring(rv + 3));
                  } else {
                      return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
                  }
              },

              dataBrowser: [
                  {string: navigator.userAgent, subString: "Edge", identity: "MS Edge"},
                  {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
                  {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
                  {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
                  {string: navigator.userAgent, subString: "Opera", identity: "Opera"},
                  {string: navigator.userAgent, subString: "OPR", identity: "Opera"},

                  {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
                  {string: navigator.userAgent, subString: "Safari", identity: "Safari"}
              ]
          };

          BrowserDetect.init();
          if (BrowserDetect.browser == 'Explorer') {
            $('html').addClass('IE');
          };
    };
    detectIE();

    function inputMask() {
      $(".mask-date").mask("99.99.9999",{placeholder:"__.__.____"});
      $(".mask-year").mask("9999",{placeholder:""});
      $(".mask-tel").mask("+7 (999) 999-99-99");
    };
    inputMask();

    function modals() {
      $('.modal-trigger').magnificPopup({
          type: 'inline',

          fixedContentPos: false,
          fixedBgPos: true,

          overflowY: 'auto',

          closeBtnInside: true,
          preloader: false,

          midClick: true,
          removalDelay: 300,
          mainClass: 'my-mfp-zoom-in',
          callbacks: {
              close: function() {
                $('.zoom-anim-dialog .checkbox').hide();
              }
            }
        });
      $('.modal-trigger').on('click', function(){
        var heading = $(this).attr('data-modal-heading');
        $('.modal-wrap h2').text(heading);
        if ( $(this).attr('data-modal-heading') == "Получить смету"){
          $('.zoom-anim-dialog .checkbox').show();
        }
      });

      $('#form-modal').on('submit', function(e){

        var isFormValid = true;

        $(".required input").each(function(){
            if ($.trim($(this).val()).length == 0){
                $(this).addClass("highlight");
                isFormValid = false;
            }
            else{
                $(this).removeClass("highlight");
            }
        });

        if ( isFormValid == true ) {
          $('.modal-trigger').magnificPopup('close');
          $('.modal-wrap h2').html('Спасибо!<br>Ваша заявка отправлена!');
          $('.zoom-anim-dialog .checkbox').hide();
          setTimeout(function(){
            $('.modal-success').trigger('click');
          }, 300);
        }

        e.preventDefault();
      });

    };
    modals();

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

    

    if ( $('#map').length ) {

      if ( $(window).width() > 769 ) {

        ymaps.ready(function () {

            var myMap = new ymaps.Map('map', {

                    center: [60.089186, 30.310793],

                    zoom: 12,

                    controls: []

                }, {

                    searchControlProvider: 'yandex#search'

                }),

                myPlacemark = new ymaps.Placemark([60.016186, 30.310793], {

                    hintContent: '',

                    balloonContent: ''

                }, {

                    // Опции.

                    // Необходимо указать данный тип макета.

                    iconLayout: 'default#image',

                    // Своё изображение иконки метки.

                    iconImageHref: '../images/marker.png',

                    // Размеры метки.

                    iconImageSize: [80, 97],

                    // Смещение левого верхнего угла иконки относительно

                    // её "ножки" (точки привязки).

                    iconImageOffset: [-40, -97]

                });

    

            myMap.geoObjects.add(myPlacemark);

            myMap.behaviors.disable('scrollZoom');

        });

      } else {

        ymaps.ready(function () {

            var myMap = new ymaps.Map('map', {

                    center: [60.119186, 30.310793],

                    zoom: 12,

                    controls: []

                }, {

                    searchControlProvider: 'yandex#search'

                }),

                myPlacemark = new ymaps.Placemark([60.016186, 30.310793], {

                    hintContent: '',

                    balloonContent: ''

                }, {

                    // Опции.

                    // Необходимо указать данный тип макета.

                    iconLayout: 'default#image',

                    // Своё изображение иконки метки.

                    iconImageHref: '../images/marker.png',

                    // Размеры метки.

                    iconImageSize: [80, 97],

                    // Смещение левого верхнего угла иконки относительно

                    // её "ножки" (точки привязки).

                    iconImageOffset: [-40, -97]

                });

    

            myMap.geoObjects.add(myPlacemark);

            myMap.behaviors.disable('scrollZoom');

        });

      }

    }

    

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

    

    console.log('Layout generated');

    

    

    

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

    

    

    function parallaxLead(){

      var $this = $('.m_lead-section')

      var line1 = $this.find('.line-1')

      var line1posy = line1.position().top

      var line1posx = line1.position().left

      var line2 = $this.find('.line-2')

      var line2posy = line2.position().top

      var line2posx = line2.position().left

      var ace = $this.find('.ace')

      var aceposy = ace.position().top

      var aceposx = ace.position().left

    

    

      //parametrs

      var $thisWidth = $this.width()

      var $thisHeight = $this.parent().height()

    

      var centerLeft = $thisWidth/2

      var centerTop = $thisHeight/2

    

      setTimeout(function(){

        $this.on('mousemove', function(event){

          var posy = event.pageY-centerTop

          line1.css({top: line1posy-(posy/4)})

          line2.css({top: line2posy-(posy/6)})

          ace.css({top: aceposy-(posy/10)})

    

          var posx = event.pageX-centerLeft

          line1.css({left: line1posx-(posx/4)})

          line2.css({left: line2posx-(posx/6)})

          ace.css({left: aceposx-(posx/10)})

        });

      }, 250);

    };

    

    function resizedParallax(){

      $('.line-1, .line-2, .ace').css({top: '50%', left: '50%'});

      $('.m_lead-section').unbind('mousemove');

    };

    

    function initParallax() {

      if ( $('html').hasClass('no-touchevents') && $(window).width() > 1024 ) {

        parallaxLead();

    

        $(window).resize(function(){

          resizedParallax();

          setTimeout(function(){

            parallaxLead();

          }, 250);

        });

      } else {

        $('.m_lead-section').unbind('mousemove');

      }

    };

    

    //if ( $('.m_lead-section').length ) {

    //  $(window).load(initParallax);

    //  $(window).resize(initParallax);

    //}

    

    

    function mouse() {

      $(".mouse").click(function() {

          $('html, body').animate({

              scrollTop: $(".main").offset().top - 60

          }, 1000);

      });

    };

    mouse();

    

    

    

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

    

    function personalTabs() {

      $('.m_personal-develop .tabs-nav .item a').on('click', function(){

        $(this).parent().parent().find('.item').removeClass('current');

        $(this).parent().addClass('current');

    

        var eq = $(this).parent().index();

        $(this).parent().parent().next().find('.item').removeClass('current');

        $(this).parent().parent().next().find('.item').eq(eq).addClass('current');

      });

    };

    personalTabs();

    

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

    

    

    

    
});