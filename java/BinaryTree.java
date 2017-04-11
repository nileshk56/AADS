public class BinaryTree
{
	public Node root;
	public class Node
	{
		int data;
		Node left;
		Node right;

		public Node(int d)
		{
			data = d;
			left = null;
			right = null;
		}
	}

	public int height(Node root){
		if(root == null) {
			return 0;
		}

		int lh = height(root.left);
		int rh = height(root.right);

		return 1 + Math.max(lh, rh);
	}

	public int diameter(Node root){
		if(root == null) {
			return 0;
		}

		int lh = height(root.left);
		int rh = height(root.right);

		mainDiameter = 1 + lh + rh;



	}

		
	

	public static void main(String[] args)
	{
		BinaryTree bt = new BinaryTree();

		bt.root =  bt.new Node(5);
		bt.root.left = bt.new Node(1);
		bt.root.right = bt.new Node(4);
		bt.root.left.left = bt.new Node(3);
		bt.root.left.right = bt.new Node(7);
		bt.root.left.left.left = bt.new Node(2);

		System.out.println(bt.height(bt.root));
		System.out.println("aaadsfa");
	}
}