let tela = document.getElementById('tela');
let ctx = tela.getContext('2d');

// ctx.moveTo(0, 0);
// ctx.lineTo(250, 250);
// ctx.lineTo(500, 0);
// ctx.lineWidth = 6;
// ctx.stroke();

ctx.rect(20, 20, 100, 200)

ctx.fillStyle = "green"
// ctx.fillRect(20, 20, 100, 200)
ctx.lineWidth = "15"
ctx.strokeStyle = "purple";
// ctx.strokeRect(20, 20, 100, 200)

ctx.fill()
ctx.stroke()

ctx.clearRect(45, 40, 50, 100)