ngPersian.fn.pDigitWords = (str) ->
  if not isFinite str
    return ''

  str = str.toString() if typeof str != "string"

  parts = ['', 'هزار', 'میلیون', 'میلیارد', 'تریلیون', 'کوادریلیون', 'کویینتیلیون', 'سکستیلیون']

  numbers =
    0: ['', 'صد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد']
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
    part = if resultThree.length > 0 then ' ' + parts[str.length - iThree - 1] else ''
    resultThree + part

  result = result.filter (x) ->
    x.trim() != ''

  result = result
  .join delimiter
  .trim()

  if result != '' then result else numbers.zero
