import React from 'react';
import KanaTable from './KanaTable';
import { monographTable as monographs } from '../../utils/Mapping';

function MonographTable({mapping}) {
    return <KanaTable mapping={mapping} transcription={monographs} />;
}

export default MonographTable;
