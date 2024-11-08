'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const displayColor = document.querySelector('.color');

changeColorBtn.addEventListener('click', () => {
  const rdmColor = getRandomHexColor();
  document.body.style.backgroundColor = rdmColor;
  displayColor.textContent = rdmColor;
});

