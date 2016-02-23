const flowApi = require("../lib");

flowApi.searchModules({}, { pattern: "html" }, function (err, data) {
    console.log(err || data);
});
