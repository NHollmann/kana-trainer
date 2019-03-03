import React from 'react';
import AppLayout from '../common/AppLayout';
import InfoCard from '../common/InfoCard';
import { Grid, Button, Typography } from '@material-ui/core';
import ContentCard from '../common/ContentCard';
import { Link } from 'react-router-dom';
import RateDataView from '../common/RateDataView';

const USAGE_DATA = 'kanaTrainer_usageData';

function Home() {

    let successCount = 0;
    let failureCount = 0;

    try {
        const usageData = JSON.parse(localStorage.getItem(USAGE_DATA)) || {success: 0, failure: 0};
        successCount = usageData.success || 0;
        failureCount = usageData.failure || 0;
    } catch {}

    return (
        <AppLayout title="Home">
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <InfoCard title="Kana Trainer Home">
                        Start by using the navigation. You can view all Hiragana and Katakana.
                    </InfoCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContentCard title="Quick Links">
                        <Link to="/trainer" style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" fullWidth color="primary">
                                Trainer
                            </Button>
                        </Link><br /><br />
                        <Link to="/hiragana" style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" fullWidth color="primary">
                                Hiragana
                            </Button>
                        </Link><br /><br />
                        <Link to="/katakana" style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" fullWidth color="primary">
                                Katakana
                            </Button>
                        </Link>
                    </ContentCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContentCard title="Usage data">
                        <Typography paragraph>
                            Solved kanas (success/failure):&nbsp;
                            <RateDataView success={successCount} failure={failureCount} />
                        </Typography>
                    </ContentCard>
                </Grid>
            </Grid>
        </AppLayout>
    );
}

export default Home;
