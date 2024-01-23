// Print last three items

var products = ["x" , "y" , "z" , "a"];

var last_index = products.length-1;
var start =0;
if(products.length>=3)
{
var start = products.length-3;
}

for (var i=start ; i<=last_index ; i++)
  {
    console.log(products[i]);
  }