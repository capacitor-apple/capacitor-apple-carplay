export interface CapacitorCarplayPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
