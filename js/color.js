$(document).ready(function(){

  $('#button').click(function(){
    randomColor();
  });

  function randomColor(){
    // something happens here when you click the button
    console.log('you clicked the button');

    // Three variables for RGB, each one has to be a random number 0 -> 255
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);

    console.log("red: " + red);
    console.log("green: " + green);
    console.log("blue: " + blue);

    // Hopefully this outputs something like rgb(0,255,20);
    var rgb = "rgb(" + red + "," + green + "," + blue + ")";

    $("body").css("background-color", rgb);
  }

  randomColor();

});
