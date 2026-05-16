import { Strategy } from "./strategy";

class CharacterAttack {
  constructor(private strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  attack(): void {
    console.log(this.strategy.attack());
  }
}

export default CharacterAttack;
