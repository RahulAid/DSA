//Count number of elements in array 

a=[11,11,11,43,43,54,54,54,54,65,76,,76,76,78]

count ={}

//a.filter((element) => {
//    if(count[element])
//    count[element]++
//    else{
//        count[element]=1
//    }
//})
//console.log(count)


a.filter((element) => {
    if(count[element])
        count[element]++
        else{
            count[element]=1
        }
    }
)


console.log(count)