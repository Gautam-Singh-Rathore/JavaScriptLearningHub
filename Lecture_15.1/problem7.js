// delete an entry from an object

var user = {
    name: "Gautam",
    age: 18,
    batch: "B",
    rollNo: 17,
    city: "Jaipur",
    hobbies: ["coading", "reading", "watching movies"],
    smoking: false,
  };
  
  delete user.smoking;
  console.log(user);
  