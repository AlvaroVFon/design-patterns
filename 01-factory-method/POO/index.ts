import EmailNotification from './concreteCreators/Email'
import SMSNotification from './concreteCreators/SMS'
import PushNotification from './concreteCreators/Push'

function main() {
  const email = new EmailNotification('alvaro@email.com')
  const push = new PushNotification('12312312321')
  const sms = new SMSNotification('888333999')

  email.send('Hello, this is an email notification!')
  push.send('Hello, this is a push notification!')
  sms.send('Hello, this is an SMS notification!')
}

main()
