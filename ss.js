a=[3,5,7,4,1,2,6]

function sort(arr){

    n= arr.length

for(let i=0;i<n;i++)
{
    min = i

    for (let j=i+1;j<n;j++)
    {
        arr[j]<arr[min]
        min=j
    
    }
    if (min != i)
    {
        temp=arr[i]
        arr[i]=arr[min]
        arr[min]=temp
    }
}
return arr
}

console.log(sort(a))