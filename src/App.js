import React, { Component } from 'react';
import './App.css';
import Hiragana from './components/Hiragana';

/**
 * The main component of this application.
 */
class App extends Component {

    /**
     * Renders the kana trainer.
     */
    render() {
        return (
            <div className="App">
                <Hiragana/>
            </div>
        );
    }
}

export default App;
