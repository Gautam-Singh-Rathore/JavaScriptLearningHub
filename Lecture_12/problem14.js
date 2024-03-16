// Problem 5 : write a function to replace spaces in a string with -

function replace(str)
{
  var str1="";
  for(var i=0 ; i<str.length ; i++)
    {
      if(str[i] == " ")
      {
        str1+="-";
      }
      else
        str1+=str[i];
    
    }
  return str1;
}

console.log(replace("Masai School"));