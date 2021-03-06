
'use strict';
 
angular
	.module('shopApp')
 	.controller('ReviewPurchaseCtrl', ReviewPurchaseCtrl);

 	function ReviewPurchaseCtrl($state,shopMainSrv, productSrv, cartSrv){
 		var ctrl = this;

 		ctrl.firstName;
 		ctrl.lastName;
 		ctrl.address;
 		ctrl.city;
 		ctrl.province;
 		ctrl.cartContent = cartSrv.cartContent;
 		ctrl.totalprice = cartSrv.getTotalPrice();

 		//-----function-----//
 		ctrl.pay = pay;
 		ctrl.goback = goback;
 		ctrl.setBillingAddress = setBillingAddress;

 		function pay(){
 			// 1. redirect to the order confirmation page
 			// 2. deduct the quantity from the inventory
 			// 3. clear cart after it
 			ctrl.setBillingAddress();
 			$state.go('shop.orderconfirm');
 			cartSrv.addOL(ctrl.cartContent.length, ctrl.totalprice);
 		}
 		function goback(){
 			$state.go('shop.product');
 		}
 		function setBillingAddress(){
 			cartSrv.addBillingAddress(ctrl.firstName, ctrl.lastName, ctrl.address, ctrl.city, ctrl.province);
 			console.log(cartSrv.billingAddress);
 		}
 	}
