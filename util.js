const fs =require('fs');
slownik = fs.readFileSync('odm.txt', {encoding:'utf8', flag:'r'});
t_slownik = slownik.split('\n')
    const  mianowniki = new Array
    for (var i = 0; i < t_slownik.length; i++) {
        mianowniki.push(t_slownik[i].split(',')[0].toUpperCase().trim()) 
    }



const user_words = new Array
const add_user_word = (new_word) => {
    user_words.push(new_word.toUpperCase().trim())
}
const user_words_cleaning = () => {
    user_words.splice(0,user_words.length)
}

const repeat_check = (new_word) => {
    r=0
    for (i=0; i<=user_words.length; i++) {
        if (new_word==user_words[i]) {
            r++
        } 
    }
    return r
} 


module.exports = {
    mianowniki,
    add_user_word,
    user_words,
    repeat_check,
    user_words_cleaning
}
