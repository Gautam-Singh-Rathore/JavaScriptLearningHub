// problem 3: given an array of string count the overall total number of characters

var name=["Nrupul" , "Aman" , "Yogesh"  ,"Venu" ];

var count =0;

for(var i=0 ; i<name.length ; i++)
  {
    count=count+(name[i].length);
  }

console.log(count);