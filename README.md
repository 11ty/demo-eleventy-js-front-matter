# demo-eleventy-javascript-front-matter

A demo showing how to use free-form JavaScript in front matter to populate the data cascade.

Check out `page.njk` for a Nunjucks example but this will work in any Eleventy template type (including Custom ones).


```html
---javascript
// export a literal
const myString = "Hi";

// async-friendly
const myAsyncString = await Promise.resolve("HELLO FROM THE OTHER SIDE");

// export a function
function alwaysBlue() {
	return "blue";
}

// export via destructuring assignment
const { myKey } = { myKey: "myValue" };
const [ first, second ] = [ "first", "second" ];

// export via dynamic import
const { noop } = await import("@zachleat/noop");

// access Node.js globals like console.log
console.log({ noop });
---
<span>{{ myString }}</span>
<span>{{ myAsyncString }}</span>
<span>{{ alwaysBlue() }}</span>
```