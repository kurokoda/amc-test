'use strict';

var angular = require('angular');

module.exports = angular.module('amc-app.top-ten.directive.track-list', [])
  .controller('amc-app.top-ten.directive.track-list.controller', require('./controller'))
  .directive('trackList', require('./directive'));


