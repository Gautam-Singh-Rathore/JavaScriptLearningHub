// Problem 3: Given a string print , the number of times each character apperas.{USING OBJECTS}

var str = "masai";
// output should be
// m:1
// a:2  
// s:1
// i:1
var diary={};
for(var i=0 ; i<str.length ; i++)
  {
    var char = str[i];
    // diary[char]=1;
    if(diary[char]==undefined)
    {
      diary[char]=1;
    }
    else
    {
      diary[char]++;
    }
  }
// console.log(diary);
for(var i in diary)
  {
    console.log(i+"  "+diary[i]);
  }
