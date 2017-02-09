public class Heap
{
	public int parent(int i)
	{
		return i / 2;
	}

	public int left(int i)
	{
		return (2 * i) + 1;
	}

	public int right(int i)
	{
		return (2 * i) + 2;
	}

	public void swap(int[] arr, int j, int k)
	{
		int tmp = arr[j];
		arr[j] = arr[k];
		arr[k] = tmp;
	}

	public void maxHeapify(int[] arr, int heapSize, int i)
	{
		int left = left(i);
		int right = right(i);
		int largest = i;

		if( left < heapSize && arr[left] > arr[i] )
		{
			largest = left;
		}

		if( right < heapSize && arr[right] > arr[i] ) 
		{
			largest = right;
		}

		if(largest != i) 
		{
			System.out.println(largest+" "+i);
			swap(arr, largest, i);
			maxHeapify(arr, heapSize, largest);
		}
	}

	public void buildMaxHeap(int[] arr)
	{
		for(int i = (arr.length/2) - 1; i>=0; i--) 
		{
			System.out.println("HEY "+i);
			maxHeapify(arr, arr.length, i);
		}
	}

	public void heapSort(int[] arr)
	{
		buildMaxHeap(arr);

		System.out.println("buildMaxHeap");
		printArray(arr);

		for(int i = arr.length-1; i>=0; i--) 
		{
			swap(arr, 0, i);
			maxHeapify(arr, i, 0);
		}
	}

	public static void test(int[] arr)
	{
		arr[0] = 56;
	}

    static void printArray(int arr[])
    {
        int n = arr.length;

        for (int i=0; i<n; ++i)
            System.out.print(arr[i]+" ");
        
        System.out.println();
    }


	public static void main(String[] args)
	{	
		//int[] arr = {12, 11, 13, 5, 6, 7};
		int[] arr = {12, 11, 13, 5, 6, 7};
		Heap heap = new Heap();
		/*heap.buildMaxHeap(arr);
		printArray(arr);*/
		heap.heapSort(arr);
		printArray(arr);

	}
}