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