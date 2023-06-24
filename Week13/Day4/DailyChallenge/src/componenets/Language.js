import React from "react";
import "./Languages.css"

export class Language extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <>
            <div className="languages">
                <h4>{this.props.votes}</h4>
                <h4>{this.props.name}</h4>
                <button>Click here</button>
            </div> 
            </>);
    }
}