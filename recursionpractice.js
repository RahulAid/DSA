a=[]

function recursion(index,element)
{
    if (index>9)
    return
    else
    {a[index]=element}
    index++
    element++
    recursion(index,element)
}

recursion(0,1)
console.log(a)

const sum = a.reduce((acc,item) => acc + item , 0)
console.log("sum of elements in array : ", sum)
console.log("average of sum", sum/a.length)