function multiplyTheValue(a , b)
{
  //make sure to initialize the array(or string)
  var c=[];
  for(var i=0 ; i<a.length; i++ )
    {
      c[i] = a[i] * b[i];
    }
  return c;  
}
// both arrays are of same size
var arr1=[20,40,60,80];
var arr2=[3,7,9,4]; 
var ans=multiplyTheValue(arr1 , arr2);
console.log(ans);