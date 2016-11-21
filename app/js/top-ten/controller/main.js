'use strict';

module.exports = [
  'amc-app.top-ten.service.modal',
  'amc-app.top-ten.service.spotify',
  'amc-app.top-ten.service.top-ten-list',
  function (
    modalService,
    spotifyService,
    listService
  ) {

    this.modalService = modalService;
    this.spotifyService = spotifyService;
    this.listService = listService;

    this.onClickSpotifyTrack = function (track) {
      if (listService.isAtCapacity()) {
        modalService.open(modalService.configs.MAX_TRACKS);
      } else {
        listService.add(track);
      }
    };

    this.onClickTopTenTrack = function (track) {
      listService.remove(track);
    };
  }
];
