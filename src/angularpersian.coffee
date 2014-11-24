ngPersian = angular?.module "ngPersian", []

console.error "Persian.js is required for using Angular Persian" if not persianJs?

ngPersian.filter "pNumber", ->
  (str) ->
    if str.trim() != ""
      persianJs str
      .englishNumber()
      .toString()
    else
      ""

ngPersian.filter "pArabicNumber", ->
  (str) ->
    if str.trim() != ""
      persianJs str
      .arabicNumber()
      .toString()
    else
      ""

ngPersian.filter "pSwitchKey", ->
  (str) ->
    if str.trim() != ""
      persianJs str
      .switchKey()
      .toString()
    else
      ""

ngPersian.filter "pFixURL", ->
  if str.trim() != ""
    (str) ->
      persianJs str
      .fixURL()
      .toString()
  else
    ""

ngPersian.filter "pArabicChar", ->
  if str.trim() != ""
    (str) ->
      persianJs str
      .arabicChar()
      .toString()
  else
    ""

ngPersian.filter "pDigitWords", ->
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
