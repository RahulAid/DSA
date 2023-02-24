var a=[14,14,14,34,34,35,35,46]
var b=[54,14,34,46,46,35,35,35]
//c=a.concat(b)

function unique(a){
    return new Set(a)
}

d=unique(b)
//console.log(d)

function uniques(a){
    return new Set(a)
}

h=uniques(a)
//console.log(h)

v= a.filter((item) => {
    return b.includes(item)
})

console.log([...new Set(v)])


count={}
a.forEach((item) => {
    if(count[item]){
        count[item]++
    }else{
        count[item]=1
    }
})
//console.log(count)


