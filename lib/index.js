const FlowApi = require("flow-api")
    , path = require("path")
    ;

const APPS_PATH = path.dirname(process.cwd())
exports.getAppGraphData = function (options, data, next) {
    var app = new FlowApi(`${APPS_PATH}/service`);
    app.getGraph((err, data) => {
        next(err, data);
    });
};
