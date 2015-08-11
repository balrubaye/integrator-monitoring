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
        templateUrl: "shared/header.html"
    };
})
    .directive("ttFooter", function(){
    	return{
    		templateUrl: "shared/footer.html",
            link: function(scope, elm, attr){
                    console.log("sssss");
            }    
    	};
    })
    .directive("ddPie", ["createPieConfig", function(pieConfig){
        return{
            restrict:"AE",
            replace:true,
            template:'<div id="myPie"></div>',
            scope:{pieConfig:"=pieConfig", data:"=data"},
            link: function(scope, elm, attr){
                console.log("Link is running !!");
                //debugger;
                //myFunction(scope.pieConfig);
                //console.log(pieConfig);
                var pie = new d3pie("myPie", scope.pieConfig);
                var redraw=false;
                console.log(scope);

                scope.$watch("data", function(ol,dd){
                    if(redraw)
                     pie.redraw();

                 redraw=true;

                    console.log("redraw");
                    //console.log("new="+ newVal);
                });



               

            }
        };
    }]);
    


    var myFunction= function(pieConfig, reDraw){
        if(reDraw )

        var pie = new d3pie("myPie", pieConfig);
    };
