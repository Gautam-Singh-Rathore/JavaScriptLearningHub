// given an even or odd arry , you need to print second half of the array

var num = [1,2,3,4,5,6,7];

var start=0;
if(num.length%2==0)
{
  start=num.length/2;
}
else
{
  start=(num.length+1)/2;
}
  
for(var i=start ; i<=num.length-1 ; i++)
  {
    console.log(num[i]);
  }