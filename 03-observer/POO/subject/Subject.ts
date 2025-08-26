import Observer from "../observer/Observer";

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(event: string): void;
}

export default Subject;
