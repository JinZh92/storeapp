
'use strict';
 
angular
	.module('checkout', ['ngRoute'])
 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/checkout', {
        templateUrl: 'public/checkout/checkout.html',
        controller: 'CheckoutCtrl'
    });
}])
 

 function CheckoutCtrl($scope, cartSrv) {
 $scope.product = {
 	items: [{
 		description: 'G',
 		qty: 2,
 		price: 3.00
 	},
 	{
 		description: 'O',
 		qty: 5,
 		price: 3.00
 	}
 	}]
 };


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

 $scope.removeItem = function (index) {
               $scope.order.items.splice(index, 1);
            },

            $scope.total = function () {
                var total = 0;
                angular.forEach($scope.order.items, function (item) {
                    total += item.qty * item.cost;
                })
                return total;