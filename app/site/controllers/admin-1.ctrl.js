// $(document).ready(function(){
//     $('#myTable').DataTable();
// });


(function(){

    'use strict';


   
    angular
        .module('shopApp')
        .controller('AdminCtrl', AdminCtrl);
        

    function AdminCtrl($scope,$state,productSrv, $location) {
        var adminVm = this;
        adminVm.active = 0;
        adminVm.todoIndex=0;
        adminVm.currentTab = 'orders';
        
        adminVm.todos = [
            {Order: 'Order ID 1', done: false},
            {Order: 'Order ID 2', done: false},
            {Order: 'Order ID 3', done: true}
 ];






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
    
      



       


        // todoVm.submit = function() {
        // if (todoVm.text) {
        //   todoVm.todos.push(this.text);
        //   todo.text = '';
        // }}









        adminVm.filters = [
            {label: 'All', showTodo: function(todo) {return true;}},
            {label: 'Active', showTodo: function(todo) {return !todo.done;}},
            {label: 'Complete', showTodo: function(todo) {return todo.done;}}
        ]
    }
})();