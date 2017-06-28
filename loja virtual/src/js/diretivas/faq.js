app.directive('faq', function(){
	return{
		restrict: 'AE',
    	replace: true,
    	link: function(scope, element){
    		var script = document.createElement('script');
            script.id = 'dt-faq-script';
            script.src = 'https://faq.directtalk.com.br/1.0/static/dist/dt-faq.js?token=90727476-633f-4779-a911-22d12b625e4e&appearance=4e035bfb-d1f8-49e2-a13c-4607f4e066b2';
            console.log(element);
            element[0].appendChild(script);
    	}
	}
})