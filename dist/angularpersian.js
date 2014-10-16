(function() {
  var ngPersian;

  ngPersian = typeof angular !== "undefined" && angular !== null ? angular.module("ngPersian", []) : void 0;

  if (typeof persianJs === "undefined" || persianJs === null) {
    console.error("Persian.js is required for using Angular Persian");
  }

  ngPersian.filter("pNumber", function(str) {
    return persianJs(str).englishNumber();
  });

  ngPersian.filter("pArabicNumber", function(str) {
    return persianJs(str).arabicNumber();
  });

  ngPersian.filter("pSwitchKey", function(str) {
    return persianJs(str).switchKey();
  });

  ngPersian.filter("pFixURL", function(str) {
    return persianJs(str).fixURL();
  });

  ngPersian.filter("pArabicChar", function(str) {
    return persianJs(str).arabicChar();
  });

}).call(this);
