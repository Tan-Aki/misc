tan = (size) => {
  let str = '\n';
  let half = parseInt(size / 2);

  for(let y=-half; y<=half; y++) {
    for(let x=-half; x<=half; x++) {

      let dist = Math.abs(x) + Math.abs(y);
      let radius = parseInt(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));

      str += ` ${dist == half ? 'x' : (radius == half ? 'o' : '.')} `;
    }
    str += '\n';
  }

  return str;
}

console.log(tan(25));
