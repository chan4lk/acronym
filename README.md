# chan4lk-acronym [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

## Installation

```bash
npm install chan4lk-acronym
```
## Usage
```js
const acronym = require('./');

acronym('for your information', (err, resp)=> {
    if(err){
        console.log(err);
    }

    console.log(resp); // fyi
});
```

## License

MIT © [Chandima Ranaaweera]( https://chan4lk.github.io)

