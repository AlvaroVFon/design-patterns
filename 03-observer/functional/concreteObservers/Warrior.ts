import { Observer } from "../observer/Observer";

export const warrior: Observer = (event: string): void => {
  console.log(`Warrior: Received event - ${event}. Ready for battle!`);
};
