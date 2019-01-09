import React, { Component } from 'react';
import Kana from './Kana';
import HiraganaUtil from '../utils/HiraganaUtil';

class Hiragana extends Component {
    constructor(props) {
        super(props);

        this.hiragana = new HiraganaUtil();
    }
    render() {
        return (
            <Kana value={this.hiragana.getByTranscription(this.props.symbol)} />
        );
    }
}

export default Hiragana;
