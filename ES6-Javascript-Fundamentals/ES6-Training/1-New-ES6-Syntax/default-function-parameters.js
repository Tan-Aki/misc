var getProduct = function(productID = 1000){
    console.log(productID);
};

getProduct(); // 1000





var getProduct = function(productID = 1000, type = 'software'){
    console.log(productID, type);
};

getProduct(undefined,'hardware'); // 1000, hardware





