// Problem 4 : Check if the char is small case or not

function check_case(x){
    if(x>='a' && x<='z')
      return true;
    else
      return false;
  }
  ans = check_case('a');
  if(ans == true)
    console.log("Lower Case");
  else
    console.log("Upper Case");