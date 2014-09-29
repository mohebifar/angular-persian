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

Convert Numbers to Persian Representation
-------------------------

You can use `pnumber` filter to convert the numbers to persian form :

    {{ product.price | pnumber }}
    <!-- e.g. Raw value: 2500, Output: ۲۵۰۰ -->

You can mix this filter with `currency` and `number` filters :

    {{ product.price | currency | pnumber }}
    {{ product.quantity | number | pnumber }}
