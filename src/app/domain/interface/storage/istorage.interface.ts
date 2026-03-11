/**
 * @description Resultado de una operación de storage
 */
export interface IStorageResult<T> {
  success: boolean;
  value: T;
  error?: Error;
}
