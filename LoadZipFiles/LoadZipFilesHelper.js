({
	validateFiles : function(component, helper, convertedFiles, startTime) {
        var chosenFiles = component.find("files").getElement().files;
        var chosenFilesLength = chosenFiles.length;
        var promises = [];
        for (let i = 0; i < chosenFilesLength; ++i) {
			promises.push(this.extractAttachments(convertedFiles[i].file, this, component));         
        }
        console.log('Before Promise All');
        Promise.all(promises).then(
            function(extractedZipInfos){
				let end = Date.now();
				let elapsed = end - startTime;
                console.log('Time of Lib code opperation:', elapsed/1000 + ' sec');
            }
        );
    },
    
     extractAttachments : function(file, fileName, helper, component) {
        return JSZip.loadAsync(file).then($A.getCallback(function(zip) {
            console.log('in then after loadAsync()');  
            return(zip)
        }), $A.getCallback(function (e) {
            console.log('error');
        }));
    },
    
    stringToArrayLike : function (component) {
        let startTime = Date.now();
        let str = '';
		let array = [];
        let maxIter = component.find('select').get('v.value');
        for (var i = 0; i < maxIter; i++) {
            array.push(i);
            str += '' + i;
        }
        for (var i = 0; i < str.length; ++i) {
            array[i] = str.charCodeAt(i) & 0xFF;
        }
        let arrayStr = JSON.stringify(array);
        
        let end = Date.now();
        let elapsed = end - startTime;
        console.log('Time of Custom code opperation:', elapsed/1000 + ' sec');
        return array;
	},
})