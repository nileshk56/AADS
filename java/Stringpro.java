import java.util.*;
public class Stringpro
{
	//checks whether a string has all unique chars or not
	public static boolean isAllUniqueChar(String str) 
	{

		HashMap<Character, Boolean> u = new HashMap<Character, Boolean>();

		for(char s:str.toCharArray())
		{
			if(u.containsKey(s)) 
			{
				return false;
			} 
			else 
			{
				u.put(s, true);
			}

		}

		return true;
	}

	public static void main(String[] args)
	{
		String s = "some";
		boolean r = isAllUniqueChar(s);

		System.out.println(r);

		String d = "soffme";
		boolean t = isAllUniqueChar(d);
		
		System.out.println(t);
	}
}