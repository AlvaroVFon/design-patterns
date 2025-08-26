import Subject from "../concreteSubject/Dragon";
import Observer from "../observer/Observer";

class Dragon implements Subject {
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(event: string): void {
    console.log(`Dragon: Notifying observers about event: ${event}`);
    for (const observer of this.observers) {
      observer.update(event);
    }
  }
}

export default Dragon;
