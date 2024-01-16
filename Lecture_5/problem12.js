// Problem 4 : given stored usernmae and passward and input username and passward , print if the user can login or not

var stored_user = "abc@gmail.com";
var stored_passward = "12345";

var input_user = "abc@gmail.com";
var input_passward = "123";

if(input_user == stored_user)
{
   if(input_passward == stored_passward)
   {
     console.log("Login succcessfull");
     
   }
   else
   {
     console.log("Wrong passward");
   }
}
else 
{
  console.log("Not find your google account");
}