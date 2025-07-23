

let square = document.getElementById('square');
let scoreElement = document.getElementById('score');
let score = 0;

// Set initial square position
square.style.top = Math.floor(Math.random() * 550) + 'px';
square.style.left = Math.floor(Math.random() * 750) + 'px';

// Move the square
setInterval(() => {
  let top = parseInt(square.style.top);
  let left = parseInt(square.style.left);
  let direction = Math.floor(Math.random() * 4); // 0: up, 1: down, 2: left, 3: right

  switch (direction) {
    case 0:
      top -= 10;
      break;
    case 1:
      top += 10;
      break;
    case 2:
      left -= 10;
      break;
    case 3:
      left += 10;
      break;
  }

  // Keep the square within the game container
  top = Math.max(0, Math.min(top, 550));
  left = Math.max(0, Math.min(left, 750));

  square.style.top = top + 'px';
  square.style.left = left + 'px';
}, 100);

// Handle click event
square.addEventListener('click', () => {
  score++;
  scoreElement.textContent = 'Score: ' + score;
});