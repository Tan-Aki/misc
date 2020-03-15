let toto = 'tata';

let myFn = (arg) => {
    console.log(arg);
    while (arg ==='tata') {
        arg = 'tutu';
        myFn(arg);  
    };
};

myFn(toto);