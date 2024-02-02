/* LESSON 3 - Programming Tasks */

/* Profile Object */

let myProfile = {
    name: "Victoria Wilkosz",
    photo: "images/victoriawilkosz.jpeg",
    favoriteFoods: [
        'Veggie burger',
        'Baked potatoes',
        'Pierogi ruskie',
        'Ice cream',
        'Cheesecake'
    ],
    hobbies: ['Cooking', 'Homemaking', 'Opera singing'],
    placesLived: [
        { place: 'Warsaw', length: '2 years' },
    ]
};

// Add an item to the placesLived array
let newPlace = {
    place: 'London',
    length: '1 year'
};

myProfile.placesLived.push(newPlace);

/* DOM Manipulation - Output */

document.addEventListener('DOMContentLoaded', function () {
   /* Name */
    let nameHeading = document.createElement('span');
    nameHeading.textContent = myProfile.name;
    document.getElementById('name').appendChild(nameHeading);

    /* Photo with attributes */
    let photoElement = document.createElement('img');
    photoElement.setAttribute('src', myProfile.photo);
    photoElement.setAttribute('alt', myProfile.name);
    document.getElementById('photo').appendChild(photoElement);

    /* Favorite Foods List */
    let favoriteFoodsList = document.createElement('ul');
    myProfile.favoriteFoods.forEach(food => {
        let listItem = document.createElement('li');
        listItem.textContent = food;
        favoriteFoodsList.appendChild(listItem);
    });
    document.getElementById('favorite-foods').appendChild(favoriteFoodsList);

    /* Hobbies List */
    let hobbiesList = document.createElement('ul');
    myProfile.hobbies.forEach(hobby => {
        let listItem = document.createElement('li');
        listItem.textContent = hobby;
        hobbiesList.appendChild(listItem);
    });
    document.getElementById('hobbies').appendChild(hobbiesList);

    /* Places Lived DataList */
    let placesLivedList = document.createElement('dl');
    myProfile.placesLived.forEach(place => {
        let dt = document.createElement('dt');
        dt.textContent = place.place;

        let dd = document.createElement('dd');
        dd.textContent = place.length;

        placesLivedList.appendChild(dt);
        placesLivedList.appendChild(dd);
    });
    document.getElementById('places-lived').appendChild(placesLivedList);
});
