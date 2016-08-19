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