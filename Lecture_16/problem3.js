// My name is Ram
// My age is 20

// My name is Suraj
// My age is 40

// My name is Suman
// My age is 25

var user={
    name:"Ram",
    age:20,
    details:function()
      {
        console.log("My name is",this.name);
        console.log("My age is",this.age);
      }
  };
  
  // user.details(); 
  user["details"]();
  console.log("\n***********\n");
  
  user.name="Suraj";
  user.age=40;
  user.details();
  console.log("\n***********\n");
  
  
  user.name="Suman";
  user.age=25;
  user.details();