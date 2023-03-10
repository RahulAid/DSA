function sum_numbers(num){
    // initialize a variable to hold the sum
    total = 0
    
    // iterate through all numbers from 1 to num
    for (i=1; i<=num; i++){
        total += i
    }
    return total
}

console.log(sum_numbers(7))


