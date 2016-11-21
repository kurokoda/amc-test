'use strict';

module.exports = [
  function () {
    return {
      restrict: 'E',
      templateUrl: './js/top-ten/directive/track/template.html',
      scope: {
        data: '=',
        type:'@'
      }
    };
  }
];