
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
 		ctrl.back = back;
 		ctrl.setBillingAddress = setBillingAddress;

 		function pay(){
 			// 1. redirect to the order confirmation page
 			// 2. deduct the quantity from the inventory
 			// 3. 
 			ctrl.setBillingAddress();
 			$state.go('shop.orderconfirm');

 		}
 		function back(){
 			$state.go('shop.product');
 		}
 		function setBillingAddress(){
 			cartSrv.addBillingAddress(ctrl.firstName, ctrl.lastName, ctrl.address, ctrl.city, ctrl.province);
 			console.log(cartSrv.billingAddress);
 		}
 	}
