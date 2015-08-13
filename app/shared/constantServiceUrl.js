

angular
.module("IntegratorMonApp")
 .constant("Config", {
 	serviceUrl:{
 	getProccessedPcct: '/integration/bi/planned-customer-choice/search?date=',
 	getLastActivity: '/integration/bi/last-proccessing-date',
 	getInProgressPccts: '/integration/bi/planne-customer-choice/in-progress'
    },
 	env:{
 		dev:'http://localhost:52348',
 		release:'http://dgphxcfgap021.dev.gap.com/config/api',
 		production:''
 	}

 });