// Problem 1: Given an array find the unique items in the array

var arr=["suraj" , "ramu" , "sonu" , "ramu" , "suraj" , "mohan" ];
var arr1=[];

for(var i=0 ; i<arr.length ; i++)
  {
   var person=arr[i];
    var marker=false;
    for(var j=0 ; j<arr1.length ; j++)
      {
        if(person==arr1[j])
        {
          marker=true;
          break;
        }
      }
    if(marker==false)
    {
      arr1.push(arr[i]);
    }
  }

console.log(arr1);