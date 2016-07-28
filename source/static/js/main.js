$(function() {
    $('a[href="#"]').click(function(e){ e.preventDefault(); });

    function selectric() {
      $('select').selectric({
        maxHeight: 200,
        disableOnMobile: false,

      });
      $('select').on('selectric-change', function(element){
        var thisValue = $(this).val();
        console.log(thisValue);

        if ( thisValue == null ) {
          console.log('null')
        } else {
          var data = $(this).data('selectric');
          $(data.element).parents('.input').removeClass('required error');
        }
      });
    };
    selectric();

    function inputMask() {
      $(".mask-date").mask("99.99.9999",{placeholder:"__.__.____"});
      $(".mask-year").mask("9999",{placeholder:""});
      $(".mask-tel").mask("+7 (999) 999-99-99");
    };
    inputMask();

    $("#lightgallery").lightGallery({
      selector: '.item a'
    });

    //=include modules.js
});