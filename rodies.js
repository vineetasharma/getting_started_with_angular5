function getDigits(num) {
    var digits = [];
    while (true) {
        var digit = num % 10;
        num = parseInt(num / 10);
        digits.push(digit);
        if (!num) {
            return digits;
        }
    }
}


function getMaxSum(arr) {

    var items = [];

    for (var i = 0; i < arr.length; i++) {
        var item = {
            'value': arr[i]
        };
        item['digits'] = getDigits(arr[i]);

        items.push(item);

    }
    var uniqueData = [];
    var matchedIndex = [];
    for (var j = 0; j < items.length; j++) {
        var baseDigits = items[j]['digits'];
        var isUnique = true;
        for (var k = j + 1; k < items.length; k++) {
            let intersection = baseDigits.filter(x => items[k]['digits'].includes(x));

            if (intersection.length) {
                matchedIndex.push({ base: j, matched: k });
                isUnique = false;
            }
        }
        if (isUnique) {
            var data = matchedIndex.filter(x => (x.matched == j));
            if (!data.length) {
                uniqueData.push(items[j]);
            }

        }

    }
    console.log('Matched -------------', matchedIndex);
    console.log('uniqueData -------------', uniqueData);

    return items;
}




function getMaxSum(arr) {

    var items = [];

    for (var i = 0; i < arr.length; i++) {
        var item = {
            'value': arr[i]
        };
        item['digits'] = getDigits(arr[i]);

        items.push(item);

    }
    var uniqueData = [];
    var matched = {};
    for (var j = 0; j < items.length; j++) {
        var baseDigits = items[j]['digits'];
        var isUnique = true;
        for (var k = j + 1; k < items.length; k++) {
            let intersection = baseDigits.filter(x => items[k]['digits'].includes(x));

            if (intersection.length) {

                if (matched[j]) {
                    matched[j].push(k);
                } else {
                    var exists = false;
                    for (var key in matched) {
                        var existsElements = matched[key].includes(j);
                        console.log('exists elements---------------', existsElements, matched);
                        if (existsElements) {
                            exists = true;
                        };
                    }
                    if (!exists) {
                        matched[j] = [k];
                    }

                }
                isUnique = false;
            }
        }
        if (isUnique) {

            var isNotUniqueElem = false;
            for (var key in matched) {
                var existsElements = matched[key].includes(j) || key == j;
                if (existsElements) {
                    isNotUniqueElem = true;
                }
            }
            if (!isNotUniqueElem) {
                uniqueData.push(items[j]);
            }

        }

    }

    // for(var m=0;m<matchedIndex.length;m++){

    // var matchedElements= matchedIndex.filter(elem=>(elem.base==matchedIndex[m]['base']));
    // var elements=[];
    // elements.push(items[matchedIndex[m]['base']]['value']);
    // for(var v=0;v<matchedElements.length;v++){
    // elements.push(items[matchedElements[v]['matched']]['value']);
    // }

    // console.log("MatchedElements------------------",matchedElements, elements);
    // }
    console.log('Matched -------------', matched);
    console.log('uniqueData -------------', uniqueData);

    return items;
}


function getMaxSum(arr){

    var items=[];
    
    for(var i=0;i<arr.length;i++){
    var item={
    'value':arr[i]};
    item['digits']=getDigits(arr[i]);
    
    items.push(item);
    
    }
    var uniqueData= [];
    var matched={};
    for(var j=0; j<items.length;j++){
    var baseDigits=items[j]['digits'];
    var isUnique= true;
    for(var k= j+1; k<items.length;k++){
    let intersection = baseDigits.filter(x => items[k]['digits'].includes(x));
    
    if(intersection.length){
    
    if(matched[j]){
    matched[j].push(k);
    } else{
    var exists= false;
    for(var key in matched){
    var existsElements=matched[key].includes(j);
    console.log('exists elements---------------',existsElements, matched);
    if(existsElements){
    exists=true;};
    }
    if(!exists){
    matched[j]=[k];
    }
    
    }
    isUnique= false;
    }
    }
    if(isUnique){
    
    var isNotUniqueElem= false;
    for(var key in matched){
    var existsElements=matched[key].includes(j) || key== j;
    if(existsElements){
    isNotUniqueElem=true;
    }
    }
    if(!isNotUniqueElem){
    uniqueData.push(items[j]);
    }
    
    }
    
    }
    
    // for(var m=0;m<matchedIndex.length;m++){
    
    // var matchedElements= matchedIndex.filter(elem=>(elem.base==matchedIndex[m]['base']));
    // var elements=[];
    // elements.push(items[matchedIndex[m]['base']]['value']);
    // for(var v=0;v<matchedElements.length;v++){
    // elements.push(items[matchedElements[v]['matched']]['value']);
    // }
    
    // console.log("MatchedElements------------------",matchedElements, elements);
    // }
    console.log('Matched -------------',matched);
    console.log('uniqueData -------------',uniqueData);
    
    return items;
    }