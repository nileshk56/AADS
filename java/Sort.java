/*
*/

public class Sort
{

	public static void mergeSort(int[] arr, int l, int r)
	{
		if(l < r) 
		{
			int middle = (l+r) / 2;

			mergeSort(arr, l, middle);
			mergeSort(arr, middle + 1, r);

			merge(arr, l, middle, r);

		}
	}

	public static void merge(int[] arr, int l, int m, int r)
	{
		//size of left and right arrays
		int nl = m - l + 1;
		int nr = r - m;

		//create tmp arrays
		int[] L = new int [nl];
		int[] R = new int [nr];

		//fill tmp arrays
		for(int i = 0; i < nl; i++)
		{
			L[i] = arr[l+i];
		}
		for(int i = 0; i < nr; i++)
		{
			R[i] = arr[m + 1 + i];
		}

		//two variable to keep track in two arrays left and right
		int i = 0, j = 0;

		//k variable for keep track of main array
		int k = l;

		while(i < nl && j < nr)
		{
			if(arr[i] < arr[j])
			{
				arr[k] = arr[i];
				i++;
			}
			else 
			{
				arr[k] = arr[j];
				j++;	
			}
			k++;
		}

		/* Copy remaining elements of L[] if any */
        while (i < nl)
        {
            arr[k] = L[i];
            i++;
            k++;
        }
 
        /* Copy remaining elements of L[] if any */
        while (j < nr)
        {
            arr[k] = R[j];
            j++;
            k++;
        }
	}

	/* A utility function to print array of size n */
    static void printArray(int arr[])
    {
        int n = arr.length;
        for (int i=0; i<n; ++i)
            System.out.print(arr[i] + " ");
        System.out.println();
    }


	public static void main(String[] args)
	{
		int arr[] = {12, 11, 13, 5, 6, 7};
 
        System.out.println("Given Array");
        printArray(arr);

        mergeSort(arr, 0, arr.length - 1);
        printArray(arr);
	}
}