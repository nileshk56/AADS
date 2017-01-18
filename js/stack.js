function Stack() 
{
	this.arr = [];
	this.top = -1;

	this.push = function(data) {
		this.arr[++this.top] = data;
	}

	this.pop = function(){
		console.log(this.arr[this.top]);
		this.top--;
	}

	this.infixToPostfix = infixToPostfix
}

var s = new Stack();

s.push("5");
s.push("2");
s.push("7");

console.log(s.arr);

s.pop()
s.pop()
s.pop()

//infix to postfix//////////////////////////////////////////////////////
/*
	a + b = infix; a b + = postfix
	a + b * c = infix
	a b c * + = a (b c *) + = postfix, first calculate the result of bc*(which means b*c) then add it to a	
*/
function infixToPostfix()
{

}


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