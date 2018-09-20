//alert('hello');
document.getElementById('demo4').innerHTML = 'Hello inner HTML';
document.write('<h1>Hello document write</h1>');
console.log('Hello console');
//
// Bien trong javascript
var userName;
var getElementById;
var getelementbyid
/*
* Khai bao bien: ten, tuoi, email, so dien thoai
*/
var name;
var age;
var email;
var phone;

/*
	+, -, *, /, %
	==, >, <, >=, <=, !=
	=
*/
// Ham trong javascript
function myFunction() {
	// code o day!
}
// Goi ham trong javascript
myFunction();
//
function sumNumber(a = 4, b = 3) {
	return a + b;
}
document.write(sumNumber(7, 8));
var x;
x = sumNumber(8, 5);
document.write("<br>");
document.write(sumNumber());

// Cau dien kien
var condition = true;
var condition1 = true;
if (condition) {
	// neu dieu kien TRUE thi thuc hien lenh nay
}
//
if (condition) {
	// neu dieu kien TRUE thi thuc hien lenh nay
} else {
	// neu dieu kien FALSE thi thuc hien lenh nay
}
//
if (condition) {
	// neu dieu kien condition TRUE thi thuc hien lenh nay
} else if (condition1) {
	// neu dieu kien condition1 TRUE thi thuc hien lenh nay
} else {
	// neu dieu kien condition1 FALSE thi thuc hien lenh nay
}
// Vong lap for
document.write("<br>");
for (var i = 1; i < 10; i++){
	document.write(i);
	document.write("<br>");
}

var x = 5;
var y = 7;
var z;
z = ++x + 5;
document.write("<br>");
document.write(z);
document.write("<br>");
document.write(x);
document.write("<br>");
document.write("<br>");
for(var i = 1; i <= 20; i++) {
    if (i % 15 == 0) {
    	document.write(i + " chia het cho 15");
        document.write("<br>");
    } else if ( i % 3 == 0 ) {
        document.write(i + " chia het cho 3");
        document.write("<br>");
    } else if ( i % 5 == 0 ) {
       document.write(i + " chia het cho 5");
       document.write("<br>");
    } else {
        document.write(i + " khong chia het cho 3, 5, 15");
        document.write("<br>");
    }
}
