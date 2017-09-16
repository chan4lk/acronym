# chan4lk-acronym
### Transform sentences to acronyms.

## Installation

```bash
npm install @chan4lk/acronym
```
## Usage
```js
const acronym = require('@chan4lk/acronym');

acronym('for your information', (err, resp)=> {
    if(err){
        console.log(err);
    }

    console.log(resp); // fyi
});
```
## Tests

  `npm test`

## License

MIT © [Chandima Ranaaweera]( https://chan4lk.github.io)

