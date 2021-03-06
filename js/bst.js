function Node(data){
	this.data = data;
	this.left = null;
	this.right = null;
}

function BST(){
	this.root = null;

	this.insert = function(root, data){

		if(root == null) {
			root = new Node(data);
			return root;
		}

		if(data < root.data) {
			root.left = this.insert(root.left, data);
		} else {
			root.right = this.insert(root.right, data);
		}

		return root;
	}

	this.counter=0;
	this.kthSmall = function(root, k) {
		if(root == null) {
			return null;
		}

		this.kthSmall(root.left, k);
		this.counter++;
		console.log("K", this.counter, root.data);
		if(k == this.counter) {
			console.log("Kth Small",root.data);
		}
		this.kthSmall(root.right, k);
	}
}

//build a BST of minimal height with sorted arrays
BST.prototype.buildBST = function(){
	var A = [1,2,3,4,5,6,7];

	function genBST(st, end){
		if(st == end){
			return new Node(A[st]);
		}
		var mid = Math.floor((st+end)/2);
		var root = new Node(A[mid]);
		root.left = genBST(st, mid-1);
		root.right = genBST(mid+1, end);
		return root;
	}

	console.log(genBST(0,6));
}

var bst1 = new BST();
bst1.root = bst1.insert(bst1.root, 20);
bst1.root = bst1.insert(bst1.root, 10);
bst1.root = bst1.insert(bst1.root, 15);
bst1.root = bst1.insert(bst1.root, 25);

//bst1.kthSmall(bst1.root, 4);
//console.log(bst1.root);

bst1.buildBST();