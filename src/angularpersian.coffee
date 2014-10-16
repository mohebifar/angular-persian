ngPersian = angular?.module "ngPersian", []

console.error "Persian.js is required for using Angular Persian" if not persianJs?

ngPersian.filter "pNumber", (str) ->
  persianJs str
  .englishNumber()

ngPersian.filter "pArabicNumber", (str) ->
  persianJs str
  .arabicNumber()

ngPersian.filter "pSwitchKey", (str) ->
  persianJs str
  .switchKey()

ngPersian.filter "pFixURL", (str) ->
  persianJs str
  .fixURL()

ngPersian.filter "pArabicChar", (str) ->
  persianJs str
  .arabicChar()