/**
 * Job Manager
 * Created by DHilgaertner on 2/26/14.
 */

var conn = null;
var exchange = null; // get the default exchange

exports.init = function(connection) {
    conn = connection;
    exchange = conn.exchange('');


};

exports.publish = function(queueName, message) {
    exchange.publish(queueName, message);
};