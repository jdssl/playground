'use strict';

const foo = function () {
	let a = 3, b = 5;
	const bar = function() {
		let b = 7, c = 11;

		a += b + c; // b is 7 and c is 11
		// 3 + 7 + 11
	};
	bar();
	// a is 21 and b is 5
}

foo();
