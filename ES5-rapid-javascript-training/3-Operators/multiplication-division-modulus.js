// dont forget .tofixed(2)  when using float, for comparaison

20 * NaN // NaN

20 * undefined // NaN

20 * null // 0



let obj = {
    valueOf : () => {return 100;},
};
let total6 = 4 - obj;  // 400     valueOf an object is a special property
console.log(total6);


4 * Infinity // Infitiny

-4 * Infinity // -Infinity 

4 * "XYZ" // NaN

9 / 0 // Infinity 

-9 / 0 // -Inifinty 

9 / "3" // 3

9%4 // modulus!  // 1 is the remainder

9 % "   4    "  // 1 



