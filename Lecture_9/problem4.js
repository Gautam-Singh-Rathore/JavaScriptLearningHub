for(var i=1 ; i<=10 ; i++)
{
  var bag="";
 if(i==1 || i==10)
 {
   for(j=1 ; j<=10 ; j++)
     {
       bag = bag + "* ";
     }
   console.log(bag);
 }
  else
 {
   for(j=1 ; j<=10 ; j++)
     {
       if(j==1 || j==10)
       {
        bag = bag + "* ";
       }
       else
       {
         bag = bag + "  ";
       }
     }
   console.log(bag);
 }
}