(function(){

	angular
		.module('shopApp')
		.controller('ProductCtrl',ProductCtrl);

	function ProductCtrl(productSrv, cartSrv, $state){
		var productVm = this;

		console.log(productSrv)

		productVm.product = productSrv.products;

//---------------------Product Sort---------------------//
		productVm.sortOptions = [
			{label:'Letter', sortField:'tileID'},
			{label:'Tile Point Value', sortField:'tilePV'},
		]
		productVm.selectedOption = productVm.sortOptions[0];

//---------------------Product Filters---------------------//
		productVm.showFilters = [
			{label: 'All', showProducts: function(product) {return true;}},
			{label: 'Vowels', showProducts: function(product) {return product.Type === "vowel"}},
			{label: 'Consonants', showProducts: function(product) {return product.Type === "consonant"}},
			{label: 'Tan', showProducts: function(product) {return product.color === "tan"}},
			{label: 'Black', showProducts: function(product) {return product.color === "black"}},
			{label: 'Sets', showProducts: function(product) {return product.Type === "set"}}
		]
		productVm.selector = productVm.showFilters[0];
		// productVm.selector = "All";

//---------------------Product Add to Cart---------------------//
		productVm.clickedCart = clickedCart

		function clickedCart(product) {
			cartSrv.addtocart(product);
	  	};

//---------------------Slideshow---------------------//

	var myIndex = 0;
	carousel();

	function carousel() {
	    var i;
	    var x = document.getElementsByClassName("mySlides");
	    for (i = 0; i < x.length; i++) {
	       x[i].style.display = "none";
	    }
	    myIndex++;
	    if (myIndex > x.length) {myIndex = 1}
	    x[myIndex-1].style.display = "block";
	    setTimeout(carousel, 2500); // Change image every 2 seconds
	}

//---------------------Search Products---------------------//

		// productVm.searchWord = searchWord

		// function searchWord() {

		// }

		// productVm.list = [];
		// productVm.text = 'hello';
		// productVm.submit = searchWord() {
		// 	if (productVm..text) {
		// 		productVm.list.push(this.text);
		// 		productVm.text = '';
		// 	}
		// };


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