const debounce = (cb, delay = 1000) => {
	let timeoutId;
	return function(...args) {
		if (timeoutId) clearTimeout(timeoutId);
		timeoutId = setTimeout(() => cb.apply(null, args), delay);
	};
};

// Exemple of closures from mozilla

// function makeAdder(x) {
// 	return function(y) {
// 	  return x + y;
// 	};
//   }

//   var add5 = makeAdder(5);
//   var add10 = makeAdder(10);

//   console.log(add5(2));  // 7
//   console.log(add10(2)); // 12
