#!/usr/bin/env node

//chmod u+x ./exojeje2.js
//   ./exoejeje2.js

let argX; 
let argY;

try {
    argX = parseInt(process.argv[2]); 
    argY = parseInt(process.argv[3]);
    console.log(process.argv);

    if((argX === NaN || argY === NaN) || 
       (argX <= 0 || argY <= 0))
        throw "Erreur : les chiffres doivent être superieurs à 0";
}
catch(e) {
    console.log(e);
    return;  // exit le scope actuel
}
console.log(argX);
console.log(argY);
let fngrid = function(maxX,maxY) {
    //arg = parseInt(arg);
    
    let str = '';

     for (let y=0;y < maxY; y++) {
        for (let x=0;x < maxX; x++) {
            //(y === 0 && x === (arg-1)/2 || y === arg-1 && x === (arg-1)/2 || y === (arg-1)/2 && (x === 0 || x === (arg-1)) ? str = `${str} x` : str = `${str} .`)
            str = `${str} .`;
        }
        str = `${str}\n`;
    }    
    console.log(str);

}

// console.log(typeof(process.argv));

// console.log(argfrombash);
// console.log(process.argv);



fngrid(argX,argY);



// let test = {
//     x: 15,
//     y: 50
//   }
  
//   console.log(test.x)
//   test.x = 666
  
//   test.tan = 30;
//   test.tan = "jullin";
//   test["tan"] = "jullin";
  
//   let taille = test.length;
  
  
  
  
  
  
  
  
  
  
  