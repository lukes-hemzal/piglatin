import { piglatin } from './piglatin';

test('consonant', () => {
    expect(piglatin('Hello')).toBe('Ellohay');
});

test('vowel', () => {
    expect(piglatin('apple')).toBe('appleway');
});

test('way', () => {
    expect(piglatin('stairway')).toBe('stairway');
});

test('punctuation', () => {
    expect(piglatin('can\'t')).toBe('antca\'y');
    expect(piglatin('end.')).toBe('endway.');
});

test('hyphens', () => {
    expect(piglatin('this-thing')).toBe('histay-hingtay');
});

test('capitalization', () => {
    expect(piglatin('Beach')).toBe('Eachbay');
    expect(piglatin('McCloud')).toBe('CcLoudmay');
});

test('emoji', () => {
    expect(piglatin('😀😁😂🤣test😃an😄emoji😅text😆')).toBe('😀😁😂🤣esttay😃anway😄emojiway😅exttay😆');
});

test('numbers', () => {
    expect(piglatin('test123')).toBe('est123tay');
    expect(piglatin('123')).toBe('123');
});

test('paragraph', () => {
    expect(piglatin('Some text\nAnd some more\r\nAnd yet\rThis is the end')).toBe('Omesay exttay\nAndway omesay oremay\r\nAndway etyay\rHistay isway hetay endway');
});

test('foreign characters', () => {
    expect(piglatin('Üwe')).toBe('Üweway');
    expect(piglatin('Žaneta')).toBe('Anetažay');
});
