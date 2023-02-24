a=[1,2,3,3,3,4,4,5]
b=[1,1,3,3,4]

//c=a.filter((item) => {
   //return b.includes(item)
//})

//console.log(c)
//console.log([...new Set(c)])

f=new Set(a)
g=new Set(b)
//console.log(f,g)

h=[]

for(let i of g){
    if(f.has(i) )
    h.push(i)
}

console.log(h)