process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});


process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");

    //Write code here

    function getCorrectInputs(altInputs, dataInputs, max, index) {
        var finalMaxSum = 0, finalInputs = [];
        for (var m = 0; m < altInputs.length; m++) {
            if (altInputs[m] > dataInputs[m]) {
                finalMaxSum = max[index].altSum;
                finalInputs = max[index].alternateInputs;
                return ({ finalMaxSum, finalInputs });
            } else if (altInputs[m] < dataInputs[m]) {
                finalMaxSum = max[index].sum;
                finalInputs = max[index].inputs;
                return ({ finalMaxSum, finalInputs });
            }
        }
        finalMaxSum = max[index].sum;
        finalInputs = max[index].inputs;
        return ({ finalMaxSum, finalInputs });
    }

    function maxSum(inputTickets) {
        var output = '';
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

        var finalData = [];
        for (var index = 0; index < max.length; index++) {
            var finalMaxSum;
            var finalInputs = [];
            if (max[index].sum > max[index].altSum) {
                finalMaxSum = max[index].sum;
                finalInputs = max[index].inputs;
            } else if (max[index].sum < max[index].altSum) {
                finalMaxSum = max[index].altSum;
                finalInputs = max[index].alternateInputs;
            } else {
                var altInputs = max[index].alternateInputs.sort();
                var dataInputs = max[index].inputs.sort();
                if (altInputs.length > dataInputs.length) {
                    finalInputs = max[index].inputs;
                    finalMaxSum = max[index].sum;
                } else if (altInputs.length < dataInputs.length) {
                    finalInputs = max[index].alternateInputs;
                    finalMaxSum = max[index].altSum;
                } else if (altInputs.length == dataInputs.length) {
                    var data = getCorrectInputs(altInputs, dataInputs, max, index);
                    finalMaxSum = data.finalMaxSum;
                    finalInputs = data.finalInputs;
                }
            }
            finalData.push({ finalInputs, finalMaxSum });
        }

        if (finalData[0].finalMaxSum > finalData[1].finalMaxSum) {
            output = finalData[0].finalInputs.join('');
            process.stdout.write("" + output + "\n");
        } else if (finalData[0].finalMaxSum < finalData[1].finalMaxSum) {
            output = finalData[1].finalInputs.join('');
            process.stdout.write("" + output + "\n");
        } else if (finalData[0].finalMaxSum == finalData[1].finalMaxSum) {
            var inputs0 = finalData[0].finalInputs;
            inputs0.sort();
            var inputs1 = finalData[1].finalInputs;
            inputs1.sort();

            if (inputs0.length < inputs1.length) {
                output = finalData[0].finalInputs.join('');
                process.stdout.write("" + output + "\n");
            } else if (inputs0.length > inputs1.length) {
                output = finalData[1].finalInputs.join('');
                process.stdout.write("" + output + "\n");
            } else if (inputs0.length == inputs1.length) {
                for (var v = 0; v < inputs0.length; v++) {
                    if (inputs0[v] > inputs1[v]) {
                        output = finalData[0].finalInputs.join('');
                        process.stdout.write("" + output + "\n");
                        return;
                    } else if (inputs0[v] < inputs1[v]) {
                        output = finalData[1].finalInputs.join('');
                        process.stdout.write("" + output + "\n");
                        return;
                    }
                }
                var inputsTicketsInDec=[];
            Object.assign(inputsTicketsInDec, inputTickets);
            inputsTicketsInDec.sort(function(a,b){return (a-b);});
            if(inputsTicketsInDec[inputsTicketsInDec.length-1]<0){
                output = inputsTicketsInDec[inputsTicketsInDec.length-1];
                process.stdout.write("" + output + "\n");
                return ;
            } else if(inputsTicketsInDec[inputsTicketsInDec.length-1]==0) {
                output = "0";
                process.stdout.write("" + output + "\n");
                return ;
            } else{
                output = finalData[0].finalInputs.join('');
                process.stdout.write("" + output + "\n");
                return;
            }
            }
        }
    }

    function validateTickets(tickets) {
        var inputData=[]; 
        Object.assign(inputData,tickets);
        inputData.sort(function(a,b){return (a-b);});
        return (inputData[0] >= -1000 && inputData[0] <= 1000)

    }
    function validateTotalHouses(noOfHouses) {
        return (!!(noOfHouses >= 1 && noOfHouses <= 10000));
    }
    var noOfTestCases = input_stdin_array[0].trim();
    if (noOfTestCases >= 1 && noOfTestCases <= 10) {
        for (var j = 0; j < noOfTestCases; j++) {
            var noOfHouses = input_stdin_array[(j * 2 + 1)].trim();
            if (validateTotalHouses(noOfHouses)) {
                var tickets = input_stdin_array[(j * 2 + 2)].trim().split(' ');
                if (validateTickets(tickets)) {
                    maxSum(tickets);
                } else {
                    return;
                }

            } else {
                return;
            }
        }
    } else {
        return;
    }

});
