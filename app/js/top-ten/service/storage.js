'use strict';

module.exports = [
  function (
  ) {
    this.storage = window.localStorage;

    this.save = function (trackList) {
      this.storage.setItem(trackList, trackList);
    };

    this.delete = function (trackList) {
      this.storage.removeItem(trackList);
    };
  }];



