import React, { Component } from 'react';
import './App.css';
import Hiragana from './components/Hiragana';
import Typer from './components/Typer';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            symbol: ''
        };
    }

    onTyperEnter(str) {
        this.setState({ symbol: str });
    }

    render() {
        return (
            <div className="App">
                <p>What is the transcription for:</p>
                <Hiragana symbol={this.state.symbol} />
                <Typer onEnter={this.onTyperEnter.bind(this)} />
            </div>
        );
    }
}

export default App;
