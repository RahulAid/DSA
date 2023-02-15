const numbers = [1,2,3,2,3,4,5,4,5,6,7,8,9]

const even = numbers.filter(isEven)

function isEven(item)
{
    return item%2===0
}

console.log(even)

const odd = numbers.filter(isOdd)

function isOdd(item){
    return item%2!==0
}

console.log(odd)


//Remove Duplicate Elements from Array

const unique= numbers.filter(isUnique)

function isUnique(item,index,arr)
{
    return arr.indexOf(item)===index
}

//console.log(unique)


const uniques= numbers.filter((item,index,arr) => {
    return arr.indexOf(item)===index

})

console.log(uniques)