(function() {
  var ngPersian;

  ngPersian = typeof angular !== "undefined" && angular !== null ? angular.module("ngPersian", []) : void 0;

  if (typeof persianJs === "undefined" || persianJs === null) {
    console.error("Persian.js is required for using Angular Persian");
  }

  ngPersian.fn = {
    pNumber: function(str) {
      if ((str != null) && str.toString().trim() !== "") {
        return persianJs(str.toString()).englishNumber().toString();
      } else {
        return "";
      }
    },
    pArabicNumber: function(str) {
      if ((str != null) && str.toString().trim() !== "") {
        return persianJs(str.toString()).arabicNumber().toString();
      } else {
        return "";
      }
    },
    pSwitchKey: function(str) {
      if ((str != null) && str.toString().trim() !== "") {
        return persianJs(str.toString()).switchKey().toString();
      } else {
        return "";
      }
    },
    pFixURL: function(str) {
      if ((str != null) && str.toString().trim() !== "") {
        return persianJs(str.toString()).fixURL().toString();
      } else {
        return "";
      }
    },
    pArabicChar: function(str) {
      if ((str != null) && str.toString().trim() !== "") {
        return persianJs(str.toString()).arabicChar().toString();
      } else {
        return "";
      }
    },
    pDigitWords: function(str) {
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
