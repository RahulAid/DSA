a=["abc","bcd"]
b=a.toString()
console.log(b)

rev=''
for(i=b.length-1;i>=0;i--){
    rev+=b[i]
}

c=rev.split(",").reverse()
console.log(c)