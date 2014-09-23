Angular Persian Tools
=====================

Angular Persian Tools is a simple [Angular.js](http://angularjs.org) module which provides a set of useful *Angular Filters*.

Installation
============
You can install this package using `bower` :

	bower install angular-persian-tools

Usage
=====

To use this package add `angular-persian-tools` as a dependency to your app module, then you can easily use the tools provided in the package.

Convert Number to Persian Representation
-------------------------

To convert the numbers to persian form, you can use `pnumber` filter, for example :

    {{ product.price | pnumber }}
    <!-- e.g. Raw value: 2500, Output: ۲۵۰۰ -->
