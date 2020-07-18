import React, { Component } from "react";
import "./Scroll.css";

class Scroll extends Component{
    constructor(props) {
        super(props);
    
      }
    render(){
        return (
            <div style={{overflowY: "scroll", border: "2px solid black", height:"800px"}}>
                {this.props.children};
            </div>
        )
    }
}

export default Scroll;