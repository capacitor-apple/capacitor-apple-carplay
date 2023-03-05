import { WebPlugin } from '@capacitor/core';
export class CapacitorCarplayWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}
//# sourceMappingURL=web.js.map