var roll1 = document.querySelector(".roll1");
console.log(roll1);
var photos = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
var dice = document.querySelector("img");
console.log(dice);
function rollbtn(){
	var random = Math.floor(Math.random() * 6);
	var dice = document.querySelector(".diceroll").setAttribute("src", photos[random]);
	const ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    ul.appendChild(li);
	li.innerHTML = "Your roll is " + [random + 1];
}
