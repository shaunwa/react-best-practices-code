import React from 'react';

class Button extends React.Component {
    constructor() {
        super();
        this.color = 'grey';
    }

    render() {
        return <button>I am a button!</button>
    }
}

class RedButton extends Button {
    constructor() {
        super();
        this.color = 'red';
    }
}