// Nested Object

var user = {
    name: "Gautam",
    age: 18,
    batch: "B",
    rollNo: 17,
    hobbies: ["coading", "reading", "watching movies"],
    smoking: false,
    address : {
        city:"banglore",
        state:"karnatka",
        country:"india",
    }
  };
  console.log(user.address.state);
  console.log(user["address"]["city"]);