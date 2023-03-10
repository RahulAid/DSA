str="Rahul Kumar"

rev=''

for(i=str.length-1;i>=0;i--)
{
    rev=rev+str[i]
}

console.log(rev.split(" ")[0])