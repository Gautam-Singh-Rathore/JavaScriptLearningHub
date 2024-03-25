// code to reverse a string
// check palindrome

function reverse_string(str)
{
var bag="";
for(var i=str.length-1 ; i>=0 ; i--)
  {
    bag=bag+str[i];
  }
return bag;
}

var org_str = "madam";
var rev_str = reverse_string(org_str);
check_palindrome(org_str , rev_str);



function check_palindrome(x,y)
{
  if(x==y)
  {
    console.log("Pallindrome");
  }
  else
  {
    console.log("Not Pallindrome");
  }
  
}


