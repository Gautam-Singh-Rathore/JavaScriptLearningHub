// problem 1: given a string count the number of words in that string

var tagline="A Transformation in education in School";

if (tagline.length>0)
{
var count =0;
for(var i=0 ; i<tagline.length ; i++)
  {
    if(tagline[i]==" ")
    {
      count++;
    }
  }

var words = count+1;
console.log(words);
}
else 
{
  console.log(0 , "words");
}

