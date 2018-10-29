var request = require('request');
var fs = require('fs')
//var https = require('https')

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode + '\n')
         console.log('Response Status Message: ', response.statusMessage + '\n')
         console.log('Content Type: ', response.headers['content-type'] + '\n')
         console.log('Downloading image.... hold your horses')
       })
       .on('end', function () {
         console.log('File Obtained!!')
       })

       .pipe(fs.createWriteStream('./future.jpg'))



