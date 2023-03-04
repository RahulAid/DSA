function selectionsort(arr){
    for(i=0;i<arr.length;i++)
    {
        min=i
        for(j=i+1;j<arr.length;j++)
        {
            if(arr[j]<arr[min]){
                min=j
            }
        }

        if(min!=i){
            temp=arr[i]
            arr[i]=arr[i+1]
            a[i+1]=temp
        }
    }
return arr

}

a=[9,8,7,6,5]
console.log(selectionsort(a))