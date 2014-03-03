
/**
 * Module dependencies.
 */

if(process.env.NEW_RELIC_LICENSE_KEY != null){
    var newrelic = require('newrelic');
}

var restify = require('restify');
var routes = require('./routes');
var rpc = require('./routes/rpc');
var port = process.env.PORT || 8080;
var server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.jsonp());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());

server.get('/', routes.index);

server.listen(port, function() {
    console.log('%s listening at %s', server.name, server.url);
});

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI);

var amqp = require('amqp');
var jobManager = require('./jobs/job-manager');
var url = process.env.CLOUDAMQP_URL;
var conn = amqp.createConnection({url: url}); // create the connection
conn.on('ready', function() { // when connected, call JobManager init
    jobManager.init(conn);
});