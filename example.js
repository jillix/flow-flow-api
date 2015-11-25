var FlowApi = require('flow-api');

// plug custom write/read methods to flow api instance
var flowApi = FlowApi({

    // write instance compositon
    write: function (path, readable) {
        // write a instance composition
    },

    // read instance composition
    read: function (path) {
        // return a readable stream
    },

    remove: function (path) {
        // remove a instance composition
    }
});

// use the flow api
flowApi.create();

