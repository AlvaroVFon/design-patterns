import type { Character } from "./Product";
import {
  createWarrior,
  createMage,
  createHealer,
  createRogue,
} from "./ConcreteCreators";

const factories: Record<string, () => Character> = {
  warrior: createWarrior,
  mage: createMage,
  healer: createHealer,
  rogue: createRogue,
};

function createCharacter(type: string): Character {
  if (!factories[type]) throw new Error(`Unknown character type: ${type}`);

  return factories[type]();
}

export { createCharacter };
