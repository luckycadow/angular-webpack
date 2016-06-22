(function() {
  'use strict';

  angular
    .module('legacy')
    .component('legacyTest', {
      controller: 'LegacyTestController',
      template: '<div><strong>{{$ctrl.text}}</strong></div>'
    });

})();