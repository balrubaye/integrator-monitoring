
angular.module('IntegratorMonApp')
.service('biService', [ '$http', 'Config', function($http, Config){

		this.getProccessedPcct = function(date){ 
        	return $http.get(Config.env.dev + Config.serviceUrl.getProccessedPcct + date);       
        };

    	this.getLastActivity = function(){
    		return $http.get(Config.env.dev + Config.serviceUrl.getLastActivity );    		
    	};

    	this.getInProgressPccts= function(){
    		return $http.get(Config.env.dev + Config.serviceUrl.getInProgressPccts);
    	};

	
}]);