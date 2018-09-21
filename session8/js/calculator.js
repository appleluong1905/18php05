var result = '';
function addValue(val){
	result = result + val;
	document.getElementById('result').innerHTML = result;
}
function deleteCal() {
	document.getElementById('result').innerHTML = '';	
}