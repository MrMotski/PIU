'use strict';

/* This filter returns checkmark (v) or cross (x)

/* Filters */
angular.module('filters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});