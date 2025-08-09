export interface Notificator<T> {
  send: (message: string) => void;
}
