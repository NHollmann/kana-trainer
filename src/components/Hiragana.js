import React, { Component } from 'react';
import Kana from './Kana';
import Typer from './Typer';
import HiraganaUtil from '../utils/HiraganaUtil';
import RandomUtil from '../utils/RandomUtil';

class Hiragana extends Component {
    constructor(props) {
        super(props);

        const defaultStart = [
            { transcription: 'n', solved: 0 },
            { transcription: 'a', solved: 0 },
            { transcription: 'e', solved: 0 },
            { transcription: 'i', solved: 0 },
            { transcription: 'o', solved: 0 },
            { transcription: 'u', solved: 0 },
        ];

        this.hiragana = new HiraganaUtil();

        try {
            this.characters = JSON.parse(localStorage.getItem('hiragana')) || defaultStart;
        } catch (error) {
            this.characters = defaultStart;
        }

        this.positive = ['👍🏻', '🍻', '🥂', '🏆', '🏅', '✅', '🆗', '🍖', '🎯', '🎉', '🎊'];
        this.negative = ['❌','😦', '🦴', '❌', '🛑', '⛔️', '🚫', '⁉️', '⚠️', '☠️'];

        const transcription = this.getRandomKana();

        this.state = {
            symbol: this.hiragana.getByTranscription(transcription),
            transcription: transcription,
            message: 'What is the transcription for:',
            state: 'waiting',
        };
    }

    kanaSolved() {
        const id = this.characters.findIndex(x => x.transcription === this.state.transcription);
        this.characters[id].solved++;

        if (this.totalSolved() / this.characters.length >= Math.floor(this.characters.length * 1.25)) {
            console.log("Adding more kanas");
        }

        localStorage.setItem('hiragana', JSON.stringify(this.characters));
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
                this.state.transcription === this.characters[id].transcription);

        return this.characters[id].transcription;
    }

    onTyperEnter(str) {
        if (this.state.state === 'waiting') {
            if (str === this.state.transcription) {
                this.kanaSolved();
                this.setState({
                    message: 'You\'re right!', 
                    state: 'next',
                    symbol: RandomUtil.getRandom(this.positive)
                });
            } else {
                this.setState({ 
                    message: 'Wrong! ' + this.state.symbol + ' would be "' + this.state.transcription + '"', 
                    state: 'next',
                    symbol: RandomUtil.getRandom(this.negative)
                });
            }
        } else {
            const transcription = this.getRandomKana();

            this.setState({
                message: 'What is the transcription for:',
                state: 'waiting',
                transcription: transcription,
                symbol: this.hiragana.getByTranscription(transcription),
            });
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <Kana value={this.state.symbol} />
                <Typer locked={this.state.state === 'next'} onEnter={this.onTyperEnter.bind(this)} />
            </div>
        );
    }
}

export default Hiragana;
