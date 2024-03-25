// Find the sum of element whose occuence is 2
var arr=[3,2,7,7,3,4,2];
var obj={};
var sum=0;
for(var i=0 ; i<arr.length ; i++)
  {
    var value=arr[i];
    if(obj[value]==undefined)
    {
      obj[value]=1;
    }
    else if (obj[value]==1)
    {
      obj[value]=obj[value]+1;
      sum=sum+value;
    }
    else 
    {
      obj[value]=obj[value]+1;
      
    }
  }
console.log("The required sum is "+sum);