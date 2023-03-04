function insertionsort(arr)
{
    for(i=1;i<a.length;i++){
        curr = arr[i]
        j=i
        while((j>=0) && (curr<arr[j-1])){
            arr[j]=arr[j-1]
            j--
        }
        arr[j]=curr
    }

    return arr
}

a=[9,8,7,6,5]
console.log(insertionsort(a))