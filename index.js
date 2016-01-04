var Composition = require('flow-api');

exports.instance = {
    get: function (options, data, next) {
        next(null, {'inst': 'ance'});
    }
}

// ..generate methods
exports.method = function (options, data, next) {
    // ..do logic
}

exports.context = function (options, data, next) {

    return next(null, data);
    // get composition instance
    data.comp = Composition.cache(data.comp);
    if (!data.comp) {
        return Composition.factory(data.comp, function (err, comp) {

            if (err) {
                return next(err);
            }

            data.comp = comp;
            next(null, data);
        });
    }

    next(null, data);
};
