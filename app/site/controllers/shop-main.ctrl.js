(function() {

angular
	.module('shopApp')
	.controller('ShopMainController', ShopMainController);

function ShopMainController($scope,$state, shopMainSrv, $window, $timeout){
	var ctrl = this;

	ctrl.showHidden = false;
	ctrl.unhide = unhide;
	ctrl.hide = hide;
	ctrl.gotoproducts = gotoproducts;


	ctrl.leftHeader = shopMainSrv.leftContent[0].header;
	ctrl.leftBody = shopMainSrv.leftContent[0].body;


	angular.element($window).bind("scroll", function($scope) {
            if (this.pageYOffset >= 1200) {
				scroll(1);
             } else if (this.pageYOffset >= 600) {
             	scroll(2);
             } else {
             	scroll(0);
             }
        });

	function unhide(){
		ctrl.showHidden = true;
	}
	function hide(){
		ctrl.showHidden = false;
	}
	function scroll (num){
		$scope.$apply(function(){
			ctrl.leftHeader = shopMainSrv.leftContent[num].header;
			ctrl.leftBody = shopMainSrv.leftContent[num].body;
		});
		console.log(ctrl.leftHeader)
	}
	function gotoproducts(){
		$state.go('product');
	}
}

})();