// These files have no need to export or import anything, just make sure
// the module definition is the first import here.
import {} from './legacy.module';
import {} from './legacyTest.directive';
import {} from './legacyTest.controller';

// Export the name of the module by convention
export default 'legacy';

// If you want to maintain consitency with other places where you
// may be exporting the module reference you can use the following line:
//
// export default angular.module('legacy');