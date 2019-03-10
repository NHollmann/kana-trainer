import React from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import ContentCard from '../common/ContentCard';
import HiraganaUtil from '../../utils/HiraganaUtil';
import KatakanaUtil from '../../utils/KatakanaUtil';
import RandomUtil from '../../utils/RandomUtil';
import RateDataView from '../common/RateDataView';

const USAGE_DATA = 'kanaTrainer_usageData';

const TrainingState = Object.freeze({
    INPUT: Symbol("input"),
    RESULT: Symbol("result")
});

class TrainingMode extends React.Component {
    constructor(props) {
        super(props);

        this.positive = ['👍🏻', '🍻', '🥂', '🏆', '🏅', '✅', '🆗', '🎯', '🎉', '🎊'];
        this.negative = ['❌', '😦', '🚫', '⁉️', '⚠️', '☠️'];

        this.inputTextField = React.createRef();

        this.hiragana = new HiraganaUtil();
        this.katakana = new KatakanaUtil();

        const charMapping = (kana) => (sym) => { return { kana, transcription: sym, solved: 0 } };

        const hiraganaChars = props.config.hiragana.map(charMapping("Hiragana"));
        const katakanaChars = props.config.katakana.map(charMapping("Katakana"));
        
        this.characters = hiraganaChars.concat(katakanaChars);

        let totalSuccessCount = 0;
        let totalFailureCount = 0;

        try {
            const usageData = JSON.parse(localStorage.getItem(USAGE_DATA)) || {success: 0, failure: 0};
            totalSuccessCount = usageData.success || 0;
            totalFailureCount = usageData.failure || 0;
        } catch {}

        this.state = {
            inputVal: '',
            targetVal: '',
            targetId: 0,
            symbolDisplay: '',
            message: '',
            state: TrainingState.INPUT,
            successCount: 0,
            failureCount: 0,
            totalSuccessCount,
            totalFailureCount,
        };
    }

    componentDidMount() {
        this.selectNewKana();
    }

    selectNewKana() {
        const newKana = this.getRandomKana();
        let symbol = '';

        if (newKana.char.kana === 'Hiragana') {
            symbol = this.hiragana.getByTranscription(newKana.char.transcription);
        } else {
            symbol = this.katakana.getByTranscription(newKana.char.transcription);
        }

        this.setState({
            inputVal: '',
            targetVal: newKana.char.transcription.replace('_', ''),
            targetId: newKana.id,
            symbolDisplay: symbol,
            message: 'What is the transcription for the displayed kana?',
            state: TrainingState.INPUT
        });

        this.inputTextField.current.focus();
    }

    showSuccess() {
        this.characters[this.state.targetId].solved++;

        this.setState({
            state: TrainingState.RESULT,
            message: 'You\'re right!',
            symbolDisplay: RandomUtil.getRandom(this.positive),
            successCount: this.state.successCount + 1,
            totalSuccessCount: this.state.totalSuccessCount + 1,
        });

        localStorage.setItem(USAGE_DATA, JSON.stringify({
            success: this.state.totalSuccessCount + 1, 
            failure: this.state.totalFailureCount
        }));

        window.setTimeout(() => this.selectNewKana(), 700);
    }

    showFailure() {
        this.setState({
            state: TrainingState.RESULT,
            message: 'Wrong! ' + this.state.symbolDisplay + ' would be "' + this.state.targetVal + '".',
            symbolDisplay: RandomUtil.getRandom(this.negative),
            failureCount: this.state.failureCount + 1,
            totalFailureCount: this.state.totalFailureCount + 1,
        });

        localStorage.setItem(USAGE_DATA, JSON.stringify({
            success: this.state.totalSuccessCount, 
            failure: this.state.totalFailureCount + 1
        }));

        window.setTimeout(() => this.selectNewKana(), 1200);
    }

    totalSolved() {
        return this.characters.reduce((acc, x) => acc + x.solved, 0);
    }

    calculateWeights() {
        const totalSolved = this.totalSolved();

        const weights = this.characters.map((x) => {
            if (totalSolved === 0) {
                return 1;
            }
            if (x.solved === 0) {
                return totalSolved * 2;
            }
            return totalSolved / x.solved;
        });

        return weights;
    }

    getRandomKana() {
        const weights = this.calculateWeights();
        let id = 0;
        let counter = 0;

        do {
            id = RandomUtil.getRandomIdByWeights(weights);
            counter++;
        } while (counter < 5 && 
                this.state && 
                this.state.targetVal === this.characters[id].transcription); // This ignores Hiragana vs Katakana

        return { id, char: this.characters[id] };
    }

    stopTraining() {
        this.props.onStop();
    }

    handleInput(newVal) {
        const { targetVal } = this.state;

        if (targetVal.startsWith(newVal)) {
            if (targetVal === newVal) {
                this.showSuccess();
            }
        } else {
            this.showFailure();
        }

        this.setState({ inputVal: newVal });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        if (this.state.inputVal === this.state.targetVal) {
            this.showSuccess();
        } else {
            this.showFailure();
        }
    }

    render() {
        const { inputVal, symbolDisplay, message, state } = this.state;
        const { successCount, failureCount, totalSuccessCount, totalFailureCount } = this.state;
        return (
            <Grid container spacing={24}>
                <Grid item xs={12} >
                    <ContentCard>
                        <Typography variant="h4" gutterBottom>
                            Kana Training
                        </Typography>
                        <Typography paragraph>
                            This training: <RateDataView success={successCount} failure={failureCount} /><br />
                            All trainings: <RateDataView success={totalSuccessCount} failure={totalFailureCount} />
                        </Typography>
                        <Button variant="contained" color="primary" onClick={() => this.stopTraining()}>
                            Stop Training
                        </Button>
                    </ContentCard>
                </Grid>

                <Grid item xs={false} sm={false} md={3} />
                <Grid item xs={12} sm={12} md={6} >
                    <ContentCard title={message}>
                        <div>
                            <br />
                            <Typography align="center" variant="h1" gutterBottom>{symbolDisplay}</Typography>
                            <form 
                                noValidate 
                                autoComplete="off" 
                                autoCapitalize="off" 
                                autoCorrect="off"
                                onSubmit={(event) => this.handleSubmit(event)}>
                                <TextField
                                    value={inputVal}
                                    onChange={(event) => this.handleInput(event.target.value)}
                                    variant="outlined"
                                    autoFocus
                                    fullWidth
                                    disabled={state !== TrainingState.INPUT}
                                    inputRef={this.inputTextField}
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
