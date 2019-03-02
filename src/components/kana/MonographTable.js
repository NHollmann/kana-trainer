import React from 'react';
import KanaTable from './KanaTable';

const monographs = [
    ['a', 'i', 'u', 'e', 'o'],
    ['ka', 'ki', 'ku', 'ke', 'ko'],
    ['sa', 'shi', 'su', 'se', 'so'],
    ['ta', 'chi', 'tsu', 'te', 'to'],
    ['na', 'ni', 'nu', 'ne', 'no'],
    ['ha', 'hi', 'fu', 'he', 'ho'],
    ['ma', 'mi', 'mu', 'me', 'mo'],
    ['ya', null, 'yu', null, 'yo'],
    ['ra', 'ri', 'ru', 're', 'ro'],
    ['wa', null, null, null, 'wo'],
    [null, null, 'n', null, null],
];

function MonographTable({mapping}) {
    return <KanaTable mapping={mapping} transcription={monographs} />;
}

export default MonographTable;
