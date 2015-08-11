angular.module("IntegratorMonApp")
.directive("pcctTable", function(){

	 return{
            restrict:"AE",
            replace:true,
            templateUrl:'components/home/pcctTable.html',
            scope:{pcctData:"=pcctData"}
            
        };
});