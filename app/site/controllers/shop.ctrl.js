(function(){
	angular
		.module('shopApp')
		.controller('ShopCtrl',ShopCtrl)

	function ShopCtrl($scope,productSrv, $location){
		var shopVm = this;

		//TODO #3 Capture resolved products for view
		shopVm.products;
		shopVm.login = login;

		//watch for any changes to model data
		$scope.$watch(function(){
	    	return productSrv.products;
		}, function (newValue) {
		    shopVm.products = productSrv.products;
		});
	
	// ------ linking the login button to the login page------//
		function login(){
			$location.path('/auth');

		}
	}
})();


