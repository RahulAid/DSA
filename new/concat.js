a=[1, 2, 3] 
b=[4, 5]
c= [6, 7]

//d=a.concat(b,c)
//console.log(d)


function concatenate_arrays(arrays){
    concatenated_array = []
    for(i=0;i<arrays.length;i++){
        concatenated_array.push(arrays[i])
    }
    return concatenated_array
}


cconcatenated_array = concatenate_arrays([...a,...b,...c])
console.log(cconcatenated_array)

