const app = angular.module('main', ['produtos','ngAnimate','ngRoute','ngMockE2E']);
app.config(function($routeProvider){
	$routeProvider
	.when('/cart', {
		templateUrl: 'cart.html'
	})
	.when('/', {
		templateUrl: 'principal.html'
	})
	.when('/details/:id', {
		templateUrl: 'details.html',
		controller: 'detailsCtrl'
	})
	.otherwise({redirectTo:'/'});
});

app.run(function($httpBackend){

	var MockProducts = [{
			id: 1,
			nome: 'Gato maneiro',
			categoria: 'gatos',
			descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent', 
			url: "http://artisnobilis.com/imgface/gallery/imagens-bonitas-para-facebook-325.jpg",
			preco: 40,
			promocao: 10
		},
		{	
			id: 2,
			nome: 'Lobão louco',
			categoria: 'lobos',
			descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent', 
			url: "http://www.clickgratis.com.br/fotos-imagens/imagens/aHR0cDovL3d3dy5jbGlja2dyYXRpcy5jb20uYnIvZm90b3MtaW1hZ2Vucy9pbWFnZW5zL2FIUjBjRG92TDNkM2R5NWpiR2xqYTJkeVlYUnBjeTVqYjIwdVluSXZabTkwYjNNdGFXMWhaMlZ1Y3k5cGJXRm5aVzV6TDJGSVVqQmpSRzkyVERKck1rMXBOVEJoVnpVMVkwZHNha3h0VG5aaVV6aDVZbGhqTldFelNUVk1iWEIzV25jOVBTNXFjR2M9LmpwZw==.jpg",
			preco: 100,
			promocao: 44
		},
		{	
			id: 3,
			nome: 'tigre',
			categoria: 'tigres',
			descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent', 
			url: "https://s-media-cache-ak0.pinimg.com/736x/9d/8b/e8/9d8be883d5ee9887c6575d5561549d2e.jpg",
			preco: 300,
			promocao: 30
		},
		{	
			id: 4,
			nome: 'Gato de óculos',
			categoria: 'gatos',
			descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent', 
			url: "https://s-media-cache-ak0.pinimg.com/736x/22/a2/19/22a21941d8e5fce3c6e9e3a8a258cef4.jpg",
			preco: 500,
			promocao: 25
		},
		{	
			id: 5,
			nome: 'Bicho estranho',
			categoria: 'bichos',
			descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent', 
			url: "https://catracalivre.com.br/wp-content/uploads/2015/10/imagens-3D_11.gif",
			preco: 89,
			promocao: 60
		},
		{	
			id: 6, 
			nome: 'Cachorro',
			categoria: 'cachorros',
			descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent', 
			url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTEhXoo0R9YIAvZ3RLp7IlejqxYsxXWpPHq7iteP6lAwUZ12hIslg", 
			preco: 45,
			promocao: 15
		}];


	$httpBackend.when('GET', /\.html$/).passThrough();
	$httpBackend.when('GET', '/api/produtos').respond(angular.copy(MockProducts));
	$httpBackend.when('GET', '/api/categorias').respond([
		{
			id: 1,
			nome: 'gatos'
		},
		{
			id: 2,
			nome: 'cachorros'
		},
		{
			id: 3,
			nome: 'lobos'
		}
	]);

	$httpBackend.whenRoute('GET', '/api/produtos/:id').respond(function(method, url, data, headers, params) {
		console.log(params);
		var produto = [];
		MockProducts.forEach(function(product){
			if(product.id == params.id){
				produto = product;
			};
		})
		return [200, produto];
	});
});