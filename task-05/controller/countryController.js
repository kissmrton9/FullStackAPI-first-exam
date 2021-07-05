const db = require('../db/db');

/**
 * 1. Definiáld a getAll nevű metódust, ami az adatbázis kezelő modulod 
 * getAll metódusát hívja meg és visszaadja az értékét.
 */
const getAll = async () => {
    const list = await db.getAll();
    return list;
};

/**
 * 3. Exportáld ki a getAll metódust egy objektumban, hogy más fájlokból is 
 * elérhető legyen.
 */ 

module.exports = {
    getAll,
};
