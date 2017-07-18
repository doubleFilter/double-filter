# double-filter

# # Usage
```js
var doubleFilter = require('double-filter');
 
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function isEven(num){
    return num % 2 === 0;
}
```

return filteredObj = doubleFilter(array, isEven)
console.log(filteredObj.true) // [2, 4, 6, 8]
console.log(filteredObj.false) // [1, 3, 5, 7]


# # API

### doubleFilter(arr, predicateFn, self)

Return an object with the following properties:
*true, that is the array with elements of `arr` for which `predicateFn` returns the boolean value true 
*false that is the array with elements of `arr` for which `predicateFn` returns the boolean value false 
*truthy that is the array with elements of `arr` for which `predicateFn` returns any truthy value. 
*falsey that is the array with elements of `arr` for which `predicateFn` returns any falsey value. 

`fn` is called with

* `el`: The current element
* `i`: The element's index
* `arr`: The whole array

Optionally pass in `self` as the `this` value for `predicateFn`.

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install double-filter
```

## License

(MIT)

Copyright (c) 2017 Sam Bakkila &lt;sbakkila@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.