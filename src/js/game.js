var canvas = document.querySelector("#mycanvas");
var ctx = canvas.getContext("2d");

// 畫布設計
var ww = canvas.width = 1200;
var wh = canvas.height = 1200;
ctx.lineWidth = 1;

// 時間設定
var time = 0;

ctx.fillStyle = "#001D2E";

function draw() {
    time++;
    // 清除殘影
    ctx.clearRect(0, 0, ww, wh);

    ctx.beginPath()
    // 每50畫一格線
    let pos = 50
    for (var i = 0; i < ww; i++) {
        // x 軸連線 
        ctx.moveTo(i * pos, 0)
        ctx.lineTo(i * pos, ww)
    }
    for (var i = 0; i < wh; i++) {
        // y 軸連線
        ctx.moveTo(0, i * pos)
        ctx.lineTo(wh, i * pos)
    }
    ctx.strokeStyle = "rgba(255,255,255,0.1)"
    ctx.stroke()

    // 紅六角
    ctx.save()
    ctx.fillStyle = "#E7465D"
    ctx.beginPath()
    ctx.moveTo(50, 190)
    ctx.lineTo(100, 170)
    ctx.lineTo(150, 180)
    ctx.lineTo(160, 220)
    ctx.lineTo(140, 255)
    ctx.lineTo(80, 240)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
    ctx.restore()

    // 黃圈
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = "#F5AF5F"
    ctx.arc(1000, 120, 60, 0, 2 * Math.PI)
    ctx.fill()
    ctx.restore()

    // 三角形
    ctx.save()
    ctx.fillStyle = "#3676BB"
    ctx.beginPath()
    ctx.moveTo(960, 990)
    ctx.lineTo(1000, 1100)
    ctx.lineTo(900, 1080)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
    ctx.restore()

    // 文字說明
    ctx.font = '25px serif';
    ctx.fillStyle = "#fff"
    ctx.fillText("你身負著運送能量電池的任務", 15, 1050)
    ctx.fillText("卻遭到幾何星人的埋伏", 15, 1100)
    ctx.fillText("請協助從他們的手中奪回能量電池", 15, 1150)

    // 中心內
    ctx.save()
    let cric = time
    ctx.translate(ww / 2, wh / 2)
    ctx.beginPath()
    ctx.strokeStyle = "#fff"
    // 時間刷新半徑
    // +150為 圓形擴散中心點  250為 擴散範圍
    ctx.arc(20, 20, (cric % 250) + 150, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.restore()

    // 中心外
    ctx.save()
    ctx.translate(ww / 2, wh / 2)
    ctx.beginPath()
    ctx.strokeStyle = "#fff"
    // 時間刷新半徑
    // +250為 圓形擴散中心點  250為 擴散範圍
    ctx.arc(20, 20, (cric % 250) + 250, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.restore()

    // 中心間
    // Radio Defense
    ctx.save()
    ctx.font = "Bold 28px 'Arial'";
    ctx.fillStyle = 'rgb(255,255,255)'
    ctx.fillText('Radio Defense', ww / 2 - 75, wh / 2 + 40)
    ctx.restore()

    //R
    ctx.save()
    ctx.font = "Bold 150px 'Arial'";
    ctx.fillStyle = 'rgb(255,255,255)'
    ctx.fillText('R', ww / 2 - 10, wh / 2)
    ctx.restore()

    // 電池下
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = "#F5AF5F"
    ctx.moveTo(590, 600)
    ctx.lineTo(590, 590)
    ctx.lineTo(550, 590)
    ctx.lineTo(550, 600)
    ctx.closePath()
    ctx.stroke()
    ctx.fill()
    ctx.restore()

    // 電池中
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = "#F5AF5F"
    ctx.moveTo(590, 580)
    ctx.lineTo(590, 520)
    ctx.lineTo(550, 520)
    ctx.lineTo(550, 580)
    ctx.closePath()
    ctx.fill()
    ctx.restore()

    // 電池上
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = "#fff"
    ctx.moveTo(580, 520)
    ctx.lineTo(580, 510)
    ctx.lineTo(560, 510)
    ctx.lineTo(560, 520)
    ctx.closePath()
    ctx.fill()
    ctx.restore()

    // 電池閃電
    ctx.save()
    ctx.fillStyle = "#fff"
    ctx.beginPath()
    ctx.moveTo(568, 572)
    ctx.lineTo(580, 549)
    ctx.lineTo(568, 549)
    ctx.lineTo(570, 533)
    ctx.lineTo(558, 555)
    ctx.lineTo(570, 555)
    ctx.closePath()
    ctx.fill()
    ctx.restore()
}

setInterval(draw, 13)
draw()