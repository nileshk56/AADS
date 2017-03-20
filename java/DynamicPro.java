public class DynamicPro
{

	public static int cw(int n)
	{
		if(n<0)
			return 0;
		if(n==0)
			return 1;

		return cw(n-1) + cw(n-2) + cw(n-3);
	}

	public static void main(String[] args)
	{
		int i = cw(10);

		System.out.println("i" + i);

	}
}