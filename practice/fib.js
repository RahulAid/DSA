n=8
a=0
b=1
console.log("Fibonacci Series")

console.log(a)
console.log(b)

for(i=0;i<=n;i++){
    c=a+b
    console.log(c)

    a=b
    b=c
}


// Swap without temp

x=1
y=2

x=x+y
y=x-y
x=x-y

console.log(`a is ${x} and b is ${y}`)


// Reverse a String

//str= "Rahul"

//rev=""

//for(i=str.length-1;i>=0;i--)
///{
//    rev=rev+str[i]

//}

//console.log(rev)



//Reverse String in a array

str=["Rahul","Sawan","Malawat"]

str.reverse()

g=str.toString()
console.log(g)

rev=""

for(i=g.length-1;i>=0;i--){
    rev=rev+g[i]
}

h=rev.split(",")
console.log(h)



///9 balls

//k=[1,2,3,4,17,6,7,8,9]

//l=k.reduce((acc,item) => { if (acc > item)
//    return acc
//    else return item
//},0)

//console.log(`The heaviest ball is ${l}`)

//Another Method

k=[1,2,3,4,17,6,7,8,9]

hev =0

for(i=0;i<k.length;i++)
{
    if(k[i] > hev)
    {hev=k[i]}
}

console.log("Heavy Ball",hev)