var c = document.getElementById("newCanvas");
var ctxt = c.getContext("2d");
ctxt.fillStyle = "red";
ctxt.beginPath();
ctxt.arc(110, 300, 100, 0, 2* Math.PI);
ctxt.fill();
ctxt.stroke();



const canvasArrow = (context, fromx, fromy, tox, toy) => {
  const headlen = 10;
  const dx = tox - fromx;
  const dy = toy - fromy;
  const angle = Math.atan2(dy, dx);
  context.moveTo(fromx, fromy);
  context.lineTo(tox, toy);
  context.lineTo(
    tox - headlen * Math.cos(angle - Math.PI / 6),
    toy - headlen * Math.sin(angle - Math.PI / 6)
  );
  context.moveTo(tox, toy);
  context.lineTo(
    tox - headlen * Math.cos(angle + Math.PI / 6),
    toy - headlen * Math.sin(angle + Math.PI / 6)
  );
};

const ctx = document.getElementById("newCanvas").getContext("2d");
ctx.beginPath();
canvasArrow(ctx, 990, 300, 930, 300);
ctx.stroke();

var x1 = 990;
var x2 = 930;
i = 60;
function myFunction() {
  const j = setInterval(function(){
    const ctx = document.getElementById("newCanvas").getContext("2d");
    ctx.beginPath();
    canvasArrow(ctx, x1, 300, x2, 300);
    ctx.stroke();
    x1 = x1 - i;
    x2 = x2 - i;
    ctx.clearRect(x1 + i, 290, x2 + i, 310);
      if(x2 < 190) {
          var c = document.getElementById("newCanvas");
          var ctxt = c.getContext("2d");
          ctxt.fillStyle = "yellow";
          ctxt.beginPath();
          ctxt.arc(110, 300, 100, 0, 2* Math.PI);
          ctxt.fill();
          ctxt.stroke();
          clearInterval(j);
      }
  }, 400);
};
