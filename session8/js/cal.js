function sumAB(a, b){
	console.log(a);
	console.log(b);
	console.log(eval('45 + 5 + 6 - 7'));
	document.getElementById('result').innerHTML 
	= parseInt(a) + parseInt(b);
	//document.getElementById('resultInput').value =parseInt(a) + parseInt(b);
}
function subAB(a, b){
	document.getElementById('result').innerHTML 
	= parseInt(a) - parseInt(b);
}
function multiAB(a, b){
	document.getElementById('result').innerHTML 
	= parseInt(a) * parseInt(b);
}
function divisionAB(a, b){
	document.getElementById('result').innerHTML 
	= parseInt(a) / parseInt(b);
}