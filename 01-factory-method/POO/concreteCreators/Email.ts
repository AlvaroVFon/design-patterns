import Notifications from '../creator/Notification'
import EmailNotificator from '../concreteProducts/Email'
import { Notificator } from '../product/Notificator'

class EmailNotification extends Notifications<string> {
  factoryMethod(): Notificator<string> {
    return new EmailNotificator(this.recipient)
  }
}

export default EmailNotification
