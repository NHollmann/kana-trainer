import React from 'react';
import AppLayout from '../common/AppLayout';
import InfoCard from '../common/InfoCard';
import { Grid } from '@material-ui/core';
import ExternalLink from '../common/ExternalLink';

function Info() {
    return (
        <AppLayout title="Info">
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <InfoCard title="About Kana Trainer" subtitle="by Nicolas Hollmann">
                        This is a training application for learning japanese kanas.
                    </InfoCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <InfoCard title="About the author">
                        I'm Nicolas Hollmann.<br/>
                        I'm not an expert of the japanese langauge. Please take 
                        everything on this page with a grain of salt. If you find some mistakes, please write 
                        an <ExternalLink href="https://github.com/NHollmann/kana-trainer/issues">Issue</ExternalLink> on 
                        GitHub so I can fix it.
                    </InfoCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <InfoCard title="Data privacy">
                        This application saves your training statistics on your device. It doesn't upload anything.
                        Your data remains on your device. The webhosting is provided by GitHub. Please refer to their
                        privacy policy for questions about server logs.
                    </InfoCard>
                </Grid>
            </Grid>
        </AppLayout>
    );
}

export default Info;
