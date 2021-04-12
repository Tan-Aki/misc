const myArrayWithPrimitives = ["a", "b", "c"];

myArrayWithPrimitives.forEach((item, i, array) => {
    array[1] = "z"; // mutates array
    item = "y"; // does not mutate array
});
console.log(myArrayWithPrimitives); // ["a", "z", "c"]

const myArrayWithNonPrimitives = [{ letter: "a" }, { letter: "b" }, { letter: "c" }];

myArrayWithNonPrimitives.forEach((item, i, array) => {
    array[1].letter = "z"; // mutates the object inside the array
    item.letter = "y"; // also mutates the object inside the array since "item" is a reference to the object in memory ( non primitive type)
});
console.log(JSON.stringify(myArrayWithNonPrimitives)); // [{"letter":"y"},{"letter":"z"},{"letter":"y"}]