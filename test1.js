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
            temp = arr[i]
            arr[i]=arr[min]
            arr[min]= temp
        }
        
    }
    return arr
}

a=[8,6,7,9,4,5]
console.log(selectionsort(a))