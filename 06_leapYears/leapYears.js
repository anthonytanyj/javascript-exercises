const leapYears = function(year) {
    let yearInt = parseInt(year)

    if (yearInt % 4 === 0 && (yearInt % 100 != 0 || yearInt % 400 ===0)) {
        return true
    }
    else {
        return false
    }
    
};

// Do not edit below this line
module.exports = leapYears;
