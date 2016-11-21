'use strict';

var angular = require('angular');

module.exports = angular.module('amc-app.top-ten.directive.search-form', [])
  .controller('amc-app.top-ten.directive.search-form.controller', require('./controller'))
  .directive('searchForm', require('./directive'));




