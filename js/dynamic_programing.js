function coinChange(amount, denoms, index) {
	if (index >= denoms.length - 1) 
		return 1; // last denom

	var denomAmount = denoms[index];
	var ways = 0;

	for (var i= 0; i * denomAmount <= amount; i++) {
		var amountRemaining = amount - i * denomAmount;
		ways+= coinChange(amountRemaining, denoms, index + 1);
	}
	return ways;
}

console.log(coinChange(4, [3,2,1], 0));