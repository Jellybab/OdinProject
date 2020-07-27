const repeatString = function(string, amount) {
    let repeatingString = "";
    if(amount >= 0){
        for( let i = 0; i < amount; i++){
            repeatingString += string;
        }
    }
    else{
        repeatingString = 'ERROR';
    }
    return repeatingString;
}

module.exports = repeatString
