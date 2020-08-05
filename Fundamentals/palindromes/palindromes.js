const palindromes = function(stringToPalindrome) {
    let stringTest = /\w/i;

    let stringToCheck = '';
    for(let i = 0; i < stringToPalindrome.length; i++){
        if(stringTest.test(stringToPalindrome[i])){
            stringToCheck += stringToPalindrome[i];
        }
    }

    let palindromedString = '';
    for (let i = (stringToCheck.length - 1); i >= 0; i--){
        palindromedString += stringToCheck[i];
    }

    palindromedString = palindromedString.toLowerCase();
    stringToCheck = stringToCheck.toLowerCase();

    if (palindromedString === stringToCheck){
        return true;
    }else{
        return false;
    }
}

module.exports = palindromes
