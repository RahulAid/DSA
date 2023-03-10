a=[1,2,3,4,10,6,76,8,9]

var hev=4

 //sum = a.reduce((acc,item) => acc+item ,0 )
 //console.log(sum)

 for(i=0;i<a.length;i++)
 {
    if(a[i]<hev)
    hev=a[i]
 }

 console.log(`The ball is ${hev}`)