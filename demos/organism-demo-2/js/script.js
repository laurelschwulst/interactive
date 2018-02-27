$(document).ready(function(){

// turning on and off the lights

  // by default, light is on
  var state = 'on';

  // click the button
  $('button').click(function(){

      if(state == 'off'){
        // turn on the lights
        $('body').removeClass('off');
        $('body').addClass('on');
        $(this).removeClass('off');
        state = 'on';
      }

      else {
        // turn off the lights
        $('body').removeClass('on');
        $('body').addClass('off');
        $(this).addClass('off');
        state = 'off';
      }

  });

  // show a clock
  // via https://stackoverflow.com/questions/18229022/how-to-show-current-time-in-javascript-in-the-format-hhmmss

  function checkTime(i) {
      return (i < 10) ? "0" + i : i;
  }

  function startTime() {
      var today = new Date(),
          h = checkTime(today.getHours()),
          m = checkTime(today.getMinutes()),
          s = checkTime(today.getSeconds());
      $('#clock').html(h + ":" + m + ":" + s);
      t = setTimeout(function () {
          startTime();
      }, 500);

      // hibernate on odd minutes

      if (m % 2 === 0) {
       // we are even
       console.log('awake');
       $('#organism').removeClass('hibernate');
     }
     else {
       // we are odd, hibernate!
       console.log('sleeping');
       $('#organism').addClass('hibernate');
     }

  }

  startTime();

  // click organism and hear tweet or hoot
  // depending on time of day

  var tweetSound = new Audio('sounds/tweet.m4a');
  var hootSound = new Audio('sounds/hoot.mp3');
  hootSound.volume = 0.8;

  $('#organism').click(function(){
    if($('body').hasClass('off')){
      hootSound.play();
    }
    else {
      tweetSound.play();
    }
  });

  // to come:
  // if it's night-time, the lights are automatically off

});
