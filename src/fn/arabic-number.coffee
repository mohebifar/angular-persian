ngPersian.fn.pArabicNumber = (str) ->
  if str? and str.toString().trim() != ""
    persianJs str.toString()
    .arabicNumber()
    .toString()
  else
    ""
