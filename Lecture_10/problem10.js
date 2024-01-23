// print all the movies except ghajini and gangubai

var movies=["bahubali" , "ghajini" , "pushpa" , "gangubai"];
 for(var i=0 ; i<=movies.length -1 ; i++)
   {
     // if(movies[i] == "ghajini"|| movies[i]=="gangubai")
     // {
     //   continue;
     // }
     if(i==1 || i==3)
     {
       continue;
     }
     console.log(movies[i]);
   }
