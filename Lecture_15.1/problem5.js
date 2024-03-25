// update the data in the object

var user =
{
  name:"Gautam" , 
  age : 18 , 
  batch : "B" , 
  rollNo : 17 ,
  city : "Jaipur" , 
  hobbies :["coading" , "reading" , "watching movies"],
  smoking:false,
}
// Bracket notation
user["city"]= "delhi";

// dot notation
user.rollNo=27;
console.log(user);