public class LinkedList {

	Node head;
	Node left;

	class Node {
		Node next;
		int data;
		Node(int d) {
			next = null;
			data = d;
		}
	}

	/*public void reverse(Node n) {
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
	}*/

	public boolean isPalindrome(Node right)
	{
		if(right == null) 
			return true;

		boolean isp = isPalindrome(right.next);

		if(isp == false) {
			return false;
		}

		if(left.data == right.data) {
			left = left.next;
			return true;
		}

		return false;
	}

	public static void main(String args[]) {
		/*LinkedList list = new LinkedList();
        list.head = new Node(85);
        list.head.next = new Node(15);
        list.head.next.next = new Node(4);
        list.head.next.next.next = new Node(20);*/

        LinkedList list1 = new LinkedList();
        list1.head = new Node(1);
        list1.head.next = new Node(2);
        list1.head.next.next = new Node(3);
        list1.head.next.next.next = new Node(2);
        list1.head.next.next.next.next = new Node(1);

        list1.left = list1.head;

        boolean isp = list1.isPalindrome(list1.head);

        System.out.println(isp);
	}
}