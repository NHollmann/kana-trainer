import React from 'react';
import AppLayout from '../common/AppLayout';
import KanaInfo from '../kana/KanaInfo';
import HiraganaUtil from '../../utils/HiraganaUtil';

function Hiragana() {
    const hiraganaMapping = new HiraganaUtil();

    return (
        <AppLayout title="Hiragana">
            <KanaInfo
                title="Hiragana"
                subtitle="ひらがな"
                extLink="https://en.wikipedia.org/wiki/Hiragana"
                mapping={hiraganaMapping}
            >
                Hiragana are used for native words and sometimes names.
            </KanaInfo>
        </AppLayout>
    );
}

export default Hiragana;
