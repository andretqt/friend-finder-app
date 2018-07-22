let friends = require('../data/friends');

module.exports = function (app) {
    //making get request
    //get request retrieve data from the sever..in this case we'll display a json object of what we already have
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    //when user fills in form we use post method because 
    //we want the website to accept the data (eg: when web form is submitted)
    app.post('/api/friends',function(req, res){
        friends.push(req.body);
        res.json(true);
    });
};