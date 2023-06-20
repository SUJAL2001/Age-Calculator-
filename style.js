const average =()=>{
 var reaction = document.getElementById('mark1').value;
var memory = document.getElementById('mark2').value;
var verbal = document.getElementById('mark3').value;
var visual = document.getElementById('mark4').value;

var total = parseInt(reaction)+parseInt(memory)+parseInt(verbal)+parseInt(visual);
var avg_percentage = Math.round(total / 4);

document.getElementById('h-style').innerHTML = `${avg_percentage}`;
if(avg_percentage > 90){
 document.getElementById('comment').innerHTML = "Excellent";
 document.getElementById('description').innerHTML="you scored higher than 85% of the persons who have taken these tests"
}
else if(avg_percentage >70 && avg_percentage < 90){
 document.getElementById('comment').innerHTML = "Great";
 document.getElementById('description').innerHTML="you scored higher than 60% of the persons who have taken these tests"
}
else if(avg_percentage >60 && avg_percentage < 70){
 document.getElementById('comment').innerHTML = "Good";
 document.getElementById('description').innerHTML="you scored higher than 35% of the persons who have taken these tests"
}
else{
 document.getElementById('comment').innerHTML = "Poor";
 document.getElementById('description').innerHTML="Your Performance is not upto the mark better luck next time."
}
}