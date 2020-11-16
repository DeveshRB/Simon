var buttonColours= ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;


$(document).keydown(function() {
    if (!started) {
  
      
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });



$( ".btn" ).click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
  });


  function nextSequence() {
    userClickedPattern=[];
    level++;

  
$("#level-title").text("Level " + level);
  
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
  }


function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3")
    audio.play();
}


function animatePress(currentColour){
   $("#"+currentColour).addClass("pressed");
   setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
},100);
}


function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("success!");

    if(userClickedPattern.length === gamePattern.length){
      setTimeout(function(){
        nextSequence();
      },1000)
    }
  }
  else{
    console.log("wrong");

    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
   
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }           
}

function startOver(){
  level = 0;
  gamePattern=[];
  started = false;
}









// $("#red").on("click",function(){
//   $("#red").fadeOut(50).fadeIn(50);
//   var redd = new Audio("sounds/red.mp3");
//    redd.play();
// }) 

// $("#green").on("click",function(){
// $("#green").fadeOut(50).fadeIn(50);
// var greene = new Audio("sounds/green.mp3");
//    greene.play();
// })

// $("#yellow").on("click",function(){
//     $("#yellow").fadeOut(50).fadeIn(50);
//     var yell = new Audio("sounds/yellow.mp3");
//     yell.play();
// })

// $("#blue").on("click",function(){
//     $("#blue").fadeOut(50).fadeIn(50);
//     var bluee = new Audio("sounds/blue.mp3");
//     bluee.play();
// })









