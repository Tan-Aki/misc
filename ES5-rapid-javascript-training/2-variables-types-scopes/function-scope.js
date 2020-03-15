
// var description = `hardware product`;

// var updateProduct = () => {
//     var description = 'update product';
// }

// updateProduct();
// console.log(description);




function run() {
    var foo = "Foo";
    let bar = "Bar";
  
    console.log(foo, bar);
  
    {
      let baz = "Bazz";
      console.log(baz);
    }
  
    console.log(baz); // ReferenceError
  }
  
  run();