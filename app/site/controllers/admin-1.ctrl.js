// $(document).ready(function(){
//     $('#myTable').DataTable();
// });


(function(){

    'use strict';

    angular
        .module('shopApp')
        .controller('AdminCtrl', AdminCtrl);
        

    function AdminCtrl($scope, $state, productSrv, $location, shopMainSrv) {
        var adminVm = this;
        adminVm.active = 0;
        adminVm.todoIndex=0;
        adminVm.currentTab = 'orders';
        

//------------Not working yet------------//
        adminVm.todos = [
            {Order: 'Order ID 1', done: true},
            {Order: 'Order ID 2', done: true},
            {Order: 'Order ID 3', done: true}
        ];

        adminVm.addtoorder = addtoorder;
        function addtoorder(){
            for (var i = 0; i < self.orderList.length; i++){
                adminVm.todos.push({Order: self.orderList[i].orderQty, done: true});
            }
        }

adminVm.productEdit = productEdit;

function productEdit (product){
    console.log(product);
    adminVm.productImage = product.Image
    adminVm.productName = product.Name;
    adminVm.productType =  product.Type;
    adminVm.productPrice = product.price;
    adminVm.productQuantity = product.quantity;
    adminVm.ProductID=product.tileID;
}
/// for loop for all the array of products shown see which one equals product tile ID


//ctrl.is_products

    adminVm.productSubmit= productSubmit; 

function productSubmit (){

 for (var index=0; index < adminVm.products.length; index++){

    console.log(adminVm.products[index].tileID);

if (adminVm.ProductID === adminVm.products[index].tileID){

  adminVm.products[index].Image = adminVm.productImage; 
    adminVm.products[index].Name = adminVm.productName;
      adminVm.products[index].Type = adminVm.productType;
      adminVm.products[index].price =  adminVm.productPrice;
      adminVm.products[index].quantity = adminVm.productQuantity;

    }

  }
}

adminVm.deleteProduct = deleteProduct;
function deleteProduct(product){

    var index = adminVm.products.indexOf(product);
    console.log(product);
    adminVm.products.splice(index, 1);

}



        adminVm.productSrv = productSrv;



        //check if logged in
        if(localStorage.authToken == undefined || localStorage.authToken == null){
            $state.go('auth');
        }
                    
        // adminVm.products;
        // if(adminVm.products.length > 0 ){
        //  adminVm.is_products = true;
        // }

        //watch for updates to products object
        $scope.$watch(function(){
            return productSrv.products;
        }, function (newValue) {
            if(productSrv.products.length > 0){
                adminVm.products = productSrv.products;
                adminVm.is_products = true;
            }
        });

        //public functions
        adminVm.editProduct = editProduct;
        adminVm.logout = logout;

        function editProduct(product){
            $state.go('admin.edit_product',{productId:product.id});
        }

        function logout(){
            console.log('Logging out');
            localStorage.removeItem('authToken');
            $state.go('auth');
            // $location.path('/');
        }


 this.click = click;

    function click(){

        for (var i=0; i < adminVm.todos.length; i++){

            console.log(adminVm.todos[i]);
        if (adminVm.todos[i].done==true){

        adminVm.todos.splice(i);
 
        }
    }
        adminVm.isDisabled = true;
    } 



    adminVm.disabled = disabled;
    // this.isDisabled = false; // can be true or false

function disabled(){
    console.log('checking if it should be disabled');
    adminVm.isDisabled = true;
    for (var i=0; i < adminVm.todos.length; i++){

        if (adminVm.todos[i].done==true){

            adminVm.isDisabled = false;
 
        }
    }
//add a variable that keeps track of if all are false ie.  ---> var disabled = this;
}

adminVm.disabled();


    this.submit = submit;

    function submit(){
 
         adminVm.todos.push({
            text: adminVm.text ///todoVm is like saying this
         });
          adminVm.text = "";
    

    }


        adminVm.filters = [
            {label: 'All', showTodo: function(todo) {return true;}},
            {label: 'Active', showTodo: function(todo) {return !todo.done;}},
            {label: 'Complete', showTodo: function(todo) {return todo.done;}}
        ]
    }
})();