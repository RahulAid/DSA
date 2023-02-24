a=[12,34,,34,45,67,67]
b=[12,32,34,34,67,67]

c=a.filter((element)=>{
    return b.includes(element)
})

//console.log(c)

//console.log(...new Set(c))

//console.log([...new Set(c)])

d= (arr) => {
    return new Set(arr)
}

console.log(d(c))
