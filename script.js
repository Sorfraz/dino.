// script.js
const dino = document.getElementById("dino");
const obstacle = document.getElementById("obstacle");

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    jump();
  }
});

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
    }, 500);
  }
}

// Add jump animation
const style = document.createElement("style");
style.innerHTML = `
  #dino.jump {
    animation: jump 0.5s ease-out;
  }

  @keyframes jump {
    0% { bottom: 0; }
    50% { bottom: 80px; }
    100% { bottom: 0; }
  }
`;
document.head.appendChild(style);

// Collision detection
setInterval(() => {
  const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
  const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("right"));

  if (obstacleLeft > window.innerWidth - 100 && obstacleLeft < window.innerWidth - 50 && dinoTop < 40) {
    alert("Game Over!");
    obstacle.style.animation = "none";
    obstacle.style.display = "none";
  }
}, 10);