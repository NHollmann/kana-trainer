import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Button } from '@material-ui/core';
import KanaSelectionCard from './KanaSelectionCard';
import ContentCard from '../common/ContentCard';
import Mapping from '../../utils/Mapping';

const HIRAGANA_SELECTION = 'kanaTrainer_hiraganaSelection';
const KATAKANA_SELECTION = 'kanaTrainer_katakanaSelection';

class TrainingSettings extends React.Component {
    constructor(props) {
        super(props);

        let hiragana = ['vowels'];
        let katakana = [];

        try {
            hiragana = JSON.parse(localStorage.getItem(HIRAGANA_SELECTION)) || ['vowels'];
        } catch {}

        try {
            katakana = JSON.parse(localStorage.getItem(KATAKANA_SELECTION)) || [];
        } catch {}

        this.state = {
            hiragana,
            katakana,
        };
    }

    startTraining() {
        this.props.onStart({
            hiragana: Mapping.getTranscriptionList(this.state.hiragana),
            katakana: Mapping.getTranscriptionList(this.state.katakana),
        });
    }

    selectionChange(kana, selection) {
        let localStorageKey = HIRAGANA_SELECTION;
        if (kana === 'katakana') {
            localStorageKey = KATAKANA_SELECTION;
        }
        localStorage.setItem(localStorageKey, JSON.stringify(selection));

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
                        <Button 
                            variant="contained" 
                            onClick={() => this.startTraining()} 
                            disabled={hiragana.length + katakana.length === 0}
                            color="primary"
                        >
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
