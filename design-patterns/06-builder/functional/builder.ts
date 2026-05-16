export const pipe = <T>(...fns: Array<(value: T) => T>) => (value: T): T =>
  fns.reduce((acc, fn) => fn(acc), value);


