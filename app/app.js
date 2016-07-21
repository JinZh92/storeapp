(function(){
	'use strict';

	angular
		.module('shopApp',['ui.router']);

	angular
		.module('shopApp')
		.config(function($stateProvider, $httpProvider,$urlRouterProvider){
			
			$urlRouterProvider.otherwise('/');
			$stateProvider
			// -----------Linking the shop main page -------------//
			.state('shop',{
				url:'/',
				templateUrl:'site/draftPartials/shop-main.html',
				controller:'ShopMainController as ctrl'
				// resolve:{
				// 	products:function(productSrv){
				// 		return productSrv.getProducts();
				// 	}
				// }
			})
			.state('shop.body',{
				url:'shop',
				templateUrl:'site/draftPartials/shop-main-body.html',
				controller:'ShopMainController as ctrl'
			})
			.state('shop.product',{
				url:'productlist',
				templateUrl:'site/draftPartials/product-list.html',
				controller:'ProductCtrl as ctrl'
			})
			.state('shop.reviewpurchase',{
				url:'reviewpurchase',
				templateUrl:'site/draftPartials/review-purchase.html',
				controller:''
			})

			.state('auth',{
				url:'/auth',
				templateUrl:'site/draftPartials/auth-main-1.html',
				controller:'AuthCtrl as ctrl',
			})

			.state('admin',{
				url:'/admin',
				templateUrl:'site/draftPartials/admin.html',
				controller:'AdminCtrl as ctrl',
				//TODO #2 Resolve Products before admin page load
				resolve:{
					products:function(productSrv){
						return productSrv.getProducts();
					}
				}
			})

			.state('admin.dash',{
				url:'/dashboard',
				templateUrl:'site/draftPartials/admin-dash.html',
				controller:'AdminCtrl as ctrl',
			})

			.state('admin.add_product',{
				url:'/add_product',
				controller:'ProductCtrl as ctrl',
				templateUrl:'site/draftPartials/admin-add-product.html'
			})

			.state('admin.edit_product',{
				url:'/edit_product/:productId',
				controller:'ProductCtrl as ctrl',
				templateUrl:'site/draftPartials/admin-edit-product.html',
			})

			

			.state('order-confirm',{
				url:'/order-confirm',
				templateUrl:'site/draftPartials/order-confirm.html',
				controller:'AuthCtrl as ctrl',
			})

			.state('checkout',{
				url:'/checkout',
				templateUrl:'site/draftPartials/checkout.html',
				controller:'AuthCtrl as ctrl',
			});


			$httpProvider.interceptors.push(function(){
		       return {
		           request: function(config) {
		               return config;
		           },
		           response: function(response) {
		               var auth_token = response.headers('authentication');
		               if(localStorage.authToken == undefined && auth_token != null){
		               		localStorage.authToken = auth_token;
		               }
		               return response;
		           }
		       }
		   });
		});
})();

