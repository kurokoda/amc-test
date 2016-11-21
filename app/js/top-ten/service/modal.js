'use strict';

module.exports = [
  '$uibModal',
  function (
    $uibModal
  ) {

    this.configs = {
      MAX_TRACKS: {
        headerText: 'foo',
        bodyText: 'foo',
        template: ''
      }
    };

    this.open = function (params) {
      $uibModal.open({
        animation: true,
        templateUrl: './views/modals/simple.html',
        //controller: 'ModalResultInstanceCtrl',
        size: 'm',
        resolve: {
          params: params
        }
      });
    };
  }
];
