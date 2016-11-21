'use strict';

var angular = require('angular');

require('./save-form');
require('./search-form');
require('./track');
require('./track-list');

module.exports = angular.module('amc-app.top-ten.directive', [
  'amc-app.top-ten.directive.save-form',
  'amc-app.top-ten.directive.search-form',
  'amc-app.top-ten.directive.track',
  'amc-app.top-ten.directive.track-list'
]);


