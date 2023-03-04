function countDigit(n)
{
    let count = 0;
    while (n != 0) 
    {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}
  
  
    n = 5289467;
    console.log("Number of digits : "+ countDigit(n));