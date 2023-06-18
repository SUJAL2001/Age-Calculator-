const calculate = ()=>{
var date = document.getElementById('date').value;
var month = document.getElementById('month').value;
var year = document.getElementById('Year').value;


var currentDate = new Date().getDate();
var CurrentMonth = new Date().getMonth()+1;
var CurrentYear = new Date().getFullYear();


if (date > 31 || month > 12 || year > CurrentYear) {
    const inputs = document.getElementsByClassName('box');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("valid");
      inputs[i].classList.add("shake");
      setTimeout(()=>{inputs[i].classList.remove('shake')
},0)
      var count = -1;
    }

  } else {
    const inputs = document.getElementsByClassName('box');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("shake");
      inputs[i].classList.add("valid");
      var count = 0;
    }
  }
 if(currentDate < date){
  if(CurrentMonth ===  3 || 5 || 7 || 8 || 10 || 12){
   currentDate += 30;}
   else if( CurrentMonth = 1){
    if(CurrentYear % 4 == 0 || (CurrentYear % 400 == 0 && CurrentYear % 100 != 0)){
     currentDate += 29;}
     else{
      currentDate += 28;
     }
   }}
   else{
    currentDate += 31;
   }
  

 if(count == 0){
  document.getElementById("show 3").innerHTML = `${currentDate - date} `;
 if(CurrentMonth < month){
  CurrentMonth +=12;
  CurrentYear -=1;
 }
document.getElementById("show 2").innerHTML = `${CurrentMonth - month} `;
document.getElementById('show 1').innerHTML = `${CurrentYear - year} `;
}
else{
 if((month == 1 || 3 || 5 || 7 || 8 || 10 || 12) && (date > 31)){
  alert("Date should not extend 31")
 }
 else if(month == 2) {
  if(CurrentYear % 4 == 0 || (CurrentYear % 400 == 0 && CurrentYear % 100 != 0) && (date > 29)){
  alert("Date should not extend 29")
 }
 else{
  alert("Date should not extend 28")
 }
}
else if((month == 4 || 6 || 9 || 11) && (date > 30)){
   alert("Date should not extend 30")
}
else if( month > 12){
 alert("Month should not extend 12")
}
   document.getElementById("show 3").innerHTML = " -- ";
   document.getElementById("show 2").innerHTML = " -- ";
   document.getElementById('show 1').innerHTML = " -- ";

}}
 
