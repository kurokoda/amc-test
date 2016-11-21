'use strict';

var angular = require('angular');

require('./controller');
require('./directive');
require('./service');

module.exports = angular.module('amc-app.top-ten', [
  'amc-app.top-ten.controller',
  'amc-app.top-ten.directive',
  'amc-app.top-ten.service'
]);