(function(){

	angular
		.module('shopApp')
		.controller('ProductCtrl',ProductCtrl);

	function ProductCtrl(productSrv, $state){
		var productVm = this;

		console.log(productSrv)

		productVm.product = productSrv.products;

		// for product sort
		productVm.sortOptions = [
			{label:'Letter', sortField:'tileID'},
			{label:'Tile Point Value', sortField:'tilePV'},
		]
		productVm.selectedOption = productVm.sortOptions[0];

		// for product filter 
		productVm.showFilters = [
			{label: 'All', showProducts: function(product) {return true;}},
			{label: 'Vowels', showProducts: function(product) {return product.Type === "vowel"}},
			{label: 'Consonants', showProducts: function(product) {return product.Type === "consonant"}},
			{label: 'Tan', showProducts: function(product) {return product.color === "tan"}},
			// {label: 'Black', showProducts: function(product) {return product.color === "black"}}
		]
		productVm.selector = productVm.showFilters[0];
		// productVm.selector = "All";

		productVm.popUp = popUp;

		function popUp() {
	  		alert('clicked go to')
	  		// $state.go('', {});
	  	}

		// productVm.product = {};
		// productVm.product_update_btn = 'Update Product';
		// productVm.product_delete_btn = 'Remove Product';
		
		// if($stateParams.productId != undefined){
		// 	productSrv.getProduct($stateParams.productId)
		// 	.then(function(res){
		// 		console.log(res);
		// 		productVm.product = res.data.product;

		// 		for(var index in productVm.categories){
		// 			if(productVm.product.category == productVm.categories[index].value){
		// 				productVm.set_category = productVm.categories[index].value;
		// 			}
		// 		}
				
		// 	})
		// }

		// //public functions
		// productVm.addProduct = addProduct;
		// productVm.updateProduct = updateProduct;
		// productVm.deleteProduct = deleteProduct;

		// function addProduct(){
		// 	//create product object, pass to product service
		// 	//Update text in button
			
		// }

		// function updateProduct(){
		// 	//create product object, pass to product service
		// 	//Update text in button
		// }

		// function deleteProduct(){
		// 	//TODO #2
		// 	//remove product, pass to product service
		// 	//update text in button
		// }
	}

})();