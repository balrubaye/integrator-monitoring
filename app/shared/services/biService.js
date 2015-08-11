
angular.module('IntegratorMonApp')
.service('biService', [ '$http', function($http){

		this.getProccessedPcct = function(date){ 
        	return $http.get("http://localhost:52348/integration/bi/planned-customer-choice/search?date="+ date);       
        };

    	this.getLastActivity = function(){
    		return $http.get("http://localhost:52348/integration/bi/last-proccessing-date");    		
    	};

    	this.getInProgressPccts= function(){
    		return $http.get("http://localhost:52348/integration/bi/planne-customer-choice/in-progress");
    	};

	
}]);