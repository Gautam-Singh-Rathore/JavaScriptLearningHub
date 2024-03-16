// problem 3 : use the same code to print non primes

for (var j = 2; j <= 1000; j++) {
    var ans = check_prime(j);
    if (ans == false) 
      console.log(j , "Not Prime");
    // else 
    //   continue;
  }
  
  function check_prime(x) {
    for (var i = 2; i < x; i++) {
      if (x % i == 0) {
        return false;
        break;
      }
    }
  }
  