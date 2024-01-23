// max in the array

var marks=[10,30,5,4,40,50];
var max=-Infinity;
for(var i=0 ; i<=marks.length-1 ; i++)
  {
    if(marks[i] > max)
    {
      max = marks[i];
    }
  }
console.log("The maximum value is : " + max);