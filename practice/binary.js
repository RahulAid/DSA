const arr = ['a','b','c','d','e']

function  binary(search, start, end){
    if (start>end){
        return 'Not Found'
    }

    const middle = Math.floor((start+end) / 2)

    if (arr[middle] === search){
        return `Found item at ${middle} position`
    }

    if(arr[middle] > search){
        return binary(search, start, middle-1)
    }

    if(arr[middle] < target){
        return binary(search, middle+1, end)
    }
}

console.log(binary("c",0,4))

