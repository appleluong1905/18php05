var d = new Date();

console.log(d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate());




//
var nowDate = Date.now();
var startDate = new Date('2018-10-03');
//var startDate = new Date($('startDate').val());
var endDate = new Date('2018-10-05');
//var startDate = new Date($('endDate').val());

if(startDate < nowDate) {
	alert('error 1');
}

if(startDate > endDate) {
	alert('error 2');
}
// set
localStorage.setItem("gender", "male");
window.location.assign("example2.html");

