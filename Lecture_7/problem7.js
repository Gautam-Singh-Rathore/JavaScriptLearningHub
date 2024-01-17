var start=0;
var limit=20;
var sum=0;

while(start<=limit)
{
  if(start%3==0)
  {
    sum=sum+start;
  }
  start++;
  
}
console.log(sum);