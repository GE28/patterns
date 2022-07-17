// ConcreteComponent
import MessageService from './interfaces/MessageService';

export default class DefaultEmailService implements MessageService {
  public sendMessage(text: string): void {
    process.stdout.write(`"${text}" sent using default SMTP MTA`);
  }
}
