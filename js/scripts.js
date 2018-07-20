//Business Logic
var player1 = 0;
var result = 0;

function getRandomInt() {
  var roll = Math.floor(Math.random() *6) +1;

  if (roll === 1) {
  	result = 0;
  }else {// player 1 interface.
var P1rollCounter=0;
var player1Score=0;
$(document).ready(function(){
  $("#roll1").click(function(event){
    var min=1;
    var max=6;
//math function to display random numbers
    var rolled=Math.floor(Math.random() * (max - min + 1));
      if (rolled===0) {
      alert(rolled +"," + "YOU ROLLED A ZERO...ROLL AGAIN")
    }else if (rolled===1) {
           $("#player1").hide(4000);
           $("#player2").show();
          alert("player 1, You rolled a 1 niccur your turn is over pass the mouse")
    }else {
        $("p#roll1").prepend("<li>" + rolled + "</li>");

        player1Score=player1Score+parseInt(rolled);
        P1rollCounter=P1rollCounter+=1;
        $('#P1rolls').text(P1rollCounter)
        $("#score1").text(player1Score);
    }
//      var score=rolled++rolled
//    alert("your score is " + score);

// if (p1rollCounter===5) {
//   $("#player1").hide(400);
//   $("#player2").show(1200);
//   alert("NEXT PLAYER");
// };

  });

});


  var player2Score=0;
  var p2rollCounter=0;
$(document).ready(function(){
  $("#roll2").click(function(event){
    var less=1;
    var top= 6;

    var rolled1=Math.floor(Math.random() * (top - less + 1));
//confirmational test of the .random()function    alert(rolled1);
    if (rolled1===0) {
      alert(rolled1 +"," + "YOU ROLLED A ZERO...ROLL AGAIN")

    }else if (rolled1===1) {
          $("#player2").hide(4000);
          $("#player1").show();
          alert("player 1, You rolled a 1 niccur your turn is over pass the mouse")

    }else {
      $("p#roll2").prepend("<li>" + rolled1 + "</li>")

    }
    //score=current roll + 0/previous roll/sum of previous rolls
    player2Score=player2Score+parseInt(rolled1);
    p2rollCounter=p2rollCounter+=1;
    $('#p2rolls').text(p2rollCounter);
    $("#score2").text(player2Score);


  });
});

  	result += roll;
  }
  return roll;
}

function getRandomInt() {
  var roll2 = Math.floor(Math.random() *6) +1;

  if (roll2 === 1) {
  	result = 0;
  }else {
  	result += roll2;
  }
  return roll2;
}
//User Interface Logic
$(document).ready(function(){

		var scores = function(){
			var die = getRandomInt();
			var output = "&#x268" + (die-1) + ";";
			var score = result;
			$("#winsPlayer1").text(score);
		$("#display").html(output);
		$("#scorePlayer1").text(die);

		if (score === 0) {
			alert("your score is zero click pass to switch to player2")
			$(".buttons1").hide();
			$(".buttons2").show();
		}else if(score >= 30) {
			var snd = new Audio('voices/you win.mp3');
			setTimeout(snd .onended = function () {alert("your score is 30, you win!!!");},1000)
			snd .play();
		}
		return score;
	}
	$("button#roll").click(function(){
		scores();

	})
	$("button#pass").click(function(){
		$(".buttons1").hide();
		$(".buttons2").show();
	})


		var scores2 = function(){
			var die2 = getRandomInt();
			var output2 = "&#x268" + (die2-1) + ";";
			var score2 = result;
			$("#winsPlayer2").text(score2);
		$("#scorePlayer2").text(die2);
		$("#display").html(output2);


		if (score2 === 0) {
			alert("your score is zero click pass to switch to player1")
			$(".buttons2").hide();
			$(".buttons1").show();
		}else if(score2 >= 30) {

			var snd = new Audio('voices/you win.mp3');
			setTimeout(snd .onended = function () {alert("your score is 30, you win!!!");},1000)
			snd .play();
					}
		return score2;
	}
	$("button#roll1").click(function(){
		scores2();
	})
	$("button#pass1").click(function(){
		$(".buttons2").hide();
		$(".buttons1").show();
	})


function chkform()
                {

    var inputs = [];
    inputs[0] = document.getElementById("player1");


    for( i =0; i < inputs.length; i++) {

                  if (inputs[i].value === "" )
                  {

                   document.getElementById("er1").innerHTML = "Please Enter player1!!!";
                   document.getElementById("er1").style.color = "red";
                   document.getElementById("er1").style.display = "block";
               }
           }
}
	  $("form#entry").submit(function(event) {
      event.preventDefault();
      chkform();

	var entry1 = $("#player1").val();
	var entry2 = $("#player2").val();

$("#Ready-player1").text(entry1).val();
$("#Ready-player2").text(entry2).val();

})
        })
