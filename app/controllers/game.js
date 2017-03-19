//http://localhost:8080/api/getGames?pageNo=2&noOfRows=5&sortBy=title&sortingOrder=ascending
//http://localhost:8080/api/getGames/counter?pageNo=1&noOfRows=1&sortBy=title&sortingOrder=ascending

var Game     = require('../models/game');
exports.games = function(req, res) {
	
        var currentPage = (req.query.currentPage)?parseInt(req.query.currentPage):1 ;
        var noOfRows = (req.query.noOfRows)?parseInt(req.query.noOfRows):20;
        var sortBy = (req.query.sortBy)?req.query.sortBy:'score';
        var sortOrder = (req.query.sortingOrder)?req.query.sortingOrder:'ascending';
        Game.find(function(err, games) {
            if (err){
                res.send(err);
            }else{
            res.json(games);
            }
        })
         .skip(noOfRows * (currentPage-1))
        .limit(noOfRows)       
        .sort([[sortBy, sortOrder]]);

    }
exports.gamesByName = function(req, res) {


      var currentPage = (req.query.currentPage)?parseInt(req.query.currentPage):null ;
        var noOfRows = (req.query.noOfRows)?parseInt(req.query.noOfRows):null;
        var sortBy = (req.query.sortBy)?req.query.sortBy:null;
        var sortOrder = (req.query.sortingOrder)?req.query.sortingOrder:null;
        Game.find({title: {"$regex": req.params.name, "$options": "i"} }, function(err, game) {
            if (err)
                res.send(err);
            res.json(game);
        }).limit(noOfRows)
        .skip(noOfRows * (currentPage-1))
        .sort([[sortBy, sortOrder]]);
    }