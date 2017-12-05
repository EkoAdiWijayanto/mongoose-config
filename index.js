var mongoose = require('mongoose');
var config = require('config');


mongoose.Promise = require('bluebird');
mongoose.set('debug', config.server.database.debug);
mongoose.connect(config.server.database.url, {
    useMongoClient: true
});
