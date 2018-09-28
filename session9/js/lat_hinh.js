var tmp = '';
function getInfo(elm ,img, id, className) {
	console.log(elm.src);
	elm.src = img;
	if(id == tmp) {
		document.getElementsByClassName(className)[0].src = img;
		document.getElementsByClassName(className)[1].src = img;
		tmp = '';
	} else {
		elm.src = 'avatar2.jpg';
		tmp = id;
	}
}