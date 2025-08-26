import Observer from "../observer/Observer";

class Archer implements Observer {
  update(event: string): void {
    console.log(`Archer: Received event - ${event}. Ready to shoot arrows!`);
  }
}

export default Archer;
