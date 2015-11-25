// factory method
module.exports = function (adapter) {

    var clone = Object.create(methods);
    clone.adapter = adapter;

    // TODO
    //throw new Error('FlowApi.facotry: Missing mandatory adapter method.');

    return adapter;
};

var methods = {

    // collect all public api methods
    create: function () {

        // ..use adapter method
        this.adapter.write();
    }
};
