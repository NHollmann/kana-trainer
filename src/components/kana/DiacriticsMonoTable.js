import React from 'react';
import KanaTable from './KanaTable';
import { diacritcsMonoTable as diacritcsMono } from '../../utils/Mapping';

function DiacriticsMonoTable({mapping}) {
    return <KanaTable mapping={mapping} transcription={diacritcsMono} />;
}

export default DiacriticsMonoTable;
