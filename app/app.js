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

			.state('auth',{
				url:'/auth',
				templateUrl:'site/draftPartials/auth-main.html',
				controller:'AuthCtrl as ctrl',
			})

			.state('order-confirm',{
				url:'/order-confirm',
				templateUrl:'site/draftPartials/order-confirm.html',
				controller:'AuthCtrl as ctrl',
			})

			.state('product',{
				url:'/product-list',
				templateUrl:'site/draftPartials/product-list.html',
				controller:'ProductCtrl as ctrl',
			})

			.state('review-purchase',{
				url:'/review-purchase',
				templateUrl:'site/draftPartials/review-purchase.html',
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

