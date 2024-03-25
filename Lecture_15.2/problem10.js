var products=["macbook","iphone","ipad"];
var price = [500000 , 40000 , 50000];
var rating=[5,4,4.5];
var arr=[];

for(var i=0 ; i<products.length ; i++)
  {
    var obj={};
    obj.name=products[i];
    obj.price=price[i];
    obj.rating=rating[i];
    arr.push(obj);
  }
console.log(arr);