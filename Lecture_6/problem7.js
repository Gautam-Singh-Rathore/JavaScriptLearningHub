// given the year of birth if the age is between 13 and 19 (included) print teenage and in between 20 and 29 (included) print twenties

var yob = 2008;
var age = 2022 - yob;
if(age >= 13 && age <= 19 )
{
  console.log("Teenage");
}
else if (age>=20 && age<=29)
{
  console.log("Twenties");
}
else {
  console.log("Invalid Input");
}