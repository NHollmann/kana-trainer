import React from 'react';
import AppLayout from '../common/AppLayout';
import KanaInfo from '../kana/KanaInfo';
import KatakanaUtil from '../../utils/KatakanaUtil';

function Katakana() {
    const katakanaMapping = new KatakanaUtil();

    return (
        <AppLayout title="Katakana">
            <KanaInfo 
                title="Katakana" 
                subtitle="カタカナ" 
                extLink="https://en.wikipedia.org/wiki/Katakana"
                mapping={katakanaMapping}
            >
                Katakana are used for foreign words and names.
            </KanaInfo>
        </AppLayout>
    );
}

export default Katakana;
