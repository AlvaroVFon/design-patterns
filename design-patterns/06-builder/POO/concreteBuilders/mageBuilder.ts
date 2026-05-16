import { Builder } from "../builder/builder";
import { Mage } from "../characters/Mage";

export class MageBuilder implements Builder<Mage> {
  private readonly mage: Mage;
  constructor() {
    this.mage = new Mage("Gandalf");
  }

  withArmor(armor: string): MageBuilder {
    this.mage.armor = armor;
    return this;
  }

  withWeapon(weapon: string): MageBuilder {
    this.mage.weapon = weapon;
    return this;
  }

  build(): Mage {
    return this.mage;
  }
}
