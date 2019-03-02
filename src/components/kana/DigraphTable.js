import React from 'react';
import KanaTable from './KanaTable';

const digraphs = [
    ['kya', 'kyu', 'kyo'],
    ['sha', 'shu', 'sho'],
    ['cha', 'chu', 'cho'],
    ['nya', 'nyu', 'nyo'],
    ['hya', 'hyu', 'hyo'],
    ['mya', 'myu', 'myo'],
    ['rya', 'ryu', 'ryo'],
];

function DigraphTable({mapping}) {
    return <KanaTable mapping={mapping} transcription={digraphs} />;
}

export default DigraphTable;
