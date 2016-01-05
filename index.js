var FlowApi = require('flow-api');

// TODO require api crud adapter
var Adapter = {};//require('infrastructure-api').App.flow.adapter;

// TODO use an LRU cache
var Cache = {};

// ..generate methods
exports.method = function (options, data, next) {
    // ..do logic
}

exports.context = function (options, data, next) {

    data.api = Cache(data.app);

    if (!data.api) {
        data.api = new FlowApi(Adapter, data.app);

        if (data.api instanceof Error) {
            return next(data.api);
        }

        Cache[data.app] = data.api;
    }

    next(null, data);
};
