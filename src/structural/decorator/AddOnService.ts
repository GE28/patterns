// Decorator
import MessageService from './interfaces/MessageService';

export default class AddOnService implements MessageService {
  constructor(private _baseService: MessageService) {}

  public sendMessage(text: string): void {
    this._baseService?.sendMessage(text);
  }
}
