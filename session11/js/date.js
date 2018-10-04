function convertDay(myDay){
	return (myDay >= 10)?myDay:'0'+myDay;
}
var myToday = new Date();

// Lay thu ngay trong tuan (tu thu 2 toi chu nhat)
var myDay = myToday.getDay();
console.log(myDay);

//Lay thang trong nam (tu thang 1 den thang 12)
var myMonth = myToday.getMonth() + 1;
console.log(myMonth);

//Lay ngay trong thang (tu 1 toi 31)
var myDate = myToday.getDate();
console.log(myDate);

//Lay nam hien tai
var myYear = myToday.getFullYear();
console.log(myYear);
// 2018-10-06 ~ 2018-10-3
console.log(myYear + '-' + convertDay(myMonth) + '-' + convertDay(myDate));