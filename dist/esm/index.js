import { registerPlugin } from '@capacitor/core';
const CapacitorCarplay = registerPlugin('CapacitorCarplay', {
    web: () => import('./web').then(m => new m.CapacitorCarplayWeb()),
});
export * from './definitions';
export { CapacitorCarplay };
//# sourceMappingURL=index.js.map