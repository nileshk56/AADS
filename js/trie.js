function Node() {
	this.children = {};
	this.isLeaf = false;
}

var root = new Node();

function insert(word) {

	var tmpNode = root;

	for(var charKey in word) {

		if(!tmpNode.children[word[charKey]]) {
			tmpNode.children[word[charKey]] = new Node();
		}

		tmpNode = tmpNode.children[word[charKey]];
	}

	tmpNode.isLeaf = true;

}

insert("them");
insert("there");

console.log(root) ;
