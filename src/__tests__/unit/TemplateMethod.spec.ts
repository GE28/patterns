import TextConverter from '../../behavioural/templateMethod/TextConverter';
import BoldFrakturLetterConverter from '../../behavioural/templateMethod/converters/BoldFrakturLetterConverter';
import SpaceToUnderlineConverter from '../../behavioural/templateMethod/converters/SpaceToUnderlineConverter';

const boldFraktur = new BoldFrakturLetterConverter();
const spaceToUnder = new SpaceToUnderlineConverter();

describe('Text converter class', () => {
  let converter: TextConverter;

  beforeEach(() => {
    converter = new TextConverter();
  });

  it('should return the input string without a strategy', () => {
    const input = 'This is a string';
    converter.setInput(input);

    expect(converter.convert()).toBe(input);
  });

  it('should work correctly with BoldFrakturLetterConverter', () => {
    converter.setInput('Te st');
    converter.addConverter(boldFraktur);

    expect(converter.convert()).toBe('𝕿𝖊 𝖘𝖙');
  });

  it('should work correctly with SpaceToUnderlineConverter', () => {
    converter.setInput('T e s t');
    converter.addConverter(spaceToUnder);

    expect(converter.convert()).toBe('T_e_s_t');
  });
});
