const caesar = function(string, key) {
    let caesarString = '';
    let letters = /\w/i;
    for(let i = 0; i < string.length; i++){
        let letterToAdd = string[i];
        if(letters.test(letterToAdd)){
            if(/[A-Z]/.test(letterToAdd)){
                console.log(string.charCodeAt(i));
                console.log(string.charCodeAt(i) + key - 65)
                % 26 + 65;
                letterToAdd = String.fromCharCode(
                    (string.charCodeAt(i) + key - 65)
                     % 26 + 65);
            }
            else if(/[a-z]/.test(letterToAdd)){
                letterToAdd = String.fromCharCode(
                    (string.charCodeAt(i) + key - 97)
                     % 26 + 97);
            }
        }
        caesarString += letterToAdd;
    }
    console.log(caesarString);
    return caesarString;
}

module.exports = caesar
