// Evaluation : Count the even number from 1 to 100.


// var count = 0;
// for(var i=1 ; i<=100 ; i++)
//   {
//     if(i%2==0)
//     {
//       count ++;
//     }
//   }
// console.log(count);

function check_even(num)
{
  if(num%2==0)
    return true;
  else
    return false;
}

//the main moto is how can i use this function

var count = 0;
for(var i=1 ; i<=100 ; i++)
  {
    var x=check_even(i);
    if(x==true)
      count ++;
  }
console.log(count);
