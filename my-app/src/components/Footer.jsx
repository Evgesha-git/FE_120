import React from "react";

export default class Footer extends React.Component{
    constructor(){
        super()
        this.state = {
            count: 0,
        };
        // this.buttonHandler = this.buttonHandler.bind(this);
    }

    buttonHandler(){
        let value = this.state.count;
        this.setState({
            count: ++value
        });
    }

    render() {
        return (
            <button onClick={() => this.buttonHandler()}>{this.state.count}</button>
        )
    }
}