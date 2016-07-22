(function() {

angular
	.module('shopApp')
	.controller('ShopMainController', ShopMainController);

function ShopMainController($scope,$state,cartSrv,shopMainSrv,$window,$timeout){
	var ctrl = this;

	$state.go('shop.body');
	ctrl.showHidden = false;
	ctrl.unhide = unhide;
	ctrl.hide = hide;
	ctrl.gotoproducts = gotoproducts;
	ctrl.login = login;
	ctrl.imageUrl = shopMainSrv.rightImage;

	ctrl.leftHeader = shopMainSrv.leftContent[0].header;
	ctrl.leftBody = shopMainSrv.leftContent[0].body;
	ctrl.addtocart = addtocart;
	ctrl.gohome = gohome;
	ctrl.reviewpurchase = reviewpurchase;

	function unhide(){
		ctrl.showHidden = true;
	}
	function hide(){
		ctrl.showHidden = false;
	}	
	//-------------scrolling function------------// 
	angular.element($window).bind("scroll", function($scope) {
        if (this.pageYOffset >= 1200) {
			scroll(1);
         } else if (this.pageYOffset >= 600) {
         	scroll(2);
         } else {
         	scroll(0);
         }
    });
	function scroll (num){
		$scope.$apply(function(){
			ctrl.leftHeader = shopMainSrv.leftContent[num].header;
			ctrl.leftBody = shopMainSrv.leftContent[num].body;
		});
	}
	
	// ------------linking between pages----------//
	function gohome(){
		$state.go('shop.body');
	}
	function gotoproducts(){
		$state.go('shop.product');
	}
	function reviewpurchase(){
		$state.go('shop.reviewpurchase');
		ctrl.showCart = !ctrl.showCart;
	}
	function login(){
		$state.go('auth');
	}

	// ---------------cart function---------------//
	ctrl.cartContent = cartSrv.cartContent;
	ctrl.totalprice = cartSrv.getTotalPrice();
	ctrl.deletefromcart = deletefromcart;
	ctrl.gettotalnumber = cartSrv.getNumAdded();

	$scope.$watch(
		function(){
			return cartSrv.cartContent;
		}, function(newVal){
			console.log('detecting change')
			ctrl.cartContent = cartSrv.cartContent;
			ctrl.totalprice = cartSrv.getTotalPrice();
			ctrl.gettotalnumber = cartSrv.getNumAdded();
		}
		,true
	)
	function addtocart(product){
		cartSrv.addtocart(product);
	}
	function deletefromcart(product){
		cartSrv.deleteFromCart(product);
	}

}

})();