var amazon = [
    {name:"speakers" , price:5400 , rating:4},
    {name:"headphones" , price:3000 , rating:3},
    {name:"playstation" , price:20000 , rating:5},
    {name:"alexa" , price:3000 , rating:4},
    
              ];
  
  var product = {name:"mixer" , price:2000 , rating:4};
  
  amazon.push(product);
  //Find all the product name
  // for(var i=0 ; i<amazon.length ; i++)
  //   {
  //     console.log(amazon[i].name , amazon[i].price);
  //   }
  
  
  // Give me those products whose rating if 4
  // for(var i=0 ; i<amazon.length ; i++)
  //   {
  //     if(amazon[i].rating==4)
  //     {
  //       console.log(amazon[i].name , amazon[i].price);
  //     }
  //   }
  
  
  // Give me all the products whose price is below 5000
  // for(var i=0 ; i<amazon.length ; i++)
  //   {
  //     if(amazon[i].price<=5000)
  //     {
  //       console.log(amazon[i].name , amazon[i].rating);
  //     }
  //   }
  
  
  // Find the average rating of all the products
  var sum=0;
  var count=0;
  for(var i=0 ; i<amazon.length ; i++)
    {
     sum=sum+amazon[i].rating;
      count++;
    }
  console.log("The average rating is ",sum/count);