// Import stylesheets
import './style.css';

// Write Javascript code!
let result = document.getElementById('result');
let meaning = document.getElementById('meaning');
const button = document.getElementById('button');

button.addEventListener('click', function () {
  const height = document.getElementById('height');
  const weight = document.getElementById('weight');
  let num = (weight.value / Math.round(height.value * height.value)) * 10000;
  result.innerText = num.toFixed(2);

  if (height.value == 0 || weight.value == 0) {
    meaning.innerText = '請輸入身高體重';
  } else if (num < 18.4) {
    meaning.innerText = '過輕';
    meaning.style.color = 'rgb(255, 240, 180)';
  } else if (num > 18.5 && num < 24.9) {
    meaning.innerText = '正常';
    meaning.style.color = 'rgb(210, 240, 155)';
  } else if (num > 25 && num < 39.9) {
    meaning.innerText = '過重';
    meaning.style.color = 'rgb(215, 180, 225)';
  } else {
    meaning.innerText = '肥胖';
    meaning.style.color = 'rgb(255, 200, 170)';
  }
});
