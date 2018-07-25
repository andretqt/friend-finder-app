var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var PORT = 3000 || process.env.PORT;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log('app listening on http://localhost:' +  PORT);
});
require('./routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);

