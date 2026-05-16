import { Observer } from "../observer/Observer";

export const archer: Observer = (event: string): void => {
  console.log(`Archer: Received event - ${event}. Ready to shoot arrows!`);
};
