$(document).ready(function(){

  var status = 'on';

  $('#switch').click(function(){

    if(status == 'on'){
      $('body').addClass('night');
      status = 'off';
    }
    else {
      $('body').removeClass('night');
      status = 'on';
    }

  });

});
