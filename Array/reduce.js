const arr = [1,2,3,4,5,6]

//Find sum of elements without loop
const total = arr.reduce(sum,0)

function sum (accumulator,item)
{
    return accumulator + item
}


//console.log("Total of all elements :",total)

//Find greatest number in array using reduce and accumulator

const maxvalue = arr.reduce(isMax,0)

function isMax(accumulator,value){
    if (accumulator>value)
    return accumulator
    else return value
}

//console.log("Maximum element in the array is :",maxvalue)

//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]//


const store = [
    {
        product:'Laptop',
        value:1000,
        count:3
    },
    {
        product:'desktop',
        value:1000,
        count:3
    },
    {
        product:'mobile',
        value:1000,
        count:3
    }
]

const price= store.reduce(sums,0)

function sums(accumulator,item)
{
    return accumulator+item.value
}

//console.log('Total cost of all products',price)


const counts = store.reduce(sumss,0)

function sumss(accumulator,item)
{
    return accumulator+ item.count
}

//console.log('Total count of all products',counts)


//Find total cost without using loop
const totalcost = store.reduce(tot,0)

function tot(accumulator,item)
{
    return accumulator+item.value*item.count
}

//console.log(totalcost)



//Another way

const totals = store.reduce((accumulator,item) => accumulator + item.value*item.count , 0) 

console.log(totals)