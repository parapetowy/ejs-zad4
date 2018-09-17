var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function (req, res) {
    res.render('login');
});

app.get('/dynamic-view', function(req, res){
    const name = req.query.first_name;
    const pass = req.query.last_name;
    console.log('Login data = ' + name + ':' + pass);
    res.render('dynamic', {
        name,
        pass,
        user: {name:"Jan", pass:"12345"},
        url: "http://www.google.com"
    });
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});