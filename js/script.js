var link = document.querySelector('.map .btn');
var popup = document.querySelector('.modal-answer');
var close = document.querySelector('.modal-close');

var firstBtn = document.querySelector('.first-btn');
var secondBtn = document.querySelector('.second-btn');
var thirdBtn = document.querySelector('.third-btn');
var body = document.querySelector('body');

var iceCream = document.querySelector('.ice-cream-bg');
var lightBg = document.querySelector('body');

var textBg = document.querySelector('.text-bg');

link.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('modal');
});

close.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('modal');
});

firstBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  body.style.backgroundColor = '#849d8f';
  iceCream.style.backgroundImage = "url('img/ice_cream.png')";
  lightBg.style.backgroundImage = "url('img/background-icecream-light.png')";
  textBg.innerHTML = 'Крем-брюле и пломбир с малиновым джемом';
});

secondBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  body.style.backgroundColor = '#8996a6';
  iceCream.style.backgroundImage = "url('img/screen2.png')";
  lightBg.style.backgroundImage = "url('img/screen2-light.png')";
  textBg.innerHTML = 'Шоколадный пломбир и лимонный сорбет';
  firstBtn.style.backgroundColor = null;
});

thirdBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  body.style.backgroundColor = '#9d8b84';
  iceCream.style.backgroundImage = "url('img/screen3.png')";
  lightBg.style.backgroundImage = "url('img/screen3-light.png')";
  textBg.innerHTML = 'Пломбир с помадкой и клубничный щербет';
  firstBtn.style.backgroundColor = null;
});
