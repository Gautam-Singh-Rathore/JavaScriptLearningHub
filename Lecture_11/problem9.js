// problem 2: given a strin in lower case convert it to upper case
var name = "surajmukhi";

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
bag ="";

for(var i=0 ; i<name.length  ;i++)
  {
    for(var j=0 ; j<lower.length ; j++)
      {
        if(name[i] == lower[j])
        {
          bag = bag+upper[j];
          break;
        }
      }
  }
console.log(bag);