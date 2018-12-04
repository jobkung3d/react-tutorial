import React, { Component } from 'react';

class Couter extends Component {
    state = {
        count : 0,
    };

    /*constructor(){
        super();
        this.handleTncrement = this.handleTncrement.bind(this);
    }*/

    handleTncrement = () =>{
        this.setState({ count : this.state.count + 1 })
    }

    render() {
        return(
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={this.handleTncrement}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
            </div>
        );
    }
    getBadgeClasses(){
        let Classes = "badge m-2 badge-";
        Classes += (this.state.count === 0) ? "warning" : "primary";
        return Classes;
    }
    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

}

export default Couter;
