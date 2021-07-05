/**
 * 1. Töltsd be a json állományok kezelését végző modult az azonos mappából és 
 * emeld ki egy változóba az get metódusát.
 */

const { get } = require('./reader');

/**
 * 2. A teszteléshez vedd ki a komment blokkból az alábbi kódot.
 */

( async () => {
    console.log( await get(9));
})();
/**/
