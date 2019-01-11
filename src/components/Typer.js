import React, { Component } from 'react';
import Hotkeys from 'react-hot-keys';
import './Typer.css';

class Typer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };
    }

    onKeyDown(keyName, e, handle) {
        let newText = this.state.text;
        if (keyName === 'backspace') {
            newText = newText.slice(0, -1);
        } else if (keyName === 'enter') {
            if (typeof this.props.onEnter === "function") {
                this.props.onEnter(newText);
            }
            newText = '';
        } else {
            if (!this.props.locked) {
                newText += keyName;
            }
        }

        this.setState({ text: newText });
    }

    render() {
        return (
            <Hotkeys
                keyName="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,backspace,enter"
                onKeyDown={this.onKeyDown.bind(this)}
            >
                <p className="output">{this.state.text}<span className="cursor">|</span></p>
            </Hotkeys>
        );
    }
}

export default Typer;
