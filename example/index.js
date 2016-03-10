const flowApi = require("../lib");

flowApi.searchModules({}, { pattern: "html" }, function (err, data) {
    console.log(err || data);
    // [ { string: 'view::Render HTML templates',
    //     score: 26,
    //     index: 2,
    //     original:
    //      { name: 'view',
    //        version: '0.1.0',
    //        description: 'Render HTML templates',
    //        repository: [Object],
    //        keywords: [Object],
    //        author: [Object],
    //        bugs: [Object],
    //        homepage: 'https://github.com/adioo/view',
    //        main: 'index.js',
    //        readme: 'ERROR: No README data found!',
    //        _id: 'view@0.1.0' } } ]
});

flowApi.getModules({}, {
    app: "service"
}, function (err, data) {
    console.log(err || data);
    // { view:
    //    { _args: [ [Object] ],
    //      ...
    //      readme: '# view\nA HTML re...`\n',
    //      readmeFilename: 'README.md',
    //      repository: { type: 'git', url: 'git://github.com/adioo/view.git' },
    //      version: '0.1.0' },
    //    ...
    // }
});
