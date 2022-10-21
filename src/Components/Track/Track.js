import React from "react";
import "./Track.css"


export class Track extends React.Component {
    renderAction() {
        if(this.state.isRemoval) {
            return <button className="Track-action">-</button>
        } else {
            return <button className="Track-action">-</button>
        }
    }
    render() {
        return(
            <div clasName="Track">
            <div className="Track-information">
                <h3>Track name will go here</h3>
                <p>Track artist will go here | Track album will go here</p>
            </div>
            {this.renderAction()}
            </div>
        )
    }
}

export default Track