/**
 * 1. Töltsd be az fn custom modulban található függvényeket.
 */
const {
    get,
    create,
    update,
    remove
} = require('./fn.js');
/**
 * Ez a tömb a tesztelést szolgálja, nincs vele teendőd.
 */
const users = [{
    "id": 1,
    "firstName": "Gerianna",
    "lastName": "Frisel",
    "email": "gfrisel0@wp.com",
    "gender": "male"
}, {
    "id": 2,
    "firstName": "Starlene",
    "lastName": "Wimpey",
    "email": "swimpey1@wikia.com",
    "gender": "male"
}, {
    "id": 3,
    "firstName": "Gwendolyn",
    "lastName": "Bruntjen",
    "email": "gbruntjen2@sciencedirect.com",
    "gender": "female"
}, {
    "id": 4,
    "firstName": "Juditha",
    "lastName": "Rainsdon",
    "email": "jrainsdon3@usda.gov",
    "gender": "male"
}, {
    "id": 5,
    "firstName": "Pren",
    "lastName": "Effemy",
    "email": "peffemy4@ca.gov",
    "gender": "male"
}, {
    "id": 6,
    "firstName": "Krissie",
    "lastName": "Avrahamy",
    "email": "kavrahamy5@go.com",
    "gender": "female"
}, {
    "id": 7,
    "firstName": "Georgiana",
    "lastName": "Heaker",
    "email": "gheaker6@pagesperso-orange.fr",
    "gender": "male"
}, {
    "id": 8,
    "firstName": "Garv",
    "lastName": "Harborow",
    "email": "gharborow7@ibm.com",
    "gender": "female"
}, {
    "id": 9,
    "firstName": "Lucien",
    "lastName": "Dwyer",
    "email": "ldwyer8@ow.ly",
    "gender": "female"
}, {
    "id": 10,
    "firstName": "Shaylah",
    "lastName": "D'Ambrosi",
    "email": "sdambrosi9@last.fm",
    "gender": "male"
}];

/**
 * 2. Amint elkészültél, vedd ki a kommentből az alábbi kódblokkot és tudod 
 * tesztelni a munkádat.
 */

console.log(get(users, 3));

console.log(create(users, {
    "firstName": "Ramóna",
    "lastName": "Kiss",
    "email": "rami@example.com",
    "gender": "female"
}));

console.log(update(users, {
    "id": 7,
    "firstName": "Géza",
    "lastName": "Nagy"
}));

console.log(remove(users, 3));
/**/
