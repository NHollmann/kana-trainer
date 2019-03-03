import React from 'react';
import KanaTable from './KanaTable';
import { diacritcsDiTable as diacritcsDi } from '../../utils/Mapping';

function DiacriticsDiTable({mapping}) {
    return <KanaTable mapping={mapping} transcription={diacritcsDi} />;
}

export default DiacriticsDiTable;
