/**
 * 1. A fájlok kezeléséhez az fs modul promis alapú verzióját használd.
 */

const fsp = require('fs').promises;
const { join } = require('path');

/**
 * 2. Állítsd be az azonos mappában található .json fájl elérési útját a path 
 * modul join metódusának segítségével.
 */
const jsonPath = join(__dirname,'db/users.json');

/**
 * 3. A jsonPath útvonalon található fájl tartalmát beolvassa és értelmezi, 
 * majd visszaadja a kapott tömböt.
 * 
 * @returns objektumok tömbje
 */
 const getList = async () => {
    const data = await fsp.readFile(jsonPath,'utf8');
    return JSON.parse(data);
};

/**
 * 4. A db/users.json fájlban tárolt 'users' tömbből egy elem kiválasztása az id 
 * alapján. A fájl beolvasását és értelmezését a getList segédfüggvény végzi.
 * 
 * @param {Array} list egy objektumokat tartalmazó tömb
 * @param {Number} id az id, ami alapján keresünk a tömbben
 * @returns a tömbnek az az eleme, amelynek az id -je megegyezik a kapottal
 */
const get = async (id = 0) => {
    const users = await getList();
    return users.find(item => item.id === id);
};

module.exports = {
    get,
};
