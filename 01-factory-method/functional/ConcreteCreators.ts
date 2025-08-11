import type { Character } from "./Product";

function createWarrior(): Character {
  return {
    class: "Warrior",
    attack: () => {
      console.log("Warrior attacks with a sword!");
    },
    greet: () => {
      console.log("Warrior says: For honor!");
    },
  };
}

function createMage(): Character {
  return {
    class: "Mage",
    attack: () => {
      console.log("Mage casts a fireball!");
    },
    greet: () => {
      console.log("Mage says: Knowledge is power!");
    },
  };
}

function createRogue(): Character {
  return {
    class: "Rogue",
    attack: () => {
      console.log("Rogue strikes from the shadows!");
    },
    greet: () => {
      console.log("Rogue says: Silence is golden!");
    },
  };
}

function createHealer(): Character {
  return {
    class: "Healer",
    attack: () => {
      console.log("Healer casts a healing spell!");
    },
    greet: () => {
      console.log("Healer says: Healing is my duty!");
    },
  };
}

export { createWarrior, createMage, createRogue, createHealer };
