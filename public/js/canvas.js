function draw_a() {
  var a_canvas = document.getElementById("a");
  var ctx = a_canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(200,200,180,0,2*Math.PI);
  ctx.lineWidth = 10;
  ctx.stroke();
}

function draw_b() {
  var b_canvas = document.getElementById("b");
  var ctx = b_canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(200,200,180,0,2*Math.PI);
  ctx.lineWidth = 10;
  ctx.stroke();
}

function draw_c() {
  var c_canvas = document.getElementById("c");
  var ctx = c_canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(200,200,180,0,2*Math.PI);
  ctx.lineWidth = 10;
  ctx.stroke();
}

setTimeout(draw_a, 200);
setTimeout(draw_b, 200);
setTimeout(draw_c, 200);
