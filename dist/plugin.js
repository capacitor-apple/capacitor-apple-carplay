var capacitorCapacitorCarplay = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
