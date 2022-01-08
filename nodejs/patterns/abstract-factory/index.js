const useViewFactory = require('./case/useViewFactory');

;(() => {
  const viewFactory = new useViewFactory();
  viewFactory.createTable();
  /**
    /Users/jonatanlima/dev/playground/nodejs/patterns/abstract-factory/shared/base/ViewFactory.js:5
    throw new NotImplementedException(this.createTable.name)
    ^

    NotImplementedException: The "createTable" function was not implemented
        at useViewFactory.createTable (/Users/jonatanlima/dev/playground/nodejs/patterns/abstract-factory/shared/base/ViewFactory.js:5:11)
        at /Users/jonatanlima/dev/playground/nodejs/patterns/abstract-factory/index.js:5:15
        at Object.<anonymous> (/Users/jonatanlima/dev/playground/nodejs/patterns/abstract-factory/index.js:6:3)
        at Module._compile (node:internal/modules/cjs/loader:1095:14)
        at Object.Module._extensions..js (node:internal/modules/cjs/loader:1124:10)
        at Module.load (node:internal/modules/cjs/loader:975:32)
        at Function.Module._load (node:internal/modules/cjs/loader:816:12)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)
        at node:internal/main/run_main_module:17:47
    **/
})();
