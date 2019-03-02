import React from 'react';
import KanaTable from './KanaTable';

const diacritcsDi = [
    ['gya', 'gyu', 'gyo'],
    ['ja', 'ju', 'jo'],
    ['ja_', 'ju_', 'jo_'],
    ['bya', 'byu', 'byo'],
    ['pya', 'pyu', 'pyo'],
];

function DiacriticsDiTable({mapping}) {
    return <KanaTable mapping={mapping} transcription={diacritcsDi} />;
}

export default DiacriticsDiTable;
