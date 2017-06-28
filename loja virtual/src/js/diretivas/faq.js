app.directive('faq', function($compile, $templateRequest){
	return{
		restrict: 'AE',
    	templateUrl: '../../help.html',
    	replace: true,
    	link: function(scope, element){
    		$templateRequest("../../help.html").then(function(html){
              var template = angular.element(html);
		      element.append(template);
		      $compile(template)(scope);
            });
    	});
	};
})