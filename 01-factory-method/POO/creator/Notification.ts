import { Notificator } from "../product/Notificator";

abstract class Notifications<T> {
  protected recipient: T

  constructor(destinatario: T) {
    this.recipient = destinatario
  }

  abstract factoryMethod(): Notificator<T>

  send(message: string) {
    const notificator = this.factoryMethod()
    notificator.send(message)
  }
}

export default Notifications;
