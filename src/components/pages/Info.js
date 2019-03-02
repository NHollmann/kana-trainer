import React from 'react';
import AppLayout from '../common/AppLayout';
import Typography from '@material-ui/core/Typography';

function Info() {
    return (
        <AppLayout title="Info">
            <Typography variant="h4">
                Kana Trainer
            </Typography>
            <Typography variant="h6" gutterBottom>
                by Nicolas Hollmann
            </Typography>
            <Typography paragraph>
                This is a training application for learning japaneese kanas.
            </Typography>
        </AppLayout>
    );
}

export default Info;
