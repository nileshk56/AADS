import java.util.*;

public class Hash
{
	public static void main(String[] args)
	{
		HashMap<Integer, String> hm = new HashMap<Integer, String>();
		
		hm.put(2,"yo");
		hm.put(3, "no");
		hm.put(56, "ho");

		for(Map.Entry m:hm.entrySet())
		{
			System.out.println(m.getKey() + " " + m.getValue());
		}

		System.out.println(hm.get(56));
	}
}