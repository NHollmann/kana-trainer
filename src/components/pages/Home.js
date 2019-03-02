import React from 'react';
import AppLayout from '../common/AppLayout';
import InfoCard from '../common/InfoCard';

function Home() {
    return (
        <AppLayout title="Home">
            <InfoCard title="Kana Trainer Home">
                On this page you later find quick menus and some usage statistics.
            </InfoCard>
        </AppLayout>
    );
}

export default Home;
