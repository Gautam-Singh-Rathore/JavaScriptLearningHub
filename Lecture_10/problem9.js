var numbers = [2,3,4,5,6,7];
// delete the last 3 numbers and print
var last_index = numbers.length - 1;

for(var i=1 ; i<=3 ; i++)
  {
    numbers.pop();
  }

console.log(numbers);