'use strict';

module.exports = [
  function () {
    return {
      restrict: 'E',
      templateUrl: './js/top-ten/directive/track-list/template.html',
      scope: {
        trackSource: '=',
        type:'@',
        clickFn: '='
      }
    };
  }
];