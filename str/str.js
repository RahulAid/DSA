//Reverse a String and store in array

str ="Hello Cisco"

rev=""

for(var i =str.length-1;i>=0;i--)
{
    rev = rev+str[i]
}

//console.log(rev)

a=rev.split(" ").reverse()
//console.log(a)

//[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
//Reverse String in Array

v=["abc","bcd","cde"]    //=>   [ 'cba', 'dcb', 'edc' ]
l=v.toString()

rava = ""
for (var i=l.length-1;i>=0;i--)
{
    rava+=l[i]
}

//console.log(rava)      //edc,dcb,cba
rat =  rava.split(",")   //[ 'edc', 'dcb', 'cba' ]
rat.reverse()   
console.log(rat)




//console.log(l)