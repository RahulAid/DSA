
string = ["I", "am", "strong"]

// convert the string into an array using the string.split() function  
//const arr = string.split (' '); //   

//console.log(arr)
  
// use reverse() method to reverse the array values  
//const arr1 = arr.reverse();  

//console.log(arr1)
  
// use join() method to group the array values into the string  
//const arr2 = arr1.join(' ');  
//console.log(arr2)

//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
arr=string.toString()
//console.log(arr)
temp=''

for(var i=arr.length-1;i>=0;i--)
{
    temp+=arr[i]

}

console.log(temp)
res=temp.split(",").reverse()
console.log(res)