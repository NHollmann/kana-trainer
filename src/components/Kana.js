import React, { Component } from 'react';
import './Kana.css';

class Kana extends Component {
    render() {
        return (
            <div className="kana">
                <p>
                    {this.props.value}
                </p>
            </div>
        );
    }
}

export default Kana;
