(function() {
'use strict';

    angular
        .module('legacy')
        .controller('LegacyTestController', LegacyTestController);

    LegacyTestController.$inject = ['$scope'];
    function LegacyTestController($scope) {

        this.text = 'Legacy import works!';
    }
})();