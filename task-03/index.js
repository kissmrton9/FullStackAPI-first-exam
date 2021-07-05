/**
 * 1. Töltsd be a json állományok kezelését végző modult az azonos mappából és 
 * emeld ki egy változóba az update metódusát.
 */

const { update } = require('./jsonHandler');

/**
 * 2. Ebben a névtelen aszinkron függvényben futtatsd az update metódust. 
 * Ha készen van a json kezelő modulod, akkor csupán élesítened kell az alábbi 
 * kódot a komment jelek eltávolításával.
 */
( async () => {
    console.log( await update({
        "id": 7,
        "name": "Wine - Badacsony - Hungarian",
        "price": 99,
        "bestBefore": "2021-05-30"
    }));
})();
/*
*/
