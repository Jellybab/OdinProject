const removeFromArray = function(arr, ...args) {
    for (let i = 0; i < args.length; i++){
        for (let j = 0; j < arr.length; j++){
            if(arr[j] == args[i]){
                arr.splice(j, 1);
            }
        }
    }
    return arr;
}

module.exports = removeFromArray
