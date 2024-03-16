function multi(a,b)
{
  return (a*b);
}

function multi2(x){
  return (x*20);
}
function sub(y){
  return y-100;
}
console.log(sub(multi2(multi(2,5))));