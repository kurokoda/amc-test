'use strict';

module.exports = [
  '$scope',
  function (
    $scope
  ) {
    this.getTracks = function () {
      return $scope.trackSource;
    };

    this.callClickFn = function (track) {
      $scope.clickFn(track);
    };
  }];
