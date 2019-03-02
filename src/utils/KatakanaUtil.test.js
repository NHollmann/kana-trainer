import KatakanaUtil from './KatakanaUtil';

it('maps a transcript to a katakana', () => {
    const util = new KatakanaUtil();
    expect(util.getByTranscription('a')).toBe('あ');
    expect(util.getByTranscription('ku')).toBe('く');
    expect(util.getByTranscription('tsu')).toBe('つ');
});

it('maps a katakana to a transcript', () => {
    const util = new KatakanaUtil();
    expect(util.getByKana('お')).toBe('o');
    expect(util.getByKana('か')).toBe('ka');
    expect(util.getByKana('し')).toBe('shi');
});
