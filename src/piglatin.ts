// for the sake of simplicity, "y" is considered to be a consonant
const vowels: ReadonlyArray<string> = ["a", "e", "i", "o", "u"];
const consonants: ReadonlyArray<string> = [
    "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z", "w", "y",
];

function preserveApostrophes(original: string, transformed: string): string {
    const apostrophe = `'`;
    const diff: number = transformed.length - original.length;
    let output: string = transformed.replace(/'/g, "");

    const positions: number[] = [];
    let apostrophePosition: number = original.indexOf(apostrophe);

    while (apostrophePosition !== -1) {
        positions.push(diff + apostrophePosition);
        apostrophePosition = original.indexOf(apostrophe, apostrophePosition + 1);
    }

    positions.forEach((position: number) => {
        output = `${output.substr(0, position)}${apostrophe}${output.substr(position)}`;
    });

    return output;
}

function preserveCapitalization(original: string, transformed: string): string {
    const capitals: number[] = [];
    const originalLength = original.length;
    for (let i = 0; i < originalLength; i++) {
        const character = original.charAt(i);
        if (character !== character.toLowerCase()) {
            capitals.push(i);
        }
    }

    let output: string = "";
    const transformedLength = transformed.length;
    for (let i = 0; i < transformedLength; i++) {
        const character = capitals.includes(i)
            ? transformed.charAt(i).toUpperCase()
            : transformed.charAt(i).toLowerCase();

        output = `${output}${character}`;
    }

    return output;
}

function normalizeCharacter(character: string): string {
    return character.normalize("NFD").charAt(0).toLowerCase();
}

function transform(text: string): string {
    if (text.toLowerCase().endsWith("way")) {
        return text;
    }

    const firstCharacter = text.charAt(0);
    const normalizedCharacter = normalizeCharacter(firstCharacter);

    if (vowels.includes(normalizedCharacter)) {
        return preserveCapitalization(text, preserveApostrophes(text, `${text}way`));
    }

    if (consonants.includes(normalizedCharacter)) {
        return preserveCapitalization(text, preserveApostrophes(text, `${text.substring(1)}${firstCharacter}ay`));
    }

    return text;
}

export function piglatin(text: string): string {
    return text.replace(/([a-zA-Z\u00C0-\u017F0-9_][a-zA-Z\u00C0-\u017F0-9_']*)/g, transform);
}
