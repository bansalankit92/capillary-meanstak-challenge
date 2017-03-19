var game = require('../app/controllers/game');

//you can include all your controllers

module.exports = function (app) {

    app.get('/games',game.games);

    app.get('/games/:name',game.gamesByName);


}
