const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Oggetto giocatore
const player = {
  x: 50,
  y: 300,
  width: 40,
  height: 40,
  color: "red",
  velocityY: 0,
  gravity: 1.5,
  jumpStrength: -15,
  isJumping: false
};

// Input: salto
window.addEventListener("keydown", function(e) {
  if (e.code === "Space" && !player.isJumping) {
    player.velocityY = player.jumpStrength;
    player.isJumping = true;
  }
});

// Loop di gioco
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Fisica salto
  player.velocityY += player.gravity;
  player.y += player.velocityY;

  if (player.y + player.height >= canvas.height) {
    player.y = canvas.height - player.height;
    player.velocityY = 0;
    player.isJumping = false;
  }

  // Disegna giocatore
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);

  requestAnimationFrame(gameLoop);
}

gameLoop();