(function() {

	angular
		.module('shopApp')
		.service('cartSrv', cart);

	function cart() {
		var self = this;

		// self.cartContent = [
		// {productObj: {
		// "Name": "I",
		// "Consonant": false,
		// "Type": "vowel",
		// "color": "tan",
		// "Language": "English",
		// "Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=70636441",
		// "tileID": "009",
		// "tilePV": "001",
		// "Description": "",
		// "quantity": 9,
		// "price": 3.00
		// }, quantity: 1},
		// {productObj: {
		// "Name": "E",
		// "Consonant": false,
		// "Type": "vowel",
		// "color": "tan",
		// "Language": "English",
		// "Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=63910182",
		// "tileID": "005",
		// "tilePV": "001",
		// "Description": "",
		// "quantity": 12,
		// "price": 3.00
		// }, quantity: 2} 
		// ];

		self.cartContent = [
		{productObj: {
		"Name": "I",
		"Consonant": false,
		"Type": "vowel",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=70636441",
		"tileID": "009",
		"tilePV": "001",
		"Description": "",
		"quantity": 9,
		"price": 3.00
		}, quantity: 1},
		{productObj: {
		"Name": "E",
		"Consonant": false,
		"Type": "vowel",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=63910182",
		"tileID": "005",
		"tilePV": "001",
		"Description": "",
		"quantity": 12,
		"price": 3.00
		}, quantity: 2} 
		];
		self.addtocart = addtocart;
		self.getNumAdded = getNumAdded;
		self.clearCart = clearCart;
		self.deleteFromCart = deleteFromCart;
		self.getTotalPrice = getTotalPrice;

		function addtocart(product){
			var found = false;
			for (var i = 0; i < cartContent.length; i++){
				if (cartContent[i].productObj == product){
					cartContent[i].quantity ++;
					found = true;
				}
			}
			if (found == false){
				self.cartContent.push({productObj: product, quantity: 1});
			}
		}
		function getNumAdded(){
			return self.cartContent.length;
		}
		function clearCart(){
			self.cartContent = [];
		}
		function deleteFromCart(product){
			if (self.cartContent.indexof(product) != (-1)){
				self.cartContent.splice(self.cartContent.indexof(product), 1);
			}
		}
		function getTotalPrice(){
			var totalprice = 0;
			if (self.cartContent.length == 0){
				return 0;
			} else{
				for (var i = 0; i < self.cartContent.length; i++){
					totalprice = totalprice + (self.cartContent[i].productObj.price * self.cartContent[i].quantity);
				}
				return totalprice;
			}
			
		}
	}

})();