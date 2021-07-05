//const carController = require('../controller/controller');
const controller = require('../controller/countryController');

/**
 * 1. Készíts egy router objektumot, ami a get kulcsnál meghívja a carController 
 * getAll nevű metódusát és string típusként visszaadja az adatok tömbjét.
 */

const router = {
    'get': async res => {
        res.writeHead(200, {
            'Content-type': 'application/json'
        });
        res.end(JSON.stringify(await controller.getAll()),'utf8')
    }
//  '/index': res => controller.index(res),
//  '/about': res => controller.about(res),
//  '/contact': res => controller.contact(res),
//  '/404': res => controller.error404(res)
}

/**
 * 2. A module az előző pontnál elkészített router objektumot adja vissza.
 */
module.exports = {
    router,
};
