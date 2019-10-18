function preserveApostrophes(original: string, transformed: string): string
{
    const apostrophe = `'`;
    const diff: number = transformed.length - original.length;
    let output: string = transformed.replace(/'/g, '');

    let positions: number[] = [];
    let position: number = original.indexOf(apostrophe);

    while (position !== -1) {
        positions.push(diff + position);
        position = original.indexOf(apostrophe, position + 1);
    }

    positions.forEach((position: number) => {
        output = `${output.substr(0, position)}${apostrophe}${output.substr(position)}`;
    });

    return output;
}

function preserveCapitalization(original: string, transformed: string): string
{
    let capitals: number[] = [];
    for (let i = 0; i < original.length; i++) {
        const character = original.charAt(i);
        if (character !== character.toLowerCase()) {
            capitals.push(i);
        }
    }

    let output: string = '';

    for (let i = 0; i < transformed.length; i++) {
        const character = capitals.includes(i)
            ? transformed.charAt(i).toUpperCase()
            : transformed.charAt(i).toLowerCase();

        output = `${output}${character}`;
    }

    return output;
}

function transform(text: string): string
{
    // for the sake of simplicity, 'y' is considered to be a consonant
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

    if (text.endsWith('way')) {
        return text;
    }

    if (vowels.includes(text.charAt(0).toLowerCase())) {
        return preserveCapitalization(text, preserveApostrophes(text, `${text}way`));
    }

    return preserveCapitalization(text, preserveApostrophes(text, `${text.substring(1)}${text.charAt(0)}ay`));
}

export function piglatin(text: string): string
{
    return text.replace(/(\w[\w']*)/g, transform);
}
