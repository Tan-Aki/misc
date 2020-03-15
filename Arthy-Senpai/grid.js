let fngrid = function(arg) {
    arg = parseInt(arg);
    let str = '';
    let half = arg-1)/2;

     for (let y=0;y < arg; y++) {
        for (let x=0;x < arg; x++){
            if (y === 0 && x === half){ //premier x sur la premiere ligne
                str = `${str} x`;
            }
            else if (y === arg-1 && x === half){ // dernier x sur la dernière ligne
                str = `${str} x`;
            }
            else if(y === half && (x === 0 || x === (arg-1))){ //x sur les côtés gauches au milieu de l'axe des y
                str = `${str} x`;
            }
            else if (y < half && (x === half - y || x === half + y)){ //x top half diagonales  
                str = `${str} x`;
            }
            else if (y > half && (- x === y - (arg-1) - half  || x === y - half)){ //x top half diagonales  
                str = `${str} x`;
            }

            else{
                str = `${str} .`;
            }
        }        
            //(y === 0 && x === (arg-1)/2 || y === arg-1 && x === (arg-1)/2 || y === (arg-1)/2 && (x === 0 || x === (arg-1)) ? str = `${str} x` : str = `${str} .`)
            //str = `${str} .`;
                str = `${str}\n`;
    }    
    console.log(str);

}
fngrid(7);