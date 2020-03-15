let fngrid = (arg) => { // function  > () => {}
 // pas besoin de definir un arg (already let)
  arg = parseInt(arg);
  let str = '';
  let half = (arg-1) / 2; // Avoid redo math 9 times every loops



   for (let y=-half;y < half; y++) {
      for (let x=0;x < arg; x++) {

        // It's on lozange ?
          if (
              (y === 0 && x === half)
              || (y === arg-1 && x === half)
              || (y === half && (x === 0 || x === (arg-1)))
              || (y < half && (x === half - y || x === half + y))
              || (y > half && (- x === y - (arg-1) - half  || x === y - half))
            ) {
              str += ` x`;
          }
          // It's not
          else{
              str += ` .`;
          }
      }
          //(y === 0 && x === (arg-1)/2 || y === arg-1 && x === (arg-1)/2 || y === (arg-1)/2 && (x === 0 || x === (arg-1)) ? str = `${str} x` : str = `${str} .`)
          //str = `${str} .`;
    str = `${str}\n`;
  }
  console.log(str);

}
fngrid(7);