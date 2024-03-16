// Problem 1 : create a function to check weather  nunber is prime or not

function check_prime(x)
{
  for(var i=2 ; i<x ; i++)
    {
      if(x%i==0)
      {
        return false;
        break;
      }
    }
}   

var ans = check_prime(16);
if(ans==false)
  console.log("Not Prime")
else
  console.log("Prime");