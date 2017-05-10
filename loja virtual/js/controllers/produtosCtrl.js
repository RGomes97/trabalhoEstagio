angular.module('produtos',[])

.factory('produtosService', function($http){

	var produtos;
	
	console.log(produtos);
	return {
	    allProducts: function() {
	      return $http.get('/api/produtos');
	    }
	}
})

.controller('produtosCtrl', function($scope, produtosService){

	produtosService.allProducts()
		.success(function(data){
			$scope.produtos = data;
		});

	$scope.filtro = '';

	$scope.carrinho = [];

	$scope.addToCart = function(product){
		$scope.carrinho.push(angular.copy(product));
	}

	$scope.removeFromCart = function(product){
		$scope.carrinho.splice(product, 1);
	};

	$scope.getTotal = function(){
		var total = 0;
		angular.forEach($scope.carrinho,function(item){
			total += parseFloat(item.preco);
		})
		return total;
	}
})

.controller('detailsCtrl', function($scope,$routeParams, produtosService){
	$scope.model = {
    	id: $routeParams.id,
  	}

  	var teste; 
  	produtosService.allProducts()
	  	.success(function(data){
	  		teste = data;
		  	teste.forEach(function(item){
		  		if(item.id == $scope.model.id){
		  			$scope.nome = item.nome;
		  			$scope.url = item.url;
		  			$scope.preco = item.preco;
		  			$scope.details = item.descricao;
		  		}
		  	});	
	  	});

})