const flowApi = require("../lib");

flowApi.getAppGraphData({}, {
    app: "service"
}, function (err, data) {
    /* do something */
});


flowApi.searchModules({}, { pattern: "html" }, function (err, data) {
    console.log(err || data);
});
