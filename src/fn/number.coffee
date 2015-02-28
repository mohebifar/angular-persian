ngPersian.fn.pNumber = (str) ->
  if str? and str.toString().trim() != ""
    persianJs str.toString()
    .englishNumber()
    .toString()
  else
    ""
