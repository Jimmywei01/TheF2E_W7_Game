"use strict";var canvas=document.querySelector("#mycanvas"),ctx=canvas.getContext("2d"),ww=canvas.width=1200,wh=canvas.height=1200;ctx.lineWidth=1;var time=0;function draw(){time++,ctx.clearRect(0,0,ww,wh),ctx.beginPath();for(var t=0;t<ww;t++)ctx.moveTo(50*t,0),ctx.lineTo(50*t,ww);for(t=0;t<wh;t++)ctx.moveTo(0,50*t),ctx.lineTo(wh,50*t);ctx.strokeStyle="rgba(255,255,255,0.1)",ctx.stroke(),ctx.save(),ctx.fillStyle="#E7465D",ctx.beginPath(),ctx.moveTo(50,190),ctx.lineTo(100,170),ctx.lineTo(150,180),ctx.lineTo(160,220),ctx.lineTo(140,255),ctx.lineTo(80,240),ctx.closePath(),ctx.fill(),ctx.stroke(),ctx.restore(),ctx.save(),ctx.beginPath(),ctx.fillStyle="#F5AF5F",ctx.arc(1e3,120,60,0,2*Math.PI),ctx.fill(),ctx.restore(),ctx.save(),ctx.fillStyle="#3676BB",ctx.beginPath(),ctx.moveTo(960,990),ctx.lineTo(1e3,1100),ctx.lineTo(900,1080),ctx.closePath(),ctx.fill(),ctx.stroke(),ctx.restore(),ctx.font="25px serif",ctx.fillStyle="#fff",ctx.fillText("你身負著運送能量電池的任務",15,1050),ctx.fillText("卻遭到幾何星人的埋伏",15,1100),ctx.fillText("請協助從他們的手中奪回能量電池",15,1150),ctx.save();var c=time;ctx.translate(ww/2,wh/2),ctx.beginPath(),ctx.strokeStyle="#fff",ctx.arc(20,20,c%250+150,0,2*Math.PI),ctx.stroke(),ctx.restore(),ctx.save(),ctx.translate(ww/2,wh/2),ctx.beginPath(),ctx.strokeStyle="#fff",ctx.arc(20,20,c%250+250,0,2*Math.PI),ctx.stroke(),ctx.restore(),ctx.save(),ctx.font="Bold 28px 'Arial'",ctx.fillStyle="rgb(255,255,255)",ctx.fillText("Radio Defense",ww/2-75,wh/2+40),ctx.restore(),ctx.save(),ctx.font="Bold 150px 'Arial'",ctx.fillStyle="rgb(255,255,255)",ctx.fillText("R",ww/2-10,wh/2),ctx.restore(),ctx.save(),ctx.beginPath(),ctx.fillStyle="#F5AF5F",ctx.moveTo(590,600),ctx.lineTo(590,590),ctx.lineTo(550,590),ctx.lineTo(550,600),ctx.closePath(),ctx.stroke(),ctx.fill(),ctx.restore(),ctx.save(),ctx.beginPath(),ctx.fillStyle="#F5AF5F",ctx.moveTo(590,580),ctx.lineTo(590,520),ctx.lineTo(550,520),ctx.lineTo(550,580),ctx.closePath(),ctx.fill(),ctx.restore(),ctx.save(),ctx.beginPath(),ctx.fillStyle="#fff",ctx.moveTo(580,520),ctx.lineTo(580,510),ctx.lineTo(560,510),ctx.lineTo(560,520),ctx.closePath(),ctx.fill(),ctx.restore(),ctx.save(),ctx.fillStyle="#fff",ctx.beginPath(),ctx.moveTo(568,572),ctx.lineTo(580,549),ctx.lineTo(568,549),ctx.lineTo(570,533),ctx.lineTo(558,555),ctx.lineTo(570,555),ctx.closePath(),ctx.fill(),ctx.restore()}ctx.fillStyle="#001D2E",setInterval(draw,13),draw();
//# sourceMappingURL=all.js.map