import React, { Component } from "react";

class Robo extends Component {
    render() {
        return (
            <div className=" bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
                <img alt="robo" src={`https://robohash.org/${this.props.id}?size=200x200`}></img>
                <div>
                    <h2>{this.props.name}</h2>
                    <p className="underline">{this.props.email}</p>
                </div>
            </div>
        )
    }
}

export default Robo;