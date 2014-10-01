Angular Persian Tools
=====================

Angular Persian Tools is a simple [Angular.js](http://angularjs.org) module which provides a set of useful *Angular Filters* for Persian Developers.

Installation
============
You can install this package using `bower` :

	bower install angular-persian-tools --save

Usage
=====

To use this package add `ngPersianTools` as a dependency to your app module, then you can easily use the tools provided in the package.

    var app = angular.module('myApp', ['ngPersianTools', /* Other deps ... */]);

Convert Numbers to Persian Digits
-------------------------

You can use `pnumber` filter to convert the digits to persian or arabic form :

    {{ product.price | pnumber }}
    <!-- e.g. Raw value: 2500, Output: ۲۵۰۰ -->

You can mix this filter with `currency` and `number` filters :

    {{ product.price | currency | pnumber }}
    {{ product.quantity | number | pnumber }}


Convert Numbers to Persian Words
-------------------------

You can use `toPWord` filter to convert numbers to persian words.

    {{ product.price | toPWord }} ریال
    <!-- e.g. سیصد و پنجاه هزار ریال -->
