// Crete an object 
// name:Ram
// age:34
// hobbies:["coading" , "readinh"]
//print:function{}

//Output--
// Hello Ram
// age is 34
// my hobbies are coading , reading

var user={
    name:"Ram",
    age:34,
    hobbies:["coading" , "reading","sleeping","killing"],
    print:function()
      {
        console.log("Hello",this.name);
        console.log("Age is",this.age);
        console.log("My hobies are",this.hobbies.join());
      }
  };
  
  user.print();
  
  