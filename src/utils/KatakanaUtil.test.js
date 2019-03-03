import KatakanaUtil from './KatakanaUtil';

it('maps a transcript to a katakana', () => {
    const util = new KatakanaUtil();
    expect(util.getByTranscription('a')).toBe('ア');
    expect(util.getByTranscription('ku')).toBe('ク');
    expect(util.getByTranscription('tsu')).toBe('ツ');
});

it('maps a katakana to a transcript', () => {
    const util = new KatakanaUtil();
    expect(util.getByKana('ガ')).toBe('ga');
    expect(util.getByKana('ソ')).toBe('so');
    expect(util.getByKana('ミャ')).toBe('mya');
});
