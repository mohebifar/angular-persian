ngPersian.fn.pFixURL = (str) ->
  if str? and str.toString().trim() != ""
    persianJs str.toString()
    .fixURL()
    .toString()
  else
    ""
