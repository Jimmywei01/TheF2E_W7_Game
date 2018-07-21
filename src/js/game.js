var canvas = document.querySelector("#mycanvas");
var ctx = canvas.getContext("2d");

// ctx.
ww = canvas.width = 800
wh = canvas.height = 800
ctx.lineWidth = 1



// ctx.fillStyle="#001D2E"
// ctx.fillRect(0,0,ww,wh)
function draw() {
    ctx.beginPath()
    // 每50畫一格線
    let pos = 50
    for (var i = 0; i < ww; i++) {
        // x 軸連線 
        ctx.moveTo(i * pos, 0)
        ctx.lineTo(i * pos, ww)
        // ctx.fillText(pos,i*pos,10)
    }
    for (var i = 0; i < wh; i++) {
        // y 軸連線
        ctx.moveTo(0, i * pos)
        ctx.lineTo(wh, i * pos)
        // ctx.fillText(pos,10,i*pos)
    }
    ctx.strokeStyle = "rgba(255,255,255,0.1)"
    ctx.stroke()

    // 黃圈
    ctx.fillStyle = "#F5AF5F"
    ctx.beginPath()
    ctx.arc(500, 500, 50, 0, 2 * Math.PI)
    ctx.fill()
}
draw()