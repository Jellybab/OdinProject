const repeatString = function(string, amount) {
    let repeatingString = "";
    for( let i = 0; i = amount.length; i++){
        repeatingString += string;
    }
    return repeatingString;
}

module.exports = repeatString
