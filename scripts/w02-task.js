/* W02-Task - Profile Home Page */



/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Riana Warner';

let currentYear = new Date().getFullYear();

let profilePicture = "images/riana.jpg";


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');
 
const yearElement = document.querySelector('#year');

let imageElement = document.getElementById('profilepicture')

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute("src", profilePicture);

imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */

let favoriteFoods = ["Pizza", "Sushi", "Burgers", "Tacos", "Pasta"];
foodElement.innerHTML = favoriteFoods.join("<br>");

let additionalFavoriteFood = "Oreo's";

favoriteFoods.push(additionalFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods.join("<br>")}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join("<br>")}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join("<br>")}`;
