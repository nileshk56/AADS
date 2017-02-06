public class LinkedList {

	Node head;

	class Node {
		Node next;
		int data;
		Node(int d) {
			next = null;
			data = d;
		}
	}

	public void reverse(Node n) {
		Node prev = null;
		Node current = n;
		Node next = null;

		while(current) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}
		head = next;
	}

	public static void main(string args[]) {
		LinkedList list = new LinkedList();
        list.head = new Node(85);
        list.head.next = new Node(15);
        list.head.next.next = new Node(4);
        list.head.next.next.next = new Node(20);
	}
}