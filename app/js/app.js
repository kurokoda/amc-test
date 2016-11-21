'use strict';

require('es5-shim');
require('es5-sham');

var angular = require('angular');

require('angular-route');
require('angular-ui-bootstrap');
require('jquery');

require('./top-ten');

angular.module('amc-app', [
  'ngRoute',
  'ui.bootstrap',
  'amc-app.top-ten'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/topten', {
        templateUrl: 'views/topten.html'
      })
      .when('/output', {
        templateUrl: 'views/output.html'
      })
      .otherwise({
        redirectTo: '/topten'
      });
  });
