ngPersian = angular?.module "ngPersian", []

console.error "Persian.js is required for using Angular Persian" if not persianJs?

ngPersian.fn = {}