a=[3,5,7,4,1,2,6]

function sort(arr){
for(i=0;i<arr.length;i++){
curr=arr[i]
j=i
while(j>=0 && curr<arr[j-1]){
    arr[j]=arr[j-1]
    j--
}
arr[j]=curr
}
return arr
}
console.log(sort(a))