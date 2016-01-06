var FlowApi = require('flow-api');

// TODO require api crud adapter
var Adapter = function () {}; //require('infrastructure-api').App.flow.adapter;

// TODO use an LRU cache
var Cache = {};

// append api instance to data object
exports.context = function (options, data, next) {

    data.api = Cache(data.app);

    if (!data.api) {
        data.api = new FlowApi(data.app, new Adapter());
        Cache[data.app] = data.api;
    }

    next(null, data);
};

// ..generate methods
exports.config = {
    get: function (options, data, next) {

        if (!data.comp) {
            return next(new Error('Flow-Api: No composition name found.'));
        }

        // replace data chunk with the composition config
        data.api.config.get(data.comp, next);
    }
};
