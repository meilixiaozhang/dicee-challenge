var randomNumber1 = Math.floor(Math.random()*6);
var randomNumber2 = Math.floor(Math.random()*6);
var randomImageArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
document.querySelector(".img1").setAttribute("src", randomImageArray[randomNumber1]);
document.querySelector(".img2").setAttribute("src", randomImageArray[randomNumber2]);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!"
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩"
} else {
  document.querySelector("h1").innerHTML = "Draw!"
}
