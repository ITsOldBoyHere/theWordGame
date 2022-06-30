const fs =require('fs');
var cookie = require('cookie');

slownik = fs.readFileSync('odm.txt', {encoding:'utf8', flag:'r'});
t_slownik = slownik.split('\n')
    const  mianowniki = new Array
    for (var i = 0; i < t_slownik.length; i++) {
        mianowniki.push(t_slownik[i].split(',')[0].toUpperCase().trim()) 
    }





module.exports = {
    mianowniki
}
