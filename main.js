
"use strict";
document.getElementById("company").innerHTML = "Grant's tomb";
document.getElementById("slogan").innerHTML = "Who lives in there?";
document.getElementById("pageName").innerHTML = "Take a guess";
var myObject = {

	option1:"Victor",
	option2:"Grant",
	option3:"Boris",
	option4:"Steward",
	correct:2,

	check: function(x) {
		if(x==myObject.correct) {
			var answer1 = "You are right!"
			document.getElementById('feedback').innerHTML = answer1;
			console.log(answer1);
		}else{
			var answer2 = "Wrong! You can try again!"
			document.getElementById('feedback').innerHTML = answer2;
			console.log(answer2);
		}
	}
};