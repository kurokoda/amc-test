'use strict';

var angular = require('angular');

module.exports = angular.module('amc-app.top-ten.controller', [])
  .controller('amc-app.top-ten.controller.main', require('./main'))
.controller('amc-app.top-ten.controller.output', require('./output'));