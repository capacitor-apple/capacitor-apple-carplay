import { WebPlugin } from '@capacitor/core';
import type { CapacitorCarplayPlugin } from './definitions';
export declare class CapacitorCarplayWeb extends WebPlugin implements CapacitorCarplayPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
