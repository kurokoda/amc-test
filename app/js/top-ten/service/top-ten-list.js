'use strict';

var _ = require('lodash');

module.exports = [
  function () {

  this.MAX_TRACKS = 10;

  this.tracks = [];

  this.isAtCapacity = function () {
    return this.tracks.length >= this.MAX_TRACKS;
  };

  this.add = function (track) {
    if (!_.includes(this.tracks, track)) {
      this.tracks.push(track);
    }
  };

  this.remove = function (track) {
    _.remove(this.tracks, function (trk) {
      return track.id === trk.id;
    });
  };

  this.output = function () {
    return JSON.stringify(this.tracks, null, 2);
  };

  this.save = function () {

  };
}];


