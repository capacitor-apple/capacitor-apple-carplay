export interface CapacitorCarplayPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  displayAlert(options: { message: string }): Promise<{ result: string }>;
}
