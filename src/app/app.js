import angular from 'angular';

import '../style/app.css';
import legacy from './legacy';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [legacy])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;