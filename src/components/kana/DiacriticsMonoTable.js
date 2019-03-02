import React from 'react';
import KanaTable from './KanaTable';

const diacritcsMono = [
    ['ga', 'gi', 'gu', 'ge', 'go'],
    ['za', 'ji', 'zu', 'ze', 'zo'],
    ['da', 'dji', 'dzu', 'de', 'do'],
    ['ba', 'bi', 'bu', 'be', 'bo'],
    ['pa', 'pi', 'pu', 'pe', 'po'],
    [null, null, 'vu', null, null],
];

function DiacriticsMonoTable({mapping}) {
    return <KanaTable mapping={mapping} transcription={diacritcsMono} />;
}

export default DiacriticsMonoTable;
