/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Victoria Wilkosz';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/victoriawilkosz.jpeg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('favoriteFoods');
const yearElement = document.querySelector('#year');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
document.querySelector('img').setAttribute('src', profilePicture);
document.querySelector('img').setAttribute('alt', `Profile image of ${fullName}`);
foodElement.textContent = currentYear;

/* Step 5 - Array */

const favoriteFoods = ['neapolitan pizza', 'fries', 'veggie burger', 'pierogi', 'rosół', 'gelato'];
foodElement.textContent = favoriteFoods.join(', ');
const newFavoriteFood = 'greek salad';
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;



