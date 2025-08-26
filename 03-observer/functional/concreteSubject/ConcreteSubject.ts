import { Observer } from "../observer/Observer";
import { Subject } from "../subject/Subject";

export const createSubject = (): Subject => {
  let observers: Observer[] = [];

  function attach(observer: Observer): void {
    observers.push(observer);
  }

  function detach(observer: Observer): void {
    observers = observers.filter((obs) => obs !== observer);
  }

  function notify(event: string): void {
    for (const observer of observers) {
      observer(event);
    }
  }

  return { attach, detach, notify };
};
