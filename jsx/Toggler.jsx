/**
 * Created by guillaumelebedel on 23/12/15.
 */
import React from 'react'

export default class Toggler extends React.Component {
    static defaultProps = {
        names: ["my toggler"],
        actions: [],
        start: 0,
        styleClasses: [""]
    }
    static propTypes = {
        //array of names that the toggler will cycle through when being clicked
        names: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
        //array of functions that the toggler will cycle through when being clicked
        actions: React.PropTypes.arrayOf(React.PropTypes.func),
        //array of classes to be applied to the toggler when cycling through toggling state
        styleClasses: React.PropTypes.arrayOf(React.PropTypes.string),
        //where we start in the above arrays
        start: React.PropTypes.number,
    }
    constructor(props) {
        super(props);
        this.state = {
            toggleState: this.props.start
        }
    }

    /**
     * increment the toggeling state (index of both actions and names props array)
     * <br/>execute the action of the current toggle state
     */
    handleToggling = ()=> {
        //execute action corresponding to the current toggle state
        this.props.actions[this.state.toggleState]();
        //goes back to first toggle state if it's the last one
        if (this.state.toggleState == this.props.names.length - 1) {
            this.setState({toggleState: 0});
        }
        //otherwise increment the toggleState by one
        else {
            this.setState({toggleState: this.state.toggleState + 1});
        }
    }

    render() {
        let allClasses = this.props.styleClasses;
        let toggleState = this.state.toggleState
        //get the class from the style props array depending on the current toggle state
        let actualClass = (allClasses.length > toggleState && allClasses[toggleState]) || allClasses[allClasses.length - 1];
        return (
            <div className={"react-toggler " + actualClass} onClick={this.handleToggling}>
                {this.props.names[toggleState]}
            </div>
        );
    }
}

/**
 * Extends the original {Toggler} class to create a button instead of a div.
 */
export class TogglerButton extends Toggler {
    constructor(props) {
        super(props);
    }

    render() {
        let allClasses = this.props.styleClasses;
        let toggleState = this.state.toggleState
        let actualClass = (allClasses.length > toggleState && allClasses[toggleState]) || allClasses[allClasses.length - 1];
        return (
                <button className={"react-toggler " + actualClass} onClick={this.handleToggling}>
                    {this.props.names[toggleState]}
                </button>
        );
    }
}