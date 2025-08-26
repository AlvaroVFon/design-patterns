export interface Subject {
  attach(observer: (event: string) => void): void;
  detach(observer: (event: string) => void): void;
  notify(event: string): void;
}
