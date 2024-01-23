// problem 1: given an array print the position (starting with 1) and the element in a single line

var names=["ram" , "mohan" , "rajat" ,"suresh" ];
var ages=[28,32,45,67];
for(var i=0 ; i<ages.length  ;i++)
  {
    console.log(i+1 + "."+ names[i] +" " + ages[i]);
  }