'use strict'

const myClosure = function (a, b) {

	function sum(a, b) {
		return a + b
	}

	function squareArea(side) {
		return side * side
	}

	return {
		squareArea: squareArea
	}
}


myClosure().squareArea(4) // 16
myClosure().sum(1, 2) // TypeError: myClosure().sum is not a function
