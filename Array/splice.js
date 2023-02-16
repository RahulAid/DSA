a=[1,2,3,4,5]

b= a.splice(0,3)    
console.log(b)      //[ 1, 2, 3 ]
console.log(a)      //[ 4, 5 ]


a.splice(0,0,7,8)
console.log(a)        //[ 7, 8, 1, 2, 3, 4, 5]
   
    
  d=a.splice(1,3)
  console.log(d)      //[ 2, 3, 4 ]

  a.splice(2,0,7,6,8)
  console.log(a)         //[1, 2, 7, 6, 8, 3, 4, 5]