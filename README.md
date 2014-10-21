#  [![Build Status](https://secure.travis-ci.org/mohebifar/angular-persian.png?branch=master)](http://travis-ci.org/mohebifar/angular-persian)

AngularPersian is a simple [Angular.js](http://angularjs.org) module which provides a set of useful *Angular Filters* for Persian localization.

AngluarPersian uses [uusablica/persian.js](https://github.com/usablica/persian.js).

Installation
============
You can install this package using `bower` :

	bower install angular-persian

Usage
=====

To use this package add `ngPersian` as a dependency to your app module, then you can easily use the tools provided in the package.

    var app = angular.module('myApp', ['ngPersian', /* Other deps ... */]);


Convert Numbers to Persian Digits
-------------------------

You can use `pNumber` filter to convert the digits to persian form :

    {{ product.price | pNumber }}
    <!-- e.g. Raw value: 36590, Output: ۳۶۵۹۰ -->

You can mix this filter with `currency` and `number` filters :

    {{ product.price | currency | pNumber }}
    {{ product.quantity | number | pNumber }}


Convert Numbers to Persian Words
-------------------------

You can use `pDigitWords` filter to convert numbers to persian words.

    {{ product.price | pDigitWords }} ریال
    <!-- e.g. سیصد و پنجاه هزار ریال -->

Switch Keyboard layout
-------------------------

You can use `pSwitchKey` filter to switch keyboard layouts.

    {{ "لخخلمث" | pSwitchKey }}
    <!-- output: google -->


Fix Persian Characters in URLs
-------------------------

    {{ 'https://fa.wikipedia.org/wiki/%D8%B5%D9%81%D8%AD%D9%87%D9%94_%D8%A7%D8%B5%D9%84%DB%8C' | pFixURL }}
    <!-- https://fa.wikipedia.org/wiki/صفحهٔ_اصلی -->


Convert Arabic characters to Persian characters
-------------------------
You can use `pArabicNumber` to fix arabic number characters and `pArabicChar` to fix arabic characters to persian equivalents.

    {{ "علي٤2465" | pArabicNumber | pArabicChar | pNumber }}
    <!-- output: علی۴۲۴۶۵ -->
