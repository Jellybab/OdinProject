const repeatString = function(string, amount) {
    let repeatingString = "";
    for( let i = 0; i <= amount; i++){
        repeatingString += string;
    }
    return repeatingString;
}

module.exports = repeatString
