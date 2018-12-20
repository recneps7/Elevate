({
    recordLoaded : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        var contact = component.get("v.record");
        toastEvent.setParams({
            "title": "Alert",
            "message": contact.Alert_Text__c,
            "type": "success"
        });
        toastEvent.fire();
    }
})
