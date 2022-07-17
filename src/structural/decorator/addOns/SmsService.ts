// ConcreteDecorator
import AddOnService from '../AddOnService';

export default class SmsService extends AddOnService {
  public sendMessage(text: string): void {
    super.sendMessage(text);
    process.stdout.write(`"${text}" sent using SMS`);
  }
}
