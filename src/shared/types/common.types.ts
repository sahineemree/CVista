export type AsyncStatus = 'idle' | 'loading' | 'success' | 'error';

export interface ServiceResult<T> {
  data: T;
  message?: string;
}
