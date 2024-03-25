//IW assignment - create our own split function

my_split("the quick                  brown fox jumps");

function my_split(str){
  var bag="";
  var output=[];
  for (var i=0 ; i<str.length ; i++)
    {
      if (str[i] != " ")
      {
        bag=bag+str[i];
      }
      else
      {
        if(bag!="")
        {
          output.push(bag);
        }
         bag="";

      }
    }
    output.push(bag);

  console.log(output);
  
}

