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

		wordCount("my name is nilesh nilesh is very smart");
	}

	public static void wordCount(String str) 
	{
		String[] arr = str.split(" ");
		HashMap<String, Integer> map = new HashMap<String, Integer>();
		for(String word:arr)
		{
			if(!map.containsKey(word))
				map.put(word, 1);
			else 
				map.put(word, map.get(word) + 1);
		}

		for(String word:arr)
		{
			System.out.println(word + " " + map.get(word));
		}
	}
}