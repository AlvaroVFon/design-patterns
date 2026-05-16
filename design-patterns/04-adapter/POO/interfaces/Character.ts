export interface Character {
  attack: () => void;
  takeDamage: (amount: number) => void;
  showStatus: () => number;
}
