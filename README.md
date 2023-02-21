# demo-eleventy-javascript-front-matter

A demo showing how to use free-form JavaScript in front matter to populate the data cascade.

Uses the [`node-retrieve-globals` package](https://github.com/zachleat/node-retrieve-globals/).

Check out `page.njk` for a Nunjucks example but this will work in any Eleventy template type (including Custom ones).

## Example

```js
---javascript
const myString = "Hi";

// export a function
function myFunction() {}
---
<!-- The template content goes here -->
<div>{{ myString }}</div>
<div>{{ myFunction() }}</div>
```

### More Advanced Examples

```js
---javascript
// async-friendly
const myAsyncString = await Promise.resolve("HELLO FROM THE OTHER SIDE");

// export via destructuring assignment
const { myKey } = { myKey: "myValue" };
const [ first, second ] = [ "first", "second" ];

// export via dynamic import
const { noop } = await import("@zachleat/noop");

// access Node.js globals like console.log
console.log({ noop });
---
<!-- The template content goes here -->
```