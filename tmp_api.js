"use strict";

// dummy flow-api
class FlowApi {

    constructor (app, adapter) {}

    // Instance (getters)
    getInstance (instanceName, cb) {
        // .. get a complete instance configuration
    }

    getInstanceModule (instanceName, cb) {
        // .. get the module (only name?) of an instance
    }

    getInstanceRoles (instanceName, cb) {
        // .. get the roles from an instance
    }

    getInstanceListener (instanceName, listenerName, cb) {
        // .. get a complete listener config from an instance
    }

    getInstanceListenerDataFlow (instanceName, listenerName, cb) {

        // .. get the data flow from an instance listener 
        var listenerDataFlow = [
            [":instance/methodA", {some: 'options'}],
            [".once", {some: 'options'}],
            [">>event", {some: 'options'}],
            ["|>leakEvent", {some: 'options'}],
            [">*custom", {some: 'options'}],
            ["|*leakCustom", {some: 'options'}]
        ]

        cb(null, listenerDataFlow);
    }

    getInstanceListenerEndEvent (instanceName, listenerName, cb) {
        // .. get the end event fomr a instance listener
    }

    getInstanceListenerErrorEvent (instanceName, listenerName, cb) {
        // .. get the error event fomr a instance listener
    }

    getInstanceModuleConfig (instanceName, cb) {
        // .. get the module config from an instance
    }

    // Instance (setters)
    setInstance (instanceName, config, cb) {
        // .. set an entire instance config
    }

    setInstanceModule (instanceName, moduleName, cb) {
        // .. set an module name on a instance
    }

    setInstanceRoles (instanceName, roles, cb) {
        // .. set a role object on a instance
    }

    setInstanceRole (instanceName, role, cb) {
        // .. set a single role on a instance
    }

    setInstanceListener (instanceName, listener, cb) {
        // .. set a complete flow listener
    }

    setInstanceListenerDataFlow (instanceName, listenerName, dataFlow, cb) {
        // .. set a a data flow config
    }

    setInstanceListenerEndEvent (instanceName, listenerName, endEvent, cb) {
        // .. set the end event from a instance listener
    }

    setInstanceListenerErrorEvent (instanceName, listenerName, errorEvent, cb) {
        // .. set the error event from a instance listener
    }

    setInstanceModuleConfig (instanceName, config, cb) {
        // .. set the module config from an instance
    }
}

module.exports = FlowApi;
