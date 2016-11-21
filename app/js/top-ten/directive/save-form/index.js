'use strict';

var angular = require('angular');

module.exports = angular.module('amc-app.top-ten.directive.save-form', [])
  .controller('amc-app.top-ten.directive.save-form.controller', require('./controller'))
  .directive('saveForm', require('./directive'));




