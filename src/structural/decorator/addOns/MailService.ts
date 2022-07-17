// ConcreteDecorator
import AddOnService from '../AddOnService';

export default class MailService extends AddOnService {
  public sendMessage(text: string): void {
    super.sendMessage(text);
    process.stdout.write(`"${text}" sent in a letter through postal service`);
  }
}
