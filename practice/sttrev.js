str=["Rahul","Sawan","Mala"]
str.reverse()
a=str.toString()

rev=''

for(i=a.length-1;i>=0;i--)
{
    rev=rev+a[i]
}

console.log(rev)

b=rev.split(",")
console.log(b)