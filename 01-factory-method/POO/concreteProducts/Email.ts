import { Notificator } from '../product/Notificator'

class EmailNotificator implements Notificator<string> {
  private email: string

  constructor(email: string) {
    this.email = email
  }

  send(message: string): void {
    console.log(`Sending email to ${this.email}: ${message}`)
  }
}

export default EmailNotificator
