// Reverse a stack using recursion ###################################################
var arrStack = [1, 2, 3, 4, 5];

function reverseStackByRecusion(top, newTop){

	if(newTop < top) {
		var a = newTop + 1;
		var b = top - 1;
		reverseStackByRecusion(a, b);
	}

	swap(top, newTop);
}

function swap(p1, p2){
	var tmp = arrStack[p1];
	arrStack[p1] = arrStack[p2];
	arrStack[p2] = tmp;
}

console.log('stack before', arrStack);
reverseStackByRecusion(arrStack.length-1, 0);
console.log('stack after', arrStack);

// END OF Reverse a stack using recursion ###################################################