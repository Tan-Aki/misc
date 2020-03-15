



let argfrombash = process.argv[2]; 





let fngrid = function(arg) {
    arg = parseInt(arg);
    let str = '';

     for (let y=0;y < arg; y++) {
        for (let x=0;x < arg; x++) {
            (y === 0 && x === (arg-1)/2 || y === arg-1 && x === (arg-1)/2 || y === (arg-1)/2 && (x === 0 || x === (arg-1)) ? str = `${str} x` : str = `${str} .`)
            //str = `${str} .`;
        }
        str = `${str}\n`;
    }    
    console.log(str);

}

console.log(typeof(process.argv));

console.log(argfrombash);
console.log(process.argv);


fngrid(argfrombash);