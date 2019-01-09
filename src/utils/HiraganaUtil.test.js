import HiraganaUtil from './HiraganaUtil';

it('maps a transcript to a hiragana', () => {
    const util = new HiraganaUtil();
    expect(util.getByTranscription('a')).toBe('あ');
    expect(util.getByTranscription('ku')).toBe('く');
    expect(util.getByTranscription('tsu')).toBe('つ');
});

it('maps a hiragana to a transcript', () => {
    const util = new HiraganaUtil();
    expect(util.getByKana('お')).toBe('o');
    expect(util.getByKana('か')).toBe('ka');
    expect(util.getByKana('し')).toBe('shi');
});
