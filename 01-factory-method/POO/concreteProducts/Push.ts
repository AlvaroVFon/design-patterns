import { Notificator } from '../product/Notificator'

class PushNotificator implements Notificator<string> {
  constructor(private deviceToken: string) {
    this.deviceToken = deviceToken
  }

  send(message: string): void {
    console.log(
      `Sending push notification to device ${this.deviceToken}: ${message}`,
    )
  }
}

export default PushNotificator
