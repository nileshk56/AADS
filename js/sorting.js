//var Arr = [10, 80, 30, 90, 40, 50, 70];
var Arr = [10, 80, 30, 90, 40, 50, 70, 100, 800, 300, 900, 400, 500, 700, 1000, 8000, 330, 9450, 450, 54350, 702];

//var Arr = [10, 80, 30, 40];

function quickSort(low, high) {

	if(low < high) {
		var pivotIndex = partition(low, high);
		console.log(pivotIndex, low, high);
		quickSort(low, pivotIndex-1);
		quickSort(pivotIndex+1, high);
	}
}

function partition(low, high){
	var pivot = Arr[high];
	var lowIndex = low-1;

	for(j=low; j<= high-1; j++) {

		if(Arr[j] < pivot) {
			lowIndex++;
			swap(lowIndex, j)
		}
	}

	swap(lowIndex + 1, high);
	return lowIndex + 1 
}

function swap(a,b) {
	var tmp = Arr[a];
	Arr[a] = Arr[b];
	Arr[b] = tmp;
}

console.time("a");
quickSort(0, Arr.length - 1);
console.timeEnd("a");
console.log(Arr);
