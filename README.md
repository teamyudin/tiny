# @metagame/tiny

[![npm (scoped)](https://img.shields.io/npm/v/@metagame/tiny.svg)](https://www.npmjs.com/package/@metagame/tiny)

Removes all spaces from a string.

## Install

```
$ npm install @metagame/tiny
```

## Usage

```js
const tiny = require("@metagame/tiny");

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```


# tiny
<img alt="npm" src="https://img.shields.io/npm/v/@metagame/tiny.svg">

