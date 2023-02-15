//Double nmbers of array
const numbers = [1, 2, 3, 4, 5]

const newnumbers = numbers.map(double)
console.log(numbers)
function double(item) {
    return item * 2;
}
console.log(newnumbers)


//Multiply items with index
function multiply(item, index) {
    return item * index
}
const mnumbers = numbers.map(multiply)
console.log(mnumbers)