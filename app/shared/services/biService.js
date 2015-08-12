
angular.module('IntegratorMonApp')
.service('biService', [ '$http', 'SERVICE_URL', function($http, SERVICE_URL){

		this.getProccessedPcct = function(date){ 
        	return $http.get("http://localhost:52348"+ SERVICE_URL.getProccessedPcct + date);       
        };

    	this.getLastActivity = function(){
    		return $http.get("http://localhost:52348" + SERVICE_URL.getLastActivity );    		
    	};

    	this.getInProgressPccts= function(){
    		return $http.get("http://localhost:52348" + SERVICE_URL.getInProgressPccts);
    	};

	
}]);