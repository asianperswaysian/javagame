var namespace = "http://www.w3.org/2000/svg"

var Santa = document.getElementById("santa")
var xCor = Number(Santa.getAttribute("x"));
var yCor = Number(Santa.getAttribute("y"));

var cancan = document.getElementById("kkcool")
var width = 35
var height = 35
var foodEaten = 0
// randomNumber returns a random number between min and max

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

  // get the position of your food piece
  function randomNumber(min,max)
  {
   return Math.floor(Math.random(0, 800)*(max-min+1)+min);
  }

  var bambiX = Number(document.getElementById("bambi").getAttribute("x"))
  var bambiY = Number(document.getElementById("bambi").getAttribute("y"))

  if (xCor > bambiX && xCor < bambiX + width && yCor > bambiY && yCor < bambiY + height) {
    // eat food piece
    var xuppers = randomNumber(100, 600)
    bambi.setAttribute("x", xuppers);
    //scoresheet
   foodEaten = foodEaten + 1;
   document.getElementById("score").textContent = foodEaten

    console.log("EATEN")

  }
bambiX = Number(document.getElementById("bambi2").getAttribute("x"))
bambiY = Number(document.getElementById("bambi2").getAttribute("y"))

if (xCor > bambiX && xCor < bambiX + width && yCor > bambiY && yCor < bambiY + height) {
  // eat food piece
  var xuppers = randomNumber(100, 600)
  bambi2.setAttribute("x", xuppers);
  //scoresheet
 foodEaten = foodEaten + 1;
 document.getElementById("score").textContent = foodEaten
 
  console.log("EATEN")
}



})
