var user = {
    name: "Gautam",
    age: 18,
    batch: "B",
    rollNo: 17,
    city: "Jaipur",
    hobbies: ["coading", "reading", "watching movies"],
    smoking: false,
  };
  
  //Print the value of that key which contains the value of 18
  
  for(var i in user)
    {
      if(user[i]==18)
      {  
        console.log(i);
      }  
   }