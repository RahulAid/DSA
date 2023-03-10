a=[1,1,1,2,3,4,4,4,5,5]

count={}

for(i=0;i<a.length;i++)
{
    num=a[i]

    if(count[num]){
        count[num]++
    }
    else{
        count[num]=1
    }
}

console.log(count)