// Null : special data type which says there is no value.

  
// Undefined : special data type which says that variable not assigned;
function getProduct(i){

    var products = [
      "earphones" , "bottle" , "tv" , "chips"
    ]
  
    if(i<0 || i>products.length-1)
    {
      return null;
    }
    return products[i];
  }
  
  var x= getProduct(1);
  // console.log(x);
  
  if(x==null)
  {
    console.log("Not Found");
  }
  else
  {
    console.log("My Product Is " + x);
  }