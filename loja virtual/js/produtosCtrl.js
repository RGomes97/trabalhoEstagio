angular.module('produtos',[])

.factory('produtosService', function(){
	var produtos = [
		{

			id: '1',
			nome: 'Gato maneiro',
			descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent', 
			url: "http://artisnobilis.com/imgface/gallery/imagens-bonitas-para-facebook-325.jpg",
			preco: '40'
		},
		{	
			id: '2',
			nome: 'Lobao louco',
			descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent', 
			url: "http://www.clickgratis.com.br/fotos-imagens/imagens/aHR0cDovL3d3dy5jbGlja2dyYXRpcy5jb20uYnIvZm90b3MtaW1hZ2Vucy9pbWFnZW5zL2FIUjBjRG92TDNkM2R5NWpiR2xqYTJkeVlYUnBjeTVqYjIwdVluSXZabTkwYjNNdGFXMWhaMlZ1Y3k5cGJXRm5aVzV6TDJGSVVqQmpSRzkyVERKck1rMXBOVEJoVnpVMVkwZHNha3h0VG5aaVV6aDVZbGhqTldFelNUVk1iWEIzV25jOVBTNXFjR2M9LmpwZw==.jpg",
			preco: '100'
		},
		{	
			id: '3',
			nome: 'Onca',
			descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent', 
			url: "https://s-media-cache-ak0.pinimg.com/736x/9d/8b/e8/9d8be883d5ee9887c6575d5561549d2e.jpg",
			preco: '300'
		},
		{	
			id: '4',
			nome: 'gato de oculos',
			descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent', 
			url: "https://s-media-cache-ak0.pinimg.com/736x/22/a2/19/22a21941d8e5fce3c6e9e3a8a258cef4.jpg",
			preco: '500'
		},
		{	
			id: '5',
			nome: 'bicho estranho',
			descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent', 
			url: "https://catracalivre.com.br/wp-content/uploads/2015/10/imagens-3D_11.gif",
			preco: '89'},
		{	
			id: '6', 
			nome: 'cachorro',
			descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent', 
			url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTEhXoo0R9YIAvZ3RLp7IlejqxYsxXWpPHq7iteP6lAwUZ12hIslg", 
			preco: '45'
		}
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
		$scope.carrinho.push(angular.copy(product));
	}

	$scope.removeFromCart = function(product){
		$scope.carrinho.splice(product, 1);
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
  			$scope.details = item.descricao;
  		}
  	});	
})