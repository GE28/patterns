import NumberSeparator from '../../structural/facade/NumberSeparator';
import TextEvaluator from '../../structural/facade/TextEvaluator';
import TextSeparator from '../../structural/facade/TextSeparator';

describe('TextEvaluator class', () => {
  const input = { text: 'H3ll0 W0rld' };

  it('should word as expected', () => {
    expect(TextEvaluator.process(input)).toEqual({
        text: '',
        texts: ['Hll', 'Wrld'],
        numbers: [3, 0, 0]
    });
  })

  it('should simplify Separators behaviour correctly', () => {
    const input = { text: 'Hello World' };
    const outputF = TextEvaluator.process(input);

    const output = TextSeparator.separateText(
        NumberSeparator.separateNumbers(input)
    );

    expect(outputF).toEqual(output);
  });
});
