function Node(data){
	this.data = data;
	this.left = null;
	this.right = null;
};

function height(root){
	if(root == null)
		return 0;

	var lHeight = height(root.left);
	var rHeight = height(root.right);

	return Math.max(lHeight, rHeight) + 1;
}

function buildLinkedListWithBFS(){
	var root = new Node(1);
	root.left = new Node(2);
	root.right = new Node(3);
	root.left.left = new Node(4);
	root.left.right = new Node(5);
	root.right.left = new Node(6);
	root.right.right = new Node(7);

	function BFS(){
		var res = [];
		var curr = [];

		curr.push(root);

		while(curr.length){
			res.push(curr);
			var parent = Object.assign(curr);
			curr = [];
			for(var i=0; i<parent.length; i++){
				if(parent[i].left){
					curr.push(parent[i].left);
				}
				if(parent[i].right){
					curr.push(parent[i].right);
				}
			}
		}

		return res;
	}

	console.log(BFS())
}


var root = new Node(56);
root.left = new Node(1);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.left.left = new Node(4);


//console.log(height(root));

buildLinkedListWithBFS();