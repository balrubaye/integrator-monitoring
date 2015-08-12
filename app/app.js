angular.module("IntegratorMonApp", ["ngRoute"])
.config(["$routeProvider", function ($routeProvider) {
        
        $routeProvider
    .when("/", {
            templateUrl: "components/home/home.html",
            controller: "HomeCtrl"
        })
    .when("/bi", {
            templateUrl: "components/bi/bi.html",
            controller: "BiCtrl"
        })
    .when("/act", {
            templateUrl: "components/act/act.html",
            controller: "ActCtrl"
        })
    .when("/edw", {
            templateUrl: "components/bi/bi.html",
            controller: "BiCtrl"
        })                   
    .otherwise({
            redirectTo: "/"
        });

    }])
    .directive("navBar", function () {
    
    return {
        templateUrl: "shared/templates/header.html"
    };
})
    .directive("ttFooter", function(){
    	return{
    		templateUrl: "shared/templates/footer.html",
            link: function(scope, elm, attr){
                    console.log("sssss");
            }    
    	};
    });
    