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

  ngPersian.filter("pDigitWords", function(str) {
    var delimiter, digit, i, iThree, numbers, parts, result, resultThree, three;
    if (!isFinite(str)) {
      return '';
    }
    if (typeof str !== "string") {
      str = str.toString();
    }
    parts = ['', 'هزار', 'میلیون', 'میلیارد', 'تریلیون', 'کوادریلیون', 'کویینتیلیون', 'سکستیلیون'];
    numbers = {
      0: ['', 'صد', 'دویصت', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'],
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
      var _results;
      _results = [];
      for (iThree in str) {
        three = str[iThree];
        resultThree = (function() {
          var _i, _len, _results1;
          _results1 = [];
          for (i = _i = 0, _len = three.length; _i < _len; i = ++_i) {
            digit = three[i];
            if (i === 1 && digit === '1') {
              _results1.push(numbers.two[three[2]]);
            } else if ((i !== 2 || three[1] !== '1') && numbers[i][digit] !== '') {
              _results1.push(numbers[i][digit]);
            } else {
              continue;
            }
          }
          return _results1;
        })();
        resultThree = resultThree.join(delimiter);
        _results.push(resultThree + ' ' + parts[str.length - iThree - 1]);
      }
      return _results;
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
  });

}).call(this);
