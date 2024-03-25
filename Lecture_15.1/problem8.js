var user = {
    name: "Gautam",
    age: 18,
    batch: "B",
    rollNo: 17,
    city: "Jaipur",
    hobbies: ["coading", "reading", "watching movies"],
    smoking: false,
  };
  
  // Bracket Notation
     // Indirect method
      var x="name";
      console.log(user[x]);
     // Direct method
      console.log(user["name"]);
  
  // Dot Notation
    // Indirect
    var x="name";
    console.log(user.x);
    // Direct
  console.log(user.name);