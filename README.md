# flow-flow-api [![Version](https://img.shields.io/npm/v/flow-flow-api.svg)](https://www.npmjs.com/package/flow-flow-api) [![Downloads](https://img.shields.io/npm/dt/flow-flow-api.svg)](https://www.npmjs.com/package/flow-flow-api)

> Flow API wrapper for flow.

## Installation

```sh
$ npm i --save flow-flow-api
```

## Example

```js
const flowApi = require("flow-flow-api");

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
```

## Documentation

This libary is nothing more than a smart wrapper around the
[`flow-api`](https://github.com/jillix/flow-api). All the
`flow-api` methods are exported in this module. :tada:

Supposing that in `flow-api` we have a function like
`foo (bar, baz, cb)`, `flow-flow-api` exposes this `foo`
method as data handler (`options`, `data`, `next`). :sparkles:

### Calling methods

```js
flowApi.foo("first argument", "second argument", function (err, data) {
   /* ... */
});

// This is how you do it in flow-flow-api
flowFlowApi.foo({}, {
   bar: "first argument"
 , baz: "second argument"
}, function (err, data) {
   /* ... */
});
```

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [jillix][website]

[license]: http://showalicense.com/?fullname=jillix%20%3Ccontact%40jillix.com%3E%20(http%3A%2F%2Fjillix.com)&year=2015#license-mit
[website]: http://jillix.com
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md