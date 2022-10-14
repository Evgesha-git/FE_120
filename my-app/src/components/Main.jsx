import React from "react";

class Main extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return (
            <main className="main">
                Main content {this.props.content}
            </main>
        )
    }
}

export default Main;