// Problem 1: write a function which checks wether a number is even or not . if it is even then return true / false.

function check_even(num)
{
  if(num%2==0)
    return true;
  else
    return false;
}

console.log(check_even(6));
console.log(check_even(7));

