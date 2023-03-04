s = "abccdddf"

//b=s.split("")
//count = {}
//for(var i=0;i<=b.length;i++)
//{
   // var num = b[i]
    //if(count[num]){
   //     count[num]++
   /// }else{
   //     count[num]=1
   // }
//}

//console.log(count)


col = {}
for(var i=0;i<=s.length-1;i++)
{
    var num = s[i]
    if(col[num]){
        col[num]++
    }else{
        col[num]=1
    }
}

console.log(col)

