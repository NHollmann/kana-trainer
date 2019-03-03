import React, { useState } from 'react';
import AppLayout from '../common/AppLayout';
import ContentCard from '../common/ContentCard';
import InfoCard from '../common/InfoCard';
import { Typography, Grid, Button, Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';

function deleteAllData() {
    Object.keys(localStorage).forEach((key) => {
        if (key && key.startsWith("kanaTrainer_")) {
            localStorage.removeItem(key);
        }
    });
}

function Settings() {
    const [confirmDelete, setConfirmDelete] = useState(false);

    return (
        <AppLayout title="Settings">
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <InfoCard title="Settings" subtitle="Configure this application and manage your data." />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <ContentCard title="Delete your data">
                        <Typography paragraph gutterBottom>
                            Here you can delete all data this application saves in your browser.
                            The data cannot be restored.
                        </Typography>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={confirmDelete} onChange={() => setConfirmDelete(!confirmDelete)} />
                                }
                                label="I know what I'm doing."
                            />
                            <Button
                                fullWidth
                                variant="outlined"
                                color="secondary"
                                disabled={!confirmDelete}
                                onClick={() => {deleteAllData(); setConfirmDelete(false);}}
                            >Delete data</Button>
                        </FormGroup>
                    </ContentCard>
                </Grid>
            </Grid>
        </AppLayout>
    );
}

export default Settings;
