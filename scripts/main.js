// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// В пременные типа var входят все большая часть типов: int, string, bool, array
// object - обьект это все что угодно, так как в js все считается обьектом

// document.querySelector('html').onclick = function () {
//     alert('Ouch! Stop poking me!') // Перестань тыкать в меня!
// }
// Данный код эквивалентен:
// var myHTML = document.querySelector('html');
// myHTML.onclick = function() {};
// Он является упрощенной его записью

var myImage = document.querySelector('img');
// Задаем обработчик событий с анонимной функцией
myImage.onclick = function () {
    var MySrc = myImage.getAttribute('src');
    if (MySrc === 'images/fon3.jpg') myImage.setAttribute('src', 'images/fon2.png');
    else myImage.setAttribute('src', 'images/fon3.jpg');
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Я буду программистом, ' + myName;
}
// Функция записи имени пользователя и его запоминания

if (!localStorage.getItem('name')) setUserName();
else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Я буду программистом, ' + storedName;
}
// Этот блок - код инициализации, он проверяет был ли авторизован пользователь
// на данном сайте, до этого визита

myButton.onclick = function () {
    setUserName();
}
// Блок для работы кнопки по смени имени пользователя