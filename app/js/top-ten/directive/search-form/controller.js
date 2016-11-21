'use strict';

module.exports = [
  '$log',
  '$uibModal',
  'amc-app.top-ten.service.spotify',
  function (
    $log,
    $uibModal,
    spotifyService
  ) {
    this.submit = function () {
      spotifyService.search(this.query, 'track')
        .then(function () {
          $log.debug(spotifyService.tracks);
        });
    };
  }
];
