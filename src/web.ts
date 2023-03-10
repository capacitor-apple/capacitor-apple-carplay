import { WebPlugin } from '@capacitor/core';

import type { CapacitorCarplayPlugin } from './definitions';

export class CapacitorCarplayWeb
  extends WebPlugin
  implements CapacitorCarplayPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
