export class Fruit {
    constructor(strain){
        this.strain = strain;
    }
};

export class Star {
    constructor(size){
        this.size = size;
    }
};

// export default ? 



// Before es6 2015:

// /*** a.js ***/

// exports.get = function () {…}

// same as

// module.exports.get = function() {…}

// /*** b.js ***/

// var get = require(“./a.js”);

// With es6 2015:

// /*** a.js ***/

// export function get() {…}

// /*** b.js ***/

// import { get } from “./a.js”;