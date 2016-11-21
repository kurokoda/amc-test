'use strict';

var angular = require('angular');

module.exports = angular.module('amc-app.top-ten.service', [])
  .service('amc-app.top-ten.service.storage', require('./storage'))
  .service('amc-app.top-ten.service.modal', require('./modal'))
  .service('amc-app.top-ten.service.spotify', require('./spotify'))
  .service('amc-app.top-ten.service.top-ten-list', require('./top-ten-list'));
