var result = '';
function addValue(val){
	result = result + val;
	document.getElementById('result').innerHTML = result;
}
function deleteCal() {
	document.getElementById('result').innerHTML = '';	
	result = '';
}
function cal() {
	result = eval(result);
	document.getElementById('result').innerHTML = result;
}
function backS() {
	var lengResult = result.length;
	var newResult = result.substring(0, lengResult - 1);
	document.getElementById('result').innerHTML = newResult;
	result = newResult;
}
// chuoi trong javascript
var str = "Hello php05 javascript";
console.log(str.length);
console.log(str.indexOf('p'));
console.log(str.lastIndexOf('p'));
console.log(str.substring(3, 8));


