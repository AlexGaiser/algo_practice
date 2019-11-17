# An optimized version of Bubble Sort 
def bubble_sort(arr): 
    n = len(arr) 
    for i in range(n): 
        swapped = False
        for j in range(0, n-i-1): 
            if arr[j] > arr[j+1] : 
                temp = arr[j] 
                arr[j] = arr[j+1]
                arr[j+1] = temp 
                swapped = True
        if swapped == False: 
            break
    return arr





print(bubble_sort([3,2,1,4,5,1025,3]))
print(bubble_sort([1,1,1,1,2,4,9,5,555,3,1,1]))
print(bubble_sort([0,55,1,3,99,15,0,0]))
