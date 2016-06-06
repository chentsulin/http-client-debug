# http-client-debug

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david_img]][david_site]

> debug utils for [http-client](https://github.com/mjackson/http-client)


## Install

```
$ npm install http-client-debug
```


## Usage

```js
import { createStack } from 'http-client';


const middlewares = [
  header('X-Auth-Key', key),
  header('X-Auth-Email', email),
  base('https://api.cloudflare.com/client/v4'),
  parseJSON(),
];

if (process.env.NODE_ENV === 'development') {
  const { log } = require('http-client-debug');
  middlewares.push(log());
}

const stack = createStack(...middlewares);

// Get "response": ....
```


## API

### log(path)

#### path

*Optional*
Type: `string`

### info(path)

#### path

*Optional*
Type: `string`

### warn(path)

#### path

*Optional*
Type: `string`

### error(path)

#### path

*Optional*
Type: `string`

## License

MIT © [C.T. Lin](https://github.com/chentsulin/http-client-debug)

[npm-image]: https://badge.fury.io/js/http-client-debug.svg
[npm-url]: https://npmjs.org/package/http-client-debug
[travis-image]: https://travis-ci.org/chentsulin/http-client-debug.svg
[travis-url]: https://travis-ci.org/chentsulin/http-client-debug
[coveralls-image]: https://coveralls.io/repos/chentsulin/http-client-debug/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/r/chentsulin/http-client-debug?branch=master
[david_img]: https://david-dm.org/chentsulin/http-client-debug.svg
[david_site]: https://david-dm.org/chentsulin/http-client-debug

