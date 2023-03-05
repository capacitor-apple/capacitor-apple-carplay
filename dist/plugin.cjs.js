'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CapacitorCarplay = core.registerPlugin('CapacitorCarplay', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorCarplayWeb()),
});

class CapacitorCarplayWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorCarplayWeb: CapacitorCarplayWeb
});

exports.CapacitorCarplay = CapacitorCarplay;
//# sourceMappingURL=plugin.cjs.js.map
