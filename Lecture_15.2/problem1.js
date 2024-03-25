//PROBLEM
var arr=[7,2,7,7,3,4,2];
//7 -> 3
//2 -> 2
//3 -> 1
//4 -> 1

var obj={};
for(var i=0 ; i<arr.length ; i++)
  {
    var value=arr[i];
    if(obj[value]==undefined)
    {
      obj[value]=1;
    }
    else
    {
      obj[value]++;
    }
  }
for(var i in obj)
  {
    console.log(i+"  "+obj[i]);
  }
