//check for prime number
var num = 14;
for(var i =2 ; i<=num-1 ; i++)
  {
    if(num%i==0)
    {
      console.log("Not Prime");
      break;
    }
  }