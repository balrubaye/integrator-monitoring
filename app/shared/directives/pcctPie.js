
( function() {
	'use strict;'


angular
.module('IntegratorMonApp')
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



})();