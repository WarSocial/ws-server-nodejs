/**
 * Created by DHilgaertner on 3/4/14.
 */

require.config({
    paths: {
        "angularjs": "https://ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular.min",
        "angularui": "libs/angularui/ui-bootstrap-tpls-0.10.0.min"
    }
});

require(['angularjs', 'angularui'], function() {
    console.log("--------------------------")
    console.log(" ALL JAVASCRIPT IS LOADED ")
    console.log("--------------------------")
});