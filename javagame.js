var namespace = "http://www.w3.org/2000/svg"

var Santa = document.getElementById("santa")
var xCor = Number(Santa.getAttribute("x"));
var yCor = Number(Santa.getAttribute("y"));

var cancan = document.getElementById("kkcool")
var width = 80
var height = 80
var playerX
var playerY
var foodX
var foodY

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 37) {
    Santa.setAttribute("x", xCor - 15);
    xCor = xCor - 15;

  }

  else if (e.keyCode == 39) {
     Santa.setAttribute("x", xCor + 15);
    xCor = xCor + 15;
  }

  if (e.keyCode == 38) {
    Santa.setAttribute("y", yCor - 15);
    yCor = yCor - 15;

  }

  else if (e.keyCode == 40) {
     Santa.setAttribute("y", yCor + 15);
    yCor = yCor + 15;
  }
})

cancan.addEventListener("click", function (e) {
  var player1 = document.getElementById("santa")
  var food1 = document.getElementById("bambi")

  playerX = Number(player1.getAttribute("x"))
  playerY = Number(player1.getAttribute("y"))

  foodX = Number(food1.getAttribute("x"))
  foodY = Number(food1.getAttribute("y"))

  if (playerX > foodX) {
    player1.setAttribute("fill", "red")
    food1.setAttribute("fill", "red")
  }
  else {
    player1.setAttribute("fill", "green")
    food1.setAttribute("fill", "green")
  }
})
