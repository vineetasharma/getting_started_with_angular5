

function getCorrectInputs(altInputs, dataInputs, max, index) {
    var finalMaxSum = 0, finalInputs = [];
    for (var m = 0; m < altInputs.length; m++) {
        if (altInputs[m] > dataInputs[m]) {
            finalMaxSum = max[index].altSum;
            finalInputs = max[index].alternateInputs;
            // console.log('final----if--', finalMaxSum, finalInputs);
            return ({ finalMaxSum, finalInputs });
        } else if (altInputs[m] < dataInputs[m]) {
            finalMaxSum = max[index].sum;
            finalInputs = max[index].inputs;
            // console.log('final----else if--', finalMaxSum, finalInputs);
            return ({ finalMaxSum, finalInputs });
        }
    }
    finalMaxSum = max[index].sum;
    finalInputs = max[index].inputs;
    return ({ finalMaxSum, finalInputs });
}

function maxSum(inputTickets) {
    var inputsTicketsDec = [];
    Object.assign(inputsTicketsDec, inputTickets);
    inputsTicketsInDec.sort(function (a, b) { return (a - b); });
    if (inputsTicketsInDec[inputsTicketsInDec.length - 1] < 0) {
        console.log('FGinal Output------', inputsTicketsInDec[inputsTicketsInDec.length - 1]);
    }
    var max = [];
    for (var i = 0; i < 2; i++) {
        var tempSum = 0;
        var altSum = 0;
        var alternateInputs = [];
        var inputs = [];
        var lastExcludedIndex;

        for (var j = i; j <= (inputTickets.length - 1); j++) {

            if ((j % 2 == i) && parseInt(inputTickets[j]) > 0) {
                alternateInputs.push(parseInt(inputTickets[j]));
                altSum += parseInt(inputTickets[j]);
            }

            if ((typeof lastExcludedIndex == 'undefined') || (lastExcludedIndex != j && (lastExcludedIndex != (j - 1)))) {
                if (parseInt(inputTickets[j]) > 0) {
                    if (inputTickets[j + 1] && (parseInt(inputTickets[j + 1]) > parseInt(inputTickets[j]))) {
                        inputs.push(parseInt(inputTickets[j + 1]));
                        tempSum += parseInt(inputTickets[j + 1]);
                        lastExcludedIndex = j + 1;
                    } else {
                        inputs.push(parseInt(inputTickets[j]));
                        tempSum += parseInt(inputTickets[j]);
                        lastExcludedIndex = j;
                    }
                }
            }
        }
        max.push({
            sum: tempSum,
            inputs: inputs,
            alternateInputs,
            altSum
        });

    }
    // console.log("Max array----for inputs----", inputTickets, max);

    var finalData = [];
    for (var index = 0; index < max.length; index++) {
        var finalMaxSum;
        var finalInputs = [];
        if (max[index].sum > max[index].altSum) {
            finalMaxSum = max[index].sum;
            finalInputs = max[index].inputs;
            // console.log('final----1--', finalMaxSum, finalInputs);
        } else if (max[index].sum < max[index].altSum) {
            finalMaxSum = max[index].altSum;
            finalInputs = max[index].alternateInputs;
            // console.log('final----2--', finalMaxSum, finalInputs);
        } else {
            var altInputs = [];
            Object.assign(altInputs, max[index].alternateInputs);
            altInputs.sort(function (a, b) { return (a - b); });
            var dataInputs = [];
            Object.assign(dataInputs, max[index].inputs);
            altInputs.sort(function (a, b) { return (a - b); });
            if (altInputs.length > dataInputs.length) {
                finalInputs = max[index].inputs;
                finalMaxSum = max[index].sum;
                // console.log('final---3---', finalMaxSum, finalInputs);
            } else if (altInputs.length < dataInputs.length) {
                finalInputs = max[index].alternateInputs;
                finalMaxSum = max[index].altSum;
                // console.log('final----4--', finalMaxSum, finalInputs);
            } else if (altInputs.length == dataInputs.length) {

                var data = getCorrectInputs(altInputs, dataInputs, max, index);
                // console.log('data--------',data);
                finalMaxSum = data.finalMaxSum;
                finalInputs = data.finalInputs;

                // for (var m = 0; m < altInputs.length; m++) {
                //     if (altInputs[m] > dataInputs[m]) {
                //         finalMaxSum = max[index].altSum;
                //         finalInputs = max[index].alternateInputs;
                //         console.log('final----if--', finalMaxSum, finalInputs);
                //         return;
                //     } else if (altInputs[m] < dataInputs[m]) {
                //         finalMaxSum = max[index].sum;
                //         finalInputs = max[index].inputs;
                //         console.log('final----else if--', finalMaxSum, finalInputs);
                //         return;
                //     }
                // }
                // finalMaxSum = max[index].sum;
                // finalInputs = max[index].inputs;
                // console.log('final------', finalMaxSum, finalInputs);
            }
        }
        finalData.push({ finalInputs, finalMaxSum });
    }

    console.log('Final Data-------------', inputTickets, finalData);

    if (finalData[0].finalMaxSum > finalData[1].finalMaxSum) {
        console.log('Final Out put=-=====0=', finalData[0].finalInputs.reverse().join(''));
    } else if (finalData[0].finalMaxSum < finalData[1].finalMaxSum) {
        console.log('Final Out put----------', FinalData[1].finalInputs.reverse().join(''));
    } else if (finalData[0].finalMaxSum == finalData[1].finalMaxSum) {
        var inputs0 = [];
        Object.assign(inputs0, finalData[0].finalInputs);
        inputs0.sort();
        var inputs1 = [];
        Object.assign(inputs1, inputs1, finalData[1].finalInputs);
        inputs1.sort();
        // console.log('inputs------0--',inputs0,finalData[0].finalInputs);
        // console.log('inputs------1-',inputs1,finalData[1].finalInputs);

        if (inputs0.length < inputs1.length) {
            console.log('Final OUtPut---------------else if if---', finalData[0].finalInputs.reverse().join(''));
        } else if (inputs0.length > inputs1.length) {
            console.log('Final OUtPut---------------else if-else if--', finalData[1].finalInputs.reverse().join(''));
        } else if (inputs0.length == inputs1.length) {
            for (var v = 0; v < inputs0.length; v++) {
                if (inputs0[v] > inputs1[v]) {
                    console.log('Final OutPut--------', finalData[0].finalInputs.reverse().join(''));
                    return;
                } else if (inputs0[v] < inputs1[v]) {
                    console.log('Final OutPut--------', finalData[1].finalInputs.reverse().join(''));
                    return;
                }
            }

            var inputsTicketsInDec = [];
            Object.assign(inputsTicketsInDec, inputTickets);
            inputsTicketsInDec.sort(function (a, b) { return (a - b); });
            if (inputsTicketsInDec[inputsTicketsInDec.length - 1] < 0) {
                console.log('FGinal Output------', inputsTicketsInDec[inputsTicketsInDec.length - 1]);
            } else if (inputsTicketsInDec[inputsTicketsInDec.length - 1] == 0) {
                console.log('FinalOutPut------', "0");
            }
            console.log('Final OUtPut-----------both are equal----else if--else if 2-', finalData[0].finalInputs.reverse().join(''));
        }
    }

    console.log("FinalDATA>>>>>>>>>>>>>>>>>>>>>-----------------", finalData);

    return max;
}
// maxSum(["-1", "7", "8", "-5", "4"]);
// maxSum(["1", "-1", "2", "7", "4"]);
// maxSum(["11", "12", "-2", "-1"]);
// maxSum(["5", "10", "4", "-1"]);
// maxSum(["3", "2", "1", "-1"]);
// maxSum(["4", "5", "4", "3"]);

// maxSum(["-4","-3","-1","-2"]);
// maxSum(["-2","0","-1","0","0"]);
// maxSum(["2","0","5","7","-1","0","8","4","1","3","-2","0","0","2","-2"]);
