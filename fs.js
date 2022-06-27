const fs =require('fs');
const decompress = require('decompress');
const extract = require('extract-zip');
const url = require('url');
const path = require('path');
const http = require('https');
const { use } = require('./routes');
const dictionary_preparing = () => {
    const file = fs.createWriteStream('sjp-odm-20220619.zip');
    const request = http.get('https://sjp.pl/sl/odmiany/sjp-odm-20220619.zip', function(response) {
    response.pipe(file);
    file.on('finish', () => {
        file.close();
        //console.log('Download Completed');
        //console.log (path.join(__dirname, '/'))
        try {
            const unzip = extract('sjp-odm-20220619.zip', { dir: path.join(__dirname, '/')})
            //console.log('Extract Completed');
        } catch (error) {
            console.log(error);
        }

    });
    });
}
//dictionary_preparing()
//module.exports = dictionary_preparing



