var a = []

function recursion(index,number)
{
    if (index>5)
    return
    else
    {a[index]=number}
    number++
    index++
    recursion(index,number)
}

recursion(0,0)


const sum = a.reduce(sums,0)

function sums (acc,item){ return acc+item }
console.log("Sum of elements in array",sum)
console.log("Average of elements in array",sum/a.length)