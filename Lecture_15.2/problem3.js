// print the element whose occurence is 1

var arr=[3,2,7,7,3,4,2];
var obj={};

for (var i=0 ; i<arr.length ; i++)
  {
    var value=arr[i];
    if(obj[value]==undefined)
    {
      obj[value]=1;
    }
    else
    {
      obj[value]=obj[value]+1;
    }
  }
for(var i in obj)
  {
    if(obj[i]==1)
    {
      console.log("The object whose occurence is 1 is : "+i);
    }
  }