// Check weather a number is even or not

function checkEven(x)
{
  if(x%2==0)
   return true;
  else
    return false;
}

var output = checkEven(11);
if (output==true)
  console.log("even");
else
  console.log("odd");

