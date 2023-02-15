//Display numbers in array
numbers = [1,2,2,3,3,3,4,4,4,4,4]

numbers.forEach((item,index,arr) => {
//console.log('a['+index+'] = ' +item)    
});


//Display sum of all elements
let sum =0
numbers.forEach(item => {
    
    sum += item;
})
//console.log(sum);


//Count number of elements in array
count = {}

numbers.forEach(item => {
    if(count[item]){
        count[item]++
    }
    else{
        count[item] = 1;
    }
})
console.log(count[4])

//console.log(count)