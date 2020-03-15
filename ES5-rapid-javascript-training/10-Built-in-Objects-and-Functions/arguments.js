var validateValues = function (){
    console.log(arguments.length); //3
    console.log(arguments[0]); // 1 
    arguments[0] = 9
    console.log(arguments[0]); // 9 

};

validateValues(1,true,'Settings');

