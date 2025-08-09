import { Notificator } from '../product/Notificator'

class SMSNotificator implements Notificator<string> {
  private phoneNumber: string

  constructor(phoneNumber: string) {
    this.phoneNumber = phoneNumber
  }

  send(message: string): void {
    console.log(`Sending SMS to ${this.phoneNumber}: ${message}`)
  }
}

export default SMSNotificator
