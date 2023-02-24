a=[45,56,76,56,56,76,78,89]

b=a.filter((item,index,arr) => {

    return arr.indexOf(item)===index ;
})

console.log(b)