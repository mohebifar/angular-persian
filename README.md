#  [![Build Status](https://secure.travis-ci.org/mohebifar/chemjs.png?branch=master)](http://travis-ci.org/mohebifar/chemjs)

AngularPersian is a simple [Angular.js](http://angularjs.org) module which provides a set of useful *Angular Filters* for Persian localization.

Installation
============
You can install this package using `bower` :

	bower install angular-persian

Usage
=====

To use this package add `ngPersian` as a dependency to your app module, then you can easily use the tools provided in the package.

    var app = angular.module('myApp', ['ngPersian', /* Other deps ... */]);

Convert Number to Persian Representation
-------------------------

To convert the numbers to persian form, you can use `pNumber` filter, for example :

    {{ product.price | pNumber }}
    <!-- e.g. Raw value: 2500, Output: ۲۵۰۰ -->
