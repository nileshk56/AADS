function Node(data){
	this.data = data;
	this.next = null;
}

function linkedList(){
	this.head = null;

	this.insertLL = function (data) {
		var newNode = new Node(data);

		if(this.head == null) {
			this.head = newNode;
		} else {

			var tmpNode = this.head;

			while(tmpNode.next) {
				tmpNode = tmpNode.next;
			}

			tmpNode.next = newNode;
		}
	};

	this.printLL = function() {

		var tmpNode = this.head;

		while(tmpNode) {
			console.log(tmpNode.data);
			tmpNode = tmpNode.next;
		}

	}

	this.detectNRemoveLoop = function(){
		var slow = this.head;
		var fast = slow.next;

		while( fast && fast.next ) {
			console.log(slow.data, fast.data)
			if(slow == fast) {
				break;
			}
			slow = slow.next;
			fast = fast.next.next;
		}

		if(slow == fast)
		{
			slow = this.head;
			while(slow != fast.next) {
				slow = slow.next;
				fast = fast.next;
				console.log('loop2', fast.data, slow.data);
			}
			fast.next = null;
		}
	}



}

var LL1 = new linkedList();
LL1.insertLL(1);
LL1.insertLL(2);
LL1.insertLL(3);
//LL1.printLL();


// DETECT AND REMOVE LINKED LIST ////////////////////////////////////////////

var LL2 = new linkedList();

var tmp = new Node(2);
LL2.head = new Node(1);
LL2.head.next = tmp;
LL2.head.next.next = new Node(3);
LL2.head.next.next.next = new Node(4);
LL2.head.next.next.next.next = tmp;
LL2.detectNRemoveLoop();
LL2.printLL();