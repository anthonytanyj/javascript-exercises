const fibonacci = function(num) {
    let numCleaned = parseInt(num);
    let a = 0;
    let b = 1;
    if (numCleaned <= 0) {
        return "OOPS"
    } else if (numCleaned === 1){
        return 1
    } else {
        for (let i=1;i<=numCleaned;i++){
            let temp = a;
            a = b;
            b = temp + b;
            
        }
        return a
    }
    };

// Do not edit below this line
module.exports = fibonacci;
