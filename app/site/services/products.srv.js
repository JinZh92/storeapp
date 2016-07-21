(function(){

	angular
		.module('shopApp')
		.service('productSrv',ProductService);

	function ProductService($state,api){
		var self = this;
		//public variables
		// self.products = [];

		self.products = PRODUCT_DATA;
		self.getProducts = getProducts;

		//public functions
		// self.getProduct = getProduct;
		// self.getProducts = getProducts;
		// self.addProduct = addProduct;
		// self.updateProduct = updateProduct;
		// self.updateProductList = updateProductList;
		// self.removeProduct = removeProduct;
		// self.deleteProduct = deleteProduct;

		// function getProducts(){
		// 	return api.request('/products',{},'GET')
		// 	.then(function(res){
		// 		//success callback
		// 		console.log(res);
		// 		self.products = res.data.products;
		// 		return res.data.products;
		// 	},function(res){
		// 		//error callback
		// 		console.log(res);
		// 		return;
		// 	})
		// }

		function getProducts() {
			return self.products;
		}

		

		// function addProduct(product){
		// 	api.request('/products',product,'POST')
		// 	.then(function(res){
		// 		console.log(res);
		// 		if(res.status === 200){
		// 			//product was added successfully
		// 			self.products.push(res.data.product);
		// 			state.go('admin.dash');
		// 		}
		// 	})
		// }

		// function updateProduct(product,productId){
		// 	api.request('/products/'+productId,product,'PUT')
		// 	.then(function(res){
		// 		console.log(res);
		// 		if(res.status === 200){
		// 			//product was updated successfully
		// 			self.updateProductList(product,productId);
					
		// 		}
		// 	})
		// }

		// function deleteProduct(productId){
		// 	api.request('/products/'+productId,{},'DEL')
		// 	.then(function(res){
		// 		console.log(res);
		// 		if(res.status === 200){
		// 			//product was deleted successfully
		// 			self.removeProduct(productId);
		// 			state.go('admin.dash');
					
		// 		}
		// 	})
		// }

		// function getProduct(productId){
		// 	return api.request('/products/'+productId,{},'GET');
		// }

		// function updateProductList(product,productId){
		// 	for(var i=0;i < self.products.length;i++){
		// 		if(self.products[i].id == productId){
		// 			self.products[i].name = product.name;
		// 			self.products[i].image = product.image;
		// 			self.products[i].description = product.description;
		// 			self.products[i].category = product.category;
		// 			self.products[i].price = product.price;
		// 			self.products[i].quantity = product.quantity;
		// 		}
		// 	}
		// }

		// function removeProduct(productId){
		// 	for(var i=0;i < self.products.length;i++){
		// 		if(self.products[i].id == productId){
		// 			delete self.products[i];
		// 		}
		// 	}
		// }
	}

		var PRODUCT_DATA = [{
		"Name": "A",
		"Consonant": false,
		"Type": "vowel",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=63910004",
		"tileID": "001",
		"tilePV": "001",
		"Description": "",
		"quantity": 9,
		"price": 3.00
	}, {
		"Name": "B",
		"Consonant": true,
		"Type": "consonant",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=74929706",
		"tileID": "002",
		"tilePV": "003",
		"Description": "",
		"quantity": 2,
		"price": 3.00
	}, {
		"Name": "C",
		"Consonant": true,
		"Type": "consonant",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=76745932",
		"tileID": "003",
		"tilePV": "003",
		"Description": "",
		"quantity": 2,
		"price": 3.00
	}, {
		"Name": "D",
		"Consonant": true,
		"Type": "consonant",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=63910069",
		"tileID": "004",
		"tilePV": "002",
		"Description": "",
		"quantity": 4,
		"price": 3.00
	}, {
		"Name": "E",
		"Consonant": false,
		"Type": "vowel",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=63910182",
		"tileID": "005",
		"tilePV": "001",
		"Description": "",
		"quantity": 12,
		"price": 3.00
	}, {
		"Name": "F",
		"Consonant": true,
		"Type": "consonant",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=84770644",
		"tileID": "006",
		"tilePV": "004",
		"Description": "",
		"quantity": 2,
		"price": 3.00
	}, {
		"Name": "G",
		"Consonant": true,
		"Type": "consonant",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=78442476",
		"tileID": "007",
		"tilePV": "002",
		"Description": "",
		"quantity": 3,
		"price": 3.00
	}, {
		"Name": "H",
		"Consonant": true,
		"Type": "consonant",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=70733744",
		"tileID": "008",
		"tilePV": "004",
		"Description": "",
		"quantity": 2,
		"price": 3.00
	}, {
		"Name": "I",
		"Consonant": false,
		"Type": "vowel",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=70636441",
		"tileID": "009",
		"tilePV": "001",
		"Description": "",
		"quantity": 9,
		"price": 3.00
	}, {
		"Name": "J",
		"Consonant": true,
		"Type": "consonant",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=63909871",
		"tileID": "010",
		"tilePV": "008",
		"Description": "",
		"quantity": 1,
		"price": 3.00
	}, {
		"Name": "K",
		"Consonant": true,
		"Type": "consonant",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=87123099",
		"tileID": "011",
		"tilePV": "005",
		"Description": "",
		"quantity": 1,
		"price": 3.00
	}, {
		"Name": "L",
		"Consonant": true,
		"Type": "consonant",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.samski.co.uk/wp/wp-content/uploads/Letter.jpg",
		"tileID": "012",
		"tilePV": "001",
		"Description": "",
		"quantity": 4,
		"price": 3.00
	}, {
		"Name": "M",
		"Consonant": true,
		"Type": "consonant",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=73537103",
		"tileID": "013",
		"tilePV": "003",
		"Description": "",
		"quantity": 2,
		"price": 3.00
	}, {
		"Name": "N",
		"Consonant": true,
		"Type": "consonant",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=70636045",
		"tileID": "014",
		"tilePV": "001",
		"Description": "",
		"quantity": 6,
		"price": 3.00
	}, {
		"Name": "O",
		"Consonant": false,
		"Type": "vowel",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=70635972",
		"tileID": "015",
		"tilePV": "001",
		"Description": "",
		"quantity": 8,
		"price": 3.00
	}, {
		"Name": "P",
		"Consonant": true,
		"Type": "consonant",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=74929587",
		"tileID": "016",
		"tilePV": "003",
		"Description": "",
		"quantity": 2,
		"price": 3.00
	}, {
		"Name": "Q",
		"Consonant": true,
		"Type": "consonant",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=70901255",
		"tileID": "017",
		"tilePV": "010",
		"Description": "",
		"quantity": 1,
		"price": 3.00
	}, {
		"Name": "R",
		"Consonant": true,
		"Type": "consonant",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=78432134",
		"tileID": "018",
		"tilePV": "001",
		"Description": "",
		"quantity": 6,
		"price": 3.00
	}, {
		"Name": "S",
		"Consonant": true,
		"Type": "consonant",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=70636392",
		"tileID": "019",
		"tilePV": "001",
		"Description": "",
		"quantity": 4,
		"price": 3.00
	}, {
		"Name": "T",
		"Consonant": true,
		"Type": "consonant",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=66386907",
		"tileID": "020",
		"tilePV": "001",
		"Description": "",
		"quantity": 6,
		"price": 3.00
	}, {
		"Name": "U",
		"Consonant": false,
		"Type": "vowel",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=70636329",
		"tileID": "021",
		"tilePV": "001",
		"Description": "",
		"quantity": 4,
		"price": 3.00
	}, {
		"Name": "V",
		"Consonant": true,
		"Type": "consonant",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=88677393",
		"tileID": "022",
		"tilePV": "001",
		"Description": "",
		"quantity": 2,
		"price": 3.00
	}, {
		"Name": "W",
		"Consonant": true,
		"Type": "consonant",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=71302964",
		"tileID": "023",
		"tilePV": "004",
		"Description": "",
		"quantity": 2,
		"price": 3.00
	}, {
		"Name": "X",
		"Consonant": true,
		"Type": "consonant",
		"ANV": 024,		"color": "tan",		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=86484912",
		"tileID": "024",
		"tilePV": "008",
		"Description": "",
		"quantity": 1,
		"price": 3.00
	}, {
		"Name": "Y",
		"Consonant": true && false,
		"Type": "vowel || consonant",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=65997176",
		"tileID": "025",
		"tilePV": "004",
		"Description": "",
		"quantity": 2,
		"price": 3.00
	}, {
		"Name": "Z",
		"Consonant": true,
		"Type": "consonant",
		"color": "tan",
		"Language": "English",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=85623090",
		"tileID": "026",
		"tilePV": "010",
		"Description": "",
		"quantity": 1,
		"price": 3.00
	},  {
		"Name": "Blank",
		"Type": "blank",
		"color": "tan",		
		"Language": "Any",
		"Image": "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=75736351",
		"tileID": "027",
		"tilePV": "000",
		"Description": "",
		"quantity": 2,
		"price": 3.00
	}, ]
	
})();