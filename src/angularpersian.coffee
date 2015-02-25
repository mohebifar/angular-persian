ngPersian = angular?.module "ngPersian", []

console.error "Persian.js is required for using Angular Persian" if not persianJs?

ngPersian.fn =
  pNumber:
    (str) ->
      if str? and str.toString().trim() != ""
        persianJs str.toString()
        .englishNumber()
        .toString()
      else
        ""
  pArabicNumber:
    (str) ->
      if str? and str.toString().trim() != ""
        persianJs str.toString()
        .arabicNumber()
        .toString()
      else
        ""
  pSwitchKey:
    (str) ->
      if str? and str.toString().trim() != ""
        persianJs str.toString()
        .switchKey()
        .toString()
      else
        ""
  pFixURL:
    (str) ->
      if str? and str.toString().trim() != ""
        persianJs str.toString()
        .fixURL()
        .toString()
      else
        ""
  pArabicChar:
    (str) ->
      if str? and str.toString().trim() != ""
        persianJs str.toString()
        .arabicChar()
        .toString()
      else
        ""
  pDigitWords:
    (str) ->
      if not isFinite str
        return ''
      str = str.toString() if typeof str != "string"

      parts = ['', 'هزار', 'میلیون', 'میلیارد', 'تریلیون', 'کوادریلیون', 'کویینتیلیون', 'سکستیلیون']

      numbers =
        0: ['', 'صد', 'دویصت', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد']
        1: ['', 'ده', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود']
        2: ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه']
        two: ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده']
        zero: 'صفر'

      delimiter = ' و '

      str =
        str
        .split ''
        .reverse()
        .join ''
        .replace /\d{3}(?=\d)/g, "$&,"
        .split ''
        .reverse()
        .join ''
        .split ','
        .map (str) ->
          Array(4 - str.length).join('0') + str

      result = for iThree, three of str
        resultThree = for digit, i in three
          if i == 1 and digit == '1'
            numbers.two[three[2]]
          else if (i != 2 or three[1] != '1') and numbers[i][digit] != ''
            numbers[i][digit]
          else
            continue

        resultThree = resultThree.join delimiter
        resultThree + ' ' + parts[str.length - iThree - 1]

      result = result.filter (x) ->
        x.trim() != ''

      result = result
      .join delimiter
      .trim()

      if result != '' then result else numbers.zero


ngPersian.filter "pNumber", ->
  ngPersian.fn.pNumber

ngPersian.filter "pArabicNumber", ->
  ngPersian.fn.pArabicNumber

ngPersian.filter "pSwitchKey", ->
  ngPersian.fn.pSwitchKey

ngPersian.filter "pFixURL", ->
  ngPersian.fn.pFixURL

ngPersian.filter "pArabicChar", ->
  ngPersian.fn.pArabicChar

ngPersian.filter "pDigitWords", ->
  ngPersian.fn.pDigitWords
