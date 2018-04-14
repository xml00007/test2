/**
 * Created by Arthur on 2017/7/12.
 */



var Chance = require('chance'),
    chance = new Chance();

// Get a random zip code
let ampm = chance.zip()
console.log(ampm);