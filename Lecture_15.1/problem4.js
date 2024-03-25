// Create Object

const { userInfo } = require("os");

// name
// age
// batch 
// rollno
// city
// hobbies
// smoking

var student =
  {
    name:"Gautam" , 
    age : 18 , 
    batch : "B" , 
    rollNo : 17 ,
    city : "Jaipur" , 
    hobbies :["coading" , "reading" , "watching movies"],
    // we can also put array
    smoking:false,
  }

// console.log(student);

//Bracket Notation
console.log(student["age"]);

// Dot Notation
console.log(student.age);
console.log(student.hobbies);
console.log(student.city);
