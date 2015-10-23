#[![Build Status](http://img.shields.io/travis/mohebifar/angular-persian.svg?style=flat)](http://travis-ci.org/mohebifar/angular-persian) [![Dependency Status](https://www.versioneye.com/user/projects/5446a1f544a52544fe000047/badge.png?style=flat)](https://www.versioneye.com/user/projects/5446a1f544a52544fe000047) [![License](http://img.shields.io/:license-mit-brightgreen.svg?style=flat)](http://opensource.org/licenses/MIT)

AngularPersian is a simple [Angular.js](http://angularjs.org) module which provides a set of useful *Angular Filters* for Persian localization.

AngluarPersian uses [usablica/persian.js](https://github.com/usablica/persian.js). It also has an additional `pDigitWords` method which represents numbers as words.

Installation
============
You can install this package using `bower`.

```bash
bower install angular-persian
```

Refer all dependencies in your page in right order.

```html
<script src="bower_components/persianjs/persian.js"></script>
<script src="bower_components/angular-persian/dist/angularpersian.js"></script>
```

Also you can get the package using `npm`.

Usage
=====

To use this package add `ngPersian` as a dependency to your app module, then you can easily use the tools provided in the package.

```js
var app = angular.module('myApp', ['ngPersian', /* Other deps ... */]);
```

Convert Numbers to Persian Digits
-------------------------

You can use `pNumber` filter to convert the digits to persian form :

```html
{{ product.price | pNumber }}
<!-- e.g. Raw value: 36590, Output: ۳۶۵۹۰ -->
```

You can compose this filter with `currency` and `number` filters :

```html
{{ product.price | currency | pNumber }}
{{ product.quantity | number | pNumber }}
```

Convert Numbers to Persian Words
-------------------------

You can use `pDigitWords` filter to convert numbers to persian words.

```html
{{ product.price | pDigitWords }} ریال
<!-- e.g. سیصد و پنجاه هزار ریال -->
```

Switch Keyboard layout
-------------------------

You can use `pSwitchKey` filter to switch keyboard layouts.

```html
{{ "لخخلمث" | pSwitchKey }}
<!-- output: google -->
```

Fix Persian Characters in URLs
-------------------------

```html
{{ 'https://fa.wikipedia.org/wiki/%D8%B5%D9%81%D8%AD%D9%87%D9%94_%D8%A7%D8%B5%D9%84%DB%8C' | pFixURL }}
<!-- https://fa.wikipedia.org/wiki/صفحهٔ_اصلی -->
```

Convert Arabic characters to Persian characters
-------------------------
You can use `pArabicNumber` to fix arabic number characters and `pArabicChar` to fix arabic characters to persian equivalents.

```html
{{ "علي٤2465" | pArabicNumber | pArabicChar | pNumber }}
<!-- output: علی۴۲۴۶۵ -->
```

