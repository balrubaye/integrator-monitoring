(function() {

	angular.module("IntegratorMonApp")
	.factory("createPCCT", function(){
		return {
        "id": 0,
        "plannedCustomerChoiceId": "",
        "assortedCustomerChoiceId": "",
        "dirtyHint": 0,
        "isActive": false,
        "isReceiptPlanPublic": false,
        "dimensionDirty": false,
        "wpDirty": false,
        "cpDirty": false,
        "opDirty": false,
        "version": 0,
        "surpassedRetry": false,
        "retryCount": 0,
        "errorInformation": null,
        "created": "",
        "lastModified": "",
        "_links": []
      }
	});
})();