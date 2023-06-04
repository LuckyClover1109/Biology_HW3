// main.js
function countLetter(str){
    var str_arr = str.trim().split('\n');
    var str_letters = [];
    for(var i = 0; i < str_arr[0].length; ++i){
        str_letters.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    }

    for(var i = 0; i < str_arr[0].length; ++i){
        for(var j = 0; j < str_arr.length; ++j){
            var index = str_arr[j][i].charCodeAt(0) - 'A'.charCodeAt(0);
            ++str_letters[i][index];
        }
    }
    return str_letters;
}

function arrTocsvStr(str_arr){
    var csvString = "group,";
    const code = 'A'.charCodeAt(0);
    for(var i = 0; i < 26; ++i){
        if(i == 25){
            csvString += String.fromCharCode(code+i)+ "\n";
            break;
        }
        csvString += String.fromCharCode(code+i) + ",";
    }

    for(var i = 0; i < str_arr.length; ++i){
        csvString += "Col " + (i+1) + ",";
        for(var j = 0; j < str_arr[i].length; ++j){
            if(j == str_arr[i].length - 1){
                csvString += str_arr[i][j] + "\n";
                break;
            }
            csvString += str_arr[i][j] + ",";
        }
    }
    return csvString;
}