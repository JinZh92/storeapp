(function() {

	angular
		.module('shopApp')
		.service('cartSrv', cart);

	function cart() {
		var self = this;

		self.cartContent = [];
		self.addtocart = addtocart;
		self.getNumAdded = getNumAdded;
		self.clearCart = clearCart;
		self.deleteFromCart = deleteFromCart;

		function addtocart(product){
			for (var i = 0; i < cartContent.length; i++){
				if (){
					
				}
			}
			self.cartContent.push({productObj: product, quantity: quantity});
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
	}

})();