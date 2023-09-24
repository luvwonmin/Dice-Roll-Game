var pCount = document.querySelector(".pCount");
var cCount = document.querySelector(".cCount");
var player = document.querySelector(".player");
var computer = document.querySelector(".computer");
var winner = document.querySelector(".winner");
console.log(pCount);
console.log(cCount);
function play(pChoice){
    var cChoice = ["paper","rock","scissors"];
	var random = Math.floor(Math.random()*3);
	player.innerText = "Players choice: " + pChoice;
	computer.innerText = "Computers choice: " + cChoice[random];
	if(
		(pChoice=="paper"&&cChoice[random]=="rock") ||
		(pChoice=="rock"&&cChoice[random]=="scissors") ||
		(pChoice=="scissors"&&cChoice[random]=="paper")
	){
        winner.innerText = "Winner: You";
	}else if(pChoice==cChoice[random]){
		winner.innerText = "Winner: No one|It's a tie";
	}
	else{
		winner.innerText = "Winner: Computer";
	}
}