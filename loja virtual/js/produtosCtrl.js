angular.module('produtos',[]).controller('produtosCtrl', function($scope){

	$scope.produtos = [
		{nome: 'produto1', url: "http://www.aprenderexcel.com.br//imagens/noticia/385/2901-1.jpg", preco: '40'},
		{nome: 'produto2', url: "http://www.aprenderexcel.com.br//imagens/noticia/385/2901-1.jpg", preco: '100'},
		{nome: 'produto3', url: "http://www.aprenderexcel.com.br//imagens/noticia/385/2901-1.jpg", preco: '300'},
		{nome: 'produto4', url: "http://www.aprenderexcel.com.br//imagens/noticia/385/2901-1.jpg", preco: '500'},
		{nome: 'produto5', url: "http://www.aprenderexcel.com.br//imagens/noticia/385/2901-1.jpg", preco: '89'},
		{nome: 'produto6', url: "http://www.aprenderexcel.com.br//imagens/noticia/385/2901-1.jpg", preco: '45'}
	]

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
	}
})