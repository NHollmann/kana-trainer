import React from 'react';
import AppLayout from '../common/AppLayout';

class TrainingMode extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            trainingMode: false,
        };
    }

    render() {
        return (
            <AppLayout title="Trainer">
                {this.state.trainingMode ? null : null}
            </AppLayout>
        );
    }
}

export default TrainingMode;
