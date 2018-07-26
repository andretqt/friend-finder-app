var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
/////
app.listen(PORT, function() {
    console.log('app listening on http://localhost:' +  PORT);
});
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes.js')(app);

