const caesar = function(string, key) {
    let caesarString = '';
    let letters = /\w/i;
    for(let i = 0; i < string.length; i++){
        let letterToAdd = string[i];
        if(letters.test(letterToAdd)){
            if(/[A-Z]/.test(letterToAdd)){
                letterToAdd = String.fromCharCode(
                    (letterToAdd.charCodeAt(i) + key - 65)
                     % 26 + 65);
            }
            else if(/[a-z]/.test(letterToAdd)){
                letterToAdd = String.fromCharCode(
                    (letterToAdd.charCodeAt(i) + key - 97)
                     % 26 + 97);
            }
        }
        console.log(letterToAdd);
        caesarString += letterToAdd;
    }
    return caesarString;
}

module.exports = caesar
