(function() {
  var ngPersian;

  ngPersian = typeof angular !== "undefined" && angular !== null ? angular.module("ngPersian", []) : void 0;

  if (typeof persianJs === "undefined" || persianJs === null) {
    console.error("Persian.js is required for using Angular Persian");
  }

  ngPersian.fn = {};

  ngPersian.fn.pArabicChar = function(str) {
    if ((str != null) && str.toString().trim() !== "") {
      return persianJs(str.toString()).arabicChar().toString();
    } else {
      return "";
    }
  };

  ngPersian.fn.pArabicNumber = function(str) {
    if ((str != null) && str.toString().trim() !== "") {
      return persianJs(str.toString()).arabicNumber().toString();
    } else {
      return "";
    }
  };

  ngPersian.fn.pDigitWords = function(str) {
    var delimiter, digit, i, iThree, numbers, part, parts, result, resultThree, three;
    if (!isFinite(str)) {
      return '';
    }
    if (typeof str !== "string") {
      str = str.toString();
    }
    parts = ['', 'هزار', 'میلیون', 'میلیارد', 'تریلیون', 'کوادریلیون', 'کویینتیلیون', 'سکستیلیون'];
    numbers = {
      0: ['', 'صد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'],
      1: ['', 'ده', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'],
      2: ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'],
      two: ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده'],
      zero: 'صفر'
    };
    delimiter = ' و ';
    str = str.split('').reverse().join('').replace(/\d{3}(?=\d)/g, "$&,").split('').reverse().join('').split(',').map(function(str) {
      return Array(4 - str.length).join('0') + str;
    });
    result = (function() {
      var results;
      results = [];
      for (iThree in str) {
        three = str[iThree];
        resultThree = (function() {
          var j, len, results1;
          results1 = [];
          for (i = j = 0, len = three.length; j < len; i = ++j) {
            digit = three[i];
            if (i === 1 && digit === '1') {
              results1.push(numbers.two[three[2]]);
            } else if ((i !== 2 || three[1] !== '1') && numbers[i][digit] !== '') {
              results1.push(numbers[i][digit]);
            } else {
              continue;
            }
          }
          return results1;
        })();
        resultThree = resultThree.join(delimiter);
        part = resultThree.length > 0 ? ' ' + parts[str.length - iThree - 1] : '';
        results.push(resultThree + part);
      }
      return results;
    })();
    result = result.filter(function(x) {
      return x.trim() !== '';
    });
    result = result.join(delimiter).trim();
    if (result !== '') {
      return result;
    } else {
      return numbers.zero;
    }
  };

  ngPersian.fn.pFixURL = function(str) {
    if ((str != null) && str.toString().trim() !== "") {
      return persianJs(str.toString()).fixURL().toString();
    } else {
      return "";
    }
  };

  ngPersian.fn.pNumber = function(str) {
    if ((str != null) && str.toString().trim() !== "") {
      return persianJs(str.toString()).englishNumber().toString();
    } else {
      return "";
    }
  };

  ngPersian.fn.pSwitchKey = function(str) {
    if ((str != null) && str.toString().trim() !== "") {
      return persianJs(str.toString()).switchKey().toString();
    } else {
      return "";
    }
  };

  ngPersian.filter("pNumber", function() {
    return ngPersian.fn.pNumber;
  });

  ngPersian.filter("pArabicNumber", function() {
    return ngPersian.fn.pArabicNumber;
  });

  ngPersian.filter("pSwitchKey", function() {
    return ngPersian.fn.pSwitchKey;
  });

  ngPersian.filter("pFixURL", function() {
    return ngPersian.fn.pFixURL;
  });

  ngPersian.filter("pArabicChar", function() {
    return ngPersian.fn.pArabicChar;
  });

  ngPersian.filter("pDigitWords", function() {
    return ngPersian.fn.pDigitWords;
  });

}).call(this);
