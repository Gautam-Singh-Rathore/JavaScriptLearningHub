// Marriage problem
// male --- 21
// female --- 18

var gender = "trans";
var age = 18;
if(gender == "male")
{
  if(age>=21)
  {
    console.log("Can Marry");
  }
  else
  {
    console.log("Can not marry");
  }
}
else if(gender == "female")
{
  if(age>=18)
  {
    console.log("Can Marry");
  }
  else
  {
    console.log("Can not marry");
  }
}
else 
{
  console.log("For third gender");
}

