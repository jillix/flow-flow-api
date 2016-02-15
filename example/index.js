const flowApi = require("../lib");

flowApi.getAppGraphData({}, {
    app: "service"
}, function (err, data) {
    /* do something */
});
