# String retardifier
## Inspired by https://github.com/denysdovhan/wtfjs#its-a-fail

Little piece of code which can transform your string into a valid JavaScript expression which if evaluated, will return the given string - but in funny and weird-looking way

### See the demo at http://retardifier.hldks.net/

### Example
```js
let str = "hello world"
let rtrdd = strRetardify(str)

console.log(rtrdd) // 'h'+(!!(+!![])+'')[(+!![])+(+!![])+(+!![])]+(!(+!![])+'')[(+!![])+(+!![])]+(!(+!![])+'')[(+!![])+(+!![])]+({}+'')[(+!![])]+({}+'')[((+!![])<<(+!![])<<(+!![])<<(+!![]))-(+!![])]+'w'+({}+'')[(+!![])]+(!!(+!![])+'')[(+!![])]+(!(+!![])+'')[(+!![])+(+!![])]+({}[(+[])]+'')[(+!![])+(+!![])]
```
You can even check equality yourself by evaluating output expression

```js
let str = "hello world"
let rtrdd = strRetardify(str)

console.log(eval(rtrdd) === str) // true
```
# Goal
The goal is, to print alphabet characters in the most ridiculous way possible, using only interpunctional characters.

Unfortunately, not all characters can be printed this way, therefore I had to cheat a little bit and use ```typeof``` keyword. There are also characters which can't be printed this way, so in this case I am just keeping them.