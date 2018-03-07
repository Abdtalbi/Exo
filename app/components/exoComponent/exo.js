angular.module('EXO')
	.directive('exoDirective', ['$http',function($http) {
		
        return {
            restrict: 'A',
            link: function(scope){
            	scope.message = "";
            	scope.data = "";
        		$http({
				  method: 'GET',
				  url: '/getData'
				}).then(function successCallback(response) {
					console.log(response.data);
					scope.data = response.data;
				}, function errorCallback(error) {
					scope.data = {};
				});
				scope.chooseOption = function(res){
					scope.message = res.msg;
				};
            },
            templateUrl: 'components/exoComponent/exo.html'
        };
    }]);