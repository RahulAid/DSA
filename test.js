function selectionsort(arr)
{
    for(let i=0;i<arr.length;i++){
        min=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }

        if(min!=i){
            temp=a[i]
            a[i]=a[min]
            a[min]=temp
        }
    }

    return arr
}

a=[3,7,6,4,5]
sortedarray=selectionsort(a)
console.log(sortedarray)