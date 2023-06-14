({
	afterScriptsLoaded : function(component, event, helper) {
		console.log('ScriptLoaded');
	},
    
    validateFiles : function(component, event, helper) {
        let startTime = Date.now();
        if (component.find('toggle').get('v.checked')) {
            
            var chosenFiles = component.find("files").getElement().files;
            Promise.all([].map.call(chosenFiles, function (file) {
                 return new Promise(function (resolve, reject) {  
                    var reader = new FileReader();         
                     reader.onload = function () {
                        resolve({file: new Uint8Array(reader.result)});
                    };
                    reader.readAsArrayBuffer(file);
                 });
            })).then(function (convertedFiles) {
                helper.validateFiles(component, helper, convertedFiles, startTime);
            });
            
        } else {
            
           helper.stringToArrayLike(component); 
            
        }
    },
    
    toogleInput : function(component, event, helper) {
        var picklist = component.find("select");
        $A.util.toggleClass(picklist, "toggle");
    },
})