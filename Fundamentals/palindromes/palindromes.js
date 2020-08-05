const palindromes = function(string) {
    let stringToCheck = '';
    let stringTest = /\w/i;
    for(let i = 0; i < string.length; i++){
        if(stringTest.test(string[i])){
            stringToCheck += string[i];
        }
    }
    let palindromedString = '';
    for (let i = (string.length-1); i >= 0; i--){
        palindromedString += stringToCheck[i];
    }
    console.log(palindromedString);
    if (palindromedString.toLowerCase() === stringToCheck.toLowerCase()){
        return true;
    }
    return false;
}

module.exports = palindromes
