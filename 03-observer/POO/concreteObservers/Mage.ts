import Observer from "../observer/Observer";

class Mage implements Observer {
  update(event: string): void {
    console.log(`Mage: Received event - ${event}. Preparing spells!`);
  }
}

export default Mage;
