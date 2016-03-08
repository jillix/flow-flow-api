const FlowApi = require("flow-api")
    , path = require("path")
    ;

const APPS_PATH = path.dirname(process.cwd())

/**
 * getAppGraphData
 * Parses and sends back the application builder data.
 *
 * @name getAppGraphData
 * @function
 * @param {Object} options The options object.
 * @param {Object} data An object containing the following fields:
 *
 *  - `app` (String): The application name (**todo**: this is currently hardcoded as `service`.
 *
 * @param {Function} next The `next` handler used in flow.
 */
exports.getAppGraphData = function getAppGraphData (options, data, next) {

    // TODO Take this from the data.
    var app = new FlowApi(APPS_PATH + '/service');

    app.getGraph(function (err, data) {
        next(err, data);
    });
};

exports.searchModules = function searchModules (options, data, next) {
    FlowApi.searchModules(data.pattern, next);
};
