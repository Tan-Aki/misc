
// const myModule = {
//   x: 42,
//   getX: function() {
//     return this.x;
//   }
// }
// const module2 = {
//   x: 20,
//   getX: function() {
//     return this.x;
//   }
// }


// console.log(myModule.getX());

// const unboundGetX = myModule.getX();
// console.log(unboundGetX); // The function gets invoked at the global scope

// const boundGetX = unboundGetX.bind(module2);
// console.log(boundGetX);



const toto = {
    x: 42,
    getX: function() {
      return this.x;
    }
  }
  const module2 = {
    x: 20,
  }
  
  const unboundGetX = toto.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  const boundGetX = unboundGetX.bind(module2);
  console.log(boundGetX());
  // expected output: 20
