const palindromes = function (word) {
    let cleanWord = word.toString().replace(/[^\w\s\']|_/g, "")
    .replace(/\s/g, "").toLowerCase();

    let new_word = ""
    let word_length = cleanWord.length
    for(i = word_length-1; i >= 0; i--){
        new_word+=cleanWord.charAt(i)
    }
    return cleanWord === new_word;
};



// Do not edit below this line
module.exports = palindromes;


