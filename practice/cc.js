a=[1,1,3,3,3,4,4,5,5,5,6]

var count = {}
col={}

for (var i=0;i<a.length;i++)
{
    var num = a[i]
    if (count[num]){
        count[num]++
    }else{
        count[num]=1
    }
}

//console.log(count)

a.filter((item) => {
    if(col[item]){
        col[item]++
    }else{
        col[item]=1
    }   
})

console.log(col)