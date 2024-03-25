var details={
    name:"dev",
    age:45,
    
    print:function(){
      console.log("Hello", this.name);
    }
    
  };
  
  // console.log(details.print());
  // Call the object methods
  
  details.print();
  
  details.name="Rampal";
  // console.log(details);
  
  details.print();
  
  