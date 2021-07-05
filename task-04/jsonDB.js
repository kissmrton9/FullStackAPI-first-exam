/**
 * 1. A fájlok kezeléséhez az fs modul promise alapú verzióját használd.
 */

const fsp = require('fs').promises;
const { join } = require('path');

/**
 * 2. Állítsd be az azonos mappában található .json fájl elérési útját a path 
 * modul join metódusának segítségével.
 */
const jsonPath = join(__dirname,'db/products.json');

/**
 * 3. A jsonPath útvonalon található fájl tartalmát beolvassa és értelmezi, 
 * majd visszaadja a kapott tömböt.
 * @returns objektumok tömbje
 */
const getList = async () => {
    const data = await fsp.readFile(jsonPath,'utf8');
    return JSON.parse(data);
};

/**
 * 4. A .json fájlban tárolt termékeket olvassa be és adja vissza. 
 * A fájl beolvasását és értelmezését a getList segédfüggvény végzi.
 * 
 * @returns a termékek objektumai egy tömbben
 */
 const getAll = async () => {
    const list = await getList();
    return list;
};

module.exports = {
    getAll,
};
