
(function(){
'use strict';

angular
.module("IntegratorMonApp")
    .controller("HomeCtrl", ["$scope","createPieConfig","createPCCT","$http", "$interval","biService", 
    	function ($scope, pieConfig, pcct, $http, $interval, biService) { 
        
        $scope.title = "Home page";
        $scope.pieConfig=pieConfig;
        $scope.filterData="";
        $scope.BILastActivity="";

        $scope.getData=function(date){  
        	var today=new Date();
        	var requiredDate= new Date(today.getTime()- date);
        	requiredDate.setHours(requiredDate.getHours() - requiredDate.getTimezoneOffset() / 60);
        	console.log(requiredDate.toJSON());
        	console.log(requiredDate.toUTCString());
        	console.log(requiredDate.toLocaleDateString());

        	biService.getProccessedPcct(requiredDate.toJSON()).then( function(response)
        	{
        		$scope.data=response.data;
        		updatePie();
        	});
        	//console.log(biService.getProccessedPcct("2015-07-20"));
        	//$scope.data=biService.getProccessedPcct("2015-07-20");        	
        	//updatePie();       
        };

    	console.log(biService);

    	console.log(biService.getLastActivity());
    	$scope.BILastActivity = biService.getLastActivity;

    	$scope.getBILastActivity= function(){ 
    		biService.getLastActivity().then(function(response){
    		
    			$scope.BILastActivity = response.data ;
    			console.log("BI activity");
    	 	});
    	};



    	$scope.getBILastActivity();

    	$interval($scope.getBILastActivity, 60000);


    	var updatePie= function(){
    		var noOfSuccess= $scope.data.filter( function(val){ return val.errorInformation === null ;}).length;

    		var noOfFailed= $scope.data.filter( function(val){ return val.errorInformation !== null ;}).length;
    		//$scope.$apply( function() {
    			$scope.pieConfig.data.content[0]={
                "label": "Successful ",
                "value": noOfSuccess,
                "color": "#8db600"
           	 	};

           	 $scope.pieConfig.data.content[1]={
                "label": "Failed ",
                "value": noOfFailed,
                "color": "#e32636"
            	};
           // });

            // myFunction($scope.pieConfig, true);

    		//console.log($scope.pieConfig);
    		//console.log(noOfSuccess);

    	}
    
    }]);
})();