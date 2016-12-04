var http = require('http');
var pug = require('pug');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type':'text/html'
    });
/*
    var fn = pug.compile('div #{course}', {});
    var html = fn({course: 'pug'});
*/
    /*var html = pug.render('div #{course}', {course:'pug1'});*/

    var html = pug.renderFile('index.jade', {
        course:'pug2',
        pretty:true
    });
    res.end(html);
}).listen(1337,'127.0.0.1');
