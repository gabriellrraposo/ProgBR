let tela = document.getElementById('tela');
let ctx = tela.getContext('2d');

// ctx.moveTo(0, 0);
// ctx.lineTo(250, 250);
// ctx.lineTo(500, 0);
// ctx.lineWidth = 6;
// ctx.stroke();

// ctx.rect(20, 20, 100, 200)

// ctx.fillStyle = "green"
// // ctx.fillRect(20, 20, 100, 200)
// ctx.lineWidth = "15"
// ctx.strokeStyle = "purple";
// // ctx.strokeRect(20, 20, 100, 200)

// ctx.fill()
// ctx.stroke()

// ctx.clearRect(45, 40, 50, 100)


//////////////////////////////////

ctx.beginPath()

ctx.lineWidth = 4;
ctx.strokeStyle = "red";

ctx.moveTo(20, 20);
ctx.lineTo(200, 100);
ctx.lineTo(100, 200);
ctx.closePath();
ctx.fillStyle = "orange";

ctx.fill();
ctx.stroke();

ctx.beginPath();

ctx.lineWidth = "10";
ctx.strokeStyle = "violet"

ctx.moveTo(100, 100);
ctx.lineTo(490, 245);
ctx.lineTo(300, 400);
ctx.closePath();
ctx.fillStyle = "bisque";

ctx.fill();
ctx.stroke();