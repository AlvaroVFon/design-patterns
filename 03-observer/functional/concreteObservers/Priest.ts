import { Observer } from "../observer/Observer";

export const priest: Observer = (event: string): void => {
  console.log(`Priest: Received event - ${event}. Healing allies!`);
};
