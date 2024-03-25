var user = {
    name: "Gautam",
    age: 18,
    batch: "B",
    rollNo: 17,
    city: "Jaipur",
    hobbies: ["coading", "reading", "watching movies"],
    smoking: false,
  };
  
  // Special For Loop
  
  for(var i in user)
    {
      console.log(i+" : "+user[i]);
      // console.log(user[i]);
    }