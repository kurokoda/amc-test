'use strict';

module.exports = [
  '$scope',
  function (
    $scope
  ) {
    this.getButtonClasses = function () {
      switch ($scope.type) {
        case 'Add' :
          return 'btn btn-primary btn-xs right';
        case 'Remove':
          return 'btn btn-danger btn-xs right';
      }
    };

    this.getButtonText = function () {
      return $scope.type;
    };
  }];