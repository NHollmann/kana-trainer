import Mapping from './Mapping';

it('maps a transcript to a kana', () => {
    const mapping = new Mapping({'a': 'b', 'c' : 'd'});
    expect(mapping.getByTranscription('a')).toBe('b');
    expect(mapping.getByTranscription('c')).toBe('d');
});

it('maps a kana to a transcript', () => {
    const mapping = new Mapping({'a': 'b', 'c' : 'd'});
    expect(mapping.getByKana('b')).toBe('a');
    expect(mapping.getByKana('d')).toBe('c');
});

