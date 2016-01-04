var Composition = require('flow-api');

// ..generate methods
exports.method = function (options, data, next) {
    // ..do logic
}

exports.context = function (options, data, next) {

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
