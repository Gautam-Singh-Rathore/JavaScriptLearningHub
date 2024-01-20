for (var month  =1 ; month<=12 ; month++)
{
  var days_value=31;
  if(month==2)
  {
    days_value=28;
  }
  else if(month==4 || month==6 || month==9 || month==11)
  {
    days_value=28;
  }

  for(var day=1 ; day<=days_value  ; day++)
    {
      console.log("Month : ",month +  +"    Day : ",day);
    }
}