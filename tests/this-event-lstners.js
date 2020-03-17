class Test {
	logThisArr = () => {
		console.log('arrow : ', this);
	};
	logThisReg = function() {
		console.log('Reg : ', this);
	};
}

const test = new Test();

const btn = document.querySelector('.mybtn');
btn.addEventListener('click', test.logThisArr); // Test {logThisArr: ƒ, logThisReg: ƒ}

btn.addEventListener('click', test.logThisReg); // <button class="mybtn">Click me</button>
