var arrHeap = [];
var heapSize = 4;

function parent(i){
    return Math.ceil(i/2) - 1;
}

function left(i){
    return 2*i + 1;
}

function right(i) {
    return 2*i + 2;
}

function swap(i, j) {
    var tmp = arrHeap[i];
    arrHeap[i] = arrHeap[j];
    arrHeap[j] = tmp;
}

function insertIntoHeap(x){
    arrHeap.push(x);
    heapify(parent(arrHeap.length-1));
}

function heapify(i){

    if(i<0) {
        return false;
    }

    var largest = i;
    var l = left(i);
    var r = right(i);
    
    if(l<= heapSize && arrHeap[largest] < arrHeap[l]) 
        largest = l;
    
    if(r<= heapSize && arrHeap[largest] < arrHeap[r])
        largest = r;
    
    if(largest != i) {
        swap(largest, i);
    }

    heapify(parent(i));
}

function heapify2(i){

    if(i<0) {
        return false;
    }

    var largest = i;
    var l = left(i);
    var r = right(i);
    
    if(l<= heapSize && arrHeap[largest] < arrHeap[l]) 
        largest = l;
    
    if(r<= heapSize && arrHeap[largest] < arrHeap[r])
        largest = r;
    
    if(largest != i) {
        swap(largest, i);
    }

    heapify(largest);
}
function buildHeap(){
    insertIntoHeap(1);
    insertIntoHeap(3);
    insertIntoHeap(5);
    insertIntoHeap(2);
    insertIntoHeap(4);

    console.log(arrHeap)
}

function heapSort() {
    for(var i = arrHeap.length - 1; i>=1; i--) {
        swap(i,0);
        heapSize--;
        heapify2(0);
    }
    console.log(arrHeap)
}
buildHeap();
heapSort();

 //5, 4, 3, 1, 2
 

