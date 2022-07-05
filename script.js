let randomButton = document.getElementById('randomButton');
let bgBody = document.getElementById('bgBody');
let colorCode = document.getElementById('colorCode');

const colors = ['#FF0000', '#4287f5', '#42f5e0', '#42f56f', '#d7f542'];

randomButton.addEventListener('click', function () {
  let randomValue = Math.ceil(Math.random() * colors.length - 1);
  let color = colors[randomValue];
  bgBody.style.backgroundColor = color;
  randomButton.style.backgroundColor = color;
  colorCode.innerHTML = color;
});
