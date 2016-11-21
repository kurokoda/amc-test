'use strict';

module.exports = [
  'amc-app.top-ten.service.storage',
  'amc-app.top-ten.service.top-ten-list',
  function (
    storageService,
    listService
  ) {
    this.save = function () {
      storageService.save(listService.tracks);
    };
  }
];
