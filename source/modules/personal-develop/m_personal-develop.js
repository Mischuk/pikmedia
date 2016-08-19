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