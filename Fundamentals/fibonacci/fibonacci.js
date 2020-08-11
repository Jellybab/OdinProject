const fibonacci = function(num) {
    if(typeof num === 'string'){
        num = parseInt(num)
    }
    if(num < 0) return "OOPS"
    else if(num == 0) return 0;
    else if(num < 2){
        return 1;
    }
    else{
        return fibonacci(num-1) + fibonacci (num-2);
    }
}

module.exports = fibonacci
