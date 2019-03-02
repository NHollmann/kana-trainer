import React from 'react';
import AppLayout from '../common/AppLayout';
import KanaInfo from '../kana/KanaInfo';

function Katakana() {
    return (
        <AppLayout title="Katakana">
            <KanaInfo title="Katakana" subtitle="カタカナ" extLink="https://en.wikipedia.org/wiki/Katakana">
                Katakana are used for foreign words and names.
            </KanaInfo>
        </AppLayout>
    );
}

export default Katakana;
