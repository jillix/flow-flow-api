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
exports.getInstanceListenerDataFlow = function (options, data, next) {

    if (!data.comp) {
        data.comp = 'thisInst';
        //return next(new Error());
    }

    if (!data.listener) {
        //return next(new Error());
    }

    data.api.getInstanceListenerDataFlow(data.comp, data.listener, function (err, dataFlow) {

        if (err) {
            return next(err);
        }

        dataFlow.forEach(function (handler) {
            // TODO should the flow-api return in JSON-LD, like service-api?
            //      then we would have one standartized format, from which
            //      it can be converted in to whatever format.
            handler = handler instanceof Array ? handler : [handler];
            var options = handler[1] || {};

            var type = handler[0][0];
            handler[0] = handler[0].substr(1);

            var joint = handler[0][0];
            if (joint === '>' || joint == '*') {
                var tmp = type;
                type = joint;
                joint = tmp;
                handler[0] = handler[0].substr(1);
            } else {
                joint = '';
            }
            var instance = data.comp;
            if (handler[0].indexOf('/')) {
                handler = handler[0].split('/');
                instance = handler.length > 1 ? handler[0] : data.comp;
                handler = handler[1] || handler[0];
            }

            handler = {
                instance: instance,
                method: handler,
                type: type,
                options: options,
                joint: joint
            };
            next(handler, true);
        });

        next(null, null);
    });
};
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

exports.config = {
    get: function (options, data, next) {

        console.log(Object.getPrototypeOf(data.api));

        if (!data.comp) {
            return next(new Error('Flow-Api: No composition name found.'));
        }

        // replace data chunk with the composition config
        data.api.config.get(data.comp, next);
    }
};
