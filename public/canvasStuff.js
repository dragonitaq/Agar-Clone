const init = () => {
  draw();
};

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/*                               Draw                               */
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

// Generate random x & y position range between 10-510.
player.locX = Math.floor(500 * Math.random() + 10);
player.locY = Math.floor(500 * Math.random() + 10);

// This function is what makes the game "animate" because we call in fn 30 times in 1 sec.
const draw = () => {
  // Clear canvas before draw new position. This is done by drawing empty rectangle for entire canvas.
  context.clearRect(0, 0, canvas.width, canvas.height);

  /* ################### Set camera follow player ################### */
  const camX = -player.locX + canvas.width / 2;
  const camY = -player.locY + canvas.height / 2;
  context.setTransform(1, 0, 0, 1, camX, camY);

  // Tell the canvas we are beginning to drawn
  context.beginPath();

  /* ######################## Draw the circle ####################### */
  // Specify the style
  context.fillStyle = 'rgb(255,0,0)';
  // Draw circle. We have radius of 10 that is why our random starting position should min of 10.
  context.arc(player.locX, player.locY, 10, 0, Math.PI * 2);
  context.arc(200, 200, 10, 0, Math.PI * 2);
  // This is actually will draw the circle style
  context.fill();

  /* #################### Draw the circle outline ################### */
  // Specify the borderline style
  context.lineWidth = 3;
  context.strokeStyle = 'rgb(0,255,0)';
  // This is actually will draw the border line
  context.stroke();

  /* This is make sure the browser is repetitively call this fn for every new frame the browser capable of running. If we run for 30fps, it will draw 30 times in a sec. It serves as safety while-loop for our game. */
  requestAnimationFrame(draw);
};

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/*                          Mouse movement                          */
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

canvas.addEventListener('mousemove', (event) => {
  const mousePosition = {
    x: event.clientX,
    y: event.clientY,
  };
  const angleDeg = (Math.atan2(mousePosition.y - canvas.height / 2, mousePosition.x - canvas.width / 2) * 180) / Math.PI;
  if (angleDeg >= 0 && angleDeg < 90) {
    xVector = 1 - angleDeg / 90;
    yVector = -(angleDeg / 90);
  } else if (angleDeg >= 90 && angleDeg <= 180) {
    xVector = -(angleDeg - 90) / 90;
    yVector = -(1 - (angleDeg - 90) / 90);
  } else if (angleDeg >= -180 && angleDeg < -90) {
    xVector = (angleDeg + 90) / 90;
    yVector = 1 + (angleDeg + 90) / 90;
  } else if (angleDeg < 0 && angleDeg >= -90) {
    xVector = (angleDeg + 90) / 90;
    yVector = 1 - (angleDeg + 90) / 90;
  }

  speed = 10;
  xV = xVector;
  yV = yVector;

  // Check if player's circle is trying to go off the canvas grid. If not, then move their x & y position according to speed.
  if ((player.locX < 5 && player.xVector < 0) || (player.locX > 500 && xV > 0)) {
    player.locY -= speed * yV;
  } else if ((player.locY < 5 && yV > 0) || (player.locY > 500 && yV < 0)) {
    player.locX += speed * xV;
  } else {
    player.locX += speed * xV;
    player.locY -= speed * yV;
  }
});
