import React from 'react';
import AppLayout from '../common/AppLayout';
import InfoCard from '../common/InfoCard';

function Info() {
    return (
        <AppLayout title="Info">
            <InfoCard title="Kana Trainer" subtitle="by Nicolas Hollmann">
                This is a training application for learning japaneese kanas.
            </InfoCard>
        </AppLayout>
    );
}

export default Info;
