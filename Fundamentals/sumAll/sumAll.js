const sumAll = function(fromNum, toNum) {
    if ((typeof fromNum === "number") && (typeof toNum === "number")){ 
        let lowest = 0;
        let highest = 0;
        let sum = 0;
        (fromNum <= toNum) ? 
            (lowest = fromNum, highest = toNum) :
            (lowest = toNum, highest = fromNum);

        for (lowest; lowest<= highest; lowest++){
            sum += lowest;
        }
        return sum;
    }
    else{
        return 'ERROR';
    }
    
    
}

module.exports = sumAll
