// count the names which contain "A" in them
var names = ["Amit", "Nrupul", "Manideep", "Yogesh", "Aman", "Venu"];
var count = 0;

for (var i = 0; i < names.length; i++) {
  for (var j = 0; j < names[i].length; j++) {
    if (names[i][j] == "A" || names[i][j] == "a") {
      count++;
      break;
    }
  }
}
console.log(count);
