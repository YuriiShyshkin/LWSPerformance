({
    afterScriptsLoaded : function(component, event, helper) {
        console.log('ScriptLoaded');
    },
    
    runJs : function(component, event, helper) {
        let startTime = Date.now();
        if (component.find('toggle').get('v.checked')) {
            
            helper.runLib(component, helper, startTime); 
            
        } else {
            
           helper.arrayToString(component); 
            
        }
    },
    
    toogleInput : function(component, event, helper) {
        helper.toggleInput(component);
    },
})