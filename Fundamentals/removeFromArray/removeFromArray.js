const removeFromArray = function(...args) {
    let arr = args[0];
    for (let i = 1; i < args.length; i++){
        for (let j = 0; j < arr.length-1; j++){
            if(arr[j] == args[1]){
                arr.splice(j, 1);
            }
        }
    }
    return arr;
}

module.exports = removeFromArray
