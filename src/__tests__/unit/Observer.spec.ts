import ProductAWebsite from '../../behavioural/observer/ProductAWebsite';
import TalkingClient from '../../behavioural/observer/TalkingUser';

const spiedStdout = jest.spyOn(process.stdout, 'write').mockImplementation();

const generateMessage = (clientName: string, productId: string) =>
  `I, ${clientName}, just bought ${productId}`;

describe('Talking Client class', () => {
  const site = new ProductAWebsite();
  const product = site.sellProduct();
  const productId = product.getId();
  const clientName = 'John Doe';
  const client = new TalkingClient(clientName);

  site.subscribe(client);

  beforeEach(() => {
    spiedStdout.mockClear();
  });

  it('should buy as soon as the product price is updated', () => {
    client.defineDesiredPrice(product, 100);
    site.updateProductPrice(90);

    expect(spiedStdout).toBeCalledWith(generateMessage(clientName, productId));
  });

  it('should not buy if the product price > the desired price', () => {
    client.defineDesiredPrice(product, 90);
    site.updateProductPrice(100);

    expect(spiedStdout).not.toHaveBeenCalled();
  });
});

describe('Product A Website class', () => {
  const site = new ProductAWebsite();
  const product = site.sellProduct();
  const productId = product.getId();

  beforeEach(() => {
    spiedStdout.mockClear();
  });

  it('should subscrible clients', () => {
    const client1Name = 'John Doe';
    const client1 = new TalkingClient(client1Name);
    client1.defineDesiredPrice(product, 100);
    site.subscribe(client1);

    const client2Name = 'Jane Doe';
    const client2 = new TalkingClient(client2Name);
    client2.defineDesiredPrice(product, 100);
    site.subscribe(client2);

    site.updateProductPrice(90);

    expect(spiedStdout).toHaveBeenNthCalledWith(
      1,
      generateMessage(client1Name, productId)
    );

    expect(spiedStdout).toHaveBeenNthCalledWith(
      2,
      generateMessage(client2Name, productId)
    );
  });

  it('should unsubscrible clients', () => {
    const client1Name = 'John Doe';
    const client1 = new TalkingClient(client1Name);
    client1.defineDesiredPrice(product, 100);
    site.subscribe(client1);

    const client2Name = 'Jane Doe';
    const client2 = new TalkingClient(client2Name);
    client2.defineDesiredPrice(product, 100);
    site.subscribe(client2);

    site.unsubscribe(client2);
    site.updateProductPrice(90);

    expect(spiedStdout).toBeCalledWith(generateMessage(client2Name, productId));
  });
});
