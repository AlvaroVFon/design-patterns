export class Mage {
  name: string;
  armor: string | null = null;
  weapon: string | null = null;

  constructor(
    name: string,
  ) {
    this.name = name;
  }

  attack(): void {
    console.log(`Mage casts a fireball!`);
  }

  defend(): void {
    console.log(`Mage conjures a magical shield!`);
  }
}
