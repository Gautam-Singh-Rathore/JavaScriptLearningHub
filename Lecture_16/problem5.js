var rectangle={
    length:10,
    width:20,
    perimeter:function()
      {
        console.log("Perimeter is "+ 2*(this.length+this.width));
      },
    area:function()
      {
        console.log("Area is "+ this.length*this.width);
      }
  };
  
  rectangle.perimeter();
  rectangle.area();
  rectangle.length=100;
  rectangle.width=200;
  rectangle.perimeter();
  rectangle.area();