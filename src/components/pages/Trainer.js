import React from 'react';
import AppLayout from '../common/AppLayout';
import TrainingMode from '../training/TrainingMode';
import TrainingSettings from '../training/TrainingSettings';

class Trainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            trainingMode: false,
        };
    }

    startTraining(config) {
        this.setState({trainingMode: true});
    }

    render() {
        return (
            <AppLayout title="Trainer">
                {this.state.trainingMode ? 
                <TrainingMode /> : 
                <TrainingSettings onStart={(config) => {this.startTraining(config)}} />}
            </AppLayout>
        );
    }
}

export default Trainer;
