import React from 'react';
import KanaTable from './KanaTable';
import { digraphTable as digraphs } from '../../utils/Mapping';

function DigraphTable({mapping}) {
    return <KanaTable mapping={mapping} transcription={digraphs} />;
}

export default DigraphTable;
