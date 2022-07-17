import MessageService from '../../structural/decorator/interfaces/MessageService';
import DefaultEmailService from '../../structural/decorator/DefaultEmailService';
import MailService from '../../structural/decorator/addOns/MailService';
import SmsService from '../../structural/decorator/addOns/SmsService';

const spiedStdout = jest.spyOn(process.stdout, 'write').mockImplementation();

const generateMessage = (text: string) =>
  `"${text}" sent using default SMTP MTA`;
const generateSMSMessage = (text: string) => `"${text}" sent using SMS`;
const generateMailMessage = (text: string) =>
  `"${text}" sent in a letter through postal service`;

let messageSender: MessageService = new DefaultEmailService();

describe('Default e-mail service class', () => {
  it('should send message', () => {
    messageSender.sendMessage('text');
    expect(spiedStdout).toBeCalledWith(generateMessage('text'));
  });
});

messageSender = new SmsService(messageSender);

describe('SMS add-on service class', () => {
  it('should send message properly', () => {
    messageSender.sendMessage('text');

    expect(spiedStdout).toHaveBeenNthCalledWith(1, generateMessage('text'));
    expect(spiedStdout).toHaveBeenNthCalledWith(2, generateSMSMessage('text'));
  });
});

messageSender = new MailService(messageSender);

describe('Mail add-on service class', () => {
  it('should send message properly', () => {
    messageSender.sendMessage('text');

    expect(spiedStdout).toHaveBeenNthCalledWith(1, generateMessage('text'));
    expect(spiedStdout).toHaveBeenNthCalledWith(2, generateSMSMessage('text'));
    expect(spiedStdout).toHaveBeenNthCalledWith(3, generateMailMessage('text'));
  });
});
