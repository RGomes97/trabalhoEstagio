angular.module('produtos',[])

.factory('produtosService', function(){
	var produtos = [
		{id: '1', nome: 'produto1', url: "http://www.aprenderexcel.com.br//imagens/noticia/385/2901-1.jpg", preco: '40'},
		{id: '2', nome: 'produto2', url: "http://www.aprenderexcel.com.br//imagens/noticia/385/2901-1.jpg", preco: '100'},
		{id: '3', nome: 'produto3', url: "http://www.aprenderexcel.com.br//imagens/noticia/385/2901-1.jpg", preco: '300'},
		{id: '4', nome: 'produto4', url: "http://www.aprenderexcel.com.br//imagens/noticia/385/2901-1.jpg", preco: '500'},
		{id: '5', nome: 'produto5', url: "http://www.aprenderexcel.com.br//imagens/noticia/385/2901-1.jpg", preco: '89'},
		{id: '6', nome: 'produto6', url: "http://www.aprenderexcel.com.br//imagens/noticia/385/2901-1.jpg", preco: '45'}
	]

	return {
	    allProducts: function() {
	      return produtos;
	    }
	}
})

.controller('produtosCtrl', function($scope, produtosService){

	$scope.produtos = produtosService.allProducts();	

	$scope.filtro = '';

	$scope.carrinho = [];

	$scope.addToCart = function(product){
		console.log(product.id);
		$scope.carrinho.push(angular.copy(product));
		console.log($scope.carrinho);
	}

	$scope.removeFromCart = function(product){
		console.log(product);
		$scope.carrinho.splice(product, 1);
		console.log($scope.carrinho);
	};
})

.controller('detailsCtrl', function($scope,$routeParams, produtosService){
	$scope.model = {
    	id: $routeParams.id,
  	}

  	var teste = produtosService.allProducts();

  	angular.forEach(teste, function(item){
  		if(item.id == $scope.model.id){
  			$scope.nome = item.nome;
  			$scope.url = item.url;
  			$scope.preco = item.preco;
  		}
  	});	


  	console.log($scope.model);
})