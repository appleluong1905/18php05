var myArr = ['A', 'B', 'C'];
//console.log(myArr[1]);
//console.log(myArr.length);
for(var i = 0; i < myArr.length; i++ ) {
	document.write(myArr[i]);
	document.write("<br>");
}
//
var myArr2 = [
				['Nam', '1999'],
				['Quan', '1997'],
				['Dung', '1996'],
			];
console.log(myArr2);
console.log(myArr2.length);

for(var i = 0; i < myArr2.length; i++ ) {
	console.log(myArr2[i]);
	for(var j = 0; j < myArr2[i].length; j++ ) {
		document.write(myArr2[i][j]);
		
	}
	document.write("<br>");
}
document.write('<br>-------------<br/>');
var myArr3 = [];
myArr3['a'] = 'A';
myArr3['b'] = 'B';
myArr3['c'] = 'C';
console.log(myArr);
console.log(myArr3);
for (i in myArr3) {
    document.write(myArr3[i]);
	document.write("<br>");
}