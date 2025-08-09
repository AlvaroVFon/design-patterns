import SMSNotificator from "../concreteProducts/SMS";
import Notifications from '../creator/Notification'
import { Notificator } from "../product/Notificator";

class SMSNotification extends Notifications<string> {
  factoryMethod(): Notificator<string> {
    return new SMSNotificator(this.recipient)
  }
}

export default SMSNotification;
