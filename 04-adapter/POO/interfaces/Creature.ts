export interface Creature {
  strike: () => void;
  receiveDamage: (amount: number) => void;
  getState(): number;
}
