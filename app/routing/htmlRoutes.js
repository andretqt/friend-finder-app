var path = require('path');
let friends = require('../data/friends');

module.exports = function (app) {
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, '../public/survey.html'));
       
    });
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    app.post('/api/friends',function(req, res){
        friends.push(req.body);
        res.json(true);
    });
    app.get('*', function(req,res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
};

