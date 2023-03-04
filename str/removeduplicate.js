s="abccdddf"

b=s.split("")
//console.log(b)

var d=b.filter((element,index,arr) => {
    return arr.indexOf(element)===index
    
});

//console.log(d)

e=d.join("")
console.log(e)