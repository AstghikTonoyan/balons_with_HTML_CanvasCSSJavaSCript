/*
Ստեղծեք canvas և դրա ներքևում button։ button էլեմենտը սեղմելիս canvas-ի վրա պետք է ավելանա կլոր օբյեկտ(գնդակ)` կամայական տեղում, կամայական չափի,  որը կշարժվի կամայական ուղղությամբ։ Որպես հավելում, կարող եք փորձել ստեղծել տարբեր գույների կլոր գնդակներ։ Գնդակը պետք է canvas-ի եզրերին հասնելիս փոխի իր ուղղությունը, այնպես, որ միշտ մնա canvas-ի ներսում։ Արդյունքում կունենանք canvas-ի ներսում շարժվող գնդակների փունջ։ Կարող ենք ավելացնել նոր գնդակներ սեղմելով canvas-ի ներքևի button-ը։  
*/

const canvas = document.querySelector("canvas");

const context = canvas.getContext("2d");

let data = {
  balls: []
};

function update() {
  data.balls.forEach(function(ball) {
    ball.update();
    
  });
}


function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  data.balls.forEach(function(ball) {
    ball.draw();
   
  });
}

function loop() {
  requestAnimationFrame(loop);
  update();
  draw();
}
loop();

function Ball() {
  this.r = random(5, 15);
  this.x = random(this.r, canvas.width - this.r);
  this.y = random(this.r, canvas.height - this.r);

  this.xDelta = random(-5, 5);
  this.yDelta = random(-5, 5);

  this.color = "rgb(" + random(0, 255) + ", " + random(0, 255) + ", " + random(0, 255) + ")";

  this.update = function() {
    if ((this.x + this.r) > canvas.width ||
      this.x - this.r < 0) {
      this.xDelta *= -1;
    }
    if ((this.y + this.r) > canvas.height ||
      this.y - this.r < 0) {
      this.yDelta *= -1;
    }

    this.x += this.xDelta;
    this.y += this.yDelta;
  };

  this.draw = function() {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    context.fill();
  };
}

setInterval(()=>{
    const ball = new Ball();
    data.balls.push(ball);
},1000);
  



function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}