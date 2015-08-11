(function() {

angular
.module("IntegratorMonApp")
.factory("createPieConfig", function(){

   return {
    "header": {
        "title": {
            "text": "BI ",
            "fontSize": 22,
            "font": "verdana"
        },
        "subtitle": {
            "text": "List of proccessed Planned Customer Choices by the BI integrator.",
            "color": "#999999",
            "fontSize": 10,
            "font": "verdana"
        },
        "titleSubtitlePadding": 12
    },
    "footer": {
        "text": ".",
        "color": "#999999",
        "fontSize": 11,
        "font": "open sans",
        "location": "bottom-center"
    },
    "size": {
        "canvasHeight": 400,
        "canvasWidth": 590,
        "pieOuterRadius": "88%"
    },
    "data": {
        "content": [
            {
                "label": "Successful ",
                "value": 8,
                "color": " #8db600"
            },
            {
                "label": "Failed!",
                "value": 5,
                "color": "#e32636"
            }
        ]
    },
    "labels": {
        "outer": {
            "pieDistance": 32
        },
        "inner": {
            "format": "value"
        },
        "mainLabel": {
            "font": "verdana"
        },
        "percentage": {
            "color": "#e1e1e1",
            "font": "verdana",
            "decimalPlaces": 0
        },
        "value": {
            "color": "#e1e1e1",
            "font": "verdana"
        },
        "lines": {
            "enabled": true,
            "color": "#cccccc"
        },
        "truncation": {
            "enabled": true
        }
    },
    "effects": {
        "pullOutSegmentOnClick": {
            "effect": "linear",
            "speed": 400,
            "size": 8
        }
    }, callbacks: {
        onClickSegment: function(a) {
           // alert("Segment clicked! See the console for all data passed to the click handler.");
          
          var el= document.getElementsByName("filterData")[0];
          if(a.index=== 0 && !a.expanded)            
            el.setAttribute("value", "86d8638b");
        else if(a.index=== 1 && !a.expanded )
            el.setAttribute("value", "86d8638b");
        else
            el.setAttribute("value", "");
          console.log(a);
        }
    }
}

});



})();