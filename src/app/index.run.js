(function() {
  'use strict';

  angular
    .module('mg')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
