var setBackgroundImage = function(viewPortWidth) {
  var bgimg = "images/bg.jpg" 
  if (viewPortWidth <= 640) {
    bgimg = "images/bg_small.jpg"
  } 
  
  var header = $("#header");
  $(header).css('background-image', 'url(' + bgimg + ')');
}

var scaleFonts = function(viewPortWidth) {
  if (viewPortWidth > 1900) {
    $('body').addClass('extraWide')
  } else if (viewPortWidth > 1400) {
    $('body').addClass('wide')
  } else if (viewPortWidth > 1000) {
    $('body').addClass('standard')
  } else if (viewPortWidth > 700) {
    $('body').addClass('narrow')
  } else {
    $('body').addClass('extraNarrow')
  }
}

var setEmailBoxWidth = function(viewPortWidth) {a
  if (viewPortWidth <= 700) {
    $(".LR-signup-email").addClass('narrow');
  }
}

$(document).ready(function() {
  var viewPortWidth = $(window).width();

  setBackgroundImage(viewPortWidth);
  scaleFonts(viewPortWidth);
  setEmailBoxWidth(viewPortWidth);
});
                
