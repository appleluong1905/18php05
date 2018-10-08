var cart = [];
var quantity = 1;
$('p.product').click(function(){
	var id = $(this).attr('id');
	var name = $(this).children('.name').text();
	var price = $(this).children('.price').text();
	if(typeof cart[id] === 'undefined') {
    	cart[id] = [];
		cart[id].push({id, name, price, quantity});
	}
	else {
	 	cart[id][0]['quantity'] +=1;
	}
	
	console.log(cart);
});
