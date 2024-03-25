// Problem 2: Given an array find the unique items in the array(USING OBJECTS)

var party=["suraj" , "ramu" , "sonu" , "ramu" , "suraj" , "moh an" ];

var diary={};

for(var i=0  ;i<party.length ; i++)
  {
    var person=party[i];
    diary[person] = 1;
    
  }
console.log(diary);
console.log(Object.keys(diary));