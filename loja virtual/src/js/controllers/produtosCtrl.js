angular.module('produtos',[])

.factory('produtosService', function($http){
	return {
	    allProducts: function() {
	      return $http.get('/api/produtos');
	    },
	    allCategories: function(){
	    	return $http.get('/api/categorias');
	    },
	    productById: function(id) {
	    	return $http.get('/api/produtos/' + id);
	    },
	    ordenacao: function(){
	    	return $http.get('/api/ordens');
	    }
	}
})

.controller('produtosCtrl', function($scope, $location, produtosService){

	produtosService.allProducts()
		.then(function(data){
			console.log(data);
			$scope.produtos = data.data;
		});

	produtosService.allCategories()
		.then(function(data){
			$scope.categorias = data.data;
		});

	produtosService.ordenacao()
		.then(function(data){
			$scope.ordens = data.data;
		})
	


	$scope.filtro = '';

	$scope.carrinho = [];

	$scope.filtrar = function(nome){ 
		$scope.filtro = angular.copy(nome);
		console.log($scope.filtro);
	}

	$scope.isDisponivel = 'sim';

	$scope.setVarDisponivel = function(string){
		$scope.isDisponivel = string;
	}

	$scope.ordem = 'preco';

	$scope.ordenar = function(string){
		$scope.ordem = string;
		console.log($scope.ordem);
	}

	$scope.testando = function(){
		console.log($scope.filtro);
	}

	$scope.addToCart = function(product){
		$scope.carrinho.push(angular.copy(product));
	}

	$scope.removeFromCart = function(product){
		$scope.carrinho.splice(product, 1);
	};

	$scope.getDetails = function(id){
		$location.path('/details/' + id);
	}

	$scope.goToCart = function(){
		$location.path('/cart');
	}
 
	$scope.getTotal = function(){
		var total = 0;
		angular.forEach($scope.carrinho,function(item){
			total += parseFloat(item.preco - (item.preco * (item.promocao * 0.01)));
		})
		return total;
	}

	produtosService.productById(1)
 	.then(function(data) {
 		console.log(data);
 	})
})

.controller('detailsCtrl', function($scope,$routeParams, produtosService){
  	$scope.produto = []; 
  	produtosService.productById($routeParams.id)
	  	.then(function(data){
	  		$scope.produto = data.data;
	});
})