# flow-flow-api [![Version](https://img.shields.io/npm/v/flow-flow-api.svg)](https://www.npmjs.com/package/flow-flow-api) [![Downloads](https://img.shields.io/npm/dt/flow-flow-api.svg)](https://www.npmjs.com/package/flow-flow-api)

> Flow API wrapper for flow.

## Installation

```sh
$ npm i --save flow-flow-api
```

## Example

```js
const flowApi = require("flow-flow-api");

flowApi.getAppGraphData({}, {
    app: "service"
}, function (err, data) {
    /* do something */
});
```

## Documentation

### `getAppGraphData(options, data, next)`
Parses and sends back the application builder data.

#### Params
- **Object** `options`: The options object.
- **Object** `data`: An object containing the following fields:
 - `app` (String): The application name (**todo**: this is currently hardcoded as `service`.
- **Function** `next`: The `next` handler used in flow.

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