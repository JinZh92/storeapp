(function() {

	angular
		.module('shopApp')
		.service('cartSrv', cart);

	function cart() {
		var self = this;
		//--------entry cart---------//
		self.cartContent = [];
		self.addtocart = addtocart;
		self.getNumAdded = getNumAdded;
		self.clearCart = clearCart;
		self.deleteFromCart = deleteFromCart;
		self.getTotalPrice = getTotalPrice;


		function addtocart(product){
			console.log('adding to cart')
			var found = false;
			for (var i = 0; i < self.cartContent.length; i++){
				if (self.cartContent[i].productObj == product){
					self.cartContent[i].quantity ++;
					found = true;
				}
			}
			if (found == false){
				self.cartContent.push({productObj: product, quantity: 1});
			}
		}
		function getNumAdded(){
			var totalnumber = 0;
			if (self.cartContent.length == 0){
				return 0;
			} else{
				for (var i = 0; i < self.cartContent.length; i++){
					totalnumber = totalnumber + self.cartContent[i].quantity;
				}
				return totalnumber;
			}
		}
		function clearCart(){
			self.cartContent = [];
		}
		function deleteFromCart(product){
			if (self.cartContent.indexOf(product) != (-1)){
				self.cartContent.splice(self.cartContent.indexOf(product), 1);
			}
			console.log(self.cartContent);
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
		//-------------Billing Address----------//

		self.billingAddress = [];
		
		self.addBillingAddress = addBillingAddress;
		self.clearBillingAddress = clearBillingAddress;

		function addBillingAddress(first, last, address, city, province){
			self.billingAddress.push({first: first,last:last, address: address, city: city, province: province});
		}
		function clearBillingAddress(){
			self.billingAddress = [];
		}

		//--------------Order List (Not Working Yet)-------------//
		self.addOL = addOL;
		self.clearOL = clearOL;
		self.orderList = [
		{orderQty: 2, orderPrice: 6}, 
		{orderQty: 1, orderPrice: 3},
		{orderQty: 5, orderPrice: 15}
		];
		function addOL(qty, price){
			self.orderList.push({orderQty: qty, orderPrice: price});
		}
		function clearOL(){
			self.orderList = [];
		}
	}
 
})();