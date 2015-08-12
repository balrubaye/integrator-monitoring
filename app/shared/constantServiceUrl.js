

angular
.module("IntegratorMonApp")
 .constant("SERVICE_URL", {

 	getProccessedPcct: '/integration/bi/planned-customer-choice/search?date=',
 	getLastActivity: '/integration/bi/last-proccessing-date',
 	getInProgressPccts: '/integration/bi/planne-customer-choice/in-progress'

 });