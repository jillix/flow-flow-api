var FlowApi = require('./tmp_api');

// TODO require api crud adapter
var Adapter = function () {}; //require('infrastructure-api').App.flow.adapter;

// TODO use an LRU cache
var Cache = {};

//TODO how to get the API method names?

// append api instance to data object
exports.context = function (options, data, next) {

    data.api = Cache[data.app];

    if (!data.api) {
        data.api = new FlowApi(data.app, new Adapter());
        Cache[data.app] = data.api;
    }

    next(null, data);
};

// getters
exports.getInstance = function (options, data, next) {

};
exports.getInstanceModule = function (options, data, next) {};
exports.getInstanceRoles = function (options, data, next) {};
exports.getInstanceListeners = function (options, data, next) {};
exports.getInstanceListenerDataFlow = function (options, data, next) {};
exports.getInstanceListenerEndEvent = function (options, data, next) {};
exports.getInstanceListenerErrorEvent = function (options, data, next) {};
exports.getInstanceModuleConfig = function (options, data, next) {};

// setters
exports.setInstance = function (options, data, next) {};
exports.setInstanceModule = function (options, data, next) {};
exports.setInstanceRoles = function (options, data, next) {};
exports.setInstanceRole = function (options, data, next) {};
exports.setInstanceListener = function (options, data, next) {};
exports.setInstanceListenerDataFlow = function (options, data, next) {};
exports.setInstanceListenerEndEvent = function (options, data, next) {};
exports.setInstanceListenerErrorEvent = function (options, data, next) {};
exports.setInstanceModuleConfig = function (options, data, next) {};

export.config = {
    get: function (options, data, next) {

        console.log(Object.getPrototypeOf(data.api));

        if (!data.comp) {
            return next(new Error('Flow-Api: No composition name found.'));
        }

        // replace data chunk with the composition config
        data.api.config.get(data.comp, next);
    }
};
