const reverseString = function(string) {
    let reverse_string = "";
    let length = string.length
    for (let i = length; i > 0; i--) {
      reverse_string += string[i-1];
    }
    return reverse_string;
};

// Do not edit below this line
module.exports = reverseString;


