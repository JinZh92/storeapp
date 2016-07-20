(function() {

	angular
		.module('shopApp')
		.service('cartSrv', cart);

	function cart() {
		var self = this;

		self.cartContent = [];
		self.addtocart = addtocart;

		function addtocart(product){
			self.cartContent.push(product);
		}
	}

})();