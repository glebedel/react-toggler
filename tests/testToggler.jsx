import React from 'react';
import Toggler from "../Toggler.js";
import {TogglerButton} from "../Toggler.js";
import {render} from 'react-dom';

class SimpleText extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text:"unToggled"
        };
    }
    render(){
        return (
            <div>
                <Toggler
                         actions={[
                 this.setState.bind(this, {text: "Toggled"}),
                 this.setState.bind(this, {text: "unToggled"}),
                 this.setState.bind(this, {otherText:"what is this?"})
                 ]}/>
                <label>{this.state.text}</label>
                <div>{this.state.otherText}</div>
                <TogglerButton names={["Click Here <==", "Click here..again <==", "and again?"]}
                         actions={[
                 this.setState.bind(this, {text: "Toggled"}),
                 this.setState.bind(this, {text: "unToggled"}),
                 this.setState.bind(this, {otherText:"what is this?"})
                 ]}/>
                <label>{this.state.text}</label>
                <div>{this.state.otherText}</div>
            </div>
        );
    }
}

render(
    <div>
        <SimpleText/>
    </div>
    , document.getElementById("togglers"));

