var canvas = document.getElementById("Coding");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var x = 2;
var y = 2;
var i = 700;
var incrementor = 2;
let decrementor = 600;

function Square() {
  ctx.fillStyle = "red";
  ctx.fillRect(x, y, 150, 150); 
  ctx.fillStyle = "brown";
  ctx.fillRect(decrementor--, decrementor--, 200, 200);
}



function drawBoxxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

// Strings 
  ctx.font = "40px Arial";
  ctx.fillStyle = "blue";
  ctx.fillText("JavaScript is amazing!!", 400, 300);

  ctx.fillStyle = "green"
  ctx.fillText("167 class was cool!!", 600, x);




  let learnJavaScript = "Nasa was here, studying JavaScript";
  ctx.fillText(learnJavaScript, x, 200);



  Square();
  while (y + incrementor > canvas.width || x + incrementor < 2) {
    incrementor = -incrementor;
  }
  while (x + incrementor > canvas.height || y + incrementor < 2) {
    incrementor = -incrementor;
  }
  x += incrementor;
  y += incrementor;
}

setInterval(drawBoxxy, 25);
