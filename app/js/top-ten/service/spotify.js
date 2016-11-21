'use strict';

module.exports = [
  '$q',
  '$http',
  function (
    $q,
    $http
  ) {

    var service = this;

    this.tracks = [];

    this.api = function (endpoint, method, params) {
      var deferred = $q.defer();
      var request = {
        url: 'https://api.spotify.com/v1' + endpoint,
        method: method,
        params: params,
        withCredentials: false
      };

      $http(request)
        .success(function (result) {
          deferred.resolve(result);
        })
        .error(function (result) {
          deferred.reject(result);
        });
      return deferred.promise;
    };

    this.search = function (q, type, options) {
      options = options || {};
      options.q = q || 'Pink Floyd';
      options.type = type;
      return this.api('/search', 'GET', options)
        .then(function (results) {
          service.tracks = results.tracks.items;
          return $q.when();
        }
      );
    };
  }
];


