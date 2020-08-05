const palindromes = function(stringToPalindrome) {
    let stringToCheck = '';
    let stringTest = /\w/i;
    for(let i = 0; i < stringToPalindrome.length; i++){
        if(stringTest.test(string[i])){
            stringToCheck += string[i];
        }
    }
    let palindromedString = '';
    for (let i = (stringToCheck.length - 1); i >= 0; i--){
        palindromedString += stringToCheck[i];
    }
    console.log(palindromedString);
    if (palindromedString.toLowerCase() === stringToCheck.toLowerCase()){
        return true;
    }
    return false;
}

module.exports = palindromes
