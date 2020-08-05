const palindromes = function(string) {
    let palindromedString = '';
    for (let i = (string.length-1); i >= 0; i--){
        palindromedString += string[i];
    }
    console.log(palindromedString);
    if (palindromedString === string){
        return true;
    }
    return false;
}

module.exports = palindromes
