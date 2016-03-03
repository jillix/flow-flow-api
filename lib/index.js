"use strict";

const FlowApi = require("flow-api")
    , path = require("path")
    , staticMethods = require("static-methods")
    , classMethods = require("class-methods")
    , fnArgs = require("function-args")
    , setOrGet = require("set-or-get")
    ;

const APPS_PATH = path.dirname(process.cwd())
//const APPS_PATH = "/home/ionicabizau/Documents/_engineApps";

let sMethods = staticMethods(FlowApi)
  , iMethods = classMethods(FlowApi)
  ;

sMethods.forEach(m => {
    var meth = FlowApi[m];
    var argNames = fnArgs(meth).slice(0, -1);
    exports[m] = function (options, data, next) {
        let args = argNames.map(x => data[x]);
        args.push(next);
        meth.apply(this, args);
    };
});


var _cache = {};
function getApp(appName) {
    return setOrGet(_cache, appName, existing => {
        return existing ? existing : new FlowApi(`${APPS_PATH}/${appName}`);
    });
}


iMethods.forEach(m => {
    exports[m] = function (options, data, next) {
        if (!data.app || typeof data.app !== "string") {
            return next(new Error("The application name is mandatory."));
        }

        let app = getApp(data.app)
          , meth = app[m]
          , argNames = fnArgs(meth).slice(0, -1)
          , args = argNames.map(x => data[x])
          ;

        args.push(next);
        meth.apply(app, args);
    };
});
