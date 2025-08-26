import { Observer } from "../observer/Observer";

export const mage: Observer = (event: string): void => {
  console.log(`Mage: Received event - ${event}. Preparing spells!`);
};
