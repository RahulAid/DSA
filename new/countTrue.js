const arr = [true, false, true, false, true, true];
//const count = arr.filter(Boolean).length;


function countTrue(arr){
    return arr.filter(Boolean).length
}

count= countTrue(arr)
//console.log(count)


function count_true_values(arr){
    count = 0
    for (i=0;i<arr.length;i++){
        if (arr[i] == true)
            count += 1
    }
    return count
}

counts = count_true_values(arr)
console.log(counts)