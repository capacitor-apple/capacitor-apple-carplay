import { registerPlugin } from '@capacitor/core';

import type { CapacitorCarplayPlugin } from './definitions';

const CapacitorCarplay = registerPlugin<CapacitorCarplayPlugin>(
  'CapacitorCarplay',
  {
    web: () => import('./web').then(m => new m.CapacitorCarplayWeb()),
  },
);

export * from './definitions';
export { CapacitorCarplay };
