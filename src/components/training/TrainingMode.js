import React from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import ContentCard from '../common/ContentCard';

class TrainingMode extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    stopTraining() {
        this.props.onStop();
    }

    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs={12} >
                    <ContentCard>
                        <Typography variant="h4" gutterBottom>
                            Kana Training
                        </Typography>
                        <Button variant="contained" color="primary" onClick={() => this.stopTraining()}>
                            Stop Training
                        </Button>
                    </ContentCard>
                </Grid>

                <Grid item xs={false} sm={false} md={3} />
                <Grid item xs={12} sm={12} md={6} >
                    <ContentCard title="What is the transcription for the displayed kana?">
                        <div>
                            <br />
                            <Typography align="center" variant="h1" gutterBottom>お</Typography>
                            <form 
                                noValidate 
                                autoComplete="off" 
                                autoCapitalize="off" 
                                autoCorrect="off"
                                onSubmit={(event) => event.preventDefault()}>
                                <TextField
                                    
                                    variant="outlined"
                                    autoFocus
                                    fullWidth
                                />
                            </form>
                        </div>
                    </ContentCard>
                </Grid>
                <Grid item xs={false} sm={false} md={3} />
            </Grid>
        );
    }
}

export default TrainingMode;
