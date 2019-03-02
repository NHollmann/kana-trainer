import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Button } from '@material-ui/core';
import KanaSelectionCard from './KanaSelectionCard';
import ContentCard from '../common/ContentCard';


class TrainingSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hiragana: ['vowels'],
            katakana: [],
        };
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    startTraining() {
        this.props.onStart({
            hiragana: [],
            katakana: [],
        });
    }

    selectionChange(kana, selection) {
        this.setState({
            [kana]: selection
        });
    }

    render() {
        const { hiragana, katakana } = this.state;
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <ContentCard> 
                        <Typography variant="h4" gutterBottom>
                            Trainer configuration
                        </Typography>
                        <Typography paragraph gutterBottom>
                            You can cusotmize your training experience with the settings below.
                        </Typography>
                        <Button variant="contained" onClick={() => this.startTraining()} color="primary">
                            Start training
                        </Button>
                    </ContentCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <KanaSelectionCard 
                        kana="Hiragana" 
                        selection={hiragana} 
                        onChange={(selection) => {this.selectionChange('hiragana', selection)}}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <KanaSelectionCard 
                        kana="Katakana" 
                        selection={katakana} 
                        onChange={(selection) => {this.selectionChange('katakana', selection)}}
                    />
                </Grid>
            </Grid>
        );
    }
}

TrainingSettings.propTypes = {
    onStart : PropTypes.func.isRequired
};

export default TrainingSettings;
