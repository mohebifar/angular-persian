ngPersian.fn.pSwitchKey = (str) ->
  if str? and str.toString().trim() != ""
    persianJs str.toString()
    .switchKey()
    .toString()
  else
    ""
