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


var root = new Node(56);
root.left = new Node(1);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.left.left = new Node(4);


console.log(height(root));