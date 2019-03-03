import React from 'react';
import AppLayout from '../common/AppLayout';
import TrainingMode from '../training/TrainingMode';
import TrainingSettings from '../training/TrainingSettings';

class Trainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            trainingMode: false,
            trainingConfig: {
                hiragana: [],
                katakana: []
            },
        };
    }

    startTraining(config) {
        this.setState({
            trainingMode: true,
            trainingConfig: config
        });
    }

    stopTraining() {
        this.setState({
            trainingMode: false
        });
    }

    render() {
        const { trainingMode, trainingConfig } = this.state;
        return (
            <AppLayout title="Trainer">
                {trainingMode ? 
                <TrainingMode onStop={() => this.stopTraining()} config={trainingConfig} /> : 
                <TrainingSettings onStart={(config) => this.startTraining(config)} />}
            </AppLayout>
        );
    }
}

export default Trainer;
