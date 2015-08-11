
(function(){
'use strict';

angular
.module("IntegratorMonApp")
    .controller("BiCtrl", ["$scope","createPieConfig","createPCCT","$http", "$interval","biService", 
    	function ($scope, pieConfig, pcct, $http, $interval, biService) {

        $scope.title = "BI status";

        $scope.pieConfig=pieConfig;
        $scope.filterData="";
        $scope.requiredDate="";
        $scope.inProgressCC="";

        $scope.getProccessedPccts=function(date){  

        	
        	
        	var today=new Date();
        	var requiredDate= new Date(today.getTime()- date);
        	if(date=== 0)
        	{
        		requiredDate.setHours(0);
        		requiredDate.setMinutes(0);
        	}
        	
        	$scope.requiredDate= formatDate(requiredDate);
        	console.log("Get Proccessed PCCT after:" + requiredDate);
        	
        	biService.getProccessedPcct($scope.requiredDate ).then( function(response)
        	{
        		
        		 if(response.data.length >0){
        		  $scope.data=response.data;
        		  updatePie();
        	   }
        	});
        	   
        };

    	
    	$scope.getInProgressPccts= function(){
    		biService.getInProgressPccts().then(function(response){
    			$scope.inProgressCC=response.data.length;
    		});
    	};

    	$scope.getInProgressPccts();

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
            };


        var formatDate= function(dt){
        	
        	var date = new Date(dt);
        	console.log(typeof(date));
        	//debugger;
        		//if(typeof(date) === Date)
        		//{
        			var y=date.getFullYear();
        			var m=date.getMonth() +1;
        			var d=date.getDate();
        			var h=date.getHours();
        			var mins=date.getMinutes();	

        			var fd= y+'-'+ m +'-' + d + ' ' + h + ':' + mins;
        			return fd;
        	//	}


        };

    }]);

})();    