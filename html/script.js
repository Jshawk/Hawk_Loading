// Simple fake progress bar
let progress = 0;
const progressBar = document.getElementById('progress-bar');
const loadingText = document.getElementById('loading-text');

function update() {
  progress += Math.random() * 5;
  if (progress > 100) progress = 100;
  progressBar.style.width = progress + '%';
  loadingText.textContent = 'Loading... ' + Math.floor(progress) + '%';

  if (progress < 100) {
    requestAnimationFrame(update);
  } else {
    loadingText.textContent = 'Ready!';
  }
}

requestAnimationFrame(update);
