// Problem 2: Find prime number to a given limit
for (var j = 2; j <= 1000; j++) {
    var ans = check_prime(j);
    if (ans == false) 
      console.log(j , "Not Prime");
    else 
      console.log(j , "Prime");
  }
  
  function check_prime(x) {
    for (var i = 2; i < x; i++) {
      if (x % i == 0) {
        return false;
        break;
      }
    }
  }
  