var spanishdictionary = {merry: "Feliz", christmas:"navidad", and:"y", happy:"prospero", year:"ano", new:"nuevo"};
var frenchdictionary = {merry: "Joyeux", christmas:"Noel", and:"et", happy:"bonne", year:"an", new:"nouveau"};
var chinesedictionary = {merry:"快活", christmas:"圣诞", and:"和", happy:"快乐", year:"新", new:"年"};



function printToDom (String,getElementById){
var myId = document.getElementById(getElementById);
myId.innerHTML += String;
};

var inputtarget = document.getElementById("input");
var spanish = document.getElementById("spanish");
var french = document.getElementById("french");
var chinese = document.getElementById("chinese");
var empty = document.getElementById("empty");
var clearbtn =document.getElementById("clear");

spanish.addEventListener("click", translateToSpanish);

function translateToSpanish(){
	console.log("spanish");
	var input = inputtarget.value.toLowerCase().split(" ");
	console.log(input);
	var domString ="";
	for (var i = 0; i < input.length; i++) {

		if(spanishdictionary[input[i]]=== undefined){
			domString += "<div id='red'>" + input[i]+ "('not found in dictionary')"+ "</div>";
		}
		else{
			domString += spanishdictionary[input[i]]+ " ";
		}
	}
	printToDom(domString,"empty");
};

french.addEventListener("click", translateToFrench);

function translateToFrench(){
	console.log("french");
	var input = inputtarget.value.toLowerCase().split(" ");
	console.log(input);
	var domString ="";
	for (var i = 0; i < input.length; i++) {

		if(frenchdictionary[input[i]]=== undefined){
			domString += "<div id='red'>" + input[i]+ "('not found in dictionary')"+ "</div>";
		}
		else{
			domString += frenchdictionary[input[i]]+ " ";
		}
	}
	printToDom(domString,"empty");
};

chinese.addEventListener("click", translateToChinese);

function translateToChinese(){
	console.log("chinese");
	var input = inputtarget.value.toLowerCase().split(" ");
	console.log(input);
	var domString ="";
	for (var i = 0; i < input.length; i++) {

		if(chinesedictionary[input[i]]=== undefined){
			domString += "<div id='red'>" + input[i]+ "('not found in dictionary')"+ "</div>";
		}
		else{
			domString += chinesedictionary[input[i]]+ " ";
		}
	}
	printToDom(domString,"empty");
};

clearbtn.addEventListener("click", clear);

function clear(){
	empty.innerHTML = "";
	input.innerHTML = "";
};


