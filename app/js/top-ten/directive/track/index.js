'use strict';

var angular = require('angular');

module.exports = angular.module('amc-app.top-ten.directive.track', [])
  .controller('amc-app.top-ten.directive.track.controller', require('./controller'))
  .directive('track', require('./directive'));


