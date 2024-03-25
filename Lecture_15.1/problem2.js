// var num= "a";
// console.log(Number(num));

function avg(arr){

    if(arr.length==0)
    {
      return null;
    }
    else
    {
      var sum=0;
      for(var i=0 ; i<arr.length ; i++)
        {
          sum=sum+arr[i];
        }
      var ans =sum/arr.length;
      return ans;
    }
    
  }
  
  
  var arr1=[10,20,-57,734,-478];
  var arr2=[];
  
  var x= avg(arr1);
  if(x==null)
  {
    console.log("Array is empty");
  }
  else
  {
  console.log("Average is " + x);
  }