import React from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import ContentCard from '../common/ContentCard';
import HiraganaUtil from '../../utils/HiraganaUtil';
import KatakanaUtil from '../../utils/KatakanaUtil';
import RandomUtil from '../../utils/RandomUtil';

const TrainingState = Object.freeze({
    INPUT: Symbol("input"),
    RESULT: Symbol("result")
});

class TrainingMode extends React.Component {
    constructor(props) {
        super(props);

        this.positive = ['👍🏻', '🍻', '🥂', '🏆', '🏅', '✅', '🆗', '🎯', '🎉', '🎊'];
        this.negative = ['❌','😦', '🚫', '⁉️', '⚠️', '☠️'];

        this.inputTextField = React.createRef();

        this.hiragana = new HiraganaUtil();
        this.katakana = new KatakanaUtil();

        const charMapping = (kana) => (sym) => { return { kana, transcription: sym, solved: 0 } };

        const hiraganaChars = props.config.hiragana.map(charMapping("Hiragana"));
        const katakanaChars = props.config.katakana.map(charMapping("Katakana"));
        
        this.characters = hiraganaChars.concat(katakanaChars);

        this.state = {
            inputVal: '',
            targetVal: '',
            symbolDisplay: '',
            message: '',
            state: TrainingState.INPUT
        };
    }

    componentDidMount() {
        this.selectNewKana();
    }

    selectNewKana() {
        const newKana = this.getRandomKana();
        let symbol = '';

        if (newKana.kana === 'Hiragana') {
            symbol = this.hiragana.getByTranscription(newKana.transcription);
        } else {
            symbol = this.katakana.getByTranscription(newKana.transcription);
        }

        this.setState({
            inputVal: '',
            targetVal: newKana.transcription.replace('_', ''),
            symbolDisplay: symbol,
            message: 'What is the transcription for the displayed kana?',
            state: TrainingState.INPUT
        });

        this.inputTextField.current.focus();
    }

    showSuccess() {
        this.setState({
            state: TrainingState.RESULT,
            message: 'You\'re right!',
            symbolDisplay: RandomUtil.getRandom(this.positive)
        });

        window.setTimeout(() => this.selectNewKana(), 700);
    }

    showFailure() {
        this.setState({
            state: TrainingState.RESULT,
            message: 'Wrong! ' + this.state.symbolDisplay + ' would be "' + this.state.targetVal + '".',
            symbolDisplay: RandomUtil.getRandom(this.negative)
        });

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

        return this.characters[id];
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
