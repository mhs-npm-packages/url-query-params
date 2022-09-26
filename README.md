# url-query-params

A simple function to filter out query params.

## Installation
```npm install url-query-params ```

## Usage
In Node.js:
```js
// Load function.
var getUrlQueryParams = require('url-query-params');
// Call funciton.
getUrlQueryParams(['name', 'pageNumber', 'pageSize'], { name: 'Hamza', pageNumber: '1', pageSize: '10' })
// { name: 'Query', pageNumber: 1, pageSize: 10 }
```
