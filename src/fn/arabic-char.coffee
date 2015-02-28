ngPersian.fn.pArabicChar = (str) ->
  if str? and str.toString().trim() != ""
    persianJs str.toString()
    .arabicChar()
    .toString()
  else
    ""
