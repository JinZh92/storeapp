angular
	.module('shopApp')
 	.controller('OrderConfirmCtrl', OrderConfirmCtrl);

 	function OrderConfirmCtrl($state, cartSrv){
 		var ctrl = this;

 		ctrl.cartContent = cartSrv.cartContent;
 		ctrl.totalprice = cartSrv.getTotalPrice();
 		ctrl.latestAddress = cartSrv.billingAddress[cartSrv.billingAddress.length-1];
 		console.log(ctrl.latestAddress);
 		ctrl.browseMore = browseMore;

 		function browseMore(){
 			$state.go('shop.product');
 			cartSrv.clearCart();
 		}
 	}