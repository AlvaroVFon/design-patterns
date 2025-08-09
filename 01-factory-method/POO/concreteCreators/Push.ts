import Notifications from '../creator/Notification'
import PushNotificator from '../concreteProducts/Push'
import { Notificator } from '../product/Notificator'

class PushNotification extends Notifications<string> {
  factoryMethod(): Notificator<string> {
    return new PushNotificator(this.recipient)
  }
}

export default PushNotification
