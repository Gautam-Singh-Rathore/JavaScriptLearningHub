//problem2: givean a character in lower case print the upper case charater

var char='e'; 
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l']; // go till z

var upper = ["A","B","C","D","E","F","G",'H',"I",'J','K','L'];

for(var i=0 ; i<lower.length ; i++)
  {
    if(char==lower[i])
    {
      console.log(upper[i]);
      break;
    }
  }