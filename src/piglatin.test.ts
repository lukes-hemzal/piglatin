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
